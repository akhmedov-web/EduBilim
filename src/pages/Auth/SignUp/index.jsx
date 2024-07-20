import { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { useMedia, useSteps } from 'src/libs/hooks'
import { setType } from 'src/libs/store'
import { steps } from 'src/libs/constants'
import { Sign } from '@/components'
import { Steps, Divider } from 'antd'
import { SetUpForm, StartUpForm } from 'src/libs/modules'
import { apple, google, arrowBack, facebookLogo } from '@/assets'

export default function SignUp() {
  const dispatch = useDispatch()
  const { next, prev, current } = useSteps()
  const { isMobile } = useMedia()
  const handleChoose = (type) => {
    dispatch(setType(type))
    next()
  }

  return (
    <Sign>
      <div className={`sign-up-container ${isMobile ? 'px-4' : ''}`}>
        <button
          className={current === 0 ? 'hidden' : 'absolute left-10 top-[5%]'}
          onClick={() => prev()}
        >
          <img src={arrowBack} alt="Back" />
        </button>

        <Steps labelPlacement="vertical" current={current} items={steps} />

        <div className="flex-items-center flex-col mt-5">
          {current === 0 ? (
            <Fragment>
              <h2 className="sign-up-title">Who will be learning English on edu-bilim?</h2>

              <div
                className={`w-full flex-center gap-x-5 mt-10 ${
                  isMobile ? 'flex-wrap gap-y-5 justify-center' : ''
                }`}
              >
                <button
                  className={`sign-up-btn ${isMobile ? 'w-11/12' : ''}`}
                  onClick={() => handleChoose('Kid')}
                >
                  Kid
                </button>

                <button
                  className={`sign-up-btn ${isMobile ? 'w-11/12' : ''}`}
                  onClick={() => handleChoose('adult')}
                >
                  adult
                </button>
              </div>
            </Fragment>
          ) : current === 1 ? (
            <Fragment>
              <h2 className="sign-up-title">How would you like to log in?</h2>

              <div className="flex-center gap-x-16">
                <button>
                  <img src={google} alt="Google" />
                </button>
                <button>
                  <img src={facebookLogo} alt="Facebook" />
                </button>
                <button>
                  <img src={apple} alt="Apple" />
                </button>
              </div>

              <Divider className="px-2">or</Divider>

              <SetUpForm next={next} />
            </Fragment>
          ) : current === 2 ? (
            <Fragment>
              <h2 className="sign-up-title">Almost there! What s your name?</h2>

              <StartUpForm next={next} />
            </Fragment>
          ) : null}
        </div>
      </div>
    </Sign>
  )
}
