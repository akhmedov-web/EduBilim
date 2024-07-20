import { lazy } from 'react'
import { Loader } from '@/UI'

const handleCatchChunkError = () => {
  window.location.reload()

  return { default: Loader }
}

const Home = lazy(() =>
  import('@/pages')
    .then(({ Home }) => ({ default: Home }))
    .catch(handleCatchChunkError)
)

const Purchase = lazy(() =>
  import('@/pages')
    .then(({ Purchase }) => ({ default: Purchase }))
    .catch(handleCatchChunkError)
)

// Courses
const Courses = lazy(() =>
  import('@/pages')
    .then(({ Courses }) => ({ default: Courses }))
    .catch(handleCatchChunkError)
)

const TutorDetails = lazy(() =>
  import('@/pages')
    .then(({ TutorDetails }) => ({ default: TutorDetails }))
    .catch(handleCatchChunkError)
)

// Student
const Student = lazy(() =>
  import('@/pages')
    .then(({ Student }) => ({ default: Student }))
    .catch(handleCatchChunkError)
)

const SignIn = lazy(() =>
  import('@/pages')
    .then(({ SignIn }) => ({ default: SignIn }))
    .catch(handleCatchChunkError)
)

const SignUp = lazy(() =>
  import('@/pages')
    .then(({ SignUp }) => ({ default: SignUp }))
    .catch(handleCatchChunkError)
) 

export {
  Home,
  SignIn,
  SignUp,
  Courses,
  Student,
  Purchase,
  TutorDetails,
}
