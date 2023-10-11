// TODO: доработать
export interface CrudModel {
  create<T, R>(args: T): R;
  getAll<T, R>(args: T): R;
  getBy<T, R>(args: T): R;
  update<T, R>(args: T): R;
  delete<T, R>(args: T): R;
}
