import { Controller, HttpRequest, HttpResponse, LoadSurveyById } from './save-survey-result-controller-protocols'
import { forbidden, serverError } from '@/presentation/helpers/http/http-helper'
import { InvalidParamError } from '@/presentation/errors'

export class SaveSurveyResultController implements Controller {
  constructor (private readonly loadSurveyByIdStub: LoadSurveyById) {}
  async handle (httpRequest: HttpRequest): Promise<HttpResponse | any> {
    try {
      const survey = await this.loadSurveyByIdStub.loadById(httpRequest.params.surveyId)
      if (survey) {
        const answers = survey.answers.map(a => a.answer)
        if (!answers.includes(httpRequest.body.answer)) {
          return forbidden(new InvalidParamError('answer'))
        }
      } else {
        return forbidden(new InvalidParamError('surveyId'))
      }
      return null
    } catch (error) {
      return serverError(error)
    }
  }
}
