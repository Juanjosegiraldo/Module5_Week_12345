import { User } from '../interfaces/User';
import { mockUsers } from '../data/users';
import { ExtendUser } from './decorators';

export class UserStore {
  private users: User[] = mockUsers;

  list(): User[] {
    console.log("GET /users - Listando usuarios");
    return this.users;
  }

  findByName(username: string): User | undefined {
    console.log(`GET /users?name=${username} - Buscando usuario`);
    return this.users.find(u => u.username === username);
  }

  @ExtendUser // Aplicación del decorador
  create(user: User): void {
    console.log("POST /users - Creando usuario", user);
    this.users.push(user);
  }

  update(id: number, data: Partial<User>): void {
    console.log(`PATCH /users/${id} - Actualizando datos`);
    const index = this.users.findIndex(u => u.id === id);
    if (index !== -1) this.users[index] = { ...this.users[index], ...data };
  }

  remove(id: number): void {
    console.log(`DELETE /users/${id} - Eliminando usuario`);
    this.users = this.users.filter(u => u.id !== id);
  }
}