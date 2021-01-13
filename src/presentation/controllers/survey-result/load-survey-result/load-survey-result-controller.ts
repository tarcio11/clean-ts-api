import { Controller, HttpResponse, HttpRequest, LoadSurveyById } from './load-survey-result-controller-protocols'

export class LoadSurveyResultController implements Controller {
  constructor (private readonly loadSurveyById: LoadSurveyById) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse | any> {
    await this.loadSurveyById.loadById(httpRequest.params.surveyId)
    return Promise.resolve(null)
  }
}
