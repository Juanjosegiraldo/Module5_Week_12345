import type { UserStore } from './UserStore';

/**
 * Ejecuta un flujo CRUD de ejemplo y deja trazas en consola (logs HTTP simulados + decorador en create).
 */
export function runUserStoreDemo(store: UserStore): void {
  console.info('[UserStore demo] Inicio');
  store.list();
  store.findByName('admin');
  store.create({ id: 100, username: 'usuario_demo', password: 'tmp' });
  store.update(100, { username: 'usuario_demo_actualizado' });
  const users = store.list();
  console.info(
    '[UserStore demo] Usuario creado (role y createdAt vienen del decorador):',
    users.find((u) => u.id === 100),
  );
  store.remove(100);
  store.list();
  console.info('[UserStore demo] Fin');
}
