import { adaptRoute } from '@/main/adapters'
import { auth , adminAuth } from '@/main/middlewares'
import { makeAddSurveyController , makeLoadSurveysController } from '@/main/factories'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/surveys', adminAuth, adaptRoute(makeAddSurveyController()))
  router.get('/surveys', auth, adaptRoute(makeLoadSurveysController()))
}
