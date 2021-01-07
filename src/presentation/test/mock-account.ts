import { AccountModel, AddAccount, AddAccountParams } from '@/presentation/controllers/login/signup/signup-controller-protocols'
import { LoadAccountByToken } from '@/presentation/middlewares/auth-middleware-protocols'
import { Authentication, AuthenticationParams } from '@/domain/usecases/account/authentication'
import { mockAccountModel } from '@/domain/test'

export const mockAddAccount = (): AddAccount => {
  class AddAccountStub implements AddAccount {
    async add (account: AddAccountParams): Promise<AccountModel | null> {
      return new Promise(resolve => resolve(mockAccountModel()))
    }
  }
  return new AddAccountStub()
}

export const mockAuthentication = (): Authentication => {
  class AuthenticationStub implements Authentication {
    async auth (authentication: AuthenticationParams): Promise<string> {
      return new Promise(resolve => resolve('any_token'))
    }
  }
  return new AuthenticationStub()
}

export const mockLoadAccountByToken = (): LoadAccountByToken => {
  class LoadAccountByTokenStub implements LoadAccountByToken {
    async load (accessToken: string, role?: string): Promise<AccountModel | null> {
      return new Promise(resolve => resolve(mockAccountModel()))
    }
  }
  return new LoadAccountByTokenStub()
}
