import { AddAccount, AddAccountModel, Encrypter, AccountModel, AddAccountRepository } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter
  private readonly AddAccountRepository: AddAccountRepository

  constructor (encrypter: Encrypter, addAcccountRepository: AddAccountRepository) {
    this.encrypter = encrypter
    this.AddAccountRepository = addAcccountRepository
  }

  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.encrypt(accountData.password)
    const account = await this.AddAccountRepository.add(Object.assign({ }, accountData, { password: hashedPassword }))
    return account
  }
}
