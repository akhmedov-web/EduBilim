import { Suspense } from 'react'
import { useBootstrap } from 'src/libs/hooks'
import { Loader } from '@/UI'
import { Route, Routes } from 'react-router-dom'
import { UserLayout } from '@/layouts'

import {
  Home,
  SignIn,
  SignUp,
  Forgot,
  Student,
  Details,
  Courses,
  Purchase,
  TutorDetails,
  TutorRegister,
} from '@/pages'

export const Router = () => {
  const { isInitiated } = useBootstrap()

  if (isInitiated) {
    return <Loader />
  }

  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route
          path="courses"
          element={
            <Suspense fallback={<Loader />}>
              <Courses />
            </Suspense>
          }
        />

        <Route
          path="courses/:id"
          element={
            <Suspense fallback={<Loader />}>
              <Details />
            </Suspense>
          }
        />

        <Route
          path="payment"
          element={
            <Suspense fallback={<Loader />}>
              <Purchase />
            </Suspense>
          }
        />

        <Route
          path="sign-up/teacher"
          element={
            <Suspense fallback={<Loader />}>
              <TutorRegister />
            </Suspense>
          }
        />

        <Route
          path="teachers"
          element={
            <Suspense fallback={<Loader />}>
              <Student />
            </Suspense>
          }
        />
        <Route
          path="teachers/:id"
          element={
            <Suspense fallback={<Loader />}>
              <TutorDetails />
            </Suspense>
          }
        />
        </Route>

      <Route path="/forgot" element={<Forgot />} />
      <Route path="/reset" element={<Forgot />} />

      <Route
        path="/sign-in"
        element={
          <Suspense fallback={<Loader />}>
            <SignIn />
          </Suspense>
        }
      />

      <Route
        path="/sign-up/student"
        element={
          <Suspense fallback={<Loader />}>
            <SignUp />
          </Suspense>
        }
      />
    </Routes>
  )
}
