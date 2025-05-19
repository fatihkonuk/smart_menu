import { UserModel } from "../models";
import { User, UserCreate } from "../types/user.types";

class UserRepository {
  private applySelect(query: any, select?: string) {
    return select ? query.select(select) : query;
  }

  async getAll(select?: string): Promise<User[]> {
    const query = UserModel.find();
    return await this.applySelect(query, select);
  }

  async getById(id: string, select?: string): Promise<User | null> {
    const query = UserModel.findById(id);
    return await this.applySelect(query, select);
  }

  async getByToken(token: string, select?: string): Promise<User | null> {
    const query = UserModel.findOne({ "sessionToken.token": token });
    return await this.applySelect(query, select);
  }

  async getByUsername(username: string, select?: string): Promise<User | null> {
    const query = UserModel.findOne({ username });
    return await this.applySelect(query, select);
  }

  async create(data: UserCreate): Promise<User> {
    const user = new UserModel(data);
    return await user.save();
  }

  async updateById(
    id: string,
    updates: Partial<User>,
    select?: string
  ): Promise<User | null> {
    const query = UserModel.findByIdAndUpdate(id, { $set: updates }, { new: true });
    return await this.applySelect(query, select);
  }

  async deleteById(id: string, select?: string): Promise<User | null> {
    const query = UserModel.findByIdAndDelete(id);
    return await this.applySelect(query, select);
  }
}

export default new UserRepository();
