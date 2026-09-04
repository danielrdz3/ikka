import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'

// ─── Context ──────────────────────────────────────────────────────────────────
interface RouterCtx {
  path: string
  navigate: (to: string) => void
}

const Ctx = createContext<RouterCtx>({ path: '/', navigate: () => {} })

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(() => window.location.pathname)

  const navigate = useCallback((to: string) => {
    window.history.pushState(null, '', to)
    setPath(to)
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  return <Ctx.Provider value={{ path, navigate }}>{children}</Ctx.Provider>
}

export function useRouter() {
  return useContext(Ctx)
}

// ─── Link ─────────────────────────────────────────────────────────────────────
interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string
  children: ReactNode
}

export function Link({ to, children, onClick, ...rest }: LinkProps) {
  const { navigate } = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Let external links and modifier-key clicks pass through
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    if (to.startsWith('http') || to.startsWith('mailto') || to.startsWith('tel')) return
    e.preventDefault()
    navigate(to)
    onClick?.(e)
  }

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}

// ─── useLocation ──────────────────────────────────────────────────────────────
export function useLocation() {
  const { path } = useRouter()
  return { pathname: path }
}

// ─── Routes / Route ───────────────────────────────────────────────────────────
interface RouteProps {
  path: string
  component: ReactNode
}

export function Routes({ routes }: { routes: RouteProps[] }) {
  const { path } = useRouter()
  const match = routes.find((r) => r.path === path) ?? routes.find((r) => r.path === '*')
  return <>{match?.component ?? null}</>
}
