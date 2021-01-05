import { Controller, HttpRequest, HttpResponse, LoadSurveyById } from './save-survey-result-controller-protocols'

export class SaveSurveyResultController implements Controller {
  constructor (private readonly loadSurveyByIdStub: LoadSurveyById) {}
  async handle (httpRequest: HttpRequest): Promise<HttpResponse | any> {
    await this.loadSurveyByIdStub.loadById(httpRequest.params.surveyId)
    return null
  }
}
