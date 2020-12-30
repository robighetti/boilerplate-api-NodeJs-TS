import { getRepository, Repository } from 'typeorm';

import IUsertokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UserToken from '@modules/users/infra/typeorm/entities/UserToken';

class UserTokensRepository implements IUsertokensRepository {
  private ormRepository: Repository<UserToken>;

  constructor() {
    this.ormRepository = getRepository(UserToken);
  }

  public async findByToken(token: string): Promise<UserToken | undefined> {
    const userToken = await this.ormRepository.findOne({
      where: { token },
    });

    return userToken;
  }

  public async generate(user_id: string): Promise<UserToken> {
    const token = this.ormRepository.create({ user_id });

    const userToken = await this.ormRepository.save(token);

    return userToken;
  }
}

export default UserTokensRepository;
