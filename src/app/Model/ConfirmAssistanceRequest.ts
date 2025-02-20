export interface ConfirmAssistanceRequest {
  invitados: InvitadoCA[]
}

export interface InvitadoCA {
  id: number | undefined
  confirmado: number | undefined
  asistencia: number | undefined
}
