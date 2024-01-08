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

export function age(dateBirth: Date) {
  const today: Date = new Date()
  const diff = today?.getTime() - dateBirth?.getTime()

  const age = new Date(diff);
  const years = age.getUTCFullYear() - 1970;
  const moths = age.getUTCMonth();
  const days = age.getUTCDate() - 1;

  if (years === 0) {
    if (moths === 0) {
      return `${days} días`;
    } else {
      return `${moths} meses y ${days} días`;
    }
  } else {
    return `${years} años, ${moths} meses`;
  }
}
