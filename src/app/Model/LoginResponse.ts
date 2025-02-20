export interface LoginResponse {
  id: number
  invitados: Invitado[]
}

export interface Invitado {
  id: number
  nombre: string
  confirmado: boolean
  asistencia: boolean
  cabeza_familia: boolean
}
