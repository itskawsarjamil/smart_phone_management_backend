import { QueryBuilder } from '../../builder/QueryBuilder';
import { TUser } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};

const getAllUserFromDB = async (query: Record<string, unknown>) => {
  const result = new QueryBuilder(User.find(), query);
};

export const userServices = {
  createUserIntoDB,
};
