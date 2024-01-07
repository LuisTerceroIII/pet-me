export function longDateFormat(date: Date) {

    const options: any = { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric',
      timeZone: 'America/Argentina/Buenos_Aires' // Establecer la zona horaria a Argentina (GMT-3)
    }
    const formatedDate = date.toLocaleDateString("es-ES", options)

    return formatedDate?.charAt(0).toUpperCase() + formatedDate.slice(1)
}