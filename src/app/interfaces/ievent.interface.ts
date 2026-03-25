export interface IEvent {
  id?: string;
  title: string;
  start: Date;
  end?: Date;
  duracion: Date;
  description: string;
  className: string;
  pacienteId: string;
  conAgenda: Boolean;
  url: string;
}
