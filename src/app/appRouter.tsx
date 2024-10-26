import { createBrowserRouter } from "react-router-dom"
import { ComponentType, Suspense } from "react"
import { lazyImport } from "@/shared/lib/lazy"
import { BaseLayout } from "./layouts"

const LoginPage = lazyImport(() => import("@/pages/login"), "LoginPage")
const RegisterPage = lazyImport(() => import("@/pages/register"), "RegisterPage")
const ChatGroupPage = lazyImport(() => import("@/pages/chat-group"), "ChatGroupPage")
const ChatGroupsPage = lazyImport(() => import("@/pages/chat-groups"), "ChatGroupsPage")
const NotFoundPage = lazyImport(() => import("@/pages/not-found"), "NotFoundPage")

const ErrorBoundaryFallback = () => (
  <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
    <h1 className="text-2xl font-bold text-red-600">Oops! Something went wrong</h1>
    <p className="mt-2 text-gray-600">Please try refreshing the page or navigate back</p>
    <button
      onClick={() => window.location.reload()}
      className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
    >
      Refresh Page
    </button>
  </div>
)

const LoadingFallback = () => (
  <div className="flex min-h-screen items-center justify-center">
    <div className="text-lg">Loading...</div>
  </div>
)

const withSuspense = (Component: ComponentType) => (
  <Suspense fallback={<LoadingFallback />}>
    <Component />
  </Suspense>
)

/*
 * type AuthGuardProps = {
 *   children: React.ReactElement
 * }
 *
 * const AuthGuard = ({ children }: AuthGuardProps) => {
 *   const isAuthorized = useAppSelector(selectIsAuthorized)
 *
 *   if (!isAuthorized) {
 *     return <Navigate to="/login" />
 *   }
 *
 *   return children
 * }
 *
 * type GuestGuardProps = {
 *   children: React.ReactElement
 * }
 *
 * const GuestGuard = ({ children }: GuestGuardProps) => {
 *   const isAuthorized = useAppSelector(selectIsAuthorized)
 *
 *   if (isAuthorized) {
 *     return <Navigate to="/" />
 *   }
 *
 *   return children
 * }
 */

export const appRouter = () =>
  createBrowserRouter([
    {
      errorElement: <ErrorBoundaryFallback />,
      children: [
        {
          path: "/",
          element: withSuspense(LoginPage)
        },
        {
          path: "/register",
          element: withSuspense(RegisterPage)
        },
        {
          element: <BaseLayout />,
          children: [
            {
              path: "/chat-groups",
              element: withSuspense(ChatGroupsPage)
            },
            {
              path: "/chat-groups/:id",
              element: withSuspense(ChatGroupPage)
            }
          ]
        },
        {
          path: "*",
          element: withSuspense(NotFoundPage)
        }
      ]
    }
  ])
