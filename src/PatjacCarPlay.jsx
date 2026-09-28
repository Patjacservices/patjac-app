import { useState, useEffect, useRef, useCallback, useMemo } from "react";

// ─── TRANSLATIONS ────────────────────────────────────────────
const T = {
  DE: {
    appName:"Patjac", tagline:"Reinigung · Garten · Services",
    dashboard:"Dashboard", clients:"Kunden", jobs:"Aufträge",
    employees:"Mitarbeiter", invoices:"Rechnungen", finance:"Finanzen",
    timeclock:"Zeiterfassung", messaging:"Nachrichten", routes:"Routen",
    settings:"Einstellungen", reports:"Berichte", logout:"Abmelden",
    welcome:"Willkommen", today:"Heute", totalClients:"Aktive Kunden",
    todayJobs:"Aufträge Heute", monthIncome:"Einkommen Monat",
    pendingInvoices:"Offene Rechnungen", activeEmployees:"Aktive Mitarbeiter",
    alerts:"Warnungen", overdueInvoices:"Überfällige Rechnungen",
    employeesNotClockedIn:"Nicht eingecheckt", incompleteJobs:"Unvollständig",
    addClient:"Kunde hinzufügen", editClient:"Kunde bearbeiten",
    deleteClient:"Kunde löschen", street:"Strasse", number:"Nummer",
    postalCode:"PLZ", city:"Stadt", phone:"Telefon", email:"E-Mail",
    frequency:"Häufigkeit", daily:"Täglich", weekly:"Wöchentlich",
    monthly:"Monatlich", once:"Einmalig", billingType:"Abrechnung",
    perService:"Pro Dienst", monthlyContract:"Monatsvertrag",
    monthlyPrice:"Monatspreis", save:"Speichern", cancel:"Abbrechen",
    confirm:"Bestätigen", delete:"Löschen", edit:"Bearbeiten", add:"Hinzufügen",
    status:"Status", pending:"Ausstehend", inProgress:"In Bearbeitung",
    completed:"Abgeschlossen", paid:"Bezahlt", overdue:"Überfällig",
    date:"Datum", time:"Zeit", amount:"Betrag", description:"Beschreibung",
    notes:"Notizen", actions:"Aktionen", close:"Schliessen", yes:"Ja", no:"Nein",
    firstName:"Vorname", lastName:"Nachname", address:"Adresse",
    employeeType:"Typ", fixed:"Festangestellt", hourly:"Stundenlohn",
    hourlyRate:"Stundensatz", fixedSalary:"Festgehalt",
    hoursWorked:"Gearbeitete Std.", totalPay:"Gesamtverdienst",
    clockIn:"Arbeitsbeginn", clockOut:"Arbeitsende",
    digitalSignature:"Unterschrift", gpsLocation:"GPS-Standort",
    optimizeRoute:"Route optimieren", generateInvoice:"Rechnung erstellen",
    sendInvoice:"Rechnung senden", income:"Einnahmen", expenses:"Ausgaben",
    profit:"Gewinn", salaries:"Gehälter", otherExpenses:"Sonstige Ausgaben",
    addExpense:"Ausgabe hinzufügen", annualReport:"Jahresbericht",
    taxReport:"Steuerbericht", language:"Sprache", security:"Sicherheit",
    companyInfo:"Firmeninfo", companyName:"Firmenname",
    adminLogin:"Administrator", employeeLogin:"Mitarbeiter",
    password:"Passwort", pin:"PIN", code:"Code", loginBtn:"Anmelden",
    cleaning:"Reinigung", gardening:"Garten", other:"Sonstige",
    userCode:"Benutzercode", regenerateAccess:"Neu generieren",
    noRecords:"Keine Einträge", success:"Erfolgreich", error:"Fehler",
    sendReport:"Bericht senden", preview:"Vorschau", payslip:"Lohnausweis",
    newJob:"Neuer Auftrag", clockHistory:"Stempelkarte",
    sendEmail:"E-Mail senden", ahv:"AHV/IV/EO", alv:"ALV",
    administrator:"Administrator", employee:"Mitarbeiter",
    security_blocked:"Zugriff verweigert", iban:"IBAN", bic:"BIC",
    subtotal:"Zwischensumme", invoiceNumber:"Rechnungs-Nr.",
    dueDate:"Fälligkeitsdatum", uid:"UID-Nummer", mwstNr:"MWST-Nr.",
    monthSummary:"Monatsübersicht", system:"System", reset:"Zurücksetzen",
    wallpaper:"Hintergrund", name:"Name",
    academy:"Patjac Academy",
    academySubtitle:"Lern- und Schulungszentrum",
    academyWelcome:"Willkommen bei Patjac Academy",
    academyDesc:"Ihr professionelles Schulungszentrum für Reinigung, Gartenpflege und Servicemanagement.",
    courses:"Kurse", myCourses:"Meine Kurse", allCourses:"Alle Kurse",
    startCourse:"Kurs starten", continueCourse:"Weiter", completed:"Abgeschlossen",
    progress:"Fortschritt", certificate:"Zertifikat", download:"Herunterladen",
    duration:"Dauer", level:"Niveau", beginner:"Einsteiger", intermediate:"Fortgeschritten", advanced:"Experte",
    lessons:"Lektionen", lesson:"Lektion", quiz:"Quiz", score:"Ergebnis",
    passed:"Bestanden", failed:"Nicht bestanden", tryAgain:"Nochmals versuchen",
    featured:"Empfohlen", new:"Neu", popular:"Beliebt",
    searchCourses:"Kurs suchen...", category:"Kategorie",
    cleaning:"Reinigung", gardening:"Gartenpflege", management:"Management", safety:"Sicherheit",
    back:"Zurück", next:"Weiter", finish:"Abschliessen",
    yourProgress:"Ihr Fortschritt", totalCourses:"Kurse gesamt",
    completedCourses:"Abgeschlossen", inProgress:"In Bearbeitung",
    points:"Punkte", rank:"Rang", leaderboard:"Rangliste",
    studyTime:"Lernzeit", thisWeek:"Diese Woche", minutes:"Minuten",
    help:"Hilfe", helpTitle:"Benutzerhandbuch – Patjac Business Suite",    helpSubtitle:"Vollständige Anleitung für Administratoren",
    helpWelcome:"Willkommen beim Patjac Benutzerhandbuch. Diese Anleitung erklärt alle Funktionen der Anwendung Schritt für Schritt.",
    helpAdminOnly:"⚠️ Dieses Handbuch ist nur für den Administrator sichtbar.",
    helpClose:"Handbuch schliessen",
    payrollTitle:"Lohnabrechnung", payrollMonth:"Monat", payrollYear:"Jahr",
    payrollGenerate:"Lohnabrechnung erstellen", payrollPrint:"Drucken",
    payrollSend:"Per E-Mail senden", payrollView:"Lohnabrechnung anzeigen",
    grossSalary:"Bruttolohn", netSalary:"Nettolohn", deductions:"Abzüge",
    employerContrib:"Arbeitgeberanteile", totalCost:"Gesamtkosten",
    ahvEmployee:"AHV/IV/EO Arbeitnehmer (5.3%)",
    ahvEmployer:"AHV/IV/EO Arbeitgeber (5.30%)",
    alvEmployee:"ALV Arbeitnehmer (1.10%)",
    alvEmployer:"ALV Arbeitgeber (1.10%)",
    nbuvEmployee:"NBUV Arbeitnehmer (1.20%)",
    buvEmployer:"BUV Arbeitgeber (ca. 0.50%)",
    bvgEmployee:"BVG/PK Arbeitnehmer (ca. 7%)",
    bvgEmployer:"BVG/PK Arbeitgeber (mind. 7%)",
    ktgEmployee:"KTG Arbeitnehmer (0.5%)",
    ktgEmployer:"KTG Arbeitgeber (0.5%)",
    hoursMonth:"Stunden Monat", ratePerHour:"Ansatz/Stunde",
    payPeriod:"Lohnperiode", paymentDate:"Zahlungsdatum",
    bankTransfer:"Banküberweisung", iban:"IBAN",
    myPayslip:"Meine Lohnabrechnung", selectMonth:"Monat wählen",
    lohnausweis:"Lohnausweis (offiziell)", steuerpflichtig:"Steuerpflichtiger Lohn",
    kkAbzug:"KK-Prämienanteil (info)", thirteenthSalary:"13. Monatslohn",
    totalDeductionsEmployee:"Total Abzüge Arbeitnehmer",
    totalDeductionsEmployer:"Total Abzüge Arbeitgeber",
    inventory:"Lager & Bestellungen", stock:"Lagerbestand",
    stockTitle:"Lager & Bestellungen",
    products:"Produkte", addProduct:"Produkt hinzufügen",
    editProduct:"Produkt bearbeiten", deleteProduct:"Produkt löschen",
    productName:"Produktname", productCategory:"Kategorie",
    catCleaning:"Reinigungsprodukte", catGardening:"Gartenpflege",
    catEquipment:"Ausrüstung", catSafety:"Sicherheit", catOther:"Sonstige",
    currentStock:"Aktueller Bestand", minStock:"Mindestbestand",
    unit:"Einheit", unitLiter:"Liter", unitKg:"kg", unitPcs:"Stück", unitPack:"Pack",
    supplier:"Lieferant", supplierName:"Lieferantenname",
    supplierPhone:"Tel. Lieferant", supplierEmail:"E-Mail Lieferant",
    orders:"Bestellungen", newOrder:"Neue Bestellung",
    orderDate:"Bestelldatum", deliveryDate:"Lieferdatum",
    orderStatus:"Status", orderPending:"Ausstehend",
    orderDelivered:"Geliefert", orderCancelled:"Storniert",
    orderItems:"Bestellpositionen", orderTotal:"Bestelltotal",
    lowStock:"Niedriger Bestand", outOfStock:"Kein Bestand",
    addOrder:"Bestellung erstellen", receiveOrder:"Bestellung empfangen",
    stockValue:"Lagerwert", reorderPoint:"Nachbestellpunkt",
    pricePerUnit:"Preis/Einheit", totalValue:"Gesamtwert",
    quickOrder:"Schnellbestellung", allCategories:"Alle Kategorien",
    suppliers:"Lieferanten", addSupplier:"Lieferant hinzufügen",
    stockAlert:"Lagerwarnung", paymentTerms:"Zahlungsziel", unitPrice:"Preis/Einheit", locationLabel:"Lagerort", contactPerson:"Kontaktperson", paymentDays:"Zahlungstage",
    active:"Aktiv", inactive:"Inaktiv",
    quickActions:"Schnellzugriff",
    all:"Alle", search:"Suchen...",
    service:"Dienstleistung", newJob:"Neuer Auftrag",
    sendReport:"Bericht senden",
    delivered:"Geliefert", cancelled:"Storniert",
    fixedSalary:"Festgehalt", hourlyType:"Stundenlohn",
    costBreakdown:"Kostenaufschlüsselung", totalExpenses:"Total Ausgaben",
    warehouseDelivered:"Lager (geliefert)", warehousePending:"Lager ausstehend",
    warehouseOrders:"Lagerbestellungen (Ausgaben)",
    monthlyTrend:"Monatsverlauf", swissTaxes:"Steuern Schweiz 2024",
    profitTax:"Gewinnsteuer Kt. ZH (~12%)", federalTax:"Gewinnsteuer Bund (~8.5%)",
    vatNet:"MWST netto (8.1% quartalsw.)", ahvEmployer:"AHV Arbeitgeber (5.3%)",
    netProfit:"Betriebsergebnis", totalCostsLabel:"Gesamtkosten",
    sonstigeAusgaben:"Sonstige Ausgaben",
    personalkosten:"Personalkosten (inkl. Sozialabgaben)",
    today2:"heute",
    since:"Seit", at:"Um", todaySummary:"Heute im Überblick",
    notClockedIn:"Nicht eingecheckt",
    swissLegalNotes:"Schweizer Rechtshinweise",
    securityActive:"Sicherheitsstatus: Aktiv",
    contracts:"Verträge", documents:"Dokumente", newContract:"Neuer Vertrag", contractType:"Vertragsart",
    clientContract:"Kundenvertrag", employeeContract:"Arbeitsvertrag",
    contractDate:"Vertragsdatum", contractStart:"Beginn", contractEnd:"Ende",
    contractSalary:"Lohn/Tarif", contractHours:"Arbeitsstunden/Woche",
    contractNotice:"Kündigungsfrist", contractTrial:"Probezeit",
    contractSign:"Unterzeichnen", contractDownload:"Herunterladen",
    contractPreview:"Vorschau", contractSigned:"Unterzeichnet",
    contractDraft:"Entwurf", contractActive:"Aktiv",
    contractExpired:"Abgelaufen", contractTerminated:"Gekündigt",
    sigDate:"Datum Unterschrift", sigClient:"Unterschrift Kunde",
    sigCompany:"Unterschrift Arbeitgeber",
    indefinite:"Unbefristet", fixedTerm:"Befristet",
  },
  ES: {
    appName:"Patjac", tagline:"Limpieza · Jardín · Servicios",
    dashboard:"Panel", clients:"Clientes", jobs:"Trabajos",
    employees:"Empleados", invoices:"Facturas", finance:"Finanzas",
    timeclock:"Fichaje", messaging:"Mensajes", routes:"Rutas",
    settings:"Configuración", reports:"Informes", logout:"Salir",
    welcome:"Bienvenido", today:"Hoy", totalClients:"Clientes Activos",
    todayJobs:"Trabajos Hoy", monthIncome:"Ingresos Mes",
    pendingInvoices:"Facturas Pendientes", activeEmployees:"Empleados Activos",
    alerts:"Alertas", overdueInvoices:"Facturas Vencidas",
    employeesNotClockedIn:"Sin fichar", incompleteJobs:"Incompletos",
    addClient:"Añadir Cliente", editClient:"Editar Cliente",
    deleteClient:"Eliminar Cliente", street:"Calle", number:"Número",
    postalCode:"CP", city:"Ciudad", phone:"Teléfono", email:"Correo",
    frequency:"Frecuencia", daily:"Diario", weekly:"Semanal",
    monthly:"Mensual", once:"Una vez", billingType:"Facturación",
    perService:"Por servicio", monthlyContract:"Contrato mensual",
    monthlyPrice:"Precio mensual", save:"Guardar", cancel:"Cancelar",
    confirm:"Confirmar", delete:"Eliminar", edit:"Editar", add:"Añadir",
    status:"Estado", pending:"Pendiente", inProgress:"En progreso",
    completed:"Completado", paid:"Pagado", overdue:"Vencido",
    date:"Fecha", time:"Hora", amount:"Importe", description:"Descripción",
    notes:"Notas", actions:"Acciones", close:"Cerrar", yes:"Sí", no:"No",
    firstName:"Nombre", lastName:"Apellido", address:"Dirección",
    employeeType:"Tipo", fixed:"Fijo", hourly:"Por horas",
    hourlyRate:"Tarifa/hora", fixedSalary:"Salario fijo",
    hoursWorked:"Horas trabajadas", totalPay:"Total a pagar",
    clockIn:"Entrada", clockOut:"Salida",
    digitalSignature:"Firma digital", gpsLocation:"Ubicación GPS",
    optimizeRoute:"Optimizar ruta", generateInvoice:"Generar factura",
    sendInvoice:"Enviar factura", income:"Ingresos", expenses:"Gastos",
    profit:"Beneficio", salaries:"Salarios", otherExpenses:"Otros gastos",
    addExpense:"Añadir gasto", annualReport:"Informe anual",
    taxReport:"Informe fiscal", language:"Idioma", security:"Seguridad",
    companyInfo:"Empresa", companyName:"Nombre empresa",
    adminLogin:"Administrador", employeeLogin:"Empleado",
    password:"Contraseña", pin:"PIN", code:"Código", loginBtn:"Entrar",
    cleaning:"Limpieza", gardening:"Jardín", other:"Otro",
    userCode:"Código usuario", regenerateAccess:"Regenerar",
    noRecords:"Sin registros", success:"Éxito", error:"Error",
    sendReport:"Enviar informe", preview:"Vista previa", payslip:"Nómina",
    newJob:"Nuevo trabajo", clockHistory:"Historial fichajes",
    sendEmail:"Enviar correo", ahv:"AHV/IV/EO", alv:"ALV",
    administrator:"Administrador", employee:"Empleado",
    security_blocked:"Acceso denegado", iban:"IBAN", bic:"BIC",
    subtotal:"Subtotal", invoiceNumber:"Nº Factura",
    dueDate:"Vencimiento", uid:"UID", mwstNr:"IVA Nr.",
    monthSummary:"Resumen mensual", system:"Sistema", reset:"Restablecer",
    wallpaper:"Fondo", name:"Nombre",
    academy:"Patjac Academy",
    academySubtitle:"Centro de aprendizaje y formación",
    academyWelcome:"Bienvenido a Patjac Academy",
    academyDesc:"Su centro de formación profesional en limpieza, jardinería y gestión de servicios.",
    courses:"Cursos", myCourses:"Mis Cursos", allCourses:"Todos los Cursos",
    startCourse:"Iniciar curso", continueCourse:"Continuar", completed:"Completado",
    progress:"Progreso", certificate:"Certificado", download:"Descargar",
    duration:"Duración", level:"Nivel", beginner:"Principiante", intermediate:"Intermedio", advanced:"Experto",
    lessons:"Lecciones", lesson:"Lección", quiz:"Quiz", score:"Puntuación",
    passed:"Aprobado", failed:"No aprobado", tryAgain:"Intentar de nuevo",
    featured:"Destacado", new:"Nuevo", popular:"Popular",
    searchCourses:"Buscar curso...", category:"Categoría",
    cleaning:"Limpieza", gardening:"Jardinería", management:"Gestión", safety:"Seguridad",
    back:"Atrás", next:"Siguiente", finish:"Finalizar",
    yourProgress:"Tu progreso", totalCourses:"Cursos totales",
    completedCourses:"Completados", inProgress:"En progreso",
    points:"Puntos", rank:"Rango", leaderboard:"Clasificación",
    studyTime:"Tiempo de estudio", thisWeek:"Esta semana", minutes:"Minutos",
    help:"Ayuda", helpTitle:"Manual de Usuario – Patjac Business Suite",
    helpSubtitle:"Guía completa para administradores",
    helpWelcome:"Bienvenido al manual de usuario de Patjac. Esta guía explica todas las funciones de la aplicación paso a paso.",
    helpAdminOnly:"⚠️ Este manual solo es visible para el administrador.",
    helpClose:"Cerrar manual",
    payrollTitle:"Nómina", payrollMonth:"Mes", payrollYear:"Año",
    payrollGenerate:"Generar nómina", payrollPrint:"Imprimir",
    payrollSend:"Enviar por correo", payrollView:"Ver nómina",
    grossSalary:"Salario bruto", netSalary:"Salario neto", deductions:"Deducciones",
    employerContrib:"Aportaciones empresa", totalCost:"Coste total empresa",
    ahvEmployee:"AVS/AI/IPG Empleado (5.3%)",
    ahvEmployer:"AVS/AI/IPG Empresa (5.30%)",
    alvEmployee:"AD Empleado (1.10%)",
    alvEmployer:"AD Empresa (1.10%)",
    nbuvEmployee:"AINF Empleado (1.20%)",
    buvEmployer:"AIA Empresa (aprox. 0.50%)",
    bvgEmployee:"LPP Empleado (aprox. 7%)",
    bvgEmployer:"LPP Empresa (mín. 7%)",
    ktgEmployee:"IS Empleado (0.5%)",
    ktgEmployer:"IS Empresa (0.5%)",
    hoursMonth:"Horas mes", ratePerHour:"Tarifa/hora",
    payPeriod:"Período de pago", paymentDate:"Fecha de pago",
    bankTransfer:"Transferencia bancaria", iban:"IBAN",
    myPayslip:"Mi nómina", selectMonth:"Seleccionar mes",
    lohnausweis:"Certificado de salario (oficial)", steuerpflichtig:"Salario sujeto a impuestos",
    kkAbzug:"Prima seguro médico (info)", thirteenthSalary:"13.º salario mensual",
    totalDeductionsEmployee:"Total deducciones empleado",
    totalDeductionsEmployer:"Total aportaciones empresa",
    inventory:"Almacén & Pedidos", stock:"Inventario",
    stockTitle:"Almacén & Pedidos",
    products:"Productos", addProduct:"Añadir producto",
    editProduct:"Editar producto", deleteProduct:"Eliminar producto",
    productName:"Nombre del producto", productCategory:"Categoría",
    catCleaning:"Productos de limpieza", catGardening:"Productos de jardín",
    catEquipment:"Equipamiento", catSafety:"Seguridad", catOther:"Otros",
    currentStock:"Stock actual", minStock:"Stock mínimo",
    unit:"Unidad", unitLiter:"Litros", unitKg:"kg", unitPcs:"Unidades", unitPack:"Pack",
    supplier:"Proveedor", supplierName:"Nombre proveedor",
    supplierPhone:"Tel. proveedor", supplierEmail:"Email proveedor",
    orders:"Pedidos", newOrder:"Nuevo pedido",
    orderDate:"Fecha pedido", deliveryDate:"Fecha entrega",
    orderStatus:"Estado", orderPending:"Pendiente",
    orderDelivered:"Entregado", orderCancelled:"Cancelado",
    orderItems:"Líneas de pedido", orderTotal:"Total pedido",
    lowStock:"Stock bajo", outOfStock:"Sin stock",
    addOrder:"Crear pedido", receiveOrder:"Recibir pedido",
    stockValue:"Valor inventario", reorderPoint:"Punto de reposición",
    pricePerUnit:"Precio/unidad", totalValue:"Valor total",
    quickOrder:"Pedido rápido", allCategories:"Todas las categorías",
    suppliers:"Proveedores", addSupplier:"Añadir proveedor",
    stockAlert:"Alerta de stock", paymentTerms:"Plazo de pago", unitPrice:"Precio/unidad", locationLabel:"Ubicación", contactPerson:"Persona de contacto", paymentDays:"Días de pago",
    active:"Activo", inactive:"Inactivo",
    quickActions:"Acceso rápido",
    all:"Todos", search:"Buscar...",
    service:"Servicio", newJob:"Nuevo trabajo",
    sendReport:"Enviar informe",
    delivered:"Entregado", cancelled:"Cancelado",
    fixedSalary:"Salario fijo", hourlyType:"Por horas",
    costBreakdown:"Desglose de costes", totalExpenses:"Total gastos",
    warehouseDelivered:"Almacén (entregado)", warehousePending:"Almacén pendiente",
    warehouseOrders:"Pedidos almacén (gastos)",
    monthlyTrend:"Evolución mensual", swissTaxes:"Impuestos Suiza 2024",
    profitTax:"Impuesto beneficio ZH (~12%)", federalTax:"Impuesto federal (~8.5%)",
    vatNet:"IVA neto (8.1% trimestral)", ahvEmployer:"AVS empresa (5.3%)",
    netProfit:"Resultado operativo", totalCostsLabel:"Costes totales",
    sonstigeAusgaben:"Otros gastos",
    personalkosten:"Costes personal (incl. cotizaciones)",
    today2:"hoy",
    since:"Desde", at:"A las", todaySummary:"Resumen de hoy",
    notClockedIn:"Sin fichar",
    swissLegalNotes:"Notas legales suizas",
    securityActive:"Estado seguridad: Activo",
    contracts:"Contratos", documents:"Documentos", newContract:"Nuevo contrato", contractType:"Tipo de contrato",
    clientContract:"Contrato cliente", employeeContract:"Contrato laboral",
    contractDate:"Fecha contrato", contractStart:"Inicio", contractEnd:"Fin",
    contractSalary:"Salario/Tarifa", contractHours:"Horas semanales",
    contractNotice:"Preaviso", contractTrial:"Período de prueba",
    contractSign:"Firmar", contractDownload:"Descargar",
    contractPreview:"Vista previa", contractSigned:"Firmado",
    contractDraft:"Borrador", contractActive:"Activo",
    contractExpired:"Expirado", contractTerminated:"Rescindido",
    sigDate:"Fecha firma", sigClient:"Firma cliente",
    sigCompany:"Firma empleador",
    indefinite:"Indefinido", fixedTerm:"Plazo fijo",
  },
  EN: {
    dashboard:"Dashboard", clients:"Clients", jobs:"Jobs",
    employees:"Employees", invoices:"Invoices", finance:"Finance",
    timeclock:"Time Clock", messaging:"Messages", routes:"Routes",
    settings:"Settings", reports:"Reports", logout:"Log Out",
    welcome:"Welcome", today:"Today", totalClients:"Active Clients",
    todayJobs:"Today's Jobs", monthIncome:"Monthly Income",
    pendingInvoices:"Pending Invoices", activeEmployees:"Active Employees",
    alerts:"Alerts", overdueInvoices:"Overdue Invoices",
    employeesNotClockedIn:"Not clocked in", incompleteJobs:"Incomplete",
    addClient:"Add Client", editClient:"Edit Client",
    deleteClient:"Delete Client", street:"Street", number:"Number",
    postalCode:"Postal Code", city:"City", phone:"Phone", email:"Email",
    frequency:"Frequency", daily:"Daily", weekly:"Weekly",
    monthly:"Monthly", once:"Once", billingType:"Billing",
    perService:"Per service", monthlyContract:"Monthly contract",
    monthlyPrice:"Monthly price", save:"Save", cancel:"Cancel",
    confirm:"Confirm", delete:"Delete", edit:"Edit", add:"Add",
    status:"Status", pending:"Pending", inProgress:"In Progress",
    completed:"Completed", paid:"Paid", overdue:"Overdue",
    date:"Date", time:"Time", amount:"Amount", description:"Description",
    notes:"Notes", actions:"Actions", close:"Close", yes:"Yes", no:"No",
    firstName:"First Name", lastName:"Last Name", address:"Address",
    employeeType:"Type", fixed:"Fixed", hourly:"Hourly",
    hourlyRate:"Rate/hour", fixedSalary:"Fixed salary",
    hoursWorked:"Hours worked", totalPay:"Total pay",
    clockIn:"Clock In", clockOut:"Clock Out",
    digitalSignature:"Digital signature", gpsLocation:"GPS Location",
    optimizeRoute:"Optimize route", generateInvoice:"Generate invoice",
    sendInvoice:"Send invoice", income:"Income", expenses:"Expenses",
    profit:"Profit", salaries:"Salaries", otherExpenses:"Other expenses",
    addExpense:"Add expense", annualReport:"Annual report",
    taxReport:"Tax report", language:"Language", security:"Security",
    companyInfo:"Company", companyName:"Company name",
    adminLogin:"Administrator", employeeLogin:"Employee", tagline:"Cleaning · Garden · Services",
    password:"Password", pin:"PIN", code:"Code", loginBtn:"Login",
    cleaning:"Cleaning", gardening:"Gardening", other:"Other",
    userCode:"User code", regenerateAccess:"Regenerate",
    noRecords:"No records", success:"Success", error:"Error",
    sendReport:"Send report", preview:"Preview", payslip:"Payslip",
    newJob:"New Job", clockHistory:"Clock history",
    sendEmail:"Send email", ahv:"AHV/IV/EO", alv:"ALV",
    administrator:"Administrator", employee:"Employee",
    security_blocked:"Access denied", iban:"IBAN", bic:"BIC",
    subtotal:"Subtotal", invoiceNumber:"Invoice No.",
    dueDate:"Due date", uid:"UID", mwstNr:"VAT No.",
    monthSummary:"Monthly summary", system:"System", reset:"Reset",
    wallpaper:"Wallpaper", name:"Name",
    academy:"Patjac Academy",
    academySubtitle:"Learning & Training Center",
    academyWelcome:"Welcome to Patjac Academy",
    academyDesc:"Your professional training center for cleaning, gardening and service management.",
    courses:"Courses", myCourses:"My Courses", allCourses:"All Courses",
    startCourse:"Start course", continueCourse:"Continue", completed:"Completed",
    progress:"Progress", certificate:"Certificate", download:"Download",
    duration:"Duration", level:"Level", beginner:"Beginner", intermediate:"Intermediate", advanced:"Expert",
    lessons:"Lessons", lesson:"Lesson", quiz:"Quiz", score:"Score",
    passed:"Passed", failed:"Failed", tryAgain:"Try again",
    featured:"Featured", new:"New", popular:"Popular",
    searchCourses:"Search course...", category:"Category",
    cleaning:"Cleaning", gardening:"Gardening", management:"Management", safety:"Safety",
    back:"Back", next:"Next", finish:"Finish",
    yourProgress:"Your progress", totalCourses:"Total courses",
    completedCourses:"Completed", inProgress:"In Progress",
    points:"Points", rank:"Rank", leaderboard:"Leaderboard",
    studyTime:"Study time", thisWeek:"This week", minutes:"Minutes",
    help:"Help", helpTitle:"User Manual – Patjac Business Suite",
    helpSubtitle:"Complete guide for administrators",
    helpWelcome:"Welcome to the Patjac user manual. This guide explains all application features step by step.",
    helpAdminOnly:"⚠️ This manual is only visible to the administrator.",
    helpClose:"Close manual",
    payrollTitle:"Payslip", payrollMonth:"Month", payrollYear:"Year",
    payrollGenerate:"Generate payslip", payrollPrint:"Print",
    payrollSend:"Send by email", payrollView:"View payslip",
    grossSalary:"Gross salary", netSalary:"Net salary", deductions:"Deductions",
    employerContrib:"Employer contributions", totalCost:"Total employer cost",
    ahvEmployee:"AHV/IV/EO Employee (5.3%)",
    ahvEmployer:"AHV/IV/EO Employer (5.30%)",
    alvEmployee:"ALV Employee (1.10%)",
    alvEmployer:"ALV Employer (1.10%)",
    nbuvEmployee:"NBUV Employee (1.20%)",
    buvEmployer:"BUV Employer (approx. 0.50%)",
    bvgEmployee:"BVG/PF Employee (approx. 7%)",
    bvgEmployer:"BVG/PF Employer (min. 7%)",
    ktgEmployee:"DSI Employee (0.5%)",
    ktgEmployer:"DSI Employer (0.5%)",
    hoursMonth:"Hours/month", ratePerHour:"Rate/hour",
    payPeriod:"Pay period", paymentDate:"Payment date",
    bankTransfer:"Bank transfer", iban:"IBAN",
    myPayslip:"My Payslip", selectMonth:"Select month",
    lohnausweis:"Salary certificate (official)", steuerpflichtig:"Taxable salary",
    kkAbzug:"Health insurance premium (info)", thirteenthSalary:"13th monthly salary",
    totalDeductionsEmployee:"Total employee deductions",
    totalDeductionsEmployer:"Total employer contributions",
    inventory:"Warehouse & Orders", stock:"Inventory",
    stockTitle:"Warehouse & Orders",
    products:"Products", addProduct:"Add product",
    editProduct:"Edit product", deleteProduct:"Delete product",
    productName:"Product name", productCategory:"Category",
    catCleaning:"Cleaning products", catGardening:"Gardening products",
    catEquipment:"Equipment", catSafety:"Safety", catOther:"Other",
    currentStock:"Current stock", minStock:"Minimum stock",
    unit:"Unit", unitLiter:"Litres", unitKg:"kg", unitPcs:"Pieces", unitPack:"Pack",
    supplier:"Supplier", supplierName:"Supplier name",
    supplierPhone:"Supplier phone", supplierEmail:"Supplier email",
    orders:"Orders", newOrder:"New order",
    orderDate:"Order date", deliveryDate:"Delivery date",
    orderStatus:"Status", orderPending:"Pending",
    orderDelivered:"Delivered", orderCancelled:"Cancelled",
    orderItems:"Order items", orderTotal:"Order total",
    lowStock:"Low stock", outOfStock:"Out of stock",
    addOrder:"Create order", receiveOrder:"Receive order",
    stockValue:"Stock value", reorderPoint:"Reorder point",
    pricePerUnit:"Price/unit", totalValue:"Total value",
    quickOrder:"Quick order", allCategories:"All categories",
    suppliers:"Suppliers", addSupplier:"Add supplier",
    stockAlert:"Stock alert", paymentTerms:"Payment terms", unitPrice:"Price/unit", locationLabel:"Location", contactPerson:"Contact person", paymentDays:"Payment days",
    active:"Active", inactive:"Inactive",
    quickActions:"Quick access",
    all:"All", search:"Search...",
    service:"Service", newJob:"New job",
    sendReport:"Send report",
    delivered:"Delivered", cancelled:"Cancelled",
    fixedSalary:"Fixed salary", hourlyType:"Hourly",
    costBreakdown:"Cost breakdown", totalExpenses:"Total expenses",
    warehouseDelivered:"Warehouse (delivered)", warehousePending:"Warehouse pending",
    warehouseOrders:"Warehouse orders (expenses)",
    monthlyTrend:"Monthly trend", swissTaxes:"Swiss Taxes 2024",
    profitTax:"Profit tax Canton ZH (~12%)", federalTax:"Federal profit tax (~8.5%)",
    vatNet:"VAT net (8.1% quarterly)", ahvEmployer:"AHV employer (5.3%)",
    netProfit:"Operating result", totalCostsLabel:"Total costs",
    sonstigeAusgaben:"Other expenses",
    personalkosten:"Payroll (incl. social contributions)",
    today2:"today",
    since:"Since", at:"At", todaySummary:"Today's Summary",
    notClockedIn:"Not clocked in",
    swissLegalNotes:"Swiss Legal Notes",
    securityActive:"Security status: Active",
    contracts:"Contracts", documents:"Documents", newContract:"New Contract", contractType:"Contract type",
    clientContract:"Client contract", employeeContract:"Employment contract",
    contractDate:"Contract date", contractStart:"Start", contractEnd:"End",
    contractSalary:"Salary/Rate", contractHours:"Weekly hours",
    contractNotice:"Notice period", contractTrial:"Trial period",
    contractSign:"Sign", contractDownload:"Download",
    contractPreview:"Preview", contractSigned:"Signed",
    contractDraft:"Draft", contractActive:"Active",
    contractExpired:"Expired", contractTerminated:"Terminated",
    sigDate:"Signature date", sigClient:"Client signature",
    sigCompany:"Employer signature",
    indefinite:"Indefinite", fixedTerm:"Fixed term",
  },
  IT: {
    dashboard:"Pannello", clients:"Clienti", jobs:"Lavori",
    employees:"Dipendenti", invoices:"Fatture", finance:"Finanze",
    timeclock:"Timbratura", messaging:"Messaggi", routes:"Percorsi",
    settings:"Impostazioni", reports:"Rapporti", logout:"Esci",
    welcome:"Benvenuto", today:"Oggi", totalClients:"Clienti Attivi",
    todayJobs:"Lavori Oggi", monthIncome:"Entrate Mese",
    pendingInvoices:"Fatture Pendenti", activeEmployees:"Dipendenti Attivi",
    alerts:"Avvisi", overdueInvoices:"Fatture Scadute",
    employeesNotClockedIn:"Non timbrati", incompleteJobs:"Incompleti",
    addClient:"Aggiungi Cliente", editClient:"Modifica Cliente",
    deleteClient:"Elimina Cliente", street:"Via", number:"Numero",
    postalCode:"CAP", city:"Città", phone:"Telefono", email:"Email",
    frequency:"Frequenza", daily:"Quotidiano", weekly:"Settimanale",
    monthly:"Mensile", once:"Una volta", billingType:"Fatturazione",
    perService:"Per servizio", monthlyContract:"Contratto mensile",
    monthlyPrice:"Prezzo mensile", save:"Salva", cancel:"Annulla",
    confirm:"Conferma", delete:"Elimina", edit:"Modifica", add:"Aggiungi",
    status:"Stato", pending:"In attesa", inProgress:"In corso",
    completed:"Completato", paid:"Pagato", overdue:"Scaduto",
    date:"Data", time:"Ora", amount:"Importo", description:"Descrizione",
    notes:"Note", actions:"Azioni", close:"Chiudi", yes:"Sì", no:"No",
    firstName:"Nome", lastName:"Cognome", address:"Indirizzo",
    employeeType:"Tipo", fixed:"Fisso", hourly:"Ad ore",
    hourlyRate:"Tariffa/ora", fixedSalary:"Stipendio fisso",
    hoursWorked:"Ore lavorate", totalPay:"Totale paga",
    clockIn:"Entrata", clockOut:"Uscita",
    digitalSignature:"Firma digitale", gpsLocation:"Posizione GPS",
    optimizeRoute:"Ottimizza percorso", generateInvoice:"Genera fattura",
    sendInvoice:"Invia fattura", income:"Entrate", expenses:"Spese",
    profit:"Profitto", salaries:"Stipendi", otherExpenses:"Altre spese",
    addExpense:"Aggiungi spesa", annualReport:"Rapporto annuale",
    taxReport:"Rapporto fiscale", language:"Lingua", security:"Sicurezza",
    companyInfo:"Azienda", companyName:"Nome azienda",
    adminLogin:"Amministratore", employeeLogin:"Dipendente", tagline:"Pulizie · Giardino · Servizi",
    password:"Password", pin:"PIN", code:"Codice", loginBtn:"Accedi",
    cleaning:"Pulizie", gardening:"Giardinaggio", other:"Altro",
    userCode:"Codice utente", regenerateAccess:"Rigenera",
    noRecords:"Nessun record", success:"Successo", error:"Errore",
    sendReport:"Invia rapporto", preview:"Anteprima", payslip:"Busta paga",
    newJob:"Nuovo lavoro", clockHistory:"Storico timbrature",
    sendEmail:"Invia email", ahv:"AVS/AI/IPG", alv:"AD",
    administrator:"Amministratore", employee:"Dipendente",
    security_blocked:"Accesso negato", iban:"IBAN", bic:"BIC",
    subtotal:"Subtotale", invoiceNumber:"N. Fattura",
    dueDate:"Scadenza", uid:"UID", mwstNr:"IVA Nr.",
    monthSummary:"Riepilogo mensile", system:"Sistema", reset:"Ripristina",
    wallpaper:"Sfondo", name:"Nome",
    academy:"Patjac Academy",
    academySubtitle:"Centro di apprendimento e formazione",
    academyWelcome:"Benvenuto alla Patjac Academy",
    academyDesc:"Il tuo centro di formazione professionale per pulizie, giardinaggio e gestione dei servizi.",
    courses:"Corsi", myCourses:"I miei Corsi", allCourses:"Tutti i Corsi",
    startCourse:"Inizia corso", continueCourse:"Continua", completed:"Completato",
    progress:"Progresso", certificate:"Certificato", download:"Scarica",
    duration:"Durata", level:"Livello", beginner:"Principiante", intermediate:"Intermedio", advanced:"Esperto",
    lessons:"Lezioni", lesson:"Lezione", quiz:"Quiz", score:"Punteggio",
    passed:"Superato", failed:"Non superato", tryAgain:"Riprova",
    featured:"In evidenza", new:"Nuovo", popular:"Popolare",
    searchCourses:"Cerca corso...", category:"Categoria",
    cleaning:"Pulizie", gardening:"Giardinaggio", management:"Gestione", safety:"Sicurezza",
    back:"Indietro", next:"Avanti", finish:"Termina",
    yourProgress:"Il tuo progresso", totalCourses:"Corsi totali",
    completedCourses:"Completati", inProgress:"In corso",
    points:"Punti", rank:"Classifica", leaderboard:"Classifica",
    studyTime:"Tempo di studio", thisWeek:"Questa settimana", minutes:"Minuti",
    help:"Guida", helpTitle:"Manuale Utente – Patjac Business Suite",
    helpSubtitle:"Guida completa per amministratori",
    helpWelcome:"Benvenuto nel manuale utente di Patjac. Questa guida spiega tutte le funzioni dell'applicazione passo dopo passo.",
    helpAdminOnly:"⚠️ Questo manuale è visibile solo all'amministratore.",
    helpClose:"Chiudi manuale",
    payrollTitle:"Busta paga", payrollMonth:"Mese", payrollYear:"Anno",
    payrollGenerate:"Genera busta paga", payrollPrint:"Stampa",
    payrollSend:"Invia per email", payrollView:"Visualizza busta paga",
    grossSalary:"Salario lordo", netSalary:"Salario netto", deductions:"Deduzioni",
    employerContrib:"Contributi datore", totalCost:"Costo totale azienda",
    ahvEmployee:"AVS/AI/IPG Dipendente (5.3%)",
    ahvEmployer:"AVS/AI/IPG Azienda (5.30%)",
    alvEmployee:"AD Dipendente (1.10%)",
    alvEmployer:"AD Azienda (1.10%)",
    nbuvEmployee:"AINF Dipendente (1.20%)",
    buvEmployer:"AIL Azienda (ca. 0.50%)",
    bvgEmployee:"LPP Dipendente (ca. 7%)",
    bvgEmployer:"LPP Azienda (min. 7%)",
    ktgEmployee:"IS Dipendente (0.5%)",
    ktgEmployer:"IS Azienda (0.5%)",
    hoursMonth:"Ore/mese", ratePerHour:"Tariffa/ora",
    payPeriod:"Periodo di paga", paymentDate:"Data di pagamento",
    bankTransfer:"Bonifico bancario", iban:"IBAN",
    myPayslip:"La mia busta paga", selectMonth:"Seleziona mese",
    lohnausweis:"Certificato di salario (ufficiale)", steuerpflichtig:"Salario imponibile",
    kkAbzug:"Premio assicurazione malattia (info)", thirteenthSalary:"13esima mensilità",
    totalDeductionsEmployee:"Totale deduzioni dipendente",
    totalDeductionsEmployer:"Totale contributi azienda",
    inventory:"Magazzino & Ordini", stock:"Inventario",
    stockTitle:"Magazzino & Ordini",
    products:"Prodotti", addProduct:"Aggiungi prodotto",
    editProduct:"Modifica prodotto", deleteProduct:"Elimina prodotto",
    productName:"Nome prodotto", productCategory:"Categoria",
    catCleaning:"Prodotti di pulizia", catGardening:"Prodotti da giardino",
    catEquipment:"Attrezzatura", catSafety:"Sicurezza", catOther:"Altro",
    currentStock:"Stock attuale", minStock:"Stock minimo",
    unit:"Unità", unitLiter:"Litri", unitKg:"kg", unitPcs:"Pezzi", unitPack:"Pack",
    supplier:"Fornitore", supplierName:"Nome fornitore",
    supplierPhone:"Tel. fornitore", supplierEmail:"Email fornitore",
    orders:"Ordini", newOrder:"Nuovo ordine",
    orderDate:"Data ordine", deliveryDate:"Data consegna",
    orderStatus:"Stato", orderPending:"In attesa",
    orderDelivered:"Consegnato", orderCancelled:"Annullato",
    orderItems:"Posizioni ordine", orderTotal:"Totale ordine",
    lowStock:"Stock basso", outOfStock:"Esaurito",
    addOrder:"Crea ordine", receiveOrder:"Ricevi ordine",
    stockValue:"Valore magazzino", reorderPoint:"Punto di riordino",
    pricePerUnit:"Prezzo/unità", totalValue:"Valore totale",
    quickOrder:"Ordine rapido", allCategories:"Tutte le categorie",
    suppliers:"Fornitori", addSupplier:"Aggiungi fornitore",
    stockAlert:"Avviso stock", paymentTerms:"Termini pagamento", unitPrice:"Prezzo/unità", locationLabel:"Posizione", contactPerson:"Persona di contatto", paymentDays:"Giorni pagamento",
    active:"Attivo", inactive:"Inattivo",
    quickActions:"Accesso rapido",
    all:"Tutti", search:"Cerca...",
    service:"Servizio", newJob:"Nuovo lavoro",
    sendReport:"Invia rapporto",
    delivered:"Consegnato", cancelled:"Annullato",
    fixedSalary:"Stipendio fisso", hourlyType:"Ad ore",
    costBreakdown:"Ripartizione costi", totalExpenses:"Totale spese",
    warehouseDelivered:"Magazzino (consegnato)", warehousePending:"Magazzino in sospeso",
    warehouseOrders:"Ordini magazzino (spese)",
    monthlyTrend:"Andamento mensile", swissTaxes:"Imposte Svizzera 2024",
    profitTax:"Imposta utile CT ZH (~12%)", federalTax:"Imposta federale (~8.5%)",
    vatNet:"IVA netto (8.1% trimestrale)", ahvEmployer:"AVS azienda (5.3%)",
    netProfit:"Risultato operativo", totalCostsLabel:"Costi totali",
    sonstigeAusgaben:"Altre spese",
    personalkosten:"Personale (incl. contributi sociali)",
    today2:"oggi",
    since:"Dalle", at:"Alle", todaySummary:"Riepilogo di oggi",
    notClockedIn:"Non timbrato",
    swissLegalNotes:"Note legali svizzere",
    securityActive:"Stato sicurezza: Attivo",
    contracts:"Contratti", documents:"Documenti", newContract:"Nuovo contratto", contractType:"Tipo contratto",
    clientContract:"Contratto cliente", employeeContract:"Contratto di lavoro",
    contractDate:"Data contratto", contractStart:"Inizio", contractEnd:"Fine",
    contractSalary:"Salario/Tariffa", contractHours:"Ore settimanali",
    contractNotice:"Preavviso", contractTrial:"Periodo di prova",
    contractSign:"Firma", contractDownload:"Scarica",
    contractPreview:"Anteprima", contractSigned:"Firmato",
    contractDraft:"Bozza", contractActive:"Attivo",
    contractExpired:"Scaduto", contractTerminated:"Rescisso",
    sigDate:"Data firma", sigClient:"Firma cliente",
    sigCompany:"Firma datore di lavoro",
    indefinite:"Indeterminato", fixedTerm:"Determinato",
  },
};

// ─── GLOBAL LANGUAGE HELPER ──────────────────────────────────
// makeL(lang) returns a function L(de, es, en, it) that picks the right string.
// Pass lang into every component and use: const L = makeL(lang);
const makeL = (lang) => (de, es, en, it) => ({DE:de,ES:es,EN:en,IT:it})[lang] || en;
const PATJAC_LOGO = "data:image/jpeg;base64,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";

// ─── DEMO DATA ───────────────────────────────────────────────
// Local date as YYYY-MM-DD (toISOString uses UTC and shifts dates back one day in Switzerland)
const ymd = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
const gid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => { const r = Math.random()*16|0; return (c==='x'?r:(r&0x3|0x8)).toString(16); });

// Get the device's real GPS location. Resolves to a "GPS: lat, lng" string,
// or a clear fallback message if permission is denied / unavailable / times out.
const getGeoLocation = () => new Promise((resolve) => {
  if(!navigator.geolocation){ resolve("GPS: no disponible en este dispositivo"); return; }
  navigator.geolocation.getCurrentPosition(
    (pos) => resolve(`GPS: ${pos.coords.latitude.toFixed(5)}, ${pos.coords.longitude.toFixed(5)}`),
    (err) => resolve(err.code===1 ? "GPS: permiso denegado" : "GPS: no disponible"),
    { enableHighAccuracy:true, timeout:8000, maximumAge:60000 }
  );
});
// Edit forms need firstName/lastName; older records only have "name" → split it (first 2 words = first names)
const withNameParts = (o) => {
  if(!o || (o.firstName && o.lastName!==undefined)) return o;
  const w = String(o.name||"").trim().split(/\s+/).filter(Boolean);
  const k = w.length<=2 ? 1 : 2;
  return {...o, firstName:o.firstName||w.slice(0,k).join(" "), lastName:o.lastName??w.slice(k).join(" ")};
};
const gCode = () => "PJ-"+Math.random().toString(36).substr(2,6).toUpperCase();
const gPin = () => Math.floor(1000+Math.random()*9000).toString();
// Keeps generating a code until it finds one not already used by another employee
const gCodeUnique = (existingEmployees, excludeId) => {
  let code;
  do { code = gCode(); }
  while ((existingEmployees||[]).some(e => e.code===code && e.id!==excludeId));
  return code;
};
// Same, but for the PIN — critical now that PIN alone identifies who's logging in
const gPinUnique = (existingEmployees, excludeId) => {
  let pin;
  do { pin = gPin(); }
  while ((existingEmployees||[]).some(e => e.pin===pin && e.id!==excludeId));
  return pin;
};

// ─── COMPANY E-MAIL ─────────────────────────────────────────
// All e-mails leave from the company mailbox info@patjacservices.ch (Infomaniak).
// "mailto" links open the default mail program; set Infomaniak Mail as default once (see InfomaniakSetupHint).
const COMPANY_EMAIL = "info@patjacservices.ch";
const INFOMANIAK_MAIL_URL = "https://mail.infomaniak.com";
const INFOMANIAK_DEFAULT_HELP = "https://www.infomaniak.com/es/soporte/faq/2639";
const mailtoUrl = ({to="",subject="",body=""}) => `mailto:${encodeURIComponent(to).replace(/%40/g,"@")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
// E-mail buttons used everywhere a message is sent: opens the company mailbox with everything already written
function CompanyEmailButtons({to, subject, body, lang, disabled}){
  const L = makeL(lang||appLang);
  const [copied,setCopied] = useState(false);
  const b = bg => ({background:bg,border:"none",borderRadius:12,color:"#fff",padding:"11px 12px",cursor:disabled?"not-allowed":"pointer",fontWeight:700,fontSize:13,textAlign:"center",textDecoration:"none",display:"block",fontFamily:CP.font,opacity:disabled?.45:1,boxSizing:"border-box"});
  const copyAndOpen = () => {
    const txt = `${L("An","Para","To","A")}: ${to}\n${L("Betreff","Asunto","Subject","Oggetto")}: ${subject}\n\n${body}`;
    try{ navigator.clipboard.writeText(txt); }catch(e){}
    setCopied(true); setTimeout(()=>setCopied(false),4000);
    window.open(INFOMANIAK_MAIL_URL,"_blank","noopener");
  };
  return (
    <div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
        <a href={disabled?undefined:mailtoUrl({to,subject,body})} onClick={e=>{if(disabled)e.preventDefault();}} style={b("#E0115F")}>📧 E-mail · {COMPANY_EMAIL}</a>
        <button disabled={disabled} onClick={copyAndOpen} style={b("rgba(255,255,255,.14)")}>{copied?`✅ ${L("Kopiert – im Mail einfügen","Copiado: pégalo en el correo","Copied – paste it in the mail","Copiato – incollalo nella mail")}`:`📋 ${L("Kopieren + Infomaniak Mail öffnen","Copiar y abrir Infomaniak Mail","Copy + open Infomaniak Mail","Copia + apri Infomaniak Mail")}`}</button>
      </div>
      <div style={{color:CP.textTertiary,fontSize:11,marginTop:5,lineHeight:1.45}}>
        ℹ️ {L("Öffnet sich nicht Infomaniak Mail? Einmal als Standard-Mailprogramm einrichten:","¿No se abre Infomaniak Mail? Configúralo una vez como correo predeterminado:","Infomaniak Mail doesn't open? Set it once as default mail program:","Non si apre Infomaniak Mail? Impostalo una volta come posta predefinita:")} <a href={INFOMANIAK_DEFAULT_HELP} target="_blank" rel="noopener noreferrer" style={{color:"#74C0FC"}}>{L("Anleitung","instrucciones","instructions","istruzioni")}</a>
      </div>
    </div>
  );
}

// ─── SEND BY EMAIL (opens the company mailbox with prefilled content) ───
const sendByEmail = ({to="", subject="", body=""}) => {
  const from = COMPANY_EMAIL;
  const mailto = `mailto:${encodeURIComponent(to).replace(/%40/g,"@")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  // A link click (not window.open) is what phones and browsers reliably hand over to the mail app
  const a = document.createElement("a"); a.href = mailto; a.rel = "noopener"; a.style.display = "none";
  document.body.appendChild(a); a.click(); setTimeout(()=>a.remove(), 500);
  void from;
};
// SMS link: iPhone uses "&body=", Android uses "?body="
const isIOS = () => /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent||"") && ("ontouchend" in document || /iPhone|iPad|iPod/.test(navigator.userAgent||""));
const isMobile = () => /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent||"") || isIOS();
const smsUrl = (phone, body) => { const n = String(phone||"").replace(/[^\d+]/g,""); return isIOS() ? `sms:${n}&body=${encodeURIComponent(body)}` : `sms:${n}?body=${encodeURIComponent(body)}`; };

// ─── GAV LOHNKATEGORIEN ──────────────────────────────────────
const GAV_CATEGORIES = [
  {id:"reinigung_I",   label:"Unterhaltsreinigung I",            hourly:21.40, monthly:null, sector:"reinigung",
   description:{DE:"Ungelernte/r MitarbeiterIn in der Unterhaltsreinigung. Grundtätigkeiten.",ES:"Personal sin formación en limpieza de mantenimiento. Tareas básicas.",EN:"Unskilled worker in maintenance cleaning. Basic tasks.",IT:"Addetto non qualificato alle pulizie di manutenzione."}},
  {id:"reinigung_II",  label:"Unterhaltsreinigung II",           hourly:22.90, monthly:null, sector:"reinigung",
   description:{DE:"Gelernte/r oder mind. 4 Jahre Berufserfahrung in der Unterhaltsreinigung.",ES:"Formado/a o mínimo 4 años de experiencia en limpieza de mantenimiento.",EN:"Trained or min. 4 years experience in maintenance cleaning.",IT:"Qualificato/a o min. 4 anni esperienza nelle pulizie."}},
  {id:"spezial_I",     label:"Spezialreinigung I",               hourly:23.40, monthly:null, sector:"reinigung",
   description:{DE:"MitarbeiterIn in der Spezialreinigung (Einzelaufträge, erhöhte Sicherheit).",ES:"Personal en limpieza especializada (encargos individuales, seguridad elevada).",EN:"Worker in special cleaning (individual assignments, enhanced safety).",IT:"Addetto alle pulizie specializzate."}},
  {id:"spezial_II",    label:"Spezialreinigung II",              hourly:24.90, monthly:null, sector:"reinigung",
   description:{DE:"Erfahrene/r MitarbeiterIn mit Zusatzausbildung in der Spezialreinigung.",ES:"Personal con experiencia o formación adicional en limpieza especializada.",EN:"Experienced worker or additional training in special cleaning.",IT:"Addetto esperto nelle pulizie specializzate."}},
  {id:"spital_I",      label:"Spitalreinigung I",                hourly:21.85, monthly:null, sector:"reinigung",
   description:{DE:"MitarbeiterIn in der Spitalreinigung. Hygieneanforderungen im medizinischen Umfeld.",ES:"Personal en limpieza hospitalaria sin formación adicional.",EN:"Worker in hospital cleaning without additional training.",IT:"Addetto alle pulizie ospedaliere."}},
  {id:"spital_II",     label:"Spitalreinigung II",               hourly:23.35, monthly:null, sector:"reinigung",
   description:{DE:"Erfahrene/r MitarbeiterIn mit Kenntnissen der Hygienevorschriften im Spital.",ES:"Personal con experiencia y conocimiento de normas higiénicas hospitalarias.",EN:"Experienced hospital cleaning worker with hygiene regulation knowledge.",IT:"Addetto esperto alle pulizie ospedaliere con conoscenza norme igieniche."}},
  {id:"fahrzeug_I",    label:"Fahrzeugreinigung I",              hourly:23.20, monthly:null, sector:"reinigung",
   description:{DE:"MitarbeiterIn in der Fahrzeugreinigung (öffentliche/gewerbliche Transportmittel).",ES:"Personal en limpieza de vehículos de transporte público/comercial.",EN:"Worker in vehicle cleaning (public/commercial transport).",IT:"Addetto alle pulizie di veicoli di trasporto."}},
  {id:"fahrzeug_II",   label:"Fahrzeugreinigung II",             hourly:24.70, monthly:null, sector:"reinigung",
   description:{DE:"Erfahrene/r MitarbeiterIn in der Fahrzeugreinigung mit Zusatzkenntnissen.",ES:"Personal con experiencia en limpieza de vehículos y conocimientos adicionales.",EN:"Experienced vehicle cleaning worker with additional knowledge.",IT:"Addetto esperto alle pulizie di veicoli."}},
  {id:"eba",           label:"EBA Gebäudereiniger/in",           hourly:23.10, monthly:4200, sector:"reinigung",
   description:{DE:"Eidgenössisches Berufsattest (EBA) Gebäudereiniger/in. 2-jährige Berufslehre.",ES:"Certificado de aptitud federal (EBA) de limpieza de edificios. 2 años formación.",EN:"Federal vocational certificate (EBA) in building cleaning. 2-year apprenticeship.",IT:"Attestato federale di capacità (EBA) per addetto alle pulizie. 2 anni apprendistato."}},
  {id:"efz",           label:"EFZ Gebäudereiniger/in",           hourly:25.80, monthly:4700, sector:"reinigung",
   description:{DE:"Eidgenössisches Fähigkeitszeugnis (EFZ) Gebäudereiniger/in. 3-jährige Berufslehre.",ES:"Certificado federal de capacidad (EFZ) de limpieza de edificios. 3 años formación.",EN:"Federal certificate of competence (EFZ) in building cleaning. 3-year apprenticeship.",IT:"Attestato federale di capacità (EFZ) per addetto alle pulizie. 3 anni apprendistato."}},
  {id:"objektleiter",  label:"Objektleiter/in / Vorarbeiter/in", hourly:null,  monthly:null, sector:"reinigung",
   description:{DE:"Führungs- und Kontrollaufgaben. Lohn individuell, Verhandlungsbasis Lohnstufe II.",ES:"Funciones de dirección y control. Sueldo individual, base negociación nivel II.",EN:"Management and control tasks. Individual salary, negotiation basis wage level II.",IT:"Compiti di gestione. Stipendio individuale, base trattativa livello II."}},
  {id:"garten_ungelernt",   label:"Ungelernte/r Gartenmitarbeiter/in",    hourly:19.50, monthly:null, sector:"garten",
   description:{DE:"MitarbeiterIn ohne Berufsausbildung im Garten- und Landschaftsbau. GAV JardinSuisse 2025.",ES:"Personal sin formación profesional en jardinería y paisajismo.",EN:"Worker without vocational training in landscaping.",IT:"Addetto senza formazione professionale in giardinaggio."}},
  {id:"garten_anlernkraft", label:"Angelernte Kraft Gartenbau (1–3 J.)", hourly:20.50, monthly:null, sector:"garten",
   description:{DE:"MitarbeiterIn mit 1–3 Jahren Berufserfahrung im Garten- und Landschaftsbau.",ES:"Personal con 1–3 años de experiencia en jardinería y paisajismo.",EN:"Worker with 1–3 years experience in landscaping.",IT:"Addetto con 1–3 anni esperienza in giardinaggio."}},
  {id:"garten_eba",         label:"EBA Gärtner/in",                       hourly:21.50, monthly:null, sector:"garten",
   description:{DE:"Eidgenössisches Berufsattest (EBA) Gärtner/in. 2-jährige Berufslehre.",ES:"Certificado de aptitud federal (EBA) de jardinero/a. 2 años formación.",EN:"Federal vocational certificate (EBA) in gardening. 2-year apprenticeship.",IT:"Attestato federale di capacità (EBA) per giardiniere/a."}},
  {id:"garten_efz",         label:"EFZ Gärtner/in",                       hourly:23.00, monthly:null, sector:"garten",
   description:{DE:"Eidgenössisches Fähigkeitszeugnis (EFZ) Gärtner/in. 3-jährige Berufslehre.",ES:"Certificado federal de capacidad (EFZ) de jardinero/a. 3 años formación.",EN:"Federal certificate of competence (EFZ) in gardening. 3-year apprenticeship.",IT:"Attestato federale di capacità (EFZ) per giardiniere/a."}},
  {id:"garten_vorarbeiter", label:"Vorarbeiter/in Gartenbau",             hourly:25.00, monthly:null, sector:"garten",
   description:{DE:"Vorarbeiter/in im Garten- und Landschaftsbau mit Führungsaufgaben.",ES:"Encargado/a en jardinería con funciones de coordinación.",EN:"Foreman in landscaping with supervisory duties.",IT:"Caposquadra in giardinaggio con compiti di coordinamento."}},
  {id:"garten_teamleiter",  label:"Teamleiter/in Gartenbau",              hourly:27.00, monthly:null, sector:"garten",
   description:{DE:"Teamleiter/in im Garten- und Landschaftsbau. Verantwortlich für Baustelle und Team.",ES:"Jefe/a de equipo en jardinería. Responsable de obra y equipo.",EN:"Team leader in landscaping. Responsible for site and team.",IT:"Team leader in giardinaggio. Responsabile del cantiere e del team."}},
];
// Local cache write that never crashes the app when the phone's storage is full (e.g. many photos)
const lsSafeSet = (k,v) => { try{ localStorage.setItem(k,v); }catch(e){ try{ localStorage.removeItem(k); }catch(_){} } };
// ─── DATE FORMAT used everywhere: day, month name, year (e.g. "28 septiembre 2026") ───
let appLang = "ES";   // updated by the main component when the language changes
const MONTH_NAMES = {
  DE:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],
  ES:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],
  EN:["January","February","March","April","May","June","July","August","September","October","November","December"],
  IT:["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"],
};
const toYmd = d => { if(!d) return ""; if(d instanceof Date) return ymd(d); const m=String(d).match(/^(\d{4})-(\d{2})-(\d{2})/); return m?`${m[1]}-${m[2]}-${m[3]}`:""; };
const fmtDate = (d, lang=appLang) => {
  const s = toYmd(d); if(!s) return d ? String(d) : "";
  const [y,m,dd] = s.split("-").map(Number); const mn=(MONTH_NAMES[lang]||MONTH_NAMES.ES)[m-1];
  return lang==="DE" ? `${dd}. ${mn} ${y}` : `${dd} ${mn} ${y}`;
};
// Short version for lists of several days: "3 sep"
const fmtDateShort = (d, lang=appLang) => { const s=toYmd(d); if(!s) return ""; const [,m,dd]=s.split("-").map(Number); return `${dd}${lang==="DE"?".":""} ${(MONTH_NAMES[lang]||MONTH_NAMES.ES)[m-1].slice(0,3)}`; };
// "Today" (local date). Kept up to date by the clock in the main component, so it changes at midnight.
let todayStr = ymd(new Date());

const DEMO_CLIENTS = [
  {id:"8fbebdda-e071-4d95-a935-6dd2b1d7c78c",firstName:"Hans",lastName:"Müller",name:"Hans Müller",street:"Bahnhofstrasse",number:"15",postalCode:"8001",city:"Zürich",phone:"+41 79 123 4567",email:"hans@email.ch",frequency:"weekly",billingType:"perService",price:120,serviceType:"cleaning",notes:"Schlüssel unter Matte",active:true},
  {id:"a96d40f6-2626-4497-9f62-47792d544a4a",firstName:"Maria",lastName:"Schneider",name:"Maria Schneider",street:"Hauptgasse",number:"3",postalCode:"8400",city:"Winterthur",phone:"+41 76 234 5678",email:"maria@bluewin.ch",frequency:"monthly",billingType:"monthlyContract",price:350,serviceType:"gardening",notes:"Grosser Garten",active:true},
  {id:"90d5e58f-7a61-4780-9216-b07acca95ba4",firstName:"Peter",lastName:"Keller",name:"Peter Keller",street:"Seestrasse",number:"42",postalCode:"8700",city:"Küsnacht",phone:"+41 78 345 6789",email:"peter@gmail.com",frequency:"weekly",billingType:"perService",price:180,serviceType:"cleaning",notes:"Villa, 2 Etagen",active:true},
  {id:"084ae551-3ced-446c-a0ea-39209b01e7f7",firstName:"Anna",lastName:"Zimmermann",name:"Anna Zimmermann",street:"Mühlestrasse",number:"8",postalCode:"8048",city:"Zürich",phone:"+41 79 456 7890",email:"anna@hispeed.ch",frequency:"daily",billingType:"monthlyContract",price:600,serviceType:"cleaning",notes:"Büroreinigung täglich",active:true},
];
const DEMO_EMPLOYEES = [
  {id:"bb44772a-bba2-41b2-bee0-de05831a2a1c",firstName:"Carlos",lastName:"Rodriguez",name:"Carlos Rodriguez",street:"Langstrasse",number:"45",postalCode:"8004",city:"Zürich",phone:"+41 76 111 2222",email:"carlos@patjac.ch",type:"hourly",hourlyRate:22,fixedSalary:0,code:"PJ-CARL01",pin:"4521",active:true,ahv:"756.1234.5678.90",startDate:"2023-01-15",role:"employee"},
  {id:"3339f910-6886-49ed-8b30-58896eb2e0d7",firstName:"Sofia",lastName:"Müller",name:"Sofia Müller",street:"Hardstrasse",number:"12",postalCode:"8004",city:"Zürich",phone:"+41 79 333 4444",email:"sofia@patjac.ch",type:"fixed",hourlyRate:0,fixedSalary:3800,code:"PJ-SOFI02",pin:"7834",active:true,ahv:"756.9876.5432.10",startDate:"2022-06-01",role:"employee"},
  {id:"aa471640-4fc0-483c-b451-5ab3aca3dcb4",firstName:"Marco",lastName:"Bernasconi",name:"Marco Bernasconi",street:"Weststrasse",number:"5",postalCode:"8003",city:"Zürich",phone:"+41 78 555 6666",email:"marco@patjac.ch",type:"hourly",hourlyRate:24,fixedSalary:0,code:"PJ-MARC03",pin:"1293",active:true,ahv:"756.4567.8901.23",startDate:"2023-09-01",role:"employee"},
];
const DEMO_JOBS = [
  {id:"066615fd-cba7-4478-a8b4-977a44b9312e",clientId:"8fbebdda-e071-4d95-a935-6dd2b1d7c78c",clientName:"Hans Müller",employeeId:"bb44772a-bba2-41b2-bee0-de05831a2a1c",employeeName:"Carlos Rodriguez",serviceType:"cleaning",description:"Wochenreinigung",date:todayStr,timeStart:"08:00",timeEnd:"10:00",status:"completed",amount:120,photos:[],signature:null,notes:""},
  {id:"81285955-985a-4373-a404-707f3b2a3bb6",clientId:"90d5e58f-7a61-4780-9216-b07acca95ba4",clientName:"Peter Keller",employeeId:"3339f910-6886-49ed-8b30-58896eb2e0d7",employeeName:"Sofia Müller",serviceType:"cleaning",description:"Tiefenreinigung",date:todayStr,timeStart:"10:30",timeEnd:"13:00",status:"inProgress",amount:180,photos:[],signature:null,notes:""},
  {id:"5dbad390-5db7-44fa-b8e4-e3ac6e2c383d",clientId:"a96d40f6-2626-4497-9f62-47792d544a4a",clientName:"Maria Schneider",employeeId:"aa471640-4fc0-483c-b451-5ab3aca3dcb4",employeeName:"Marco Bernasconi",serviceType:"gardening",description:"Gartenpflege",date:todayStr,timeStart:"14:00",timeEnd:"17:00",status:"pending",amount:350,photos:[],signature:null,notes:""},
];
const DEMO_INVOICES = [
  {id:"aac980db-0111-4219-9459-14aff181b579",clientId:"8fbebdda-e071-4d95-a935-6dd2b1d7c78c",clientName:"Hans Müller",invoiceNumber:"2024-001",date:"2024-01-31",dueDate:"2024-02-14",amount:480,vatAmount:38.88,total:518.88,status:"paid",items:[{description:"Reinigung Jan",qty:4,price:120,total:480}]},
  {id:"a9f5fbc7-9850-4184-a276-172de1a69b88",clientId:"a96d40f6-2626-4497-9f62-47792d544a4a",clientName:"Maria Schneider",invoiceNumber:"2024-002",date:"2024-01-31",dueDate:"2024-02-14",amount:350,vatAmount:28.35,total:378.35,status:"pending",items:[{description:"Gartenpflege Jan",qty:1,price:350,total:350}]},
  {id:"100e71f3-e4bc-49a6-8a3c-c403ab8395f4",clientId:"90d5e58f-7a61-4780-9216-b07acca95ba4",clientName:"Peter Keller",invoiceNumber:"2024-003",date:"2023-12-31",dueDate:"2024-01-14",amount:720,vatAmount:58.32,total:778.32,status:"overdue",items:[{description:"Reinigung Dez",qty:4,price:180,total:720}]},
];
const DEMO_TIMECLOCK = [
  {id:"af1cdf95-2bdc-4ff0-a6d3-f5870104fa42",employeeId:"bb44772a-bba2-41b2-bee0-de05831a2a1c",employeeName:"Carlos Rodriguez",date:todayStr,clockIn:"07:55",clockOut:"16:30",hours:8.58,location:"Zürich"},
  {id:"318e1aed-9614-46b7-ba21-3bf99dd5d2f3",employeeId:"3339f910-6886-49ed-8b30-58896eb2e0d7",employeeName:"Sofia Müller",date:todayStr,clockIn:"08:00",clockOut:null,hours:null,location:"Zürich"},
];
const DEMO_MESSAGES = [
  {id:"c8041025-feb9-4dce-a4cf-0c37e7b761fe",from:"admin",to:"bb44772a-bba2-41b2-bee0-de05831a2a1c",fromName:"Admin",toName:"Carlos",content:"Bitte Fotos vom Auftrag bei Müller machen.",timestamp:new Date(Date.now()-3600000).toISOString(),read:true},
  {id:"dd8dbcb0-75df-4b79-96c9-179ce9103b2e",from:"bb44772a-bba2-41b2-bee0-de05831a2a1c",to:"admin",fromName:"Carlos",toName:"Admin",content:"Erledigt! Alle Fotos hochgeladen.",timestamp:new Date(Date.now()-1800000).toISOString(),read:true},
  {id:"0773b71d-ec1b-42a7-bfa4-440ec0d2106d",from:"admin",to:"3339f910-6886-49ed-8b30-58896eb2e0d7",fromName:"Admin",toName:"Sofia",content:"Neuer Auftrag für heute bei Keller.",timestamp:new Date(Date.now()-900000).toISOString(),read:false},
];
const DEMO_EXPENSES = [
  {id:"a4d321b0-d450-4a50-a892-238211e9481f",date:"2024-01-15",description:"Reinigungsmittel",amount:145.50,category:"materials"},
  {id:"37d963b1-8ff1-4c30-be63-b4fc6d8d4ab3",date:"2024-01-20",description:"Fahrzeugunterhalt",amount:320.00,category:"vehicle"},
  {id:"6d604990-6e9a-4be3-916b-c50cffe05154",date:"2024-01-25",description:"Arbeitskleidung",amount:230.00,category:"equipment"},
];

const DEMO_PRODUCTS = [
  {id:"33664959-46fa-44f8-a394-14437476cf23",name:"Allpura Allzweckreiniger 5L",category:"cleaning",stock:12,minStock:5,unit:"Flasche",unitPrice:18.90,supplier:"1f308250-7d3c-4765-8af0-35d1285255d0"},
  {id:"cd7bd0b5-25f4-42ee-93fa-acf02a61d23a",name:"WC-Reiniger Konzentrat 2L",category:"cleaning",stock:3,minStock:6,unit:"Flasche",unitPrice:12.50,supplier:"1f308250-7d3c-4765-8af0-35d1285255d0"},
  {id:"00896bb7-9820-41d2-8e4b-f4d9d4016b91",name:"Glasreiniger Spray 750ml",category:"cleaning",stock:8,minStock:4,unit:"Stück",unitPrice:7.90,supplier:"1f308250-7d3c-4765-8af0-35d1285255d0"},
  {id:"ca03e558-c19f-4455-bb94-cb64cabbec21",name:"Desinfektionsmittel 1L (SUVA)",category:"cleaning",stock:0,minStock:3,unit:"Flasche",unitPrice:24.00,supplier:"1f308250-7d3c-4765-8af0-35d1285255d0"},
  {id:"2b6ad638-b08d-42ce-bf97-cb4195b0981a",name:"Mikrofasertücher Set (10 St.)",category:"cleaning",stock:5,minStock:3,unit:"Set",unitPrice:22.00,supplier:"56a8bd87-a33c-4852-a48c-7ed8fe1cb121"},
  {id:"b920dd02-4f89-43d9-9b2f-2b2e3fc0ee6f",name:"Rasendünger Schweizer 25kg",category:"gardening",stock:4,minStock:2,unit:"Sack",unitPrice:45.00,supplier:"56a8bd87-a33c-4852-a48c-7ed8fe1cb121"},
  {id:"5ccb9959-b754-4c27-935c-9d1eb288a2af",name:"Unkrautvernichter 5L",category:"gardening",stock:2,minStock:2,unit:"Kanne",unitPrice:38.00,supplier:"56a8bd87-a33c-4852-a48c-7ed8fe1cb121"},
  {id:"b2f8ada6-f1a2-4bb7-97ee-bdf7e07c20ed",name:"Heckenscheren-Öl 500ml",category:"gardening",stock:6,minStock:2,unit:"Flasche",unitPrice:14.00,supplier:"56a8bd87-a33c-4852-a48c-7ed8fe1cb121"},
  {id:"c0c6ac46-d609-4f83-84e7-22cdc615ae0e",name:"Arbeitshandschuhe Nitril M",category:"safety",stock:15,minStock:10,unit:"Paar",unitPrice:4.50,supplier:"dc98d187-66ab-46fe-8723-badab024dfb9"},
  {id:"f7345470-1961-448a-beaf-801252f291cd",name:"Sicherheitsschuhe S2 Gr.42",category:"equipment",stock:2,minStock:1,unit:"Paar",unitPrice:89.00,supplier:"dc98d187-66ab-46fe-8723-badab024dfb9"},
  {id:"9a2a25b0-0462-4006-91a1-17781fdbe769",name:"Mop-Set Professional",category:"cleaning",stock:3,minStock:2,unit:"Set",unitPrice:34.00,supplier:"1f308250-7d3c-4765-8af0-35d1285255d0"},
  {id:"31520a9e-d633-463f-9b5d-fa82eb5dc101",name:"Atemschutzmaske FFP2",category:"safety",stock:20,minStock:10,unit:"Stück",unitPrice:2.80,supplier:"dc98d187-66ab-46fe-8723-badab024dfb9"},
];

const DEMO_SUPPLIERS = [
  {id:"1f308250-7d3c-4765-8af0-35d1285255d0",name:"CleanSwiss AG",phone:"+41 44 555 1100",email:"order@cleanswiss.ch",category:"cleaning",rating:5},
  {id:"56a8bd87-a33c-4852-a48c-7ed8fe1cb121",name:"JardinSuisse Handel",phone:"+41 31 555 2200",email:"bestellung@jardinsuisse.ch",category:"gardening",rating:4},
  {id:"dc98d187-66ab-46fe-8723-badab024dfb9",name:"SafetyPro Zürich",phone:"+41 44 555 3300",email:"info@safetypro.ch",category:"safety",rating:4},
];

const DEMO_ORDERS = [
  {id:"55283ce8-30d1-48c3-8034-f0d0c132d154",date:"2024-01-10",supplierName:"CleanSwiss AG",supplierId:"1f308250-7d3c-4765-8af0-35d1285255d0",status:"delivered",
   items:[{productId:"p1",productName:"Allpura Allzweckreiniger 5L",qty:6,unitPrice:18.90,total:113.40},{productId:"p3",productName:"Glasreiniger Spray 750ml",qty:4,unitPrice:7.90,total:31.60}],total:145.00},
  {id:"16eb4184-2fd9-4aa0-b7b4-8eeaf77f4ab5",date:"2024-01-20",supplierName:"JardinSuisse Handel",supplierId:"56a8bd87-a33c-4852-a48c-7ed8fe1cb121",status:"delivered",
   items:[{productId:"p6",productName:"Rasendünger Schweizer 25kg",qty:2,unitPrice:45.00,total:90.00}],total:90.00},
  {id:"675705af-b916-4914-bc49-e6692d6212dc",date:"2024-01-28",supplierName:"SafetyPro Zürich",supplierId:"dc98d187-66ab-46fe-8723-badab024dfb9",status:"pending",
   items:[{productId:"p9",productName:"Arbeitshandschuhe Nitril M",qty:20,unitPrice:4.50,total:90.00},{productId:"p12",productName:"Atemschutzmaske FFP2",qty:50,unitPrice:2.80,total:140.00}],total:230.00},
];

// ─── APP REGISTRY ────────────────────────────────────────────
const APPS = [
  {id:"dashboard", icon:"🏠", color:"#1C7ED6"},
  {id:"clients",   icon:"👥", color:"#2F9E44"},
  {id:"jobs",      icon:"📋", color:"#F08C00"},
  {id:"employees", icon:"👤", color:"#7048E8"},
  {id:"invoices",  icon:"🧾", color:"#C92A2A"},
  {id:"finance",   icon:"💰", color:"#0CA678"},
  {id:"timeclock", icon:"⏱️", color:"#1098AD"},
  {id:"messaging", icon:"💬", color:"#D6336C"},
  {id:"routes",    icon:"🗺️", color:"#F76707"},
  {id:"reports",   icon:"📊", color:"#5C7CFA"},
  {id:"settings",  icon:"⚙️", color:"#868E96"},
  {id:"academy",   icon:"🎓", color:"#E67700"},
  {id:"payroll",   icon:"💵", color:"#0CA678"},
  {id:"inventory", icon:"📦", color:"#6741D9"},
  {id:"contracts", icon:"📝", color:"#0B7285"},
  {id:"documents", icon:"📁", color:"#1098AD"},
];

// ─── CSS CONSTANTS ───────────────────────────────────────────
const CP = {
  // CarPlay palette
  bg: "#0A0A0F",
  surface: "rgba(28,28,38,0.95)",
  surfaceHover: "rgba(40,40,55,0.98)",
  border: "rgba(255,255,255,0.09)",
  borderActive: "rgba(255,255,255,0.22)",
  textPrimary: "#FFFFFF",
  textSecondary: "rgba(255,255,255,0.55)",
  textTertiary: "rgba(255,255,255,0.3)",
  accent: "#1C7ED6",
  accentGlow: "rgba(28,126,214,0.25)",
  success: "#2F9E44",
  warning: "#F08C00",
  danger: "#C92A2A",
  radius: "18px",
  radiusSm: "12px",
  font: "-apple-system, 'SF Pro Display', 'Helvetica Neue', sans-serif",
};

// ─── SHARED UI ───────────────────────────────────────────────
function CPBtn({children, onClick, variant="primary", size="md", full=false, style:xs}){
  const bg = variant==="primary" ? CP.accent
    : variant==="success" ? CP.success
    : variant==="danger"  ? CP.danger
    : variant==="warning" ? CP.warning
    : "rgba(255,255,255,0.1)";
  const pd = size==="sm" ? "6px 14px" : size==="lg" ? "14px 28px" : "10px 20px";
  const fs = size==="sm" ? 13 : size==="lg" ? 17 : 14;
  return (
    <button onClick={onClick} style={{
      background:bg, border:"none", borderRadius: CP.radiusSm,
      color:"#fff", padding:pd, fontSize:fs, fontWeight:600,
      cursor:"pointer", fontFamily:CP.font, transition:"opacity .15s, transform .1s",
      whiteSpace:"nowrap", display:"inline-flex", alignItems:"center", gap:6,
      width: full?"100%":"auto", justifyContent: full?"center":"flex-start",
      ...xs
    }}
      onMouseEnter={e=>{e.currentTarget.style.opacity=".82";e.currentTarget.style.transform="scale(0.98)";}}
      onMouseLeave={e=>{e.currentTarget.style.opacity="1";e.currentTarget.style.transform="scale(1)";}}
    >{children}</button>
  );
}

function CPCard({children, style:xs, onClick}){
  return (
    <div onClick={onClick} style={{
      background: CP.surface, border:`1px solid ${CP.border}`,
      borderRadius: CP.radius, padding:"16px 20px", ...xs,
      cursor: onClick ? "pointer":"default",
      transition: onClick?"background .15s":"none",
    }}
      onMouseEnter={e=>{ if(onClick) e.currentTarget.style.background=CP.surfaceHover; }}
      onMouseLeave={e=>{ if(onClick) e.currentTarget.style.background=CP.surface; }}
    >{children}</div>
  );
}

function CPInput({value,onChange,placeholder,type="text",style:xs,min,max}){
  const input = (
    <input type={type} value={value??""} onChange={onChange} placeholder={placeholder} min={min} max={max}
      style={{
        width:"100%", padding:"12px 16px", background:"rgba(255,255,255,0.07)",
        border:`1px solid ${CP.border}`, borderRadius: CP.radiusSm,
        color: CP.textPrimary, fontSize:15, fontFamily: CP.font,
        outline:"none", boxSizing:"border-box", colorScheme:"dark", ...xs,
      }}
    />
  );
  // Dates: also show the chosen day written out (e.g. "28 septiembre 2026"), whatever the phone's format is
  if(type==="date" && value) return (
    <div>{input}<div style={{color:CP.textTertiary,fontSize:11.5,marginTop:3,paddingLeft:4}}>📅 {fmtDate(value)}</div></div>
  );
  return input;
}
function CPSelect({value,onChange,children,style:xs}){
  return (
    <select value={value} onChange={onChange} style={{
      width:"100%", padding:"12px 16px", background:"rgba(20,20,30,0.95)",
      border:`1px solid ${CP.border}`, borderRadius: CP.radiusSm,
      color: CP.textPrimary, fontSize:15, fontFamily: CP.font, outline:"none", ...xs,
    }}>{children}</select>
  );
}
function CPField({label,children}){
  return (
    <div style={{marginBottom:14}}>
      <div style={{color:CP.textSecondary,fontSize:12,fontWeight:600,marginBottom:6,letterSpacing:.5,textTransform:"uppercase"}}>{label}</div>
      {children}
    </div>
  );
}

function CPBadge({text,color}){
  const c = color==="green" ? {bg:"rgba(47,158,68,.2)",text:"#69DB7C"}
    : color==="red"   ? {bg:"rgba(201,42,42,.2)",text:"#FF8787"}
    : color==="yellow"? {bg:"rgba(240,140,0,.2)",text:"#FFD43B"}
    : color==="purple"? {bg:"rgba(112,72,232,.2)",text:"#BE4BDB"}
    : {bg:"rgba(255,255,255,.1)",text:"rgba(255,255,255,.65)"};
  return (
    <span style={{background:c.bg,color:c.text,fontSize:12,fontWeight:700,padding:"3px 10px",borderRadius:20}}>{text}</span>
  );
}

function CPStat({label,value,icon,accent}){
  return (
    <CPCard style={{display:"flex",flexDirection:"column",gap:8,minWidth:0}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <span style={{color:CP.textSecondary,fontSize:12,fontWeight:600,letterSpacing:.3,textTransform:"uppercase"}}>{label}</span>
        <span style={{fontSize:22}}>{icon}</span>
      </div>
      <div style={{color: accent||CP.textPrimary, fontSize:26,fontWeight:700,fontFamily:CP.font,lineHeight:1}}>{value}</div>
    </CPCard>
  );
}

function CPModal({title,onClose,children,width=520}){
  return (
    <div style={{
      position:"fixed",inset:0,background:"rgba(0,0,0,.72)",
      display:"flex",alignItems:"center",justifyContent:"center",
      zIndex:9999,padding:16,backdropFilter:"blur(8px)"
    }} onClick={onClose}>
      <div style={{
        background:"rgba(18,18,28,0.98)", border:`1px solid ${CP.borderActive}`,
        borderRadius:24, width:Math.min(width,window.innerWidth-32),
        maxHeight:"88vh",overflow:"auto",
      }} onClick={e=>e.stopPropagation()}>
        <div style={{
          padding:"18px 24px",borderBottom:`1px solid ${CP.border}`,
          display:"flex",justifyContent:"space-between",alignItems:"center"
        }}>
          <span style={{color:CP.textPrimary,fontWeight:700,fontSize:17,fontFamily:CP.font}}>{title}</span>
          <button onClick={onClose} style={{
            background:"rgba(255,255,255,.1)",border:"none",borderRadius:"50%",
            width:32,height:32,color:CP.textSecondary,cursor:"pointer",fontSize:16,
            display:"flex",alignItems:"center",justifyContent:"center"
          }}>✕</button>
        </div>
        <div style={{padding:"20px 24px"}}>{children}</div>
      </div>
    </div>
  );
}

function CPTable({headers,rows}){
  return (
    <div style={{overflowX:"auto"}}>
      <table style={{width:"100%",borderCollapse:"collapse",fontFamily:CP.font,fontSize:13}}>
        <thead>
          <tr>
            {headers.map((h,i)=>(
              <th key={i} style={{
                padding:"10px 14px",textAlign:"left",
                color:CP.textTertiary,fontWeight:600,fontSize:11,
                textTransform:"uppercase",letterSpacing:.6,
                borderBottom:`1px solid ${CP.border}`,whiteSpace:"nowrap"
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row,i)=>(
            <tr key={i} style={{borderBottom:`1px solid rgba(255,255,255,0.04)`}}
              onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,0.03)"}
              onMouseLeave={e=>e.currentTarget.style.background="transparent"}
            >
              {row.map((cell,j)=>(
                <td key={j} style={{padding:"11px 14px",color:CP.textPrimary,verticalAlign:"middle"}}>{cell}</td>
              ))}
            </tr>
          ))}
          {rows.length===0&&(
            <tr><td colSpan={headers.length} style={{padding:"2rem",textAlign:"center",color:CP.textTertiary,fontSize:13}}>—</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

// Screen wrapper with CarPlay-style top bar
// ── BULK SELECTION (select several items and delete them at once, like email) ──
function useBulkSelect(){
  const [selectMode,setSelectMode] = useState(false);
  const [selected,setSelected] = useState(()=>new Set());
  const toggle = (id) => setSelected(prev=>{ const n=new Set(prev); n.has(id)?n.delete(id):n.add(id); return n; });
  const clear = () => setSelected(new Set());
  const exit = () => { setSelectMode(false); setSelected(new Set()); };
  return { selectMode, setSelectMode, selected, setSelected, toggle, clear, exit };
}
function SelBox({checked,onChange}){
  return (
    <div onClick={e=>{e.stopPropagation();onChange();}} role="checkbox" aria-checked={checked} style={{
      width:22,height:22,minWidth:22,borderRadius:6,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",
      border:checked?"2px solid #4DABF7":`2px solid ${CP.border}`,background:checked?"#1C7ED6":"transparent",color:"#fff",fontSize:14,fontWeight:800,
    }}>{checked?"✓":""}</div>
  );
}
// Toolbar: "Seleccionar" button, then "Todos / N seleccionados / Eliminar / Cancelar", with a confirm dialog.
function BulkBar({bulk,visibleIds,onDelete,lang,itemWord}){
  const L = makeL(lang);
  const [confirm,setConfirm] = useState(false);
  const count = visibleIds.filter(id=>bulk.selected.has(id)).length;
  const allSel = visibleIds.length>0 && count===visibleIds.length;
  if(!bulk.selectMode){
    if(!visibleIds.length) return null;
    return (
      <div style={{display:"flex",justifyContent:"flex-end",marginBottom:10}}>
        <CPBtn onClick={()=>bulk.setSelectMode(true)} variant="secondary" size="sm">☑️ {L("Auswählen","Seleccionar","Select","Seleziona")}</CPBtn>
      </div>
    );
  }
  return (
    <>
      <div style={{position:"sticky",top:0,zIndex:5,display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",marginBottom:10,padding:"8px 10px",borderRadius:12,background:"rgba(28,126,214,0.18)",border:"1px solid rgba(28,126,214,0.45)"}}>
        <SelBox checked={allSel} onChange={()=>bulk.setSelected(allSel?new Set():new Set(visibleIds))}/>
        <span style={{color:CP.textPrimary,fontSize:13,fontWeight:700,flex:1}}>
          {allSel?L("Alle","Todos","All","Tutti"):""} {count} {L("ausgewählt","seleccionados","selected","selezionati")}
        </span>
        <CPBtn onClick={()=>count&&setConfirm(true)} variant="danger" size="sm">🗑️ {L("Löschen","Eliminar","Delete","Elimina")} ({count})</CPBtn>
        <CPBtn onClick={bulk.exit} variant="secondary" size="sm">✕</CPBtn>
      </div>
      {confirm&&(
        <CPModal title={L("Bestätigen","Confirmar","Confirm","Conferma")} onClose={()=>setConfirm(false)} width={360}>
          <div style={{color:CP.textSecondary,textAlign:"center",marginBottom:20,fontSize:15}}>
            {L(`${count} ${itemWord.DE} löschen? Dies kann nicht rückgängig gemacht werden.`,`¿Eliminar ${count} ${itemWord.ES}? No se puede deshacer.`,`Delete ${count} ${itemWord.EN}? This cannot be undone.`,`Eliminare ${count} ${itemWord.IT}? Non si può annullare.`)}
          </div>
          <div style={{display:"flex",gap:8,justifyContent:"center"}}>
            <CPBtn onClick={()=>setConfirm(false)} variant="secondary">{L("Abbrechen","Cancelar","Cancel","Annulla")}</CPBtn>
            <CPBtn onClick={()=>{ const ids=new Set(visibleIds.filter(id=>bulk.selected.has(id))); onDelete(ids); setConfirm(false); bulk.exit(); }} variant="danger">🗑️ {L("Löschen","Eliminar","Delete","Elimina")}</CPBtn>
          </div>
        </CPModal>
      )}
    </>
  );
}

// ── HOURLY CLIENT PRICING ── client.price = CHF per hour
const hoursBetween = (start,end) => {
  if(!start||!end) return 0;
  const [h1,m1]=start.split(":").map(Number), [h2,m2]=end.split(":").map(Number);
  let mins=(h2*60+m2)-(h1*60+m1); if(mins<0) mins+=24*60;
  return Math.round(mins/60*100)/100;
};
const jobAmountFor = (client,start,end) => {
  const rate=parseFloat(client?.price)||0;
  return Math.round(rate*hoursBetween(start,end)*100)/100;
};

function CPScreen({title,icon,onBack,actions,children,t}){
  return (
    <div style={{height:"100%",display:"flex",flexDirection:"column",fontFamily:CP.font}}>
      <div style={{
        padding:"12px 20px",display:"flex",alignItems:"center",
        justifyContent:"space-between",flexShrink:0,
        borderBottom:`1px solid ${CP.border}`,
        background:"rgba(10,10,18,0.8)",backdropFilter:"blur(20px)",
      }}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          {onBack && (
            <button onClick={onBack} style={{
              background:"rgba(255,255,255,.1)",border:"none",borderRadius:"50%",
              width:34,height:34,color:"#fff",cursor:"pointer",fontSize:18,
              display:"flex",alignItems:"center",justifyContent:"center"
            }}>‹</button>
          )}
          <span style={{fontSize:20}}>{icon}</span>
          <span style={{color:CP.textPrimary,fontWeight:700,fontSize:18}}>{title}</span>
        </div>
        <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>{actions}</div>
      </div>
      <div style={{flex:1,overflow:"auto",padding:"20px"}}>{children}</div>
    </div>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────
export default function PatjacCarPlay(){
  const [lang,setLangRaw] = useState(()=>localStorage.getItem('patjac_lang')||"ES");
  const setLang = (l) => { setLangRaw(l); try{lsSafeSet('patjac_lang',l);}catch(e){} };
  const t = T[lang];

  const [authState,setAuthState] = useState("login");
  const [authType,setAuthType] = useState("admin");
  const [currentUser,setCurrentUser] = useState(null);
  const [loginEmail,setLoginEmail] = useState("");
  const [loginPw,setLoginPw] = useState("");
  const [loginCode,setLoginCode] = useState("");
  const [loginPin,setLoginPin] = useState("");
  const [loginErr,setLoginErr] = useState("");

  const [activeApp,setActiveApp] = useState(null);
  const [notification,setNotification] = useState(null);
  const [showHelp,setShowHelp] = useState(false);
  const [clock,setClock] = useState(new Date());
  const [dbReady,setDbReady] = useState(false);
  const [invoicePrefill,setInvoicePrefill] = useState(null); // reminder → open a pre-filled invoice
  const [showSearch,setShowSearch] = useState(false);
  const [showShare,setShowShare] = useState(false);
  const [dbError,setDbError] = useState(null);

  // ─── SUPABASE REST API ───────────────────────────────────
  const SUPA_URL = "https://rtviublrukagwxaypmit.supabase.co";
  const SUPA_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0dml1YmxydWthZ3d4YXlwbWl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk5MjkwMjEsImV4cCI6MjEwNTUwNTAyMX0.Ykj1dz8elWC12GP-m88IBiDc_Hscrw1AjPY9Tw7p-G8";

  const supaFetch = async (path, method="GET", body=null) => {
    const res = await fetch(`${SUPA_URL}/rest/v1/${path}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPA_KEY,
        "Authorization": `Bearer ${SUPA_KEY}`,
        "Prefer": method==="POST" ? "resolution=merge-duplicates,return=representation" : method==="PATCH" ? "return=minimal" : "return=representation",
      },
      body: body ? JSON.stringify(body) : undefined,
    });
    if(!res.ok){ const e=await res.text(); console.error(`Supabase ${method} ${path}:`,res.status,e); throw new Error(e); }
    const text = await res.text();
    if(!text || text.trim()==="") return null;
    try { return JSON.parse(text); } catch(e) { return null; }
  };

  // Smart snake_case: only converts true camelCase compounds
  // e.g. "clientId" -> "client_id", but "name" stays "name"
  const toSnake = obj => Object.fromEntries(Object.entries(obj).map(([k,v])=>{
    // Known mappings
    const map = {
      firstName:"first_name", lastName:"last_name",
      clientId:"client_id", clientName:"client_name",
      employeeId:"employee_id", employeeName:"employee_name",
      serviceType:"service_type", billingType:"billing_type",
      postalCode:"postal_code", timeStart:"time_start", timeEnd:"time_end",
      actualStart:"actual_start", actualEnd:"actual_end", actualHours:"actual_hours",
      jobCount:"job_count", clockIn:"clock_in", clockOut:"clock_out",
      startDate:"start_date", hourlyRate:"hourly_rate", fixedSalary:"fixed_salary",
      userCode:"user_code", code:"user_code", invoiceNumber:"invoice_number", dueDate:"due_date",
      vatAmount:"vat_amount", supplierId:"supplier_id", supplierName:"supplier_name",
      contractDate:"contract_date", termType:"term_type", salaryType:"salary_type",
      noticePeriod:"notice_period", trialPeriod:"trial_period",
      entityName:"entity_name", startDate2:"start_date", endDate:"end_date",
      createdAt:"created_at", updatedAt:"updated_at",
      fromName:"from_name", toName:"to_name",
      mwstNr:"mwst_nr", bic:"bic", iban:"iban", uid:"uid", ahv:"ahv",
      thirteenth:"thirteenth", has_13th:"has_13th",
      minStock:"min_stock", unitPrice:"unit_price", deliveryDate:"delivery_date",
    };
    const snakeKey = map[k] || k.replace(/([A-Z])/g,m=>'_'+m.toLowerCase());
    return [snakeKey, v];
  }));
  const toCamelOne = row => Object.fromEntries(Object.entries(row).map(([k,v])=>[k.replace(/_([a-z])/g,(_,c)=>c.toUpperCase()),v]));
  const toCamel = arr => (arr||[]).map(toCamelOne);

  // upsert row
  const dbSave = async (table, data) => {
    try {
      // Pre-process: combine firstName+lastName into name
      let processed = {...data};
      if(processed.firstName||processed.lastName){
        processed.name = `${processed.firstName||""} ${processed.lastName||""}`.trim();
      }
      const row = toSnake(processed);
      // Remove undefined/null values and unknown fields
      Object.keys(row).forEach(k => (row[k]===undefined||row[k]===null) && delete row[k]);
      // Convert empty strings to null for numeric and date fields
      const numericFields = ['price','amount','salary','hourly_rate','fixed_salary','total','vat_amount','hours','actual_hours'];
      const dateFields = ['date','start_date','end_date','due_date','contract_date','delivery_date','clock_in','clock_out','trial_period','birth_date','period_from','period_to'];
      const uuidFields = ['client_id','employee_id','supplier_id','job_id'];
      numericFields.forEach(k => { if(row[k]==="") row[k]=null; if(row[k]!==undefined&&row[k]!==null&&isNaN(Number(row[k]))) delete row[k]; });
      dateFields.forEach(k => { if(row[k]==="") row[k]=null; });
      uuidFields.forEach(k => { if(row[k]==="") delete row[k]; });
      // Remove null values after conversion
      Object.keys(row).forEach(k => row[k]===null && delete row[k]);
      // Remove first_name/last_name — DB uses name column only
      // first_name / last_name are stored too (needed so edit forms show the names)
      console.log("📤 dbSave:", table, JSON.stringify(row).slice(0,100));
      // Debounce: cancel previous pending save for same record
      const saveKey = `${table}_${data.id}`;
      if(window._savePending) clearTimeout(window._savePending[saveKey]);
      if(!window._savePending) window._savePending = {};
      await new Promise(resolve => {
        window._savePending[saveKey] = setTimeout(resolve, 300);
      });
      // Try INSERT, fallback to PATCH on duplicate
      try {
        await supaFetch(`${table}`, "POST", row);
      } catch(e) {
        if(e.message && (e.message.includes("duplicate")||e.message.includes("23505"))) {
          await supaFetch(`${table}?id=eq.${encodeURIComponent(data.id)}`, "PATCH", row);
        } else { throw e; }
      }
      console.log("✅ dbSave OK:", table, data.id||"");
    }
    catch(e) { console.error("❌ dbSave error:", table, e.message); }
  };

  // delete row
  const dbDelete = async (table, id) => {
    try { await supaFetch(`${table}?id=eq.${encodeURIComponent(id)}`, "DELETE"); }
    catch(e) { console.error("dbDelete error:", table, e); }
  };

  const supa = true; // DB available flag

  // Data
  const [clients,setClients] = useState([]);
  const [employees,setEmployees] = useState([]);
  const [jobs,setJobs] = useState([]);
  const [invoices,setInvoices] = useState([]);
  const [timeclock,setTimeclock] = useState([]);
  const [messages,setMessages] = useState([]);
  const [expenses,setExpenses] = useState([]);
  const [orders,setOrders] = useState([]);
  const [contracts,setContracts] = useState([]);
  const [products,setProducts] = useState([]);
  const [suppliers,setSuppliers] = useState([]);

  // Wrap setters to also save to Supabase
  const saveAndSet = (setter, table) => (valOrFn) => {
    setter(prev => {
      const next = typeof valOrFn === 'function' ? valOrFn(prev) : valOrFn;
      // Find new/updated items and save them
      if(supa && Array.isArray(next)){
        const prevIds = new Set((prev||[]).map(x=>x.id));
        const nextIds = new Set(next.map(x=>x.id));
        // Deleted items
        (prev||[]).filter(x=>!nextIds.has(x.id)).forEach(x=>dbDelete(table,x.id));
        // New or updated items
        next.forEach(x=>{
          const old = (prev||[]).find(p=>p.id===x.id);
          if(!old || JSON.stringify(old)!==JSON.stringify(x)) dbSave(table,x);
        });
      }
      return next;
    });
  };

  // Load all data from Supabase on mount
  useEffect(()=>{
    const load = async () => {
      try {
        console.log("Loading from Supabase...");
        const [cl,em,jo,inv,tc,msg,ex,ord,ct,sett,prod,sup] = await Promise.all([
          supaFetch("clients?order=created_at"),
          supaFetch("employees?order=created_at"),
          supaFetch("jobs?order=created_at"),
          supaFetch("invoices?order=created_at"),
          supaFetch("timeclock?order=created_at"),
          supaFetch("messages?order=created_at"),
          supaFetch("expenses?order=created_at"),
          supaFetch("orders?order=created_at"),
          supaFetch("contracts?order=created_at"),
          supaFetch("settings?id=eq.company").then(r=>(r||[])[0]||null),
          supaFetch("products?order=created_at"),
          supaFetch("suppliers?order=created_at"),
        ]);
        console.log("Supabase loaded ✓ clients:", cl?.length, "contracts:", ct?.length);
        // Only show demo data on a brand-new, unconfigured install (no real clients or employees yet).
        // Once the business has real clients/employees, empty tables show truly empty — never fake demo rows.
        const isLive = !!(cl?.length || em?.length);
        setClients(cl?.length ? toCamel(cl) : JSON.parse(localStorage.getItem('patjac_clients')||'null') || (isLive?[]:DEMO_CLIENTS));
        setEmployees(em?.length ? toCamel(em) : JSON.parse(localStorage.getItem('patjac_employees')||'null') || (isLive?[]:DEMO_EMPLOYEES));
        setJobs(jo?.length ? toCamel(jo) : JSON.parse(localStorage.getItem('patjac_jobs')||'null') || (isLive?[]:DEMO_JOBS));
        setInvoices(inv?.length ? toCamel(inv) : JSON.parse(localStorage.getItem('patjac_invoices')||'null') || (isLive?[]:DEMO_INVOICES));
        setTimeclock(tc?.length ? toCamel(tc) : JSON.parse(localStorage.getItem('patjac_timeclock')||'null') || (isLive?[]:DEMO_TIMECLOCK));
        setMessages(msg?.length ? toCamel(msg) : JSON.parse(localStorage.getItem('patjac_messages')||'null') || []);
        setExpenses(ex?.length ? toCamel(ex) : JSON.parse(localStorage.getItem('patjac_expenses')||'null') || (isLive?[]:DEMO_EXPENSES));
        setOrders(ord?.length ? toCamel(ord) : JSON.parse(localStorage.getItem('patjac_orders')||'null') || (isLive?[]:DEMO_ORDERS));
        setContracts(ct?.length ? toCamel(ct) : JSON.parse(localStorage.getItem('patjac_contracts')||'null') || []);
        setProducts(prod?.length ? toCamel(prod) : JSON.parse(localStorage.getItem('patjac_products')||'null') || (isLive?[]:DEMO_PRODUCTS));
        setSuppliers(sup?.length ? toCamel(sup) : JSON.parse(localStorage.getItem('patjac_suppliers')||'null') || (isLive?[]:DEMO_SUPPLIERS));
        // If Supabase has data, clear localStorage to avoid stale data on other devices
        if(cl?.length) localStorage.removeItem('patjac_clients');
        if(em?.length) localStorage.removeItem('patjac_employees');
        if(jo?.length) localStorage.removeItem('patjac_jobs');
        if(inv?.length) localStorage.removeItem('patjac_invoices');
        if(msg?.length) localStorage.removeItem('patjac_messages');
        if(ex?.length) localStorage.removeItem('patjac_expenses');
        if(ord?.length) localStorage.removeItem('patjac_orders');
        if(ct?.length) localStorage.removeItem('patjac_contracts');
        if(prod?.length) localStorage.removeItem('patjac_products');
        if(sup?.length) localStorage.removeItem('patjac_suppliers');
        if(sett){
          setCompanySettings(prev=>({...prev,
            name:sett.name||prev.name, street:sett.street||prev.street,
            number:sett.number||prev.number, postalCode:sett.postal_code||prev.postalCode,
            city:sett.city||prev.city, phone:sett.phone||prev.phone,
            email:sett.email||prev.email, uid:sett.uid||prev.uid,
            mwstNr:sett.mwst_nr||prev.mwstNr, iban:sett.iban||prev.iban,
            bic:sett.bic||prev.bic,
            adminEmail:sett.admin_email||prev.adminEmail,
            logo:sett.logo||prev.logo,
          }));
        }
        setDbReady(true);
      } catch(e) {
        console.error("Supabase load error:",e);
        const cached = (key,demo) => JSON.parse(localStorage.getItem(key)||'null') || demo;
        setClients(cached('patjac_clients', DEMO_CLIENTS));
        setEmployees(cached('patjac_employees', DEMO_EMPLOYEES));
        setJobs(cached('patjac_jobs', DEMO_JOBS));
        setInvoices(cached('patjac_invoices', DEMO_INVOICES));
        setTimeclock(cached('patjac_timeclock', DEMO_TIMECLOCK));
        setMessages(cached('patjac_messages', DEMO_MESSAGES));
        setExpenses(cached('patjac_expenses', DEMO_EXPENSES));
        setOrders(cached('patjac_orders', DEMO_ORDERS));
        setContracts(cached('patjac_contracts', []));
        setProducts(cached('patjac_products', DEMO_PRODUCTS));
        setSuppliers(cached('patjac_suppliers', DEMO_SUPPLIERS));
        setDbReady(true);
        setDbError("Sin conexión a base de datos — mostrando la última copia guardada en este dispositivo");
      }
    };
    load();

    // ── AUTO-EXTEND RECURRING JOBS ──────────────────────────
    // Keeps weekly/monthly recurring jobs generated ahead of time, without needing a server.
    // Runs once dbReady, and tops up any series getting close to running out.
    // (separate effect below, watches [dbReady])
    // ── SMART MESSAGE POLLING ──────────────────────────────
    // Poll every 15s when app is visible, every 60s when hidden
    // This keeps requests under 100/hour (well within Free plan limits)
    let pollInterval = 15000;
    let msgPollRef;

    const pollMessages = async () => {
      if(document.hidden) return; // skip if tab is hidden
      try {
        const fresh = await supaFetch("messages?order=created_at");
        if(fresh) setMessages(prev=>{
          const freshCamel = toCamel(fresh);
          if(JSON.stringify(prev.map(m=>m.id).sort()) !== JSON.stringify(freshCamel.map(m=>m.id).sort())){
            return freshCamel;
          }
          return prev;
        });
      } catch(e){}
    };

    msgPollRef = setInterval(pollMessages, pollInterval);

    // When user focuses the app, poll immediately
    const onFocus = () => { pollMessages(); };
    window.addEventListener("focus", onFocus);

    return ()=>{ clearInterval(msgPollRef); window.removeEventListener("focus", onFocus); };
  },[]);

  // Tops up weekly/monthly recurring job series once they start running low,
  // so they keep generating automatically every time the app is opened.
  useEffect(()=>{
    if(!dbReady) return;
    const groups = {};
    jobs.forEach(j=>{ if(j.recurringId){ (groups[j.recurringId] = groups[j.recurringId]||[]).push(j); } });
    const toAdd = [];
    const todayD = new Date(todayStr+"T00:00:00");
    Object.values(groups).forEach(group=>{
      const sample = group[0];
      const maxDate = group.reduce((m,j)=>j.date>m?j.date:m, group[0].date);
      const maxD = new Date(maxDate+"T00:00:00");
      const daysUntilEnd = Math.round((maxD - todayD)/86400000);
      // Only extend series that are still running (a series whose future jobs were deleted stays stopped)
      if(daysUntilEnd < 0) return;
      if(sample.recurrence==="weekly" && (sample.recurWeekdays||[]).length && daysUntilEnd < 21){
        let cursor = new Date(maxD); cursor.setDate(cursor.getDate()+1);
        const end = new Date(maxD); end.setDate(end.getDate()+12*7);
        while(cursor<=end){
          if(sample.recurWeekdays.includes(cursor.getDay())){
            toAdd.push({...sample,id:gid(),date:ymd(cursor),teamId:sample.teamId?`${String(sample.teamId).split("_")[0]}_${ymd(cursor)}`:null,status:"pending",actualStart:null,actualEnd:null,actualHours:null,photos:[],signature:null,reminderSent:false});
          }
          cursor.setDate(cursor.getDate()+1);
        }
      } else if(sample.recurrence==="monthly" && daysUntilEnd < 45){
        const dayOfMonth = new Date(sample.date+"T00:00:00").getDate();
        for(let i=1;i<=6;i++){
          const d = new Date(maxD.getFullYear(), maxD.getMonth()+i, 1);
          const lastDay = new Date(d.getFullYear(), d.getMonth()+1, 0).getDate();
          d.setDate(Math.min(dayOfMonth,lastDay));
          toAdd.push({...sample,id:gid(),date:ymd(d),teamId:sample.teamId?`${String(sample.teamId).split("_")[0]}_${ymd(d)}`:null,status:"pending",actualStart:null,actualEnd:null,actualHours:null,photos:[],signature:null,reminderSent:false});
        }
      }
    });
    if(toAdd.length){
      setJobs(prev=>{
        const next=[...prev,...toAdd];
        lsSafeSet('patjac_jobs',JSON.stringify(next));
        return next;
      });
      if(supa) toAdd.forEach(x=>dbSave('jobs',x));
    }
  },[dbReady]);

  const [companySettings, setCompanySettings] = useState({
    name:"Patjac Reinigung Garten & Services",
    street:"Industriestrasse",number:"14",postalCode:"8004",city:"Zürich",
    phone:"+41 44 123 4567",email:"info@patjacservices.ch",
    uid:"CHE-123.456.789",mwstNr:"CHE-123.456.789 MWST",
    iban:"CH56 0483 5012 3456 7800 9",bic:"CRESCHZZ80A",
    adminEmail:"info@patjacservices.ch",
    logo:"🌿",
  });

  useEffect(()=>{ const i=setInterval(()=>{ const now=new Date(); todayStr=ymd(now); setClock(now); },1000); return()=>clearInterval(i); },[]);
  appLang = lang;

  const notify = useCallback((msg,type="success",ms=3000)=>{
    setNotification({msg,type});
    setTimeout(()=>setNotification(null),ms);
  },[]);

  // ── LIVE ALERTS: job reminders (sent by the server 1 h before each job) and new messages ──
  const seenMsgRef = useRef(null);
  useEffect(()=>{
    const me = currentUser?.id;
    if(!me){ seenMsgRef.current = null; return; }
    if(seenMsgRef.current===null){ seenMsgRef.current = new Set(messages.map(m=>m.id)); return; }
    const fresh = messages.filter(m=>!seenMsgRef.current.has(m.id) && m.to===me && !m.read);
    messages.forEach(m=>seenMsgRef.current.add(m.id));
    fresh.forEach(m=>{
      const isReminder = (m.content||"").startsWith("🔔");
      notify((m.content||"📷").split("\n")[0].slice(0,160), isReminder?"warning":"info", isReminder?12000:5000);
      try{ navigator.vibrate && navigator.vibrate(isReminder?[300,150,300,150,300]:[200]); }catch(e){}
      try{ if("Notification" in window && Notification.permission==="granted") new Notification(isReminder?"🔔 Patjac":(m.fromName||"Patjac"), {body:m.content||"", icon:PATJAC_LOGO, tag:m.id}); }catch(e){}
    });
  },[messages, currentUser?.id]);

  // Unpaid invoices past their due date become "overdue" automatically
  useEffect(()=>{
    if(!dbReady) return;
    const late = invoices.filter(i=>i.status!=="paid"&&i.status!=="overdue"&&i.dueDate&&i.dueDate<todayStr);
    if(!late.length) return;
    const ids = new Set(late.map(i=>i.id));
    setInvoices(prev=>prev.map(i=>ids.has(i.id)?{...i,status:"overdue"}:i));
    late.forEach(i=>dbSave('invoices',{...i,status:"overdue"}));
  },[invoices, dbReady, ymd(clock)]);

  // ─── LOGIN ──────────────────────────────────────────────
  const L = makeL(lang);
  const [loginBusy,setLoginBusy] = useState(false);
  const handleLogin = async () => {
    setLoginErr("");
    if(authType==="admin"){
      if(loginBusy) return;
      setLoginBusy(true);
      let ok=false;
      try{ ok = await supaRpc("admin_login",{p_email:loginEmail.trim(),p_password:loginPw}); }
      catch(e){ setLoginErr(L("Keine Verbindung – bitte erneut versuchen","Sin conexión – inténtelo de nuevo","No connection – please try again","Nessuna connessione – riprova")); setLoginBusy(false); return; }
      setLoginBusy(false);
      if(ok===true){
        setCurrentUser({id:"admin",name:"Administrator",role:"admin"});
        setAuthState("app"); setLoginPw("");
      } else setLoginErr(L("Ungültige E-Mail oder Passwort (nach 5 Fehlversuchen 15 Min. gesperrt)","Correo o contraseña incorrectos (tras 5 intentos fallidos se bloquea 15 min)","Invalid email or password (locked 15 min after 5 failed attempts)","Email o password non corretti (bloccato 15 min dopo 5 tentativi)"));
    } else {
      const emp = employees.find(e=>e.pin===loginPin.trim());
      if(emp){ setCurrentUser({id:emp.id,name:emp.name,role:"employee",code:emp.code||emp.userCode}); setAuthState("app"); }
      else setLoginErr(L("Ungültiger Code oder PIN","Código o PIN incorrectos","Invalid code or PIN","Codice o PIN non corretti"));
    }
  };

  const handleLogout = () => {
    setAuthState("login");
    setCurrentUser(null);
    setActiveApp(null);
    setLoginEmail("");
    setLoginPw("");
    setLoginCode("");
    setLoginPin("");
    setLoginErr("");
    setAuthType("admin");
  };

  const openApp = (id) => {
    if(currentUser?.role==="employee"){
      // Payslips are no longer a separate icon for employees: they are in "Documents"
      const allowed=["dashboard","timeclock","messaging","jobs","documents","academy","routes"];
      if(!allowed.includes(id)){ notify(t.security_blocked,"error"); return; }
    }
    setActiveApp(id);
  };

  const appInfo = (id) => APPS.find(a=>a.id===id)||{icon:"📌",color:CP.accent};
  const appName = (id) => {
    const names = {payroll: t.payrollTitle||"Payroll"};
    return names[id] || t[id] || id;
  };

  const renderApp = () => {
    // Supabase-aware setters
    const dbSetClients   = (fn) => { setClients(prev=>{ const next=typeof fn==='function'?fn(prev):fn; lsSafeSet('patjac_clients',JSON.stringify(next)); if(supa){const p=new Set((prev||[]).map(x=>x.id));const n=new Set(next.map(x=>x.id));(prev||[]).filter(x=>!n.has(x.id)).forEach(x=>dbDelete('clients',x.id));next.forEach(x=>{const o=(prev||[]).find(p=>p.id===x.id);if(!o||JSON.stringify(o)!==JSON.stringify(x))dbSave('clients',x);}); }return next;}); };
    const dbSetEmployees = (fn) => { setEmployees(prev=>{ const next=typeof fn==='function'?fn(prev):fn; lsSafeSet('patjac_employees',JSON.stringify(next)); if(supa){const p=new Set((prev||[]).map(x=>x.id));const n=new Set(next.map(x=>x.id));(prev||[]).filter(x=>!n.has(x.id)).forEach(x=>dbDelete('employees',x.id));next.forEach(x=>{const o=(prev||[]).find(p=>p.id===x.id);if(!o||JSON.stringify(o)!==JSON.stringify(x))dbSave('employees',x);}); }return next;}); };
    const dbSetJobs      = (fn) => { setJobs(prev=>{ const next=typeof fn==='function'?fn(prev):fn; lsSafeSet('patjac_jobs',JSON.stringify(next)); if(supa){const p=new Set((prev||[]).map(x=>x.id));const n=new Set(next.map(x=>x.id));(prev||[]).filter(x=>!n.has(x.id)).forEach(x=>dbDelete('jobs',x.id));next.forEach(x=>{const o=(prev||[]).find(p=>p.id===x.id);if(!o||JSON.stringify(o)!==JSON.stringify(x))dbSave('jobs',x);}); }return next;}); };
    const dbSetInvoices  = (fn) => { setInvoices(prev=>{ const next=typeof fn==='function'?fn(prev):fn; lsSafeSet('patjac_invoices',JSON.stringify(next)); if(supa){const p=new Set((prev||[]).map(x=>x.id));const n=new Set(next.map(x=>x.id));(prev||[]).filter(x=>!n.has(x.id)).forEach(x=>dbDelete('invoices',x.id));next.forEach(x=>{const o=(prev||[]).find(p=>p.id===x.id);if(!o||JSON.stringify(o)!==JSON.stringify(x))dbSave('invoices',x);}); }return next;}); };
    const dbSetTimeclock = (fn) => { setTimeclock(prev=>{ const next=typeof fn==='function'?fn(prev):fn; lsSafeSet('patjac_timeclock',JSON.stringify(next)); if(supa){const p=new Set((prev||[]).map(x=>x.id));const n=new Set(next.map(x=>x.id));(prev||[]).filter(x=>!n.has(x.id)).forEach(x=>dbDelete('timeclock',x.id));next.forEach(x=>{const o=(prev||[]).find(p=>p.id===x.id);if(!o||JSON.stringify(o)!==JSON.stringify(x))dbSave('timeclock',x);}); }return next;}); };
    const dbSetMessages  = (fn) => { setMessages(prev=>{ const next=typeof fn==='function'?fn(prev):fn; lsSafeSet('patjac_messages',JSON.stringify(next)); if(supa){const p=new Set((prev||[]).map(x=>x.id));const n=new Set(next.map(x=>x.id));(prev||[]).filter(x=>!n.has(x.id)).forEach(x=>dbDelete('messages',x.id));next.forEach(x=>{const o=(prev||[]).find(p=>p.id===x.id);if(!o||JSON.stringify(o)!==JSON.stringify(x))dbSave('messages',x);}); }return next;}); };
    const dbSetExpenses  = (fn) => { setExpenses(prev=>{ const next=typeof fn==='function'?fn(prev):fn; lsSafeSet('patjac_expenses',JSON.stringify(next)); if(supa){const p=new Set((prev||[]).map(x=>x.id));const n=new Set(next.map(x=>x.id));(prev||[]).filter(x=>!n.has(x.id)).forEach(x=>dbDelete('expenses',x.id));next.forEach(x=>{const o=(prev||[]).find(p=>p.id===x.id);if(!o||JSON.stringify(o)!==JSON.stringify(x))dbSave('expenses',x);}); }return next;}); };
    const dbSetOrders    = (fn) => { setOrders(prev=>{ const next=typeof fn==='function'?fn(prev):fn; lsSafeSet('patjac_orders',JSON.stringify(next)); if(supa){const p=new Set((prev||[]).map(x=>x.id));const n=new Set(next.map(x=>x.id));(prev||[]).filter(x=>!n.has(x.id)).forEach(x=>dbDelete('orders',x.id));next.forEach(x=>{const o=(prev||[]).find(p=>p.id===x.id);if(!o||JSON.stringify(o)!==JSON.stringify(x))dbSave('orders',x);}); }return next;}); };
    const dbSetContracts = (fn) => { setContracts(prev=>{ const next=typeof fn==='function'?fn(prev):fn; lsSafeSet('patjac_contracts',JSON.stringify(next)); if(supa){const p=new Set((prev||[]).map(x=>x.id));const n=new Set(next.map(x=>x.id));(prev||[]).filter(x=>!n.has(x.id)).forEach(x=>dbDelete('contracts',x.id));next.forEach(x=>{const o=(prev||[]).find(p=>p.id===x.id);if(!o||JSON.stringify(o)!==JSON.stringify(x))dbSave('contracts',x);}); }return next;}); };
    const dbSetProducts  = (fn) => { setProducts(prev=>{ const next=typeof fn==='function'?fn(prev):fn; lsSafeSet('patjac_products',JSON.stringify(next)); if(supa){const p=new Set((prev||[]).map(x=>x.id));const n=new Set(next.map(x=>x.id));(prev||[]).filter(x=>!n.has(x.id)).forEach(x=>dbDelete('products',x.id));next.forEach(x=>{const o=(prev||[]).find(p=>p.id===x.id);if(!o||JSON.stringify(o)!==JSON.stringify(x))dbSave('products',x);}); }return next;}); };
    const dbSetSuppliers = (fn) => { setSuppliers(prev=>{ const next=typeof fn==='function'?fn(prev):fn; lsSafeSet('patjac_suppliers',JSON.stringify(next)); if(supa){const p=new Set((prev||[]).map(x=>x.id));const n=new Set(next.map(x=>x.id));(prev||[]).filter(x=>!n.has(x.id)).forEach(x=>dbDelete('suppliers',x.id));next.forEach(x=>{const o=(prev||[]).find(p=>p.id===x.id);if(!o||JSON.stringify(o)!==JSON.stringify(x))dbSave('suppliers',x);}); }return next;}); };
    const dbSetCompanySettings = (fn) => { setCompanySettings(prev=>{ const next=typeof fn==='function'?fn(prev):fn; if(supa) dbSave('settings', {id:'company', ...next}); return next; }); };

    const props = {t,lang,clients,setClients:dbSetClients,employees,setEmployees:dbSetEmployees,jobs,setJobs:dbSetJobs,invoices,setInvoices:dbSetInvoices,timeclock,setTimeclock:dbSetTimeclock,messages,setMessages:dbSetMessages,expenses,setExpenses:dbSetExpenses,orders,setOrders:dbSetOrders,contracts,setContracts:dbSetContracts,products,setProducts:dbSetProducts,suppliers,setSuppliers:dbSetSuppliers,notify,currentUser,companySettings,setCompanySettings:dbSetCompanySettings,openApp,onBack:()=>setActiveApp(null)};
    switch(activeApp){
      case "dashboard":  return <DashApp {...props} lang={lang}/>;
      case "clients":    return <ClientsApp {...props} lang={lang}/>;
      case "jobs":       return <JobsApp {...props} lang={lang}/>;
      case "employees":  return <EmployeesApp {...props} lang={lang}/>;
      case "invoices":   return <InvoicesApp {...props} lang={lang} invoicePrefill={invoicePrefill} clearInvoicePrefill={()=>setInvoicePrefill(null)}/>;
      case "finance":    return <FinanceApp {...props} lang={lang}/>;
      case "timeclock":  return <TimeclockApp {...props} lang={lang}/>;
      case "messaging":  return <MessagingApp {...props} lang={lang}/>;
      case "routes":     return <RoutesApp {...props} lang={lang}/>;
      case "reports":    return <ReportsApp {...props} lang={lang}/>;
      case "settings":   return <SettingsApp {...props} lang={lang} setLang={setLang} companySettings={companySettings} currentUser={currentUser} clients={clients} employees={employees} jobs={jobs} invoices={invoices} contracts={contracts} expenses={expenses} orders={orders} products={products} suppliers={suppliers} messages={messages}/>;
      case "academy":    return <AcademyApp {...props} lang={lang} setLang={setLang}/>;
      case "payroll":    return <PayrollApp {...props} lang={lang}/>;
      case "inventory":  return <InventoryApp {...props} lang={lang}/>;
      case "documents":  return <DocumentsApp {...props} lang={lang} currentUser={currentUser} contracts={contracts} companySettings={companySettings}/>;
      case "contracts":  return <ContractsApp {...props} lang={lang} currentUser={currentUser} contracts={contracts} setContracts={dbSetContracts}/>;
      default: return null;
    }
  };

  // ─── LOADING SCREEN ──────────────────────────────────────
  if(!dbReady) return (
    <div style={{
      width:"100vw",height:"100vh",background:"#0a0e18",
      display:"flex",flexDirection:"column",
      alignItems:"center",justifyContent:"center",gap:20,
      fontFamily:CP.font,
    }}>
      <img src={PATJAC_LOGO} alt="Patjac" style={{height:60,objectFit:"contain",marginBottom:8}}/>
      <div style={{
        width:44,height:44,borderRadius:"50%",
        border:"3px solid rgba(255,255,255,0.1)",
        borderTopColor:"#1C7ED6",
        animation:"spin 0.8s linear infinite",
      }}/>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
      <div style={{color:"rgba(255,255,255,0.5)",fontSize:14}}>
        Patjac Business Suite wird geladen...
      </div>
      {dbError&&(
        <div style={{
          color:"#FFD43B",fontSize:12,
          background:"rgba(240,140,0,0.1)",
          border:"1px solid rgba(240,140,0,0.3)",
          borderRadius:10,padding:"8px 16px",marginTop:8,
        }}>
          ⚠️ {dbError}
        </div>
      )}
    </div>
  );

  // ─── LOGIN SCREEN ────────────────────────────────────────
  if(authState==="login") return (
    <div style={{
      width:"100vw",height:"100vh",background:CP.bg,
      display:"flex",alignItems:"center",justifyContent:"center",
      fontFamily:CP.font,overflow:"hidden",position:"relative",
    }}>
      {/* Ambient glow */}
      <div style={{position:"absolute",top:"15%",left:"50%",transform:"translateX(-50%)",width:500,height:500,background:"radial-gradient(circle,rgba(28,126,214,0.12) 0%,transparent 70%)",pointerEvents:"none"}}/>

      {/* Lang selector */}
      <div style={{position:"absolute",top:20,right:24,display:"flex",gap:8}}>
        {["DE","ES","EN","IT"].map(l=>(
          <button key={l} onClick={()=>setLang(l)} style={{
            background: lang===l?"rgba(28,126,214,0.7)":"rgba(255,255,255,0.08)",
            border:`1px solid ${lang===l?"rgba(28,126,214,0.8)":CP.border}`,
            color:"#fff",padding:"5px 12px",borderRadius:20,cursor:"pointer",
            fontSize:12,fontWeight:700,fontFamily:CP.font,
          }}>{l}</button>
        ))}
      </div>

      <div style={{width:"100%",maxWidth:400,padding:"0 24px",position:"relative",zIndex:1}}>
        {/* Logo */}
        <div style={{textAlign:"center",marginBottom:40}}>
          <div style={{
            width:180,height:100,
            display:"flex",alignItems:"center",justifyContent:"center",
            margin:"0 auto 16px",
          }}>
            <img src={PATJAC_LOGO} alt="Patjac"
              style={{width:"100%",height:"100%",objectFit:"contain",filter:"drop-shadow(0 4px 16px rgba(0,0,0,0.5))"}}/>
          </div>
          <div style={{color:CP.textSecondary,fontSize:13,marginTop:4}}>{t.tagline}</div>
        </div>

        {/* Card */}
        <div style={{
          background:"rgba(255,255,255,0.05)",
          border:`1px solid ${CP.borderActive}`,
          borderRadius:26,padding:"28px 28px 24px",
          backdropFilter:"blur(30px)",
        }}>
          {/* Tab */}
          <div style={{display:"flex",background:"rgba(0,0,0,0.3)",borderRadius:14,padding:3,marginBottom:22}}>
            {[["admin",t.administrator],["employee",t.employee]].map(([k,label])=>(
              <button key={k} onClick={()=>{setAuthType(k);setLoginErr("");}} style={{
                flex:1,padding:"9px 0",
                background: authType===k?"rgba(28,126,214,0.85)":"transparent",
                border:"none",color:"#fff",borderRadius:12,cursor:"pointer",
                fontSize:13,fontWeight:700,fontFamily:CP.font,transition:"background .2s",
              }}>{label}</button>
            ))}
          </div>

          {authType==="admin" ? (
            <>
              <CPField label={t.email}>
                <CPInput value={loginEmail} onChange={e=>setLoginEmail(e.target.value)} placeholder="" type="email"/>
              </CPField>
              <CPField label={t.password}>
                <CPInput value={loginPw} onChange={e=>setLoginPw(e.target.value)} placeholder="••••••••" type="password"/>
              </CPField>
            </>
          ):(
            <>
              <CPField label={`${t.pin} (4 dígitos)`}>
                <CPInput value={loginPin} onChange={e=>setLoginPin(e.target.value)} placeholder="••••" type="password" maxLength={6} style={{textAlign:"center",fontSize:28,letterSpacing:10}}/>
              </CPField>
            </>
          )}

          {loginErr && (
            <div style={{background:"rgba(201,42,42,0.18)",border:"1px solid rgba(201,42,42,0.4)",borderRadius:12,padding:"10px 14px",color:"#FF8787",fontSize:13,marginBottom:16}}>
              ⚠️ {loginErr}
            </div>
          )}

          <CPBtn onClick={handleLogin} size="lg" full style={{borderRadius:14,marginTop:4}}>
            {t.loginBtn}
          </CPBtn>
        </div>

        <div style={{textAlign:"center",color:"transparent",fontSize:11,marginTop:16,userSelect:"none"}}>&nbsp;</div>
      </div>
    </div>
  );

  // ─── MAIN CarPlay INTERFACE ─────────────────────────────
  return (
    <div style={{
      width:"100vw",height:"100vh",background:CP.bg,
      fontFamily:CP.font,overflow:"hidden",display:"flex",flexDirection:"column",
      position:"relative",
    }}>
      {/* ── STATUS BAR ── */}
      <div style={{
        height:44,background:"rgba(0,0,0,0.6)",backdropFilter:"blur(20px)",
        borderBottom:`1px solid ${CP.border}`,
        display:"flex",alignItems:"center",justifyContent:"space-between",
        padding:"0 24px",flexShrink:0,
      }}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <img src={PATJAC_LOGO} alt="Patjac" style={{height:32,width:"auto",objectFit:"contain",filter:"drop-shadow(0 1px 4px rgba(0,0,0,0.3))"}}/>
          {activeApp && (
            <>
              <span style={{color:CP.textTertiary,fontSize:12}}>›</span>
              <span style={{color:CP.textSecondary,fontSize:13}}>{appName(activeApp)}</span>
            </>
          )}
          {/* ── HELP BUTTON (admin only) ── */}
          {currentUser?.role==="admin" && (
            <button onClick={()=>setShowHelp(true)} title={t.help||"Help"} style={{
              marginLeft:6,
              width:26,height:26,borderRadius:"50%",
              background:"linear-gradient(135deg,rgba(28,126,214,0.85),rgba(0,188,242,0.85))",
              border:"1px solid rgba(255,255,255,0.25)",
              color:"#fff",cursor:"pointer",fontSize:13,fontWeight:800,
              display:"flex",alignItems:"center",justifyContent:"center",
              boxShadow:"0 0 10px rgba(28,126,214,0.4)",
              transition:"all .18s",flexShrink:0,
            }}
              onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.15)";e.currentTarget.style.boxShadow="0 0 18px rgba(28,126,214,0.7)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.boxShadow="0 0 10px rgba(28,126,214,0.4)";}}
            >?</button>
          )}
        </div>
        <div style={{display:"flex",alignItems:"center",gap:16}}>
          {currentUser?.role==="admin"&&<button onClick={()=>setShowSearch(true)} title={L("Alles suchen","Buscar en toda la app","Search everything","Cerca ovunque")} style={{background:"rgba(28,126,214,0.25)",border:"1px solid rgba(28,126,214,0.5)",borderRadius:10,color:"#fff",padding:"4px 10px",cursor:"pointer",fontSize:13,fontWeight:700}}>🔍 {L("Suchen","Buscar","Search","Cerca")}</button>}
          <button onClick={()=>setShowShare(true)} title={L("App teilen","Compartir la app","Share the app","Condividi l'app")} style={{background:"rgba(255,255,255,0.08)",border:"none",borderRadius:10,color:"#fff",padding:"4px 9px",cursor:"pointer",fontSize:14}}>📲</button>
          {/* Lang */}
          <div style={{display:"flex",gap:4}}>
            {["DE","ES","EN","IT"].map(l=>(
              <button key={l} onClick={()=>setLang(l)} style={{
                background: lang===l?"rgba(28,126,214,0.7)":"transparent",
                border:"none",color: lang===l?"#fff":CP.textTertiary,
                padding:"2px 7px",borderRadius:8,cursor:"pointer",fontSize:11,fontWeight:700,
              }}>{l}</button>
            ))}
          </div>
          <div style={{color:CP.textSecondary,fontSize:13,fontWeight:600}}>
            {clock.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}
          </div>
          <div style={{display:"flex",alignItems:"center",gap:6}}>
            <span style={{fontSize:14}}>{currentUser?.role==="admin"?"👑":"👤"}</span>
            <span style={{color:CP.textSecondary,fontSize:12}}>{currentUser?.name}</span>
            <button onClick={handleLogout} style={{
              background:"rgba(255,255,255,0.08)",border:"none",borderRadius:8,
              color:CP.textTertiary,padding:"3px 8px",cursor:"pointer",fontSize:11,
            }}>⏻</button>
          </div>
        </div>
      </div>

      {showSearch&&<GlobalSearch lang={lang} onClose={()=>setShowSearch(false)} openApp={(id)=>{ setActiveApp(null); setTimeout(()=>openApp(id),0); }}
        clients={clients} employees={employees} jobs={jobs} invoices={invoices} contracts={contracts} orders={orders} products={products} suppliers={suppliers}/>}
      {showShare&&<ShareAppModal lang={lang} onClose={()=>setShowShare(false)}/>}
      {/* ── CONTENT ── */}
      <div style={{flex:1,overflow:"hidden",position:"relative"}}>
        {activeApp ? (
          renderApp()
        ) : currentUser?.role==="employee" ? (
          <EmployeeHomeScreen t={t} openApp={openApp} clock={clock} lang={lang}
            currentUser={currentUser} jobs={jobs} timeclock={timeclock}
            messages={messages} employees={employees} notify={notify}/>
        ) : (
          <HomeScreen t={t} openApp={openApp} clock={clock} lang={lang} currentUser={currentUser}
            jobs={jobs} invoices={invoices} clients={clients} employees={employees}
            notify={notify} messages={messages} onIssueInvoice={g=>{setInvoicePrefill(g); openApp("invoices");}}/>
        )}
      </div>

      {/* ── DOCK ── */}
      {!activeApp && (
        currentUser?.role==="employee" ? (
          /* Employee dock — 4 apps only */
          <div style={{
            height:88,background:"rgba(0,0,0,0.6)",backdropFilter:"blur(24px)",
            borderTop:`1px solid rgba(255,255,255,0.07)`,
            display:"flex",alignItems:"center",justifyContent:"center",
            gap:16,padding:"0 24px",flexShrink:0,
          }}>
            {EMPLOYEE_APPS.map(app=>(
              <DockIcon key={app.id} app={app}
                label={app.id==="payroll"?(t.payrollTitle||"Payroll"):t[app.id]||app.id}
                onOpen={()=>openApp(app.id)}/>
            ))}
          </div>
        ) : (
          /* Admin dock — all apps */
          <div style={{
            height:88,background:"rgba(0,0,0,0.55)",backdropFilter:"blur(24px)",
            borderTop:`1px solid ${CP.border}`,display:"flex",alignItems:"center",
            justifyContent:"center",gap:14,padding:"0 24px",flexShrink:0,
          }}>
            {APPS.slice(0,7).map(app=>(
              <DockIcon key={app.id} app={app} label={appName(app.id)} onOpen={()=>openApp(app.id)}/>
            ))}
          </div>
        )
      )}

      {/* ── HELP MODAL ── */}
      {showHelp && currentUser?.role==="admin" && (
        <HelpModal t={t} lang={lang} onClose={()=>setShowHelp(false)}/>
      )}

      {/* ── NOTIFICATION ── */}
      {notification && (
        <div style={{
          position:"fixed",top:52,right:16,
          background: notification.type==="error"
            ? "rgba(201,42,42,0.95)"
            : notification.type==="warning"
            ? "rgba(240,140,0,0.95)"
            : "rgba(28,126,214,0.95)",
          backdropFilter:"blur(16px)",
          border:`1px solid rgba(255,255,255,0.2)`,
          borderRadius:16,padding:"12px 18px",color:"#fff",fontSize:13,fontWeight:600,
          zIndex:99999,boxShadow:"0 8px 32px rgba(0,0,0,0.5)",
          animation:"cpSlideIn .3s ease",maxWidth:320,
        }}>
          {notification.type==="error"?"❌":notification.type==="warning"?"⚠️":"✅"} {notification.msg}
        </div>
      )}
      <style>{`@keyframes cpSlideIn{from{transform:translateX(110%);opacity:0}to{transform:translateX(0);opacity:1}}`}</style>
    </div>
  );
}

// ─── DOCK ICON ───────────────────────────────────────────────
function DockIcon({app,label,onOpen}){
  const [hov,setHov] = useState(false);
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:4,cursor:"pointer"}}
      onClick={onOpen}
      onMouseEnter={()=>setHov(true)}
      onMouseLeave={()=>setHov(false)}
    >
      <div style={{
        width:58,height:58,borderRadius:16,
        background: hov ? app.color : `${app.color}cc`,
        display:"flex",alignItems:"center",justifyContent:"center",
        fontSize:28,transition:"all .18s",
        transform: hov?"scale(1.12) translateY(-4px)":"scale(1)",
        boxShadow: hov?`0 8px 24px ${app.color}55`:"none",
        border:`1px solid rgba(255,255,255,${hov?.18:.08})`,
      }}>{app.icon}</div>
      <span style={{color:CP.textSecondary,fontSize:10,fontWeight:600,letterSpacing:.2,textAlign:"center",maxWidth:64,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{label}</span>
    </div>
  );
}

// ─── HOME SCREEN (Admin) ─────────────────────────────────────
function HomeScreen({t,openApp,clock,lang,currentUser,jobs,invoices,clients,employees,notify,messages,onIssueInvoice}){
  const L = makeL(lang);
  const billingDue = useMemo(()=>computeBillingDue(clients,jobs,invoices),[clients,jobs,invoices]);
  // Alarm: a phone/browser notification once per reminder
  useEffect(()=>{
    if(!billingDue.length) return;
    let seen={}; try{ seen=JSON.parse(localStorage.getItem("patjac_billing_notified")||"{}"); }catch(e){}
    const fresh = billingDue.filter(g=>!seen[g.key]);
    if(!fresh.length) return;
    notify(`🔔 ${L("Rechnungen zu erstellen","Facturas por emitir","Invoices to issue","Fatture da emettere")}: ${fresh.map(g=>g.clientName).join(", ")}`,"info");
    try{ if("Notification" in window && Notification.permission==="granted") new Notification("🧾 Patjac – "+L("Rechnung erstellen","Emitir factura","Issue invoice","Emetti fattura"),{body:fresh.map(g=>`${g.clientName}: CHF ${g.amount.toFixed(2)}`).join("\n")}); }catch(e){}
    fresh.forEach(g=>seen[g.key]=1); try{ localStorage.setItem("patjac_billing_notified",JSON.stringify(seen)); }catch(e){}
  },[billingDue.map(g=>g.key).join("|")]);
  const dayStr = clock.toLocaleDateString(lang==="DE"?"de-CH":lang==="ES"?"es-ES":lang==="IT"?"it-IT":"en-GB",{weekday:"long",day:"numeric",month:"long"});
  const todayJobs = jobs.filter(j=>j.date===todayStr);
  const pending = invoices.filter(i=>i.status==="overdue").length;
  const unreadMsg = messages.filter(m=>!m.read&&m.to===(currentUser?.id||"admin")).length;
  const allApps = APPS;
  return (
    <div style={{height:"100%",overflow:"auto",padding:"20px 28px 10px"}}>
      <div style={{textAlign:"center",marginBottom:24}}>
        <div style={{color:CP.textPrimary,fontSize:42,fontWeight:700,letterSpacing:-1,lineHeight:1}}>
          {clock.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}
        </div>
        <div style={{color:CP.textSecondary,fontSize:15,marginTop:4}}>{dayStr}</div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10,marginBottom:20}}>
        <CPStat label={t.todayJobs} value={todayJobs.length} icon="📋" accent="#F08C00"/>
        <CPStat label={t.totalClients} value={clients.filter(c=>c.active).length} icon="👥" accent="#1C7ED6"/>
        <CPStat label={t.pendingInvoices} value={pending} icon="🧾" accent={pending>0?"#C92A2A":"#2F9E44"}/>
        <CPStat label={t.activeEmployees} value={employees.filter(e=>e.active).length} icon="👤" accent="#7048E8"/>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(110px,1fr))",gap:12,marginBottom:20}}>
        {allApps.map(app=>(
          <AppTile key={app.id} app={app} label={app.id==="payroll"?(t.payrollTitle||"Payroll"):t[app.id]||app.id} onOpen={()=>openApp(app.id)}
            badge={app.id==="messaging"&&unreadMsg>0?unreadMsg:app.id==="invoices"&&(pending+billingDue.length)>0?(pending+billingDue.length):null}
          />
        ))}
      </div>
      <BillingDuePanel due={billingDue} lang={lang} compact onIssue={g=>onIssueInvoice&&onIssueInvoice(g)}/>
      {todayJobs.length>0&&(
        <CPCard style={{marginBottom:14}}>
          <div style={{color:CP.textSecondary,fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:.5,marginBottom:12}}>📋 {t.todayJobs}</div>
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            {todayJobs.slice(0,4).map(job=>(
              <div key={job.id} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 0",borderBottom:`1px solid ${CP.border}`}}>
                <div>
                  <div style={{color:CP.textPrimary,fontWeight:600,fontSize:14}}>{job.clientName}</div>
                  <div style={{color:CP.textSecondary,fontSize:12}}>{job.employeeName} · {job.timeStart}</div>
                </div>
                <CPBadge text={job.status==="completed"?t.completed:job.status==="inProgress"?t.inProgress:t.pending}
                  color={job.status==="completed"?"green":job.status==="inProgress"?"blue":"yellow"}/>
              </div>
            ))}
          </div>
          <div style={{marginTop:10}}><CPBtn onClick={()=>openApp("jobs")} variant="secondary" size="sm">→ {t.jobs}</CPBtn></div>
        </CPCard>
      )}
    </div>
  );
}

function AppTile({app,label,onOpen,badge}){
  const [hov,setHov]=useState(false);
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:7,cursor:"pointer",position:"relative"}}
      onClick={onOpen} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}>
      <div style={{
        width:72,height:72,borderRadius:20,
        background:hov?app.color:`${app.color}bb`,
        display:"flex",alignItems:"center",justifyContent:"center",fontSize:34,
        transition:"all .18s",transform:hov?"scale(1.08)":"scale(1)",
        boxShadow:hov?`0 6px 20px ${app.color}55`:"none",
        border:`1px solid rgba(255,255,255,${hov?.2:.08})`,position:"relative",
      }}>
        {app.icon}
        {badge&&(
          <div style={{position:"absolute",top:-4,right:-4,background:"#C92A2A",color:"#fff",borderRadius:"50%",width:18,height:18,fontSize:10,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid "+CP.bg}}>{badge}</div>
        )}
      </div>
      <span style={{color:hov?CP.textPrimary:CP.textSecondary,fontSize:11,fontWeight:600,textAlign:"center",lineHeight:1.2,maxWidth:80,wordBreak:"break-word"}}>{label}</span>
    </div>
  );
}

// ─── EMPLOYEE HOME SCREEN ────────────────────────────────────
const EMPLOYEE_APPS = [
  {id:"timeclock", icon:"⏱️", color:"#1098AD"},
  {id:"jobs",      icon:"📋", color:"#F08C00"},
  {id:"academy",   icon:"🎓", color:"#E67700"},
  {id:"documents", icon:"📁", color:"#0CA678"},
  {id:"messaging", icon:"💬", color:"#D6336C"},
  {id:"routes",    icon:"🗺️", color:"#F76707"},
];

// Asks the employee (once) to allow phone/browser notifications so job reminders pop up even with the app in the background.
function NotifyPermissionBanner({lang}){
  const L = makeL(lang);
  const supported = typeof window!=="undefined" && "Notification" in window;
  const [perm,setPerm] = useState(supported ? Notification.permission : "unsupported");
  if(perm!=="default") return null;
  return (
    <div style={{margin:"12px 16px 0",padding:"10px 14px",borderRadius:12,background:"rgba(250,176,5,.12)",border:"1px solid rgba(250,176,5,.35)",display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"}}>
      <span style={{fontSize:20}}>🔔</span>
      <span style={{color:"#FFD43B",fontSize:13,flex:1,minWidth:180}}>{L("Erinnerungen 1 Stunde vor jedem Einsatz erhalten?","¿Quieres recibir un aviso 1 hora antes de cada trabajo?","Get a reminder 1 hour before each job?","Ricevere un promemoria 1 ora prima di ogni lavoro?")}</span>
      <CPBtn size="sm" onClick={async()=>{ try{ setPerm(await Notification.requestPermission()); }catch(e){ setPerm("denied"); } }}>{L("Aktivieren","Activar avisos","Enable","Attiva")}</CPBtn>
    </div>
  );
}

function EmployeeHomeScreen({t,openApp,clock,lang,currentUser,jobs,timeclock,messages,employees,notify}){
  useQstTariffs(employees);
  const L = makeL(lang);
  const dayStr = clock.toLocaleDateString(lang==="DE"?"de-CH":lang==="ES"?"es-ES":lang==="IT"?"it-IT":"en-GB",{weekday:"long",day:"numeric",month:"long"});
  const now = new Date();
  const monthNames = MONTHS[lang]||MONTHS.EN;
  const emp = employees.find(e=>e.id===currentUser?.id);
  const myJobs = jobs.filter(j=>j.employeeId===currentUser?.id);
  const todayJobs = myJobs.filter(j=>j.date===todayStr);
  const todayClock = timeclock.find(tc=>tc.employeeId===currentUser?.id&&tc.date===todayStr);
  const isClockedIn = !!(todayClock?.clockIn&&!todayClock?.clockOut);
  const unread = messages.filter(m=>m.to===currentUser?.id&&!m.read).length;
  const pendingCount = todayJobs.filter(j=>j.status==="pending").length;
  const completedCount = todayJobs.filter(j=>j.status==="completed").length;
  const [ticker,setTicker] = useState(0);

  const greet = () => {
    const h=now.getHours();
    return h<12?(t.greetMorning||L("Guten Morgen","Buenos días","Good morning","Buongiorno")):
           h<18?(t.greetDay||L("Guten Tag","Buenas tardes","Good afternoon","Buon pomeriggio")):
           (t.greetEvening||L("Guten Abend","Buenas noches","Good evening","Buonasera"));
  };

  return (
    <div style={{height:"100%",overflow:"auto",background:"linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0.15) 100%)"}}>
      <NotifyPermissionBanner lang={lang}/>
      {/* Hero */}
      <div style={{textAlign:"center",padding:"28px 24px 20px",background:"linear-gradient(180deg,rgba(16,152,173,0.12),transparent)",borderBottom:`1px solid rgba(255,255,255,0.05)`}}>
        <div style={{width:72,height:72,borderRadius:"50%",background:"linear-gradient(135deg,#1098AD,#0CA678)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px",fontSize:32,boxShadow:"0 0 28px rgba(16,152,173,0.5)",border:"3px solid rgba(255,255,255,0.15)"}}>👤</div>
        <div style={{color:CP.textSecondary,fontSize:14,marginBottom:4}}>{greet()},</div>
        <div style={{color:"#fff",fontSize:24,fontWeight:700,letterSpacing:-.3}}>{emp?.firstName||currentUser?.name}</div>
        <div style={{color:CP.textTertiary,fontSize:13,marginTop:4}}>{dayStr}</div>
        <div style={{fontSize:48,fontWeight:700,color:"#fff",letterSpacing:-2,margin:"14px 0 4px",lineHeight:1}}>
          {clock.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}
        </div>
        <div style={{color:CP.textSecondary,fontSize:13}}>{fmtDate(clock,lang)}</div>
      </div>

      <div style={{padding:"16px 20px 100px"}}>
        {/* Clock buttons */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:16}}>
          <button onClick={()=>openApp("timeclock")} style={{
            padding:"18px 12px",background:isClockedIn?"rgba(16,152,173,0.15)":"rgba(16,152,173,0.85)",
            border:`2px solid ${isClockedIn?"rgba(16,152,173,0.3)":"#1098AD"}`,borderRadius:18,color:"#fff",cursor:"pointer",
            display:"flex",flexDirection:"column",alignItems:"center",gap:8,fontFamily:CP.font,
            boxShadow:isClockedIn?"none":"0 8px 24px rgba(16,152,173,0.4)",
          }}>
            <span style={{fontSize:32}}>🟢</span>
            <span style={{fontSize:15,fontWeight:700}}>{isClockedIn?(t.clockedIn||"Eingecheckt"):(t.clockIn||"Arbeitsbeginn")}</span>
            {todayClock?.clockIn&&<span style={{fontSize:12,opacity:.75}}>{t.since||"Since"}: {todayClock.clockIn}</span>}
          </button>
          <button onClick={()=>openApp("timeclock")} style={{
            padding:"18px 12px",background:isClockedIn?"rgba(201,42,42,0.85)":"rgba(201,42,42,0.12)",
            border:`2px solid ${isClockedIn?"#C92A2A":"rgba(201,42,42,0.25)"}`,borderRadius:18,color:"#fff",
            cursor:isClockedIn?"pointer":"not-allowed",opacity:isClockedIn?1:.5,
            display:"flex",flexDirection:"column",alignItems:"center",gap:8,fontFamily:CP.font,
            boxShadow:isClockedIn?"0 8px 24px rgba(201,42,42,0.4)":"none",
          }}>
            <span style={{fontSize:32}}>🔴</span>
            <span style={{fontSize:15,fontWeight:700}}>{todayClock?.clockOut?(t.clockedOut||"Ausgecheckt"):(t.clockOut||"Arbeitsende")}</span>
            {todayClock?.clockOut&&<span style={{fontSize:12,opacity:.75}}>{t.at||"At"}: {todayClock.clockOut}</span>}
          </button>
        </div>

        {/* Today summary */}
        {(todayClock||todayJobs.length>0)&&(
          <CPCard style={{marginBottom:16,background:"rgba(0,0,0,0.25)",border:`1px solid rgba(255,255,255,0.06)`}}>
            <div style={{color:CP.textSecondary,fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:.5,marginBottom:10}}>
              {t.todaySummary||"Today's Summary"}
            </div>
            <div style={{display:"flex",gap:14,flexWrap:"wrap"}}>
              {todayClock?.clockIn&&<div><div style={{color:CP.textTertiary,fontSize:10}}>{t.clockIn}</div><div style={{color:"#69DB7C",fontWeight:700,fontSize:18}}>{todayClock.clockIn}</div></div>}
              {todayClock?.clockOut&&<div><div style={{color:CP.textTertiary,fontSize:10}}>{t.clockOut}</div><div style={{color:"#FF8787",fontWeight:700,fontSize:18}}>{todayClock.clockOut}</div></div>}
              {todayClock?.hours&&<div><div style={{color:CP.textTertiary,fontSize:10}}>{t.workHours||"Std."}</div><div style={{color:"#FFD43B",fontWeight:700,fontSize:18}}>{parseFloat(todayClock.hours).toFixed(1)}h</div></div>}
              {todayJobs.length>0&&<div><div style={{color:CP.textTertiary,fontSize:10}}>{t.todayJobs}</div><div style={{color:"#74C0FC",fontWeight:700,fontSize:18}}>{completedCount}/{todayJobs.length}</div></div>}
              {unread>0&&<div><div style={{color:CP.textTertiary,fontSize:10}}>{lang==="DE"?"Neu":lang==="ES"?"Nuevo":lang==="IT"?"Nuovo":"New"}</div><div style={{color:"#D6336C",fontWeight:700,fontSize:18}}>{unread} 💬</div></div>}
            </div>
          </CPCard>
        )}

        {/* 6 App tiles */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:16}}>
          {EMPLOYEE_APPS.map(app=>{
            let badge=null, sublabel=null;
            if(app.id==="timeclock") sublabel=isClockedIn?(t.active||"Active"):(t.notClockedIn||"Not clocked in");
            if(app.id==="jobs"){ badge=pendingCount>0?pendingCount:null; sublabel=`${todayJobs.length} ${t.today2||"today"}`; }
            if(app.id==="documents") sublabel=L("Lohn · Verträge","Nóminas · contratos","Pay · contracts","Paga · contratti");
            if(app.id==="messaging"){ badge=unread>0?unread:null; sublabel=unread>0?`${unread} ${lang==="DE"?"neu":lang==="ES"?"nuevo":lang==="IT"?"nuovo":"new"}`:null; }
            if(app.id==="routes"){ const r=jobs.filter(j=>j.employeeId===currentUser?.id&&j.date===todayStr); sublabel=`${r.length} stops`; }
            return (
              <EmployeeAppTile key={app.id} app={app}
                label={app.id==="payroll"?(t.payrollTitle||"Payroll"):t[app.id]||app.id}
                sublabel={sublabel} badge={badge}
                isClockedIn={app.id==="timeclock"?isClockedIn:undefined}
                onOpen={()=>openApp(app.id)}/>
            );
          })}
        </div>

        {/* Today jobs list */}
        {todayJobs.length>0&&(
          <CPCard style={{marginBottom:12}}>
            <div style={{color:CP.textSecondary,fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:.5,marginBottom:12}}>📋 {t.todayJobs}</div>
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              {todayJobs.map(job=>(
                <div key={job.id} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 12px",borderRadius:12,background:job.status==="completed"?"rgba(47,158,68,0.08)":"rgba(240,140,0,0.07)",border:`1px solid ${job.status==="completed"?"rgba(47,158,68,0.2)":"rgba(240,140,0,0.18)"}`}}>
                  <div>
                    <div style={{color:CP.textPrimary,fontWeight:700,fontSize:14}}>{job.clientName}</div>
                    <div style={{color:CP.textSecondary,fontSize:12,marginTop:2}}>{job.serviceType==="cleaning"?t.cleaning:t.gardening} · {job.timeStart}–{job.timeEnd}</div>
                  </div>
                  <div style={{display:"flex",alignItems:"center",gap:8}}>
                    <CPBadge text={job.status==="completed"?t.completed:job.status==="inProgress"?t.inProgress:t.pending} color={job.status==="completed"?"green":job.status==="inProgress"?"blue":"yellow"}/>
                    <CPBtn onClick={()=>openApp("jobs")} variant="secondary" size="sm">→</CPBtn>
                  </div>
                </div>
              ))}
            </div>
          </CPCard>
        )}

        {/* Documents shortcut (payslips, contracts, files) */}
        <CPCard style={{marginBottom:12,cursor:"pointer"}} onClick={()=>openApp("documents")}>
          <div style={{display:"flex",alignItems:"center",gap:12}}>
            <div style={{fontSize:30}}>📁</div>
            <div style={{flex:1}}>
              <div style={{color:CP.textPrimary,fontWeight:700,fontSize:15}}>{L("Meine Dokumente","Mis documentos","My documents","I miei documenti")}</div>
              <div style={{color:CP.textSecondary,fontSize:12}}>{L("Lohnabrechnung jeden Monat, Verträge und weitere Dokumente zum Herunterladen und Drucken","Nómina de cada mes, contratos y otros documentos para descargar e imprimir","Monthly payslips, contracts and other documents to download and print","Buste paga mensili, contratti e altri documenti da scaricare e stampare")}</div>
            </div>
            <div style={{color:CP.textTertiary,fontSize:18}}>›</div>
          </div>
        </CPCard>

        {/* Access code */}
        <CPCard style={{background:"rgba(0,0,0,0.2)",border:`1px solid rgba(255,255,255,0.05)`}}>
          <div style={{display:"flex",alignItems:"center",gap:12}}>
            <div style={{fontSize:28}}>🔑</div>
            <div>
              <div style={{color:CP.textSecondary,fontSize:12,fontWeight:600}}>{lang==="DE"?"Ihr Zugangscode":lang==="ES"?"Su código de acceso":lang==="IT"?"Il vostro codice":"Your access code"}</div>
              <span style={{color:CP.textTertiary,fontSize:12}}><span style={{color:"#69DB7C",fontWeight:700}}>{t.code}:</span> <span style={{fontFamily:"monospace",fontSize:13,color:CP.textPrimary,letterSpacing:1}}>{currentUser?.code||"—"}</span></span>
            </div>
          </div>
        </CPCard>
      </div>
    </div>
  );
}

function EmployeeAppTile({app,label,sublabel,badge,isClockedIn,onOpen}){
  const [hov,setHov]=useState(false);
  const bgColor=isClockedIn===true?"rgba(47,158,68,0.85)":isClockedIn===false?"rgba(201,42,42,0.15)":(hov?app.color:`${app.color}cc`);
  return (
    <div onClick={onOpen} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{background:bgColor,border:`2px solid ${hov||isClockedIn===true?app.color:"rgba(255,255,255,0.1)"}`,borderRadius:22,padding:"22px 16px",cursor:"pointer",transition:"all .18s",display:"flex",flexDirection:"column",alignItems:"center",gap:8,boxShadow:hov?`0 12px 32px ${app.color}55`:"none",transform:hov?"translateY(-2px) scale(1.01)":"scale(1)",position:"relative"}}>
      {badge&&<div style={{position:"absolute",top:10,right:12,background:"#C92A2A",color:"#fff",borderRadius:"50%",width:22,height:22,fontSize:11,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid rgba(10,14,24,0.9)"}}>{badge}</div>}
      {isClockedIn!==undefined&&<div style={{position:"absolute",top:12,left:14,width:10,height:10,borderRadius:"50%",background:isClockedIn?"#2F9E44":"#C92A2A",boxShadow:`0 0 8px ${isClockedIn?"#2F9E44":"#C92A2A"}`,border:"2px solid rgba(255,255,255,0.3)"}}/>}
      <span style={{fontSize:44}}>{app.icon}</span>
      <span style={{color:"#fff",fontSize:15,fontWeight:700,textAlign:"center"}}>{label}</span>
      {sublabel&&<span style={{color:"rgba(255,255,255,0.7)",fontSize:12,fontWeight:600,textAlign:"center",marginTop:-2}}>{sublabel}</span>}
    </div>
  );
}


// ── QUELLENSTEUER (withholding tax) – official ESTV 2026 tariff for canton Zurich ──
// The full tariff (all codes A/B/C/H × children × church) is stored in Supabase table qst_tariffs
// (imported from https://www.estv2.admin.ch/qst/2026/loehne/tar26zh.zip via edge function "qst-import").
// The employee's code is derived from their situation; the % is looked up by monthly QST-relevant income.
const QST_YEAR = 2026;
const QST_API = { url:"https://rtviublrukagwxaypmit.supabase.co", key:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0dml1YmxydWthZ3d4YXlwbWl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk5MjkwMjEsImV4cCI6MjEwNTUwNTAyMX0.Ykj1dz8elWC12GP-m88IBiDc_Hscrw1AjPY9Tw7p-G8" };
const QST_CACHE = {}; // code -> [{f,r}] sorted by income_from
const QST_SITUATIONS = [
  {id:"single",        L:["Ledig/geschieden/verwitwet, ohne Kinder","Soltero/a, divorciado/a o viudo/a, sin hijos","Single/divorced/widowed, no children","Celibe/divorziato/vedovo, senza figli"]},
  {id:"singleKids",    L:["Alleinerziehend (lebt mit den Kindern)","Vive solo/a con sus hijos (familia monoparental)","Single parent (lives with children)","Genitore solo (vive con i figli)"]},
  {id:"marriedSingle", L:["Verheiratet – Ehepartner/in arbeitet NICHT","Casado/a, el cónyuge NO trabaja","Married – spouse does NOT work","Sposato/a – coniuge NON lavora"]},
  {id:"marriedDouble", L:["Verheiratet – Ehepartner/in arbeitet auch","Casado/a, el cónyuge también trabaja","Married – spouse also works","Sposato/a – anche il coniuge lavora"]},
];
const qstSubject = emp => ["B","L","G","other"].includes(emp.permit||"");
function qstCodeFor(emp){
  if(!qstSubject(emp) || !emp.maritalStatus) return null;
  const kids = Math.min(9,(Number(emp.kidsUnder12)||0)+(Number(emp.kidsTeen)||0)+(Number(emp.kidsEdu)||0));
  const ch = emp.church ? "Y" : "N";
  switch(emp.maritalStatus){
    case "marriedSingle": return `B${kids}${ch}`;
    case "marriedDouble": return `C${kids}${ch}`;
    case "singleKids":    return kids>0 ? `H${kids}${ch}` : `A0${ch}`;
    default:              return `A0${ch}`;
  }
}
async function loadQstTariffs(codes){
  const need = [...new Set(codes.filter(c=>c && !QST_CACHE[c]))];
  if(!need.length) return false;
  let ok = false;
  for(const c of need){ // one request per code (keeps each response well under the 1000-row API limit)
    try{
      const r = await fetch(`${QST_API.url}/rest/v1/qst_tariffs?select=income_from,rate&year=eq.${QST_YEAR}&code=eq.${c}&order=income_from.asc`,
        {headers:{apikey:QST_API.key, Authorization:`Bearer ${QST_API.key}`}});
      if(!r.ok) continue;
      const rows = await r.json();
      if(rows.length){ QST_CACHE[c] = rows.map(x=>({f:Number(x.income_from), r:Number(x.rate)})); ok = true; }
    }catch(e){}
  }
  return ok;
}
function qstRateFor(code, monthlyIncome){
  const rows = QST_CACHE[code]; if(!rows || !rows.length) return null;
  let rate = 0;
  for(const x of rows){ if(x.f <= monthlyIncome) rate = x.r; else break; }
  return rate;
}
// React hook: loads the tariffs needed for a list of employees; re-renders when ready.
function useQstTariffs(employees){
  const [,setTick] = useState(0);
  const codes = (employees||[]).map(qstCodeFor).filter(Boolean).sort().join(",");
  useEffect(()=>{ if(codes) loadQstTariffs(codes.split(",")).then(ok=>{ if(ok) setTick(x=>x+1); }); },[codes]);
}

// ── SWISS PAYROLL 2026 ──────────────────────────────────────────────────────
// Sources: AHV/IV/EO 5.3% + ALV 1.1% each side; BVG 2026 (entry CHF 22'680, coordination CHF 26'460,
// min coordinated 3'780, max 64'260, age credits 7/10/15/18% split 50/50); GAV Reinigung 2026
// (vacation 8.33%/10.64%, holidays 1.5%/3.6%, 13th salary 8.33% for hourly); Familienzulagen ZH 2026
// (CHF 215 <12 y., 268 12–16 y., 268 education). NBU/KTG/BU rates depend on the company's insurance policy.
const PAYROLL_2026 = {
  ahv:0.053, alv:0.011, nbu:0.012, ktg:0.005, bu:0.005,
  bvgEntry:22680, bvgCoord:26460, bvgMinCoord:3780, bvgMaxCoord:64260,
  kidUnder12:215, kidTeen:268, kidEdu:268, famMinIncome:7560,
};
const ageAt = (birthDate, onDate) => {
  if(!birthDate) return null;
  const b=new Date(birthDate+"T00:00:00"); if(isNaN(b)) return null;
  let a=onDate.getFullYear()-b.getFullYear();
  const m=onDate.getMonth()-b.getMonth(); if(m<0||(m===0&&onDate.getDate()<b.getDate())) a--;
  return a;
};
function calcSwissPayroll(emp, timeclock, month, year, jobs, extras){
  const P = PAYROLL_2026;
  const monthStr = `${year}-${String(month).padStart(2,"0")}`;
  const refDate = new Date(year, month, 0); // last day of month
  // Hourly employees: agreed (planned) hours of their jobs this month. Clock-in/out does not change pay.
  let hoursWorked;
  if(Array.isArray(jobs)){
    hoursWorked = jobs.filter(j=>j.employeeId===emp.id && j.date && j.date.startsWith(monthStr))
      .reduce((s,j)=>s+hoursBetween(j.timeStart,j.timeEnd),0);
    hoursWorked = Math.round(hoursWorked*100)/100;
  } else {
    hoursWorked = timeclock.filter(tc=>tc.employeeId===emp.id && tc.date&&tc.date.startsWith(monthStr) && tc.hours)
      .reduce((s,tc)=>s+(tc.hours||0),0);
  }
  const age = ageAt(emp.birthDate, refDate);
  const yearsService = emp.startDate ? (refDate - new Date(emp.startDate+"T00:00:00"))/(365.25*86400000) : 0;
  const fiveWeeks = age!==null && (age<=20 || (age>=50 && yearsService>=5));
  const r2 = n=>Math.round(n*100)/100;

  // ── Earnings (AHV-subject) ──
  const earnings = [];
  let base;
  if(emp.type==="hourly"){
    const rate = Number(emp.hourlyRate)||0;
    base = r2(hoursWorked*rate);
    earnings.push({key:"base", qty:hoursWorked, rate, amount:base});
    const vacPct = fiveWeeks?10.64:8.33;
    earnings.push({key:"vacation", pct:vacPct, amount:r2(base*vacPct/100)});
    const cat = emp.gavCategory||"";
    const holPct = /^reinigung_/.test(cat) ? 1.5 : /^(spezial|spital|fahrzeug)_/.test(cat) ? 3.6 : 0;
    if(holPct) earnings.push({key:"holidays", pct:holPct, amount:r2(base*holPct/100)});
    earnings.push({key:"thirteenth", pct:8.33, amount:r2(base*8.33/100)});
  } else {
    base = Number(emp.fixedSalary)||0;
    earnings.push({key:"monthly", amount:base});
    if(emp.has_13th) earnings.push({key:"thirteenth", amount:r2(base/12)});
  }
  const grossTotal = r2(earnings.reduce((s,e)=>s+e.amount,0));

  // ── Family allowances (not AHV-subject, added to pay) ──
  const kidsU = Number(emp.kidsUnder12)||0, kidsT = Number(emp.kidsTeen)||0, kidsE = Number(emp.kidsEdu)||0;
  const family = r2(kidsU*P.kidUnder12 + kidsT*P.kidTeen + kidsE*P.kidEdu);
  const familyLow = family>0 && grossTotal*12 < P.famMinIncome;

  // ── Employee deductions ──
  const weeklyHours = emp.type==="hourly" ? hoursWorked/4.33 : 42;
  const nbuApplies = weeklyHours >= 8;
  const annual = grossTotal*12;
  let bvgCoordMonthly = 0, bvgEmpPct = 0;
  if(annual > P.bvgEntry && (age===null || age>=25)){
    const coord = Math.min(Math.max(annual-P.bvgCoord, P.bvgMinCoord), P.bvgMaxCoord);
    bvgCoordMonthly = r2(coord/12);
    const credit = age===null?7 : age<35?7 : age<45?10 : age<55?15 : 18;
    bvgEmpPct = credit/2;
  }
  // Withholding tax: official ZH tariff by code & monthly income (gross + family allowances); manual % only as fallback
  const qstCode = qstCodeFor(emp);
  const qstLookup = qstCode ? qstRateFor(qstCode, grossTotal + family) : null;
  const qstPct = qstSubject(emp) ? (qstLookup!==null ? qstLookup : (Number(emp.qstRate)||0)) : 0;
  const deductions = [
    {key:"ahv", base:grossTotal, pct:P.ahv*100, amount:r2(grossTotal*P.ahv)},
    {key:"alv", base:grossTotal, pct:P.alv*100, amount:r2(grossTotal*P.alv)},
  ];
  if(nbuApplies) deductions.push({key:"nbu", base:grossTotal, pct:P.nbu*100, amount:r2(grossTotal*P.nbu)});
  deductions.push({key:"ktg", base:grossTotal, pct:P.ktg*100, amount:r2(grossTotal*P.ktg)});
  if(bvgEmpPct) deductions.push({key:"bvg", base:bvgCoordMonthly, pct:bvgEmpPct, amount:r2(bvgCoordMonthly*bvgEmpPct/100)});
  if(qstPct) deductions.push({key:"qst", base:r2(grossTotal+family), pct:qstPct, amount:r2((grossTotal+family)*qstPct/100)});
  const totalDeductEmp = r2(deductions.reduce((s,d)=>s+d.amount,0));

  // ── Expenses (not taxable): transport + meals from the monthly work sheet ──
  const spesen = r2(Number(extras?.spesen)||0);
  const net = r2(grossTotal - totalDeductEmp + family + spesen);

  // ── Employer contributions ──
  const employer = [
    {key:"ahv", pct:P.ahv*100, amount:r2(grossTotal*P.ahv)},
    {key:"alv", pct:P.alv*100, amount:r2(grossTotal*P.alv)},
    {key:"bu",  pct:P.bu*100,  amount:r2(grossTotal*P.bu)},
    {key:"ktg", pct:P.ktg*100, amount:r2(grossTotal*P.ktg)},
  ];
  if(bvgEmpPct) employer.push({key:"bvg", pct:bvgEmpPct, amount:r2(bvgCoordMonthly*bvgEmpPct/100)});
  const totalDeductEmpl = r2(employer.reduce((s,d)=>s+d.amount,0));
  const totalCost = r2(grossTotal + totalDeductEmpl + family + spesen);
  const byKey = (arr,k)=> (arr.find(x=>x.key===k)?.amount)||0;
  const f = n=>Number(n).toFixed(2);
  return {
    // structured
    earnings, deductions, employer, age, fiveWeeks, weeklyHours:r2(weeklyHours), nbuApplies,
    family, familyLow, kids:{u:kidsU,t:kidsT,e:kidsE}, spesen, qstPct, qstCode, qstFromTariff: qstLookup!==null,
    // legacy string fields (used elsewhere in the app)
    hoursWorked:Number(hoursWorked).toFixed(1), gross:f(base), thirteenth:f(byKey(earnings,"thirteenth")),
    grossTotal:f(grossTotal), ahvEmp:f(byKey(deductions,"ahv")), alvEmp:f(byKey(deductions,"alv")),
    nbuvEmp:f(byKey(deductions,"nbu")), bvgEmp:f(byKey(deductions,"bvg")), ktgEmp:f(byKey(deductions,"ktg")),
    qstEmp:f(byKey(deductions,"qst")), totalDeductEmp:f(totalDeductEmp), net:f(net),
    ahvEmpl:f(byKey(employer,"ahv")), alvEmpl:f(byKey(employer,"alv")), buvEmpl:f(byKey(employer,"bu")),
    bvgEmpl:f(byKey(employer,"bvg")), ktgEmpl:f(byKey(employer,"ktg")), totalDeductEmpl:f(totalDeductEmpl),
    totalCost:f(totalCost), taxableSalary:f(grossTotal - totalDeductEmp + family),
  };
}

const MONTHS = {
  DE:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],
  ES:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
  EN:["January","February","March","April","May","June","July","August","September","October","November","December"],
  IT:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],
};

// ── MONTHLY WORK SHEET (Arbeitsrapport) with routes & transport expenses ─────
// Distances: OpenStreetMap Nominatim (geocoding) + OSRM (driving distance). Results cached in the browser.
// If the map services are unreachable, a straight-line estimate × 1.3 is used and marked "≈".
const KM_RATE_CAR = 0.75;      // ESTV 2026 private car rate CHF/km
const MEAL_ALLOWANCE = 16;     // GAV Reinigung Art. 14: CHF 16/day when ≥ 6 h away
const lsGet = (k,d)=>{ try{ const v=localStorage.getItem(k); return v?JSON.parse(v):d; }catch(e){ return d; } };
const lsSet = (k,v)=>{ try{ localStorage.setItem(k,JSON.stringify(v)); }catch(e){} };
const fmtAddr = o => o ? `${o.street||""} ${o.number||""}, ${o.postalCode||""} ${o.city||""}`.replace(/\s+/g," ").replace(/^[\s,]+|[\s,]+$/g,"").trim() : "";
const sleep = ms => new Promise(r=>setTimeout(r,ms));
let _lastGeo = 0;
async function geocodeCH(addr){
  if(!addr) return null;
  const cache = lsGet("patjac_geo",{});
  if(cache[addr]) return cache[addr];
  const wait = 1100 - (Date.now()-_lastGeo); if(wait>0) await sleep(wait); // Nominatim: max 1 request/second
  _lastGeo = Date.now();
  try{
    const r = await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=ch&q=${encodeURIComponent(addr)}`,{headers:{"Accept-Language":"de"}});
    const j = await r.json();
    if(j && j[0]){ const p={lat:+j[0].lat, lon:+j[0].lon}; cache[addr]=p; lsSet("patjac_geo",cache); return p; }
  }catch(e){}
  return null;
}
const haversineKm = (a,b)=>{ const R=6371, toR=x=>x*Math.PI/180; const dLa=toR(b.lat-a.lat), dLo=toR(b.lon-a.lon);
  const h=Math.sin(dLa/2)**2+Math.cos(toR(a.lat))*Math.cos(toR(b.lat))*Math.sin(dLo/2)**2; return 2*R*Math.asin(Math.sqrt(h)); };
async function routeKm(addrA, addrB){
  if(!addrA||!addrB) return null;
  if(addrA===addrB) return {km:0, approx:false};
  const key=`${addrA}→${addrB}`; const cache=lsGet("patjac_routes",{});
  if(cache[key]) return cache[key];
  const a=await geocodeCH(addrA), b=await geocodeCH(addrB);
  if(!a||!b) return null;
  let res=null;
  try{
    const r=await fetch(`https://router.project-osrm.org/route/v1/driving/${a.lon},${a.lat};${b.lon},${b.lat}?overview=false`);
    const j=await r.json();
    if(j && j.routes && j.routes[0]) res={km:Math.round(j.routes[0].distance/100)/10, approx:false};
  }catch(e){}
  if(!res) res={km:Math.round(haversineKm(a,b)*1.3*10)/10, approx:true};
  cache[key]=res; lsSet("patjac_routes",cache);
  return res;
}
const spesenKey = (empId,y,m)=>`${empId}_${y}-${String(m).padStart(2,"0")}`;
const getSavedSpesen = (empId,y,m)=> (lsGet("patjac_spesen",{})[spesenKey(empId,y,m)]||0);
const saveSpesen = (empId,y,m,val)=>{ const all=lsGet("patjac_spesen",{}); all[spesenKey(empId,y,m)]=val; lsSet("patjac_spesen",all); };

function WorkSheetModal({emp, month, year, jobs, clients, lang, onClose, companySettings, onSpesen, canSend}){
  const L = makeL(lang);
  const cs = companySettings||{name:"Patjac Reinigung Garten & Services",street:"",number:"",postalCode:"",city:"Zürich",uid:""};
  const monthName = (MONTHS[lang]||MONTHS.EN)[month-1];
  const monthStr = `${year}-${String(month).padStart(2,"0")}`;
  const [rows,setRows] = useState(null);
  const [progress,setProgress] = useState("");
  const [withMeals,setWithMeals] = useState(()=>lsGet("patjac_meals_on",true));
  const mode = emp.transportMode||"public";
  const ticket = Number(emp.ticketPrice)||0;
  const homeAddr = fmtAddr(emp);

  useEffect(()=>{
    let alive=true;
    (async()=>{
      const mine = (jobs||[]).filter(j=>j.employeeId===emp.id && j.date && j.date.startsWith(monthStr))
        .sort((a,b)=>`${a.date}${a.timeStart||""}`.localeCompare(`${b.date}${b.timeStart||""}`));
      const out=[]; let prevDate=null, prevAddr=null, i=0;
      for(const j of mine){
        i++; if(alive) setProgress(`${i}/${mine.length}`);
        const c = clients.find(x=>x.id===j.clientId);
        const addr = fmtAddr(c);
        const first = j.date!==prevDate;
        const from = first ? homeAddr : prevAddr;
        const r = await routeKm(from, addr);
        out.push({
          from, date:j.date, client:j.clientName||c?.name||"", addr,
          planStart:j.timeStart||"", planEnd:j.timeEnd||"", hours:hoursBetween(j.timeStart,j.timeEnd),
          actStart:j.actualStart||"", actEnd:j.actualEnd||"",
          first, km:r?r.km:null, approx:r?r.approx:false, missing:!r,
        });
        prevDate=j.date; prevAddr=addr;
      }
      if(alive){ setRows(out); setProgress(""); }
    })();
    return ()=>{ alive=false; };
  },[emp.id, monthStr]);

  // Per-row reimbursement: only trips between clients (home → first job is private commute)
  const rowCost = r => r.first ? 0 : (mode==="car" ? (r.km||0)*KM_RATE_CAR : (r.km>0 ? ticket : 0));
  const days = rows ? [...new Set(rows.map(r=>r.date))] : [];
  const dayMeal = d => {
    if(!withMeals) return 0;
    const rs = rows.filter(r=>r.date===d);
    const start = rs.map(r=>r.planStart).sort()[0], end = rs.map(r=>r.planEnd).sort().slice(-1)[0];
    return hoursBetween(start,end) >= 6 ? MEAL_ALLOWANCE : 0;
  };
  const totals = rows ? {
    hours: Math.round(rows.reduce((s,r)=>s+r.hours,0)*100)/100,
    kmHome: Math.round(rows.filter(r=>r.first).reduce((s,r)=>s+(r.km||0),0)*10)/10,
    kmBetween: Math.round(rows.filter(r=>!r.first).reduce((s,r)=>s+(r.km||0),0)*10)/10,
    transport: Math.round(rows.reduce((s,r)=>s+rowCost(r),0)*100)/100,
    meals: days.reduce((s,d)=>s+dayMeal(d),0),
  } : null;
  const spesenTotal = totals ? Math.round((totals.transport+totals.meals)*100)/100 : 0;

  useEffect(()=>{ if(totals){ saveSpesen(emp.id,year,month,spesenTotal); onSpesen&&onSpesen(spesenTotal); } },[rows, withMeals]);

  const fm = n=>Number(n||0).toLocaleString("de-CH",{minimumFractionDigits:2,maximumFractionDigits:2});
  const fd = d=>{ const x=new Date(d+"T00:00:00"); return x.toLocaleDateString(lang==="DE"?"de-CH":lang==="ES"?"es-ES":lang==="IT"?"it-IT":"en-GB",{weekday:"short"})+" "+fmtDate(d,lang); };
  const th = {padding:"5px 6px",textAlign:"left",fontWeight:700,borderBottom:"2px solid #000",fontSize:10.5};
  const td = {padding:"4px 6px",borderBottom:"1px solid #eee",fontSize:10.5,verticalAlign:"top"};

  const download = (returnHtml)=>{
    const el=document.getElementById("patjac-worksheet"); if(!el) return;
    const title=L("Arbeitsrapport","Hoja de trabajo","Work sheet","Rapporto di lavoro");
    const html=`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>${title} ${emp.name} ${monthName} ${year}</title>
<style>*{box-sizing:border-box;font-family:Arial,Helvetica,sans-serif}body{padding:24px;max-width:1000px;margin:0 auto;color:#000}
.hint{background:#1C7ED6;color:#fff;padding:10px;border-radius:6px;text-align:center;margin-bottom:14px;font-size:12px}
@media print{.hint{display:none}@page{size:A4 landscape;margin:1.2cm}}</style></head><body>
<div class="hint">${L("💡 Drucken → Als PDF speichern","💡 Imprimir → Guardar como PDF","💡 Print → Save as PDF","💡 Stampa → Salva come PDF")}</div>${el.innerHTML}</body></html>`;
    if(returnHtml===true) return html;
    try{ const b=new Blob([html],{type:"text/html;charset=utf-8"}); const u=URL.createObjectURL(b); const a=document.createElement("a");
      a.href=u; a.download=`${title}_${emp.name.replace(/\s+/g,"_")}_${monthName}_${year}.html`; document.body.appendChild(a); a.click();
      setTimeout(()=>{document.body.removeChild(a);URL.revokeObjectURL(u);},3000);
    }catch(e){ const w=window.open("about:blank","_blank"); if(w){w.document.write(html);w.document.close();} }
  };

  return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.9)",zIndex:99999,padding:16,overflowY:"auto",display:"flex",justifyContent:"center",alignItems:"flex-start"}} onClick={onClose}>
      <div style={{background:"rgba(8,12,24,0.99)",border:"1px solid rgba(28,126,214,0.5)",borderRadius:20,width:"min(1040px,97vw)"}} onClick={e=>e.stopPropagation()}>
        <div style={{background:"linear-gradient(90deg,#1C7ED6,#0CA678)",borderRadius:"20px 20px 0 0",padding:"12px 18px",display:"flex",justifyContent:"space-between",alignItems:"center",gap:10,flexWrap:"wrap"}}>
          <div style={{color:"#fff",fontWeight:700}}>📋 {L("Arbeitsrapport","Hoja mensual de trabajo","Monthly work sheet","Rapporto mensile")} · {emp.name} · {monthName} {year}</div>
          <div style={{display:"flex",gap:8,alignItems:"center"}}>
            <label style={{color:"#fff",fontSize:12,display:"flex",alignItems:"center",gap:6,cursor:"pointer"}}>
              <input type="checkbox" checked={withMeals} onChange={e=>{setWithMeals(e.target.checked);lsSet("patjac_meals_on",e.target.checked);}}/>
              {L("Verpflegung CHF 16 (GAV)","Comida CHF 16 (GAV)","Meals CHF 16 (GAV)","Pasto CHF 16 (CCL)")}
            </label>
            {canSend&&rows&&<SendToDocsButton lang={lang} employeeId={emp.id} category="worksheet" period={monthStr} style={{padding:"7px 14px"}}
              title={`${L("Arbeitsrapport","Hoja mensual","Work sheet","Rapporto")} ${monthName} ${year}`} getHtml={()=>download(true)}/>}
            <button onClick={()=>download()} disabled={!rows} style={{background:"rgba(255,255,255,0.2)",border:"1px solid rgba(255,255,255,0.4)",borderRadius:10,color:"#fff",padding:"7px 14px",cursor:"pointer",fontWeight:700}}>⬇️ {L("Herunterladen","Descargar","Download","Scarica")}</button>
            <button onClick={onClose} style={{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:10,color:"#fff",padding:"7px 12px",cursor:"pointer"}}>✕</button>
          </div>
        </div>
        <div style={{padding:16}}>
          {!rows ? (
            <div style={{color:"#74C0FC",textAlign:"center",padding:40}}>🗺️ {L("Distanzen werden berechnet…","Calculando distancias…","Calculating distances…","Calcolo distanze…")} {progress}</div>
          ) : (
          <div id="patjac-worksheet" style={{background:"#fff",color:"#000",borderRadius:8,padding:"24px 26px",fontFamily:"Arial,Helvetica,sans-serif"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",borderBottom:"2.5px solid #1C7ED6",paddingBottom:10,marginBottom:12}}>
              <div>
                <img src={PATJAC_LOGO} alt="Patjac" style={{height:38,display:"block",marginBottom:4}}/>
                <div style={{fontSize:10,color:"#555"}}>{cs.name} · {cs.street} {cs.number}, {cs.postalCode} {cs.city}</div>
              </div>
              <div style={{textAlign:"right"}}>
                <div style={{fontSize:16,fontWeight:700,color:"#1C7ED6"}}>{L("ARBEITSRAPPORT","HOJA MENSUAL DE TRABAJO","MONTHLY WORK SHEET","RAPPORTO MENSILE")}</div>
                <div style={{fontSize:12,fontWeight:600}}>{monthName} {year}</div>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,fontSize:11,marginBottom:12}}>
              <div><b>{L("Mitarbeiter/in","Empleado/a","Employee","Dipendente")}:</b> {emp.name}</div>
              <div><b>{L("Anstellung","Tipo","Type","Tipo")}:</b> {emp.type==="fixed"?L("Festlohn","Salario fijo","Fixed salary","Fisso"):L("Stundenlohn","Por horas","Hourly","A ore")}</div>
              <div><b>{L("Transport","Transporte","Transport","Trasporto")}:</b> {mode==="car"?`🚗 ${L("Auto","Coche","Car","Auto")} CHF ${KM_RATE_CAR}/km`:`🚋 ${L("ÖV","Transporte público","Public transport","Trasporto pubblico")} CHF ${fm(ticket)}/${L("Fahrt","trayecto","trip","tratta")}`}</div>
              <div style={{gridColumn:"1 / span 3"}}><b>{L("Wohnadresse","Domicilio","Home address","Domicilio")}:</b> {homeAddr||<span style={{color:"#c00"}}>{L("fehlt – bitte im Profil erfassen","falta: añádalo en la ficha del empleado","missing – add to profile","mancante")}</span>}</div>
            </div>
            <table style={{width:"100%",borderCollapse:"collapse"}}>
              <thead><tr>
                <th style={th}>{L("Datum","Fecha","Date","Data")}</th>
                <th style={th}>{L("Arbeitsort","Lugar de trabajo","Workplace","Luogo")}</th>
                <th style={th}>{L("Geplant","Planificado","Planned","Pianificato")}</th>
                <th style={th}>{L("Ein / Aus (effektiv)","Entrada / salida (real)","In / out (actual)","Entrata / uscita")}</th>
                <th style={{...th,textAlign:"right"}}>{L("Std.","Horas","Hours","Ore")}</th>
                <th style={th}>{L("Strecke","Recorrido","Route","Tragitto")}</th>
                <th style={{...th,textAlign:"right"}}>km</th>
                <th style={{...th,textAlign:"right"}}>{L("Transport CHF","Transporte CHF","Transport CHF","Trasporto CHF")}</th>
              </tr></thead>
              <tbody>
                {rows.map((r,i)=>(
                  <tr key={i} style={{background:r.first?"#f6f9fc":"#fff"}}>
                    <td style={td}>{r.first?fd(r.date):""}</td>
                    <td style={td}><b>{r.client}</b><br/><span style={{color:"#555"}}>{r.addr}</span></td>
                    <td style={td}>{r.planStart}–{r.planEnd}</td>
                    <td style={td}>{r.actStart||"—"} / {r.actEnd||"—"}</td>
                    <td style={{...td,textAlign:"right"}}>{r.hours.toFixed(2)}</td>
                    <td style={{...td,color:"#555"}}>{r.first?`🏠 → ${L("1. Einsatz","1.er trabajo","1st job","1° lavoro")}`:`↪ ${L("von vorherigem Kunden","desde el cliente anterior","from previous client","dal cliente precedente")}`}</td>
                    <td style={{...td,textAlign:"right",cursor:"pointer"}} title={L("Klicken, um km zu korrigieren","Pulse para corregir los km","Click to correct km","Clic per correggere i km")}
                      onClick={()=>{
                        const v = window.prompt(L("Kilometer für diese Strecke:","Kilómetros de este recorrido:","Kilometres for this route:","Chilometri per questo tragitto:"), r.km??"");
                        if(v===null) return; const km=parseFloat(String(v).replace(",",".")); if(isNaN(km)) return;
                        const cache=lsGet("patjac_routes",{}); cache[`${r.from}→${r.addr}`]={km,approx:false,manual:true}; lsSet("patjac_routes",cache);
                        setRows(prev=>prev.map((x,k)=>k===i?{...x,km,approx:false,missing:false}:x));
                      }}>{r.missing?<span style={{color:"#c00",fontWeight:700}}>?</span>:`${r.approx?"≈":""}${r.km.toFixed(1)}`}</td>
                    <td style={{...td,textAlign:"right"}}>{r.first?<span style={{color:"#888",fontSize:9.5}}>{L("privat","privado","private","privato")}</span>:fm(rowCost(r))}</td>
                  </tr>
                ))}
                {rows.length===0&&<tr><td colSpan={8} style={{...td,textAlign:"center",color:"#888",padding:20}}>{L("Keine Einsätze in diesem Monat","No hay trabajos este mes","No jobs this month","Nessun lavoro questo mese")}</td></tr>}
              </tbody>
            </table>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginTop:14,fontSize:11}}>
              <div style={{border:"1px solid #dce5f0",borderRadius:6,padding:"8px 10px"}}>
                <div style={{color:"#555"}}>{L("Arbeitstage / Einsätze","Días trabajados / trabajos","Days / jobs","Giorni / lavori")}</div>
                <div style={{fontWeight:700,fontSize:14}}>{days.length} / {rows.length}</div>
              </div>
              <div style={{border:"1px solid #dce5f0",borderRadius:6,padding:"8px 10px"}}>
                <div style={{color:"#555"}}>{L("Vereinbarte Stunden","Horas pactadas","Agreed hours","Ore concordate")}</div>
                <div style={{fontWeight:700,fontSize:14}}>{totals.hours.toFixed(2)} h</div>
              </div>
              <div style={{border:"1px solid #dce5f0",borderRadius:6,padding:"8px 10px"}}>
                <div style={{color:"#555"}}>km: 🏠→{L("Arbeit","trabajo","work","lavoro")} / {L("zwischen Kunden","entre clientes","between clients","tra clienti")}</div>
                <div style={{fontWeight:700,fontSize:14}}>{totals.kmHome.toFixed(1)} / {totals.kmBetween.toFixed(1)}</div>
              </div>
            </div>
            <table style={{width:"100%",borderCollapse:"collapse",marginTop:12,fontSize:11.5}}>
              <tbody>
                <tr><td style={td}>{mode==="car"?L(`Fahrtkosten Auto: ${totals.kmBetween.toFixed(1)} km × CHF ${KM_RATE_CAR}`,`Transporte en coche: ${totals.kmBetween.toFixed(1)} km × CHF ${KM_RATE_CAR}`,`Car: ${totals.kmBetween.toFixed(1)} km × CHF ${KM_RATE_CAR}`,`Auto: ${totals.kmBetween.toFixed(1)} km × CHF ${KM_RATE_CAR}`):L("Billette öffentlicher Verkehr zwischen Kunden","Billetes de transporte público entre clientes","Public transport tickets between clients","Biglietti trasporto pubblico tra clienti")}</td><td style={{...td,textAlign:"right"}}>{fm(totals.transport)}</td></tr>
                {withMeals&&<tr><td style={td}>{L("Verpflegungsentschädigung (Tage ≥ 6 Std.) × CHF 16","Comida (días de 6 h o más) × CHF 16","Meal allowance (days ≥ 6 h) × CHF 16","Indennità pasto (giorni ≥ 6 h) × CHF 16")}</td><td style={{...td,textAlign:"right"}}>{fm(totals.meals)}</td></tr>}
                <tr style={{background:"#e8f5ee"}}><td style={{...td,fontWeight:700}}>{L("Total Spesen (steuerfrei, mit dem Lohn ausbezahlt)","Total de gastos (no imponibles, se pagan con la nómina)","Total expenses (tax-free, paid with salary)","Totale spese (esenti, pagate con lo stipendio)")}</td><td style={{...td,textAlign:"right",fontWeight:700}}>CHF {fm(spesenTotal)}</td></tr>
              </tbody>
            </table>
            <div style={{marginTop:10,fontSize:9.5,color:"#555",lineHeight:1.5}}>
              {rows.some(r=>r.missing)&&<div style={{color:"#c00",fontWeight:700,marginBottom:4}}>{L("⚠️ Einige Distanzen konnten nicht berechnet werden (?). Auf das ? klicken und km eingeben.","⚠️ No se pudieron calcular algunas distancias (?). Pulse sobre el ? y escriba los km.","⚠️ Some distances could not be calculated (?). Click the ? and enter the km.","⚠️ Alcune distanze non calcolate (?). Cliccare sul ? e inserire i km.")}</div>}
              {L("Grundlagen: Reisezeit und Fahrkosten zwischen Kunden gelten als Arbeitszeit bzw. werden ersetzt (GAV Reinigung Art. 14; Art. 327a OR). Der Weg von zu Hause zum ersten Einsatz ist Arbeitsweg (privat). Auto: CHF 0.75/km (ESTV 2026). Distanzen: OpenStreetMap; ≈ = geschätzt.",
                 "Base legal: el tiempo de viaje entre clientes es tiempo de trabajo y los gastos de transporte se reembolsan (GAV de limpieza, Art. 14; Art. 327a CO). El trayecto de casa al primer trabajo es privado. Coche: CHF 0.75/km (tarifa ESTV 2026). Distancias calculadas con OpenStreetMap; ≈ significa estimado.",
                 "Basis: travel time and costs between clients are working time / reimbursed (GAV Art. 14; Art. 327a CO). Home → first job is private commute. Car CHF 0.75/km (ESTV 2026). Distances: OpenStreetMap; ≈ = estimated.",
                 "Base: tempo e spese di viaggio tra clienti sono tempo di lavoro / rimborsati (CCL Art. 14; Art. 327a CO). Casa → primo lavoro è privato. Auto CHF 0.75/km (AFC 2026). Distanze: OpenStreetMap; ≈ = stimato.")}
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:40,marginTop:26,fontSize:10,color:"#555",textAlign:"center"}}>
              <div style={{borderTop:"1px solid #333",paddingTop:5}}>{L("Mitarbeiter/in","Empleado/a","Employee","Dipendente")}: {emp.name}</div>
              <div style={{borderTop:"1px solid #333",paddingTop:5}}>{cs.name}</div>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── PAYSLIP MODAL – On-Screen Preview + PDF Download ────────
function PayslipModal({emp, pay, month, year, lang, t, onClose, companySettings, canSend}){
  const cs = companySettings || {
    name:"Patjac Reinigung Garten & Services",logo:"🌿",
    street:"Industriestrasse",number:"14",postalCode:"8004",city:"Zürich",
    phone:"+41 44 123 4567",email:"info@patjacservices.ch",
    uid:"CHE-123.456.789",mwstNr:"CHE-123.456.789 MWST",
    iban:"CH56 0483 5012 3456 7800 9",bic:"CRESCHZZ80A",
  };
  const monthNames = MONTHS[lang]||MONTHS.EN;
  const monthName  = monthNames[month-1];
  const payDate    = fmtDate(new Date(year, month, 4), lang);
  const L = makeL(lang);

  const generatePDF = (returnHtml) => {
    const content = document.getElementById("patjac-payslip-preview");
    if(!content) { alert("Preview not found"); return; }

    const title = L("Lohnabrechnung","Nómina","Payslip","Busta Paga");
    const filename = `${title}_${emp.name.replace(/\s+/g,"_")}_${monthName}_${year}.html`;

    const css = `
*{margin:0;padding:0;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif}
body{background:#fff;color:#000;padding:32px;font-size:12px;line-height:1.6;max-width:820px;margin:0 auto}
.header{display:flex;justify-content:space-between;align-items:flex-start;padding-bottom:14px;border-bottom:2.5px solid #1C7ED6;margin-bottom:18px}
.co-info{font-size:11px;color:#555;margin-top:3px;line-height:1.6}
.badge{background:#C92A2A;color:#fff;font-size:10px;font-weight:700;padding:3px 10px;border-radius:4px;display:inline-block;margin-top:6px}
.emp-box{background:#f0f4f8;border:1px solid #dce5f0;border-radius:8px;padding:12px 16px;margin-bottom:16px}
.emp-title{font-weight:700;color:#1C7ED6;font-size:11px;text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px}
.emp-grid{display:grid;grid-template-columns:1fr 1fr;gap:3px 24px}
.emp-row{display:flex;justify-content:space-between;padding:3px 0;border-bottom:1px solid #dce5f0;font-size:11px}
.emp-lbl{color:#666}.emp-val{font-weight:600}
.sec{font-weight:700;color:#fff;padding:7px 14px;font-size:12px;margin-top:16px;margin-bottom:0}
.sec-blue{background:#1C7ED6}.sec-red{background:#dc2626}.sec-gray{background:#6b7280}
table{width:100%;border-collapse:collapse}
td{padding:5px 12px;border-bottom:1px solid #f0f0f0;font-size:12px}
td:last-child{text-align:right;font-weight:600}
.alt td{background:#f8f9fa}
.deduct td{color:#dc2626}
.deduct-total td{background:#fee2e2;color:#991b1b;font-weight:700}
.gross-total td{background:#dbeafe;font-weight:700;font-size:13px}
.net-box{background:linear-gradient(90deg,#1C7ED6,#0CA678);border-radius:10px;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;margin:18px 0}
.net-lbl{color:#fff;font-size:17px;font-weight:700}
.net-sub{color:rgba(255,255,255,.8);font-size:11px;margin-top:3px}
.net-val{color:#fff;font-size:32px;font-weight:700}
.pay-box{background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:12px 16px;margin-bottom:14px}
.pay-title{font-weight:700;color:#1e40af;font-size:11px;text-transform:uppercase;margin-bottom:8px}
.pay-grid{display:grid;grid-template-columns:1fr 1fr;gap:4px 20px}
.pay-row{display:flex;justify-content:space-between;padding:2px 0;border-bottom:1px solid #dbeafe;font-size:11px}
.pay-k{color:#555}.pay-v{font-weight:600;color:#1e40af}
.employer-total td{background:#f3f4f6;font-weight:700;color:#374151}
.tax-box{background:#fffbeb;border:1px solid #fde047;border-radius:8px;padding:10px 14px;margin-bottom:14px}
.tax-title{font-weight:700;color:#92400e;font-size:11px;margin-bottom:4px}
.tax-text{color:#78350f;font-size:11px}
.footer{border-top:1px solid #e5e7eb;padding-top:10px;margin-top:16px;display:flex;justify-content:space-between;font-size:10px;color:#9ca3af}
.print-hint{background:#1C7ED6;color:#fff;text-align:center;padding:12px;border-radius:8px;margin-bottom:20px;font-size:13px}
@media print{.print-hint{display:none}body{padding:0}@page{margin:1.5cm;size:A4 portrait}}
`;

    const printHint = lang==="DE"
      ? "💡 Für PDF: Datei → Drucken → 'Als PDF speichern' wählen"
      : lang==="ES"
      ? "💡 Para PDF: Archivo → Imprimir → Seleccionar 'Guardar como PDF'"
      : lang==="IT"
      ? "💡 Per PDF: File → Stampa → Seleziona 'Salva come PDF'"
      : "💡 To save as PDF: File → Print → Select 'Save as PDF'";

    const html = `<!DOCTYPE html>
<html lang="${lang.toLowerCase()}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${title} – ${emp.name} – ${monthName} ${year}</title>
  <style>${css}</style>
</head>
<body>
  <div class="print-hint">${printHint}</div>
  ${content.innerHTML}
</body>
</html>`;

    if(returnHtml===true) return html;

    // Method 1: Blob URL download (preferred - works in most browsers)
    try {
      const blob = new Blob([html], { type: "text/html;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 3000);
      return;
    } catch(e1) {
      // Method 1 failed, try Method 2
    }

    // Method 2: Data URI (fallback for stricter sandboxes)
    try {
      const b64 = btoa(unescape(encodeURIComponent(html)));
      const a = document.createElement("a");
      a.href = "data:text/html;base64," + b64;
      a.download = filename;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      setTimeout(() => document.body.removeChild(a), 3000);
      return;
    } catch(e2) {
      // Both failed
    }

    // Method 3: Open in new tab (last resort)
    const w = window.open("about:blank", "_blank");
    if(w) {
      w.document.write(html);
      w.document.close();
    } else {
      alert(printHint);
    }
  };


  return (
    <div style={{
      position:"fixed",inset:0,background:"rgba(0,0,0,0.9)",backdropFilter:"blur(14px)",
      display:"flex",alignItems:"flex-start",justifyContent:"center",
      zIndex:99999,padding:"16px",overflowY:"auto",
    }} onClick={onClose}>
      <div style={{
        background:"rgba(8,12,24,0.99)",border:"1px solid rgba(28,126,214,0.5)",
        borderRadius:22,width:"min(840px,96vw)",marginTop:8,marginBottom:8,
        boxShadow:"0 32px 80px rgba(0,0,0,0.95)",
      }} onClick={e=>e.stopPropagation()}>

        {/* ACTION BAR */}
        <div style={{
          background:"linear-gradient(90deg,#1C7ED6,#0CA678)",
          borderRadius:"22px 22px 0 0",padding:"13px 20px",
          display:"flex",justifyContent:"space-between",alignItems:"center",
        }}>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <span style={{fontSize:22}}>💵</span>
            <div>
              <div style={{color:"#fff",fontWeight:700,fontSize:15}}>{emp.name}</div>
              <div style={{color:"rgba(255,255,255,.75)",fontSize:12}}>{monthName} {year} · CHF {pay.net} {L("Netto","Neto","Net","Netto")}</div>
            </div>
          </div>
          <div style={{display:"flex",gap:8}}>
            {canSend&&<SendToDocsButton lang={lang} employeeId={emp.id} category="payslip" period={`${year}-${String(month).padStart(2,"0")}`}
              title={`${L("Lohnabrechnung","Nómina","Payslip","Busta paga")} ${monthName} ${year}`} getHtml={()=>generatePDF(true)}/>}
            <button onClick={()=>generatePDF()} style={{
              background:"rgba(255,255,255,0.2)",border:"1px solid rgba(255,255,255,0.4)",
              borderRadius:10,color:"#fff",padding:"8px 16px",cursor:"pointer",
              fontSize:13,fontWeight:700,fontFamily:CP.font,
              display:"flex",alignItems:"center",gap:6,
            }}>⬇️ {L("PDF herunterladen","Descargar PDF","Download PDF","Scarica PDF")}</button>
            <button onClick={onClose} style={{
              background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",
              borderRadius:10,color:"#fff",padding:"8px 14px",cursor:"pointer",fontSize:13,
            }}>✕</button>
          </div>
        </div>

        {/* PREVIEW BANNER */}
        <div style={{
          margin:"14px 20px 0",padding:"8px 14px",
          background:"rgba(28,126,214,0.1)",border:"1px solid rgba(28,126,214,0.25)",
          borderRadius:10,display:"flex",alignItems:"center",gap:8,
        }}>
          <span style={{fontSize:16}}>👁️</span>
          <span style={{color:"#74C0FC",fontSize:12,fontWeight:600}}>
            {L(
              "Vorschau – Originalgetreue Darstellung vor dem PDF-Export",
              "Vista previa – Representación fiel antes de exportar PDF",
              "Preview – Accurate representation before PDF export",
              "Anteprima – Rappresentazione fedele prima dell'esportazione PDF"
            )}
          </span>
        </div>

        {/* ═══════════ WHITE PAPER DOCUMENT ═══════════ */}
        <div style={{padding:"16px 20px 20px"}}>
        <div id="patjac-payslip-preview" style={{
          background:"#fff",color:"#000",
          borderRadius:10,padding:"32px 36px",
          fontFamily:"Arial,Helvetica,sans-serif",fontSize:12,lineHeight:1.5,
          boxShadow:"0 4px 40px rgba(0,0,0,0.7)",
          maxWidth:700,margin:"0 auto",
        }}>

          {/* ── HEADER: Logo + Adresse oben links ── */}
          <div style={{marginBottom:24}}>
            <img src={PATJAC_LOGO} alt="Patjac" style={{height:44,width:"auto",objectFit:"contain",display:"block",marginBottom:8}}/>
          </div>

          {/* ── Firmenadresse ── */}
          <div style={{fontSize:10,color:"#555",borderBottom:"1px solid #ccc",paddingBottom:4,marginBottom:14}}>
            {cs.name}, {cs.street} {cs.number}, CH-{cs.postalCode} {cs.city}
          </div>

          {/* ── Empfänger (Mitarbeiter) ── */}
          <div style={{marginBottom:20,fontSize:12}}>
            <div style={{fontWeight:600}}>{emp.name}</div>
            {emp.street&&<div>{emp.street} {emp.number||""}</div>}
            {emp.postalCode&&<div>{emp.postalCode} {emp.city||""}</div>}
          </div>

          {/* ── Rechte Seite: Abrechnungsdetails ── */}
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16}}>
            <div>
              <div style={{fontWeight:700,fontSize:14}}>
                {L("Lohnabrechnung","Nómina","Payslip","Busta Paga")} {monthName} {year}
              </div>
            </div>
            <div style={{fontSize:11,textAlign:"right",lineHeight:1.8}}>
              <div style={{display:"flex",justifyContent:"space-between",gap:32}}>
                <span style={{color:"#555"}}>{L("Abrechnungsdatum","Fecha nómina","Pay date","Data stipendio")}:</span>
                <span style={{fontWeight:600}}>{payDate}</span>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",gap:32}}>
                <span style={{color:"#555"}}>{L("Personal-Nr.","Nº Personal","Employee No.","N. Personale")}:</span>
                <span style={{fontWeight:600}}>{emp.id?.slice(0,6).toUpperCase()||"—"}</span>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",gap:32}}>
                <span style={{color:"#555"}}>{L("Anstellung in %","% Empleo","Employment %","% Impiego")}:</span>
                <span style={{fontWeight:600}}>100</span>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",gap:32}}>
                <span style={{color:"#555"}}>SV-Nr. / AHV:</span>
                <span style={{fontWeight:600}}>{emp.ahv||"—"}</span>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",gap:32}}>
                <span style={{color:"#555"}}>{L("Lohnklasse","Clase salarial","Pay grade","Classe retrib.")}:</span>
                <span style={{fontWeight:600}}>{emp.type==="fixed"?"F":"H"}</span>
              </div>
              {emp.gavCategory&&(()=>{const cat=GAV_CATEGORIES.find(c=>c.id===emp.gavCategory);return cat?(
                <div style={{display:"flex",justifyContent:"space-between",gap:32}}>
                  <span style={{color:"#555"}}>GAV-Kategorie:</span>
                  <span style={{fontWeight:600,color:"#0CA678",fontSize:11}}>{cat.label}</span>
                </div>
              ):null;})()}
            </div>
          </div>

          {/* ── Haupttabelle (2026) ── */}
          {(()=>{
            const fm = n=>Number(n||0).toLocaleString("de-CH",{minimumFractionDigits:2,maximumFractionDigits:2});
            const td = {padding:"4px 6px",borderBottom:"1px solid #eee"};
            const tdr = {...td,textAlign:"right"};
            const EL = {
              base:L("Stundenlohn (vereinbarte Std.)","Salario por horas (horas pactadas)","Hourly wage (agreed hours)","Salario orario (ore concordate)"),
              monthly:L("Monatslohn","Salario mensual","Monthly salary","Salario mensile"),
              vacation:L("Ferienentschädigung","Compensación de vacaciones","Holiday pay","Indennità ferie"),
              holidays:L("Feiertagsentschädigung","Compensación de festivos","Public holiday pay","Indennità festivi"),
              thirteenth:L("13. Monatslohn (anteilig)","13.º salario (parte proporcional)","13th salary (pro rata)","13ª mensilità (pro rata)"),
            };
            const DL = {
              ahv:L("AHV/IV/EO (Alters-, Invaliden-, Erwerbsersatz)","AVS/AI/APG (jubilación, invalidez, pérdida de ganancia)","AHV/IV/EO (old age, disability, income loss)","AVS/AI/IPG (vecchiaia, invalidità, IPG)"),
              alv:L("ALV (Arbeitslosenversicherung)","Seguro de desempleo (AD)","Unemployment insurance (ALV)","Assicurazione disoccupazione (AD)"),
              nbu:L("NBU (Nichtberufsunfall)","Seguro accidentes no laborales (ANP)","Non-occupational accident (NBU)","Infortuni non professionali (INP)"),
              ktg:L("KTG (Krankentaggeld)","Seguro de pérdida de ganancia por enfermedad","Daily sickness allowance insurance","Indennità giornaliera malattia"),
              bvg:L("BVG / Pensionskasse","Caja de pensiones (LPP / 2.º pilar)","Pension fund (BVG)","Cassa pensione (LPP)"),
              qst:L("Quellensteuer","Impuesto en la fuente","Withholding tax","Imposta alla fonte")+(pay.qstCode?` (${L("Tarif","tarifa","tariff","tariffa")} ${pay.qstCode})`:""),
              bu:L("BU (Berufsunfall, nur Arbeitgeber)","Accidentes laborales (solo empresa)","Occupational accident (employer only)","Infortuni professionali (solo datore)"),
            };
            return (<>
            <table style={{width:"100%",borderCollapse:"collapse",marginBottom:0,fontSize:12}}>
              <thead>
                <tr style={{borderBottom:"2px solid #000"}}>
                  <th style={{padding:"4px 6px",textAlign:"left",fontWeight:700}}>{L("Lohnart","Concepto","Pay type","Voce")}</th>
                  <th style={{padding:"4px 6px",textAlign:"right",fontWeight:700}}>{L("Basis","Base","Base","Base")}</th>
                  <th style={{padding:"4px 6px",textAlign:"right",fontWeight:700}}>{L("Ansatz","Tasa","Rate","Tasso")}</th>
                  <th style={{padding:"4px 6px",textAlign:"right",fontWeight:700}}>CHF</th>
                </tr>
              </thead>
              <tbody>
                {pay.earnings.map(e=>(
                  <tr key={e.key}>
                    <td style={td}>{EL[e.key]}</td>
                    <td style={tdr}>{e.key==="base"?`${e.qty} h`:(e.pct?fm(pay.earnings[0].amount):"")}</td>
                    <td style={tdr}>{e.key==="base"?fm(e.rate):(e.pct?`${e.pct}%`:"")}</td>
                    <td style={{...tdr,fontWeight:600}}>{fm(e.amount)}</td>
                  </tr>
                ))}
                <tr style={{borderTop:"2px solid #000",borderBottom:"2px solid #000"}}>
                  <td style={{padding:"6px",fontWeight:700,fontSize:13}}>{L("Bruttolohn (AHV-pflichtig)","Salario bruto (sujeto a AVS)","Gross salary (AHV-subject)","Salario lordo (soggetto AVS)")}</td>
                  <td></td><td></td>
                  <td style={{padding:"6px",textAlign:"right",fontWeight:700,fontSize:13}}>{fm(pay.grossTotal)}</td>
                </tr>
                <tr><td colSpan={4} style={{padding:"4px 0"}}></td></tr>
                {pay.deductions.map((d,i)=>(
                  <tr key={d.key} style={{background:i%2===0?"#fafafa":"#fff"}}>
                    <td style={td}>{DL[d.key]}</td>
                    <td style={{...tdr,color:"#555"}}>{fm(d.base)}</td>
                    <td style={{...tdr,color:"#555"}}>{Number(d.pct).toFixed(2)}%</td>
                    <td style={{...tdr,color:"#c00"}}>-{fm(d.amount)}</td>
                  </tr>
                ))}
                <tr>
                  <td style={{padding:"5px 6px",borderBottom:"1px solid #ddd",fontWeight:600}}>{L("Total Abzüge","Total deducciones","Total deductions","Totale deduzioni")}</td>
                  <td colSpan={2} style={{borderBottom:"1px solid #ddd"}}></td>
                  <td style={{padding:"5px 6px",borderBottom:"1px solid #ddd",textAlign:"right",color:"#c00",fontWeight:600}}>-{fm(pay.totalDeductEmp)}</td>
                </tr>
                {pay.family>0&&(
                  <tr>
                    <td style={td}>{L("Familienzulagen (Kinder-/Ausbildungszulagen)","Asignaciones familiares (hijos / formación)","Family allowances (child / education)","Assegni familiari (figli / formazione)")}</td>
                    <td style={{...tdr,color:"#555"}}>{[pay.kids.u?`${pay.kids.u}×215`:"",pay.kids.t?`${pay.kids.t}×268`:"",pay.kids.e?`${pay.kids.e}×268`:""].filter(Boolean).join(" + ")}</td>
                    <td></td>
                    <td style={{...tdr,color:"#0a7d4f",fontWeight:600}}>+{fm(pay.family)}</td>
                  </tr>
                )}
                {pay.spesen>0&&(
                  <tr>
                    <td style={td}>{L("Spesen (Transport, Verpflegung) – steuerfrei","Gastos (transporte, comidas) – no imponibles","Expenses (transport, meals) – tax-free","Spese (trasporto, pasti) – esenti")}</td>
                    <td></td><td></td>
                    <td style={{...tdr,color:"#0a7d4f",fontWeight:600}}>+{fm(pay.spesen)}</td>
                  </tr>
                )}
                <tr><td colSpan={4} style={{padding:"4px 0"}}></td></tr>
                <tr style={{borderTop:"2px solid #000",borderBottom:"2px solid #000",background:"#f0f0f0"}}>
                  <td style={{padding:"8px 6px",fontWeight:700,fontSize:14}}>{L("Auszahlung (Nettolohn)","A cobrar (salario neto)","Net pay","Netto da pagare")}</td>
                  <td colSpan={2}></td>
                  <td style={{padding:"8px 6px",textAlign:"right",fontWeight:700,fontSize:14}}>{fm(pay.net)}</td>
                </tr>
              </tbody>
            </table>

            {/* Employer contributions */}
            <div style={{marginTop:16,fontWeight:700,fontSize:12,color:"#1C7ED6"}}>{L("Beiträge des Arbeitgebers (zusätzlich, nicht vom Lohn abgezogen)","Aportes de la empresa (adicionales, no se descuentan del salario)","Employer contributions (additional, not deducted from pay)","Contributi del datore (aggiuntivi, non trattenuti)")}</div>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:11,marginTop:4}}>
              <tbody>
                {pay.employer.map(d=>(
                  <tr key={d.key}><td style={td}>{DL[d.key]}</td><td style={{...tdr,color:"#555"}}>{Number(d.pct).toFixed(2)}%</td><td style={tdr}>{fm(d.amount)}</td></tr>
                ))}
                <tr><td style={{...td,fontWeight:700}}>{L("Total Arbeitgeberkosten (Lohn + Beiträge + Zulagen + Spesen)","Coste total para la empresa (salario + aportes + asignaciones + gastos)","Total employer cost","Costo totale datore")}</td><td></td><td style={{...tdr,fontWeight:700}}>{fm(pay.totalCost)}</td></tr>
              </tbody>
            </table>

            {/* Rights & benefits summary */}
            <div style={{marginTop:14,background:"#f0f7ff",border:"1px solid #bfdbfe",borderRadius:6,padding:"10px 12px",fontSize:10.5,color:"#1e3a5f",lineHeight:1.55}}>
              <div style={{fontWeight:700,marginBottom:4}}>{L("Ihre gesetzlichen Leistungen","Sus beneficios de ley","Your statutory benefits","Le sue prestazioni di legge")}</div>
              <div>• {L(`Ferien: ${pay.fiveWeeks?5:4} Wochen/Jahr`,`Vacaciones: ${pay.fiveWeeks?5:4} semanas al año`,`Holidays: ${pay.fiveWeeks?5:4} weeks/year`,`Ferie: ${pay.fiveWeeks?5:4} settimane/anno`)}{emp.type==="hourly"?L(" – bei Stundenlohn mit jeder Abrechnung ausbezahlt."," – con salario por hora se pagan en cada nómina."," – paid with each payslip for hourly pay."," – pagate con ogni busta per paga oraria."):"."}</div>
              <div>• {L("Krankheit: 80 % Lohn bis 730 Tage (ab 3. Tag). Unfall: SUVA/UVG","Enfermedad: 80 % del salario hasta 730 días (desde el 3.er día). Accidentes: SUVA/LAA","Illness: 80% salary up to 730 days (from day 3). Accident: SUVA/UVG","Malattia: 80% fino a 730 giorni (dal 3° giorno). Infortunio: SUVA/LAINF")}{pay.nbuApplies?"":L(" (Nichtberufsunfall nicht versichert: unter 8 Std./Woche – über Krankenkasse)"," (accidentes no laborales no cubiertos: menos de 8 h/semana – cubrir con su seguro médico)"," (non-occupational accidents not covered: under 8 h/week)"," (INP non coperti: meno di 8 h/settimana)")}.</div>
              <div>• {L("AHV: Altersrente, Invaliden- und Hinterlassenenschutz für Sie und Ihre Familie.","AVS/AI: pensión de jubilación y protección por invalidez y para su familia en caso de fallecimiento.","AHV: old-age pension, disability and survivors' cover for you and your family.","AVS/AI: rendita di vecchiaia, invalidità e superstiti per lei e la famiglia.")}</div>
              <div>• {pay.bvgEmp>0?L("Pensionskasse (BVG): aktiv – Arbeitgeber zahlt die Hälfte.","Caja de pensiones (LPP): activa, la empresa paga la mitad.","Pension fund (BVG): active – employer pays half.","Cassa pensione (LPP): attiva – il datore paga metà."):L("Pensionskasse (BVG): erst ab Jahreslohn CHF 22'680 obligatorisch.","Caja de pensiones (LPP): obligatoria solo desde un salario anual de CHF 22'680.","Pension fund (BVG): mandatory only from annual salary CHF 22,680.","Cassa pensione (LPP): obbligatoria solo da CHF 22'680 annui.")}</div>
              <div>• {L("Familienzulagen ZH 2026: CHF 215 pro Kind bis 12 J., CHF 268 von 12–16 J., CHF 268 Ausbildungszulage (bis 25 J.).","Asignaciones familiares ZH 2026: CHF 215 por hijo hasta 12 años, CHF 268 de 12 a 16 años y CHF 268 por formación (hasta 25 años).","Family allowances ZH 2026: CHF 215 per child up to 12, CHF 268 age 12–16, CHF 268 education allowance (up to 25).","Assegni familiari ZH 2026: CHF 215 per figlio fino a 12 anni, CHF 268 da 12 a 16, CHF 268 formazione (fino a 25).")}{pay.familyLow?L(" ⚠️ Anspruch erst ab Jahreseinkommen CHF 7'560 – bitte prüfen."," ⚠️ Solo hay derecho desde unos ingresos anuales de CHF 7'560; hay que revisarlo."," ⚠️ Entitlement only from annual income CHF 7,560 – please check."," ⚠️ Diritto solo da CHF 7'560 annui – verificare."):""}</div>
              <div>• {L("Mutterschaft 16 Wochen, Vaterschaft 2 Wochen (EO).","Maternidad 16 semanas, paternidad 2 semanas (APG).","Maternity 16 weeks, paternity 2 weeks (EO).","Maternità 16 settimane, paternità 2 settimane (IPG).")}</div>
              {pay.qstPct>0?<div>• {L("Quellensteuer gemäss Tarif des Kantons Zürich.","Impuesto en la fuente según la tarifa del cantón de Zúrich.","Withholding tax per Canton Zurich tariff.","Imposta alla fonte secondo tariffa ZH.")}</div>
               :<div>• {L("Keine Quellensteuer: Einkommenssteuer wird über die Steuererklärung bezahlt.","Sin impuesto en la fuente: el impuesto sobre la renta se paga con la declaración de impuestos.","No withholding tax: income tax paid via tax return.","Nessuna imposta alla fonte: imposta tramite dichiarazione.")}</div>}
            </div>
            </>);
          })()}

          {/* ── Auszahlung ── */}
          <div style={{marginTop:20,padding:"10px 0",borderTop:"1px solid #ccc"}}>
            <div style={{fontWeight:700,marginBottom:4}}>{L("Auszahlung","Pago","Payment","Pagamento")}</div>
            <div style={{fontSize:11,color:"#333"}}>
              {cs.name}, {cs.city} · {cs.iban} · {L("CHF","CHF","CHF","CHF")} {Number(pay.net).toLocaleString("de-CH",{minimumFractionDigits:2})}
            </div>
          </div>

          {/* ── Footer ── */}
          <div style={{marginTop:18,borderTop:"1px solid #eee",paddingTop:10,display:"flex",justifyContent:"space-between",fontSize:10,color:"#888"}}>
            <span>{cs.name} · {cs.uid}</span>
            <span>{L("Erstellt am","Generado el","Generated on","Generato il")} {fmtDate(new Date(),lang)}</span>
            <span>🇨🇭 Swiss Payroll {year}</span>
          </div>

        </div>
        </div>
      </div>
    </div>
  );
}

// ── NEW-EMPLOYEE ACCESS MESSAGE: app link + PIN + confidentiality warning ──
// Public production address of the app. Deployment/preview addresses (e.g. patjac-app-xxxx-patjacservices.vercel.app)
// are protected by Vercel and send visitors to the Vercel login page, so the invitation always uses this one.
const APP_PUBLIC_URL = "https://patjac-app.vercel.app";
const swissWa = (phone) => { let d=String(phone||"").replace(/[^\d+]/g,""); if(d.startsWith("+")) d=d.slice(1); else if(d.startsWith("00")) d=d.slice(2); else if(d.startsWith("0")) d="41"+d.slice(1); return d; };
const accessMessage = (emp, lang) => {
  const L = makeL(lang);
  const link = APP_PUBLIC_URL;
  return {
    subject: L("Ihr Zugang zur Patjac-App","Tu acceso a la app de Patjac","Your access to the Patjac app","Il tuo accesso all'app Patjac"),
    body: L(
`Hallo ${emp.name},

willkommen bei Patjac Reinigung Garten & Services!

📲 App: ${link}
🔑 Ihr persönlicher PIN: ${emp.pin}

So melden Sie sich an: Link öffnen → «Mitarbeiter» wählen → PIN eingeben.

⚠️ WICHTIG: Ihr PIN ist persönlich und vertraulich. Geben Sie ihn an niemanden weiter. Die Zugangsdaten sind Eigentum der Firma; eine Weitergabe oder Nutzung durch Dritte ist verboten und kann arbeitsrechtliche Konsequenzen haben (Treue- und Schweigepflicht, Art. 321a OR). Bei Verlust sofort die Firma informieren.

Patjac Reinigung Garten & Services`,
`Hola ${emp.name}:

¡Bienvenido/a a Patjac Reinigung Garten & Services!

📲 App: ${link}
🔑 Tu PIN personal: ${emp.pin}

Cómo entrar: abre el enlace → elige «Empleado» → escribe tu PIN.

⚠️ IMPORTANTE: tu PIN es personal y confidencial. No lo compartas con nadie. Las credenciales son propiedad de la empresa; está prohibido darlas a otra persona o que otra persona las use, y hacerlo puede tener consecuencias laborales (deber de lealtad y confidencialidad, Art. 321a del Código de Obligaciones). Si lo pierdes, avisa a la empresa de inmediato.

Patjac Reinigung Garten & Services`,
`Hello ${emp.name},

welcome to Patjac Reinigung Garten & Services!

📲 App: ${link}
🔑 Your personal PIN: ${emp.pin}

How to log in: open the link → choose «Employee» → enter your PIN.

⚠️ IMPORTANT: your PIN is personal and confidential. Do not share it with anyone. The credentials are company property; passing them on or letting anyone else use them is forbidden and may have employment consequences (duty of loyalty and confidentiality, Art. 321a CO). If you lose it, inform the company immediately.

Patjac Reinigung Garten & Services`,
`Ciao ${emp.name},

benvenuto/a in Patjac Reinigung Garten & Services!

📲 App: ${link}
🔑 Il tuo PIN personale: ${emp.pin}

Come accedere: apri il link → scegli «Dipendente» → inserisci il PIN.

⚠️ IMPORTANTE: il PIN è personale e riservato. Non condividerlo con nessuno. Le credenziali sono proprietà dell'azienda; cederle o farle usare ad altri è vietato e può avere conseguenze disciplinari (dovere di fedeltà e riservatezza, Art. 321a CO). In caso di smarrimento avvisa subito l'azienda.

Patjac Reinigung Garten & Services`)
  };
};
function AccessInviteModal({emp, lang, onClose}){
  const L = makeL(lang);
  const msg = accessMessage(emp, lang);
  const btn = (bg)=>({background:bg,border:"none",borderRadius:12,color:"#fff",padding:"12px 14px",cursor:"pointer",fontWeight:700,fontSize:14,textAlign:"left",width:"100%"});
  const wa = swissWa(emp.phone);
  return (
    <CPModal title={`🔑 ${L("Zugang senden","Enviar acceso","Send access","Invia accesso")} – ${emp.name}`} onClose={onClose} width={520}>
      <div style={{color:CP.textSecondary,fontSize:13,marginBottom:10}}>{L("Wählen Sie, wie die Zugangsdaten gesendet werden sollen:","Elija cómo enviar los datos de acceso:","Choose how to send the access details:","Scegli come inviare i dati di accesso:")}</div>
      <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:12}}>
        <button disabled={!wa} onClick={()=>window.open(`https://wa.me/${wa}?text=${encodeURIComponent(msg.body)}`,"_blank")} style={{...btn("#25D366"),opacity:wa?1:.4}}>💬 WhatsApp {emp.phone?`→ ${emp.phone}`:`(${L("keine Nummer","sin teléfono","no number","nessun numero")})`}</button>
        <div style={{color:CP.textSecondary,fontSize:12,marginTop:4}}>📧 E-mail {emp.email?`→ ${emp.email}`:`(${L("keine E-Mail erfasst – bitte im Mitarbeiter speichern","sin e-mail guardado – agréguelo en la ficha del empleado","no email saved","nessuna e-mail")})`}</div>
        <CompanyEmailButtons to={emp.email||""} subject={msg.subject} body={msg.body} lang={lang} disabled={!emp.email}/>
        <a href={emp.phone?smsUrl(emp.phone,msg.body):undefined} onClick={e=>{if(!emp.phone)e.preventDefault();}} style={{...btn("#7048E8"),opacity:emp.phone?1:.4,textDecoration:"none",boxSizing:"border-box",marginTop:4}}>📱 SMS {emp.phone?`→ ${emp.phone}`:""}</a>
        {!isMobile()&&<div style={{color:"#FAB005",fontSize:12}}>ℹ️ {L("SMS funktioniert nur vom Handy aus. Öffnen Sie die App auf dem Handy oder nutzen Sie WhatsApp / E-Mail.","El SMS solo funciona desde el móvil. Abra la app en su teléfono o use WhatsApp / e-mail.","SMS only works from a phone. Open the app on your phone or use WhatsApp / email.","L'SMS funziona solo dal telefono. Apri l'app sul telefono o usa WhatsApp / e-mail.")}</div>}
        <button onClick={()=>{ try{ navigator.clipboard.writeText(msg.body); }catch(e){} }} style={btn("rgba(255,255,255,.12)")}>📋 {L("Text kopieren","Copiar texto","Copy text","Copia testo")}</button>
      </div>
      <pre style={{whiteSpace:"pre-wrap",background:"rgba(0,0,0,.3)",border:`1px solid ${CP.border}`,borderRadius:10,padding:"10px 12px",color:CP.textSecondary,fontSize:12,maxHeight:220,overflow:"auto",fontFamily:"inherit"}}>{msg.body}</pre>
    </CPModal>
  );
}

// ─── EMPLOYEES APP (payroll integrated) ──────────────────────
function EmployeesApp({t,employees,setEmployees,timeclock,jobs,clients,notify,onBack,currentUser,lang,companySettings}){
  const L = makeL(lang);
  const [modal,setModal] = useState(null);
  const [form,setForm] = useState({});
  const [selId,setSelId] = useState(null);
  const [deleteId,setDeleteId] = useState(null);
  const [payslipData,setPayslipData] = useState(null);
  const [worksheetEmp,setWorksheetEmp] = useState(null);
  const [inviteEmp,setInviteEmp] = useState(null);
  const [,setSpesenTick] = useState(0);
  useQstTariffs(employees);
  const now = new Date();
  const [selMonth,setSelMonth] = useState(now.getMonth()+1);
  const [selYear,setSelYear] = useState(now.getFullYear());
  const isAdmin = currentUser?.role==="admin";
  const [empSearch,setEmpSearch] = useState(()=>takePendingSearch("employees"));
  const visibleEmps = (isAdmin ? employees : employees.filter(e=>e.id===currentUser?.id))
    .filter(e=>matchSearch(empSearch,e.name,e.city,e.phone,e.email,e.ahv,e.street,e.startDate));
  const monthNames = MONTHS[lang]||MONTHS.EN;

  const openPayslip = (emp) => {
    const pay = calcSwissPayroll(emp, timeclock, selMonth, selYear, jobs, {spesen:getSavedSpesen(emp.id,selYear,selMonth)});
    setPayslipData({emp, pay, month:selMonth, year:selYear});
  };

  const save = () => {
    if(!form.firstName||!form.lastName){notify(t.error,"error");return;}
    const n = `${form.firstName} ${form.lastName}`;
    if(selId) setEmployees(p=>p.map(e=>e.id===selId?{...e,...form,name:n}:e));
    else {
      const code=gCodeUnique(employees), pin=gPinUnique(employees);
      const newEmp={...form,id:gid(),name:n,code,pin,role:"employee"};
      setEmployees(p=>[...p,newEmp]);
      notify(`${t.userCode}: ${code} | ${t.pin}: ${pin}`,"info");
      // Show the send options right away (browsers block mail/SMS opened without a click, so the admin taps one)
      setInviteEmp(newEmp);
    }
    setModal(null);
  };

  const regen = (id) => {
    const code=gCodeUnique(employees, id), pin=gPinUnique(employees, id);
    setEmployees(p=>p.map(e=>e.id===id?{...e,code,pin}:e));
    notify(`${t.userCode}: ${code} | ${t.pin}: ${pin}`,"info");
    const e0=employees.find(e=>e.id===id); if(e0) setInviteEmp({...e0,code,pin}); // offer to send the new PIN
  };

  const deleteEmployee = (id) => {
    setEmployees(p=>p.filter(e=>e.id!==id));
    setDeleteId(null);
    notify(L("Mitarbeiter gelöscht","Empleado eliminado","Employee deleted","Dipendente eliminato"),"success");
  };

  return (
    <CPScreen
      title={isAdmin ? t.employees : (t.myPayslip||"My Payslip")}
      icon="👤" onBack={onBack} t={t}
      actions={isAdmin ? (
        <CPBtn onClick={()=>{
          setForm({firstName:"",lastName:"",street:"",number:"",postalCode:"",city:"",phone:"",email:"",type:"hourly",hourlyRate:22,fixedSalary:0,ahv:"",startDate:"",has_13th:false,active:true});
          setSelId(null); setModal("form");
        }}>＋ {t.add}</CPBtn>
      ) : null}
    >
      {/* Month / year selector */}
      <CPCard style={{marginBottom:16}}>
        <div style={{display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"}}>
          <span style={{color:CP.textSecondary,fontSize:13,fontWeight:600}}>
            {t.selectMonth||"Monat"}:
          </span>
          <select value={selMonth} onChange={e=>setSelMonth(Number(e.target.value))} style={{
            background:"rgba(255,255,255,0.08)",border:`1px solid ${CP.border}`,
            borderRadius:10,color:"#fff",padding:"6px 12px",fontSize:13,outline:"none",cursor:"pointer",
          }}>
            {monthNames.map((m,i)=>(
              <option key={i} value={i+1} style={{background:"#1a1a2e"}}>{m}</option>
            ))}
          </select>
          <select value={selYear} onChange={e=>setSelYear(Number(e.target.value))} style={{
            background:"rgba(255,255,255,0.08)",border:`1px solid ${CP.border}`,
            borderRadius:10,color:"#fff",padding:"6px 12px",fontSize:13,outline:"none",cursor:"pointer",
          }}>
            {[now.getFullYear()-1, now.getFullYear(), now.getFullYear()+1].map(y=>(
              <option key={y} value={y} style={{background:"#1a1a2e"}}>{y}</option>
            ))}
          </select>
          <span style={{color:"rgba(116,192,252,0.7)",fontSize:11}}>
            🇨🇭 {lang==="DE"?"Swiss Payroll 2024 – AHV/ALV/BVG/NBUV/KTG":
                   lang==="ES"?"Swiss Payroll 2024 – AVS/AD/LPP/AINF/IS":
                   lang==="IT"?"Swiss Payroll 2024 – AVS/AD/LPP/AINF/IS":
                   "Swiss Payroll 2024 – AHV/ALV/BVG/NBUV/KTG"}
          </span>
        </div>
      </CPCard>

      {isAdmin&&<div style={{marginBottom:14}}><CPInput value={empSearch} onChange={e=>setEmpSearch(e.target.value)} placeholder={`🔍 ${L("Mitarbeiter suchen (Name, Ort, Telefon, AHV…)","Buscar empleado (nombre, ciudad, teléfono, AVS…)","Search employee (name, city, phone, AHV…)","Cerca dipendente (nome, città, telefono, AVS…)")}`}/></div>}
      <div style={{display:"flex",flexDirection:"column",gap:14}}>
        {visibleEmps.map(emp=>{
          const pay = calcSwissPayroll(emp, timeclock, selMonth, selYear, jobs, {spesen:getSavedSpesen(emp.id,selYear,selMonth)});
          return (
            <CPCard key={emp.id}>
              {/* Header */}
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14}}>
                <div style={{display:"flex",gap:12,alignItems:"center"}}>
                  <div style={{width:52,height:52,borderRadius:"50%",background:"linear-gradient(135deg,#1C7ED6,#0CA678)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,flexShrink:0}}>👤</div>
                  <div>
                    <div style={{color:CP.textPrimary,fontWeight:700,fontSize:16}}>{emp.name}</div>
                    <div style={{color:CP.textSecondary,fontSize:12,marginTop:1}}>{emp.phone} · {emp.email}</div>
                    <div style={{color:CP.textTertiary,fontSize:11}}>{emp.street} {emp.number}, {emp.postalCode} {emp.city}</div>
                    <div style={{color:CP.textTertiary,fontSize:11,marginTop:2}}>AHV/AVS: {emp.ahv||"—"} | {lang==="DE"?"Eintritt":lang==="ES"?"Inicio":lang==="IT"?"Inizio":"Start"}: {emp.startDate||"—"}</div>
                  </div>
                </div>
                <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:5}}>
                  <CPBadge text={emp.type==="hourly"?`CHF ${emp.hourlyRate}/h`:`CHF ${emp.fixedSalary}/M`} color="blue"/>
                  {emp.gavCategory&&(()=>{const cat=GAV_CATEGORIES.find(c=>c.id===emp.gavCategory);return cat?<CPBadge text={cat.label} color="green"/>:null;})()}
                  <CPBadge text={emp.active?(t.active||"Aktiv"):(t.inactive||"Inaktiv")} color={emp.active?"green":"gray"}/>
                </div>
              </div>

              {/* Access (admin only) */}
              {isAdmin&&(
                <div style={{background:"rgba(0,0,0,.25)",borderRadius:12,padding:"8px 14px",marginBottom:12,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <div style={{fontSize:12,color:CP.textSecondary}}>
                    <span style={{fontWeight:700,color:"#69DB7C"}}>{t.code}:</span> {emp.code||emp.userCode} &nbsp;·&nbsp;
                    <span style={{fontWeight:700,color:"#69DB7C"}}>{t.pin}:</span> {emp.pin}
                  </div>
                  <CPBtn onClick={()=>regen(emp.id)} variant="secondary" size="sm">🔄</CPBtn>
                </div>
              )}

              {/* Payroll summary */}
              <div style={{background:"rgba(0,0,0,0.2)",borderRadius:14,padding:"14px 16px",marginBottom:12}}>
                <div style={{color:CP.textSecondary,fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:.5,marginBottom:12}}>
                  💰 {t.payrollTitle||"Lohnabrechnung"} — {monthNames[selMonth-1]} {selYear}
                </div>

                {/* Gross / deductions / net grid */}
                <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(110px,1fr))",gap:8,marginBottom:12}}>
                  {emp.type==="hourly"&&(
                    <div style={{background:"rgba(255,255,255,0.04)",borderRadius:10,padding:"8px 10px"}}>
                      <div style={{color:CP.textTertiary,fontSize:10,marginBottom:2}}>{t.hoursMonth||"Stunden"}</div>
                      <div style={{color:CP.textPrimary,fontWeight:700,fontSize:15}}>{pay.hoursWorked}h</div>
                    </div>
                  )}
                  <div style={{background:"rgba(28,126,214,0.1)",border:"1px solid rgba(28,126,214,0.25)",borderRadius:10,padding:"8px 10px"}}>
                    <div style={{color:CP.textTertiary,fontSize:10,marginBottom:2}}>{t.grossSalary||"Brutto"}</div>
                    <div style={{color:"#74C0FC",fontWeight:700,fontSize:15}}>CHF {pay.grossTotal}</div>
                  </div>
                  {[
                    ["AHV/AVS",pay.ahvEmp],["ALV/AD",pay.alvEmp],
                    ["NBUV/AINF",pay.nbuvEmp],["BVG/LPP",pay.bvgEmp],["KTG/IS",pay.ktgEmp],...(parseFloat(pay.qstEmp)>0?[["QST/IF",pay.qstEmp]]:[]),
                  ].map(([l,v])=>(
                    <div key={l} style={{background:"rgba(201,42,42,0.07)",border:"1px solid rgba(201,42,42,0.15)",borderRadius:10,padding:"8px 10px"}}>
                      <div style={{color:CP.textTertiary,fontSize:9,marginBottom:2}}>− {l}</div>
                      <div style={{color:"#FF8787",fontWeight:700,fontSize:12}}>CHF {v}</div>
                    </div>
                  ))}
                  <div style={{background:"rgba(12,166,120,0.18)",border:"1px solid rgba(12,166,120,0.4)",borderRadius:10,padding:"8px 10px",gridColumn:"span 2"}}>
                    <div style={{color:CP.textTertiary,fontSize:10,marginBottom:2,fontWeight:700}}>{t.netSalary||"Nettolohn"}</div>
                    <div style={{color:"#69DB7C",fontWeight:700,fontSize:22}}>CHF {pay.net}</div>
                  </div>
                </div>

                {/* Deduction ratio bar */}
                <div>
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
                    <span style={{color:CP.textSecondary,fontSize:11}}>
                      {t.totalDeductionsEmployee||"Abzüge AN"}: CHF {pay.totalDeductEmp}
                    </span>
                    {isAdmin&&(
                      <span style={{color:"rgba(134,142,150,0.7)",fontSize:11}}>
                        {t.totalCost||"Gesamtkosten AG"}: CHF {pay.totalCost}
                      </span>
                    )}
                  </div>
                  <div style={{height:6,background:"rgba(255,255,255,0.07)",borderRadius:20,overflow:"hidden"}}>
                    <div style={{
                      height:"100%",
                      width:`${Math.round((parseFloat(pay.net)/Math.max(0.01,parseFloat(pay.grossTotal)))*100)}%`,
                      background:"linear-gradient(90deg,#0CA678,#1C7ED6)",borderRadius:20,
                    }}/>
                  </div>
                  <div style={{color:CP.textTertiary,fontSize:10,marginTop:3,textAlign:"right"}}>
                    {Math.round((parseFloat(pay.net)/Math.max(0.01,parseFloat(pay.grossTotal)))*100)}%{" "}
                    {lang==="DE"?"Nettoquote":lang==="ES"?"Ratio neto":lang==="IT"?"Quota netto":"Net ratio"}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                <CPBtn onClick={()=>openPayslip(emp)} variant="success" size="sm">
                  📄 {t.payrollView||"Lohnabrechnung"}
                </CPBtn>
                <CPBtn onClick={()=>setWorksheetEmp(emp)} variant="secondary" size="sm">
                  📋 {L("Arbeitsrapport","Hoja mensual","Work sheet","Rapporto")}
                </CPBtn>
                {isAdmin&&(
                  <>
                    <CPBtn onClick={()=>setInviteEmp(emp)} variant="secondary" size="sm">🔑 {L("Zugang senden","Enviar acceso","Send access","Invia accesso")}</CPBtn>
                    <CPBtn onClick={()=>{setForm(withNameParts({...emp}));setSelId(emp.id);setModal("form");}} variant="secondary" size="sm">
                      ✏️ {t.edit}
                    </CPBtn>
                    <CPBtn onClick={()=>{
                      const pay = calcSwissPayroll(emp, timeclock, selMonth, selYear, jobs, {spesen:getSavedSpesen(emp.id,selYear,selMonth)});
                      sendByEmail({
                        to: emp.email||"",
                        subject: `Lohnabrechnung / Nómina — ${emp.name} — ${selMonth}/${selYear}`,
                        body: `${L("Guten Tag","Buenos días","Dear","Gentile")} ${emp.name},\n\n${L("Anbei Ihre Lohnabrechnung","Adjunto su nómina","Please find your payslip","In allegato la sua busta paga")} ${selMonth}/${selYear}:\n\n${L("Bruttolohn","Salario bruto","Gross salary","Salario lordo")}: CHF ${Number(pay.grossTotal||0).toFixed(2)}\n${L("Nettolohn","Salario neto","Net salary","Salario netto")}: CHF ${Number(pay.net||0).toFixed(2)}\n\n${L("Mit freundlichen Grüssen","Saludos cordiales","Kind regards","Cordiali saluti")},\nPatjac Reinigung Garten & Services\ninfo@patjacservices.ch`
                      });
                    }} variant="secondary" size="sm">
                      📧 {t.payrollSend||"Senden"}
                    </CPBtn>
                    <CPBtn onClick={()=>setDeleteId(emp.id)} variant="danger" size="sm">
                      🗑️ {L("Löschen","Eliminar","Delete","Elimina")}
                    </CPBtn>
                  </>
                )}
              </div>
            </CPCard>
          );
        })}
      </div>

      {/* Add / Edit form (admin only) */}
      {modal==="form"&&isAdmin&&(
        <CPModal title={selId?t.edit:t.add} onClose={()=>setModal(null)} width={560}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 14px"}}>
            <CPField label={t.firstName}><CPInput value={form.firstName||""} onChange={e=>setForm(f=>({...f,firstName:e.target.value}))}/></CPField>
            <CPField label={t.lastName}><CPInput value={form.lastName||""} onChange={e=>setForm(f=>({...f,lastName:e.target.value}))}/></CPField>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"2fr 1fr",gap:"0 12px"}}>
            <CPField label={t.street}><CPInput value={form.street||""} onChange={e=>setForm(f=>({...f,street:e.target.value}))}/></CPField>
            <CPField label={t.number}><CPInput value={form.number||""} onChange={e=>setForm(f=>({...f,number:e.target.value}))}/></CPField>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 2fr",gap:"0 12px"}}>
            <CPField label={t.postalCode}><CPInput value={form.postalCode||""} onChange={e=>setForm(f=>({...f,postalCode:e.target.value}))}/></CPField>
            <CPField label={t.city}><CPInput value={form.city||""} onChange={e=>setForm(f=>({...f,city:e.target.value}))}/></CPField>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 14px"}}>
            <CPField label={t.phone}><CPInput value={form.phone||""} onChange={e=>setForm(f=>({...f,phone:e.target.value}))}/></CPField>
            <CPField label={t.email}><CPInput type="email" value={form.email||""} onChange={e=>setForm(f=>({...f,email:e.target.value}))}/></CPField>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 14px"}}>
            <CPField label={t.employeeType}>
              <CPSelect value={form.type||"hourly"} onChange={e=>setForm(f=>({...f,type:e.target.value}))}>
                <option value="hourly">{t.hourly}</option>
                <option value="fixed">{t.fixed}</option>
              </CPSelect>
            </CPField>
            <CPField label={form.type==="fixed"?`CHF/${L("Monat","Mes","Month","Mese")}`:`CHF/${L("Std","h","h","h")}`}>
              <CPInput type="number"
                value={form.type==="fixed"?(form.fixedSalary||""):(form.hourlyRate||"")}
                onChange={e=>setForm(f=>form.type==="fixed"
                  ?{...f,fixedSalary:parseFloat(e.target.value)||0}
                  :{...f,hourlyRate:parseFloat(e.target.value)||0})}/>
            </CPField>
          </div>
          {/* GAV Lohnkategorie */}
          <CPField label={L("GAV-Lohnkategorie","Categoría salarial GAV","GAV Salary Category","Categoria salariale GAV")}>
            <CPSelect value={form.gavCategory||""} onChange={e=>{
              const cat = GAV_CATEGORIES.find(c=>c.id===e.target.value);
              setForm(f=>({...f, gavCategory:e.target.value,
                ...(cat&&form.type==="hourly"?{hourlyRate:cat.hourly}:{}),
                ...(cat&&form.type==="fixed"?{fixedSalary:cat.monthly}:{})
              }));
            }}>
              <option value="">{L("— Keine Kategorie —","— Sin categoría —","— No category —","— Nessuna categoria —")}</option>
              <optgroup label="🧹 GAV Reinigung Deutschschweiz 2026">
                <option value="reinigung_I">Unterhaltsreinigung I — CHF 21.40/h</option>
                <option value="reinigung_II">Unterhaltsreinigung II — CHF 22.90/h</option>
                <option value="spezial_I">Spezialreinigung I — CHF 23.40/h</option>
                <option value="spezial_II">Spezialreinigung II — CHF 24.90/h</option>
                <option value="spital_I">Spitalreinigung I — CHF 21.85/h</option>
                <option value="spital_II">Spitalreinigung II — CHF 23.35/h</option>
                <option value="fahrzeug_I">Fahrzeugreinigung I — CHF 23.20/h</option>
                <option value="fahrzeug_II">Fahrzeugreinigung II — CHF 24.70/h</option>
                <option value="eba">EBA Gebäudereiniger/in — CHF 23.10/h (CHF 4'200/M)</option>
                <option value="efz">EFZ Gebäudereiniger/in — CHF 25.80/h (CHF 4'700/M)</option>
                <option value="objektleiter">Objektleiter/in / Vorarbeiter/in — Individuell (Basis Stufe II)</option>
              </optgroup>
              <optgroup label="🌿 GAV Garten- und Landschaftsbau 2025">
                <option value="garten_ungelernt">Ungelernte/r Mitarbeiter/in — CHF 19.50/h</option>
                <option value="garten_anlernkraft">Angelernte Kraft (1-3 Jahre) — CHF 20.50/h</option>
                <option value="garten_eba">EBA Gärtner/in — CHF 21.50/h</option>
                <option value="garten_efz">EFZ Gärtner/in — CHF 23.00/h</option>
                <option value="garten_vorarbeiter">Vorarbeiter/in — CHF 25.00/h</option>
                <option value="garten_teamleiter">Teamleiter/in — CHF 27.00/h</option>
              </optgroup>
            </CPSelect>
          </CPField>
          {form.gavCategory&&(()=>{
            const cat = GAV_CATEGORIES.find(c=>c.id===form.gavCategory);
            if(!cat) return null;
            return(
              <div style={{background:"rgba(12,166,120,.1)",border:"1px solid rgba(12,166,120,.3)",borderRadius:10,padding:"10px 14px",marginBottom:10,fontSize:12,color:"#69DB7C"}}>
                <div style={{fontWeight:700,marginBottom:4}}>📋 {cat.label}</div>
                <div>{cat.description[lang]||cat.description.DE}</div>
                {cat.hourly&&<div style={{marginTop:4}}>💰 {L("Mindestlohn","Salario mínimo","Minimum wage","Salario minimo")}: CHF {cat.hourly.toFixed(2)}/h {cat.monthly?`(CHF ${cat.monthly.toLocaleString()}/M)`:""}</div>}
              </div>
            );
          })()}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 14px"}}>
            <CPField label="AHV-Nr / AVS-No">
              <CPInput value={form.ahv||""} onChange={e=>setForm(f=>({...f,ahv:e.target.value}))} placeholder="756.XXXX.XXXX.XX"/>
            </CPField>
            <CPField label={lang==="DE"?"Eintrittsdatum":lang==="ES"?"Incorporación":lang==="IT"?"Data inizio":"Start date"}>
              <CPInput type="date" value={form.startDate||""} onChange={e=>setForm(f=>({...f,startDate:e.target.value}))}/>
            </CPField>
          </div>
          {form.type==="fixed"&&(
            <div style={{display:"flex",alignItems:"center",gap:10,padding:"8px 12px",background:"rgba(12,166,120,0.1)",borderRadius:10,marginBottom:10,border:"1px solid rgba(12,166,120,0.25)"}}>
              <input type="checkbox" id="has_13thchk" checked={!!form.has_13th} onChange={e=>setForm(f=>({...f,has_13th:e.target.checked}))}
                style={{width:16,height:16,accentColor:"#0CA678",cursor:"pointer"}}/>
              <label htmlFor="has_13thchk" style={{color:"#69DB7C",fontSize:13,fontWeight:600,cursor:"pointer"}}>
                {t.thirteenthSalary||"13. Monatslohn einschliessen"}
              </label>
            </div>
          )}
          {/* ── Payroll, family & transport data ── */}
          <div style={{marginTop:6,marginBottom:8,color:"#74C0FC",fontSize:12,fontWeight:700}}>👨‍👩‍👧 {L("Lohn-, Familien- und Transportdaten","Datos de nómina, familia y transporte","Payroll, family & transport data","Dati busta paga, famiglia e trasporto")}</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 14px"}}>
            <CPField label={L("Geburtsdatum","Fecha de nacimiento","Date of birth","Data di nascita")}>
              <CPInput type="date" value={form.birthDate||""} onChange={e=>setForm(f=>({...f,birthDate:e.target.value}))}/>
            </CPField>
            <CPField label={L("Aufenthaltsbewilligung","Permiso de residencia","Residence permit","Permesso")}>
              <CPSelect value={form.permit||""} onChange={e=>setForm(f=>({...f,permit:e.target.value}))}>
                <option value="">—</option>
                <option value="CH">{L("Schweizer/in","Suizo/a","Swiss","Svizzero/a")}</option>
                <option value="C">C</option><option value="B">B</option><option value="L">L</option><option value="G">G</option><option value="other">{L("Andere","Otro","Other","Altro")}</option>
              </CPSelect>
            </CPField>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"0 10px"}}>
            <CPField label={L("Kinder bis 12 J.","Hijos hasta 12 años","Children up to 12","Figli fino a 12")}>
              <CPInput type="number" value={form.kidsUnder12??""} onChange={e=>setForm(f=>({...f,kidsUnder12:parseInt(e.target.value)||0}))}/>
            </CPField>
            <CPField label={L("Kinder 12–16 J.","Hijos de 12 a 16","Children 12–16","Figli 12–16")}>
              <CPInput type="number" value={form.kidsTeen??""} onChange={e=>setForm(f=>({...f,kidsTeen:parseInt(e.target.value)||0}))}/>
            </CPField>
            <CPField label={L("In Ausbildung (bis 25)","Estudiando (hasta 25)","In education (to 25)","In formazione (fino a 25)")}>
              <CPInput type="number" value={form.kidsEdu??""} onChange={e=>setForm(f=>({...f,kidsEdu:parseInt(e.target.value)||0}))}/>
            </CPField>
          </div>
          {qstSubject(form)&&(
            <div style={{background:"rgba(250,176,5,.08)",border:"1px solid rgba(250,176,5,.3)",borderRadius:10,padding:"10px 12px",marginBottom:10}}>
              <div style={{color:"#FFD43B",fontSize:12,fontWeight:700,marginBottom:6}}>🧾 {L("Quellensteuer (offizieller Tarif Kanton Zürich 2026)","Impuesto en la fuente (tarifa oficial del cantón de Zúrich 2026)","Withholding tax (official Canton Zurich 2026 tariff)","Imposta alla fonte (tariffa ufficiale ZH 2026)")}</div>
              <div style={{display:"grid",gridTemplateColumns:"2fr 1fr",gap:"0 12px"}}>
                <CPField label={L("Familiensituation","Situación familiar","Family situation","Situazione familiare")}>
                  <CPSelect value={form.maritalStatus||""} onChange={e=>setForm(f=>({...f,maritalStatus:e.target.value}))}>
                    <option value="">— {L("bitte wählen","elija una opción","please choose","scegliere")} —</option>
                    {QST_SITUATIONS.map(o=><option key={o.id} value={o.id}>{o.L[["DE","ES","EN","IT"].indexOf(lang)]||o.L[2]}</option>)}
                  </CPSelect>
                </CPField>
                <CPField label={L("Kirchensteuer","Impuesto eclesiástico","Church tax","Imposta di culto")}>
                  <CPSelect value={form.church?"Y":"N"} onChange={e=>setForm(f=>({...f,church:e.target.value==="Y"}))}>
                    <option value="N">{L("Nein (keine Landeskirche)","No (sin iglesia oficial)","No","No")}</option>
                    <option value="Y">{L("Ja (reformiert/katholisch)","Sí (reformada o católica)","Yes (reformed/catholic)","Sì (riformata/cattolica)")}</option>
                  </CPSelect>
                </CPField>
              </div>
              <div style={{color:CP.textSecondary,fontSize:11}}>
                {qstCodeFor(form)
                  ? <>✅ {L("Tarifcode","Código de tarifa","Tariff code","Codice tariffa")}: <b style={{color:"#FFD43B"}}>{qstCodeFor(form)}</b> — {L("Der Prozentsatz wird jeden Monat automatisch nach Lohn berechnet.","El porcentaje se calcula solo cada mes según el salario.","The rate is calculated automatically each month from the salary.","La percentuale è calcolata automaticamente ogni mese.")}</>
                  : L("Situation wählen – die Anzahl Kinder wird oben erfasst.","Elija la situación. El número de hijos se toma de los campos de arriba.","Choose the situation – children are taken from the fields above.","Scegliere la situazione – i figli dai campi sopra.")}
              </div>
            </div>
          )}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 14px"}}>
            <CPField label={L("Transport zwischen Kunden","Transporte entre clientes","Transport between clients","Trasporto tra clienti")}>
              <CPSelect value={form.transportMode||"public"} onChange={e=>setForm(f=>({...f,transportMode:e.target.value}))}>
                <option value="public">🚋 {L("Öffentlicher Verkehr (Billett)","Transporte público (billete)","Public transport (ticket)","Trasporto pubblico (biglietto)")}</option>
                <option value="car">🚗 {L("Eigenes Auto (CHF 0.75/km)","Coche propio (CHF 0.75/km)","Own car (CHF 0.75/km)","Auto propria (CHF 0.75/km)")}</option>
              </CPSelect>
            </CPField>
            {(form.transportMode||"public")==="public"&&(
              <CPField label={L("Billettpreis pro Fahrt CHF","Precio del billete por trayecto CHF","Ticket price per trip CHF","Prezzo biglietto per tratta CHF")}>
                <CPInput type="number" value={form.ticketPrice??""} onChange={e=>setForm(f=>({...f,ticketPrice:parseFloat(e.target.value)||0}))} placeholder="4.60"/>
              </CPField>
            )}
          </div>
          {!selId&&(
            <div style={{background:"rgba(28,126,214,.12)",border:"1px solid rgba(28,126,214,.3)",borderRadius:10,padding:"10px 14px",marginBottom:12,fontSize:12,color:"#74C0FC"}}>
              ℹ️ {lang==="DE"?"Code & PIN werden automatisch generiert.":
                   lang==="ES"?"El código y el PIN se generan solos y se envían al empleado por e-mail, WhatsApp o SMS al guardar.":
                   lang==="IT"?"Codice e PIN vengono generati automaticamente.":
                   "Code & PIN are automatically generated."}
            </div>
          )}
          <div style={{display:"flex",gap:8,justifyContent:"flex-end"}}>
            <CPBtn onClick={()=>setModal(null)} variant="secondary">{t.cancel}</CPBtn>
            <CPBtn onClick={save}>💾 {t.save}</CPBtn>
          </div>
        </CPModal>
      )}

      {/* ── DELETE CONFIRMATION MODAL ── */}
      {deleteId&&(()=>{
        const emp = employees.find(e=>e.id===deleteId);
        return (
          <CPModal
            title={L("Mitarbeiter löschen","Eliminar empleado","Delete employee","Elimina dipendente")}
            onClose={()=>setDeleteId(null)}
            width={440}
          >
            <div style={{padding:"8px 0 20px"}}>
              {/* Warning icon */}
              <div style={{textAlign:"center",marginBottom:16}}>
                <span style={{fontSize:48}}>⚠️</span>
              </div>

              {/* Employee name */}
              <div style={{
                background:"rgba(201,42,42,0.1)",border:"1px solid rgba(201,42,42,0.3)",
                borderRadius:12,padding:"12px 16px",marginBottom:16,textAlign:"center",
              }}>
                <div style={{color:"#FF8787",fontWeight:700,fontSize:16}}>{emp?.name}</div>
                <div style={{color:CP.textSecondary,fontSize:12,marginTop:4}}>
                  {emp?.type==="fixed"
                    ? `${L("Festanstellung","Fijo","Fixed","Fisso")} · CHF ${Number(emp?.fixedSalary||0).toLocaleString("de-CH")}/M`
                    : `${L("Stundenlohn","Por horas","Hourly","A ore")} · CHF ${emp?.hourlyRate}/h`
                  }
                </div>
              </div>

              {/* Warning message */}
              <div style={{color:CP.textSecondary,fontSize:13,lineHeight:1.6,marginBottom:20,textAlign:"center"}}>
                {L(
                  "Dieser Mitarbeiter wird permanent gelöscht. Alle Lohndaten, Zeiterfassungen und Nachrichten bleiben erhalten, sind aber keinem Mitarbeiter mehr zugeordnet.",
                  "Este empleado será eliminado permanentemente. Todos los datos de nómina, fichajes y mensajes se conservan, pero ya no estarán asociados a ningún empleado.",
                  "This employee will be permanently deleted. All payroll data, time records and messages are retained but will no longer be linked to any employee.",
                  "Questo dipendente verrà eliminato definitivamente. Tutti i dati di stipendio, timbrature e messaggi vengono conservati ma non saranno più collegati a nessun dipendente."
                )}
              </div>

              {/* Buttons */}
              <div style={{display:"flex",gap:10,justifyContent:"flex-end"}}>
                <CPBtn onClick={()=>setDeleteId(null)} variant="secondary">
                  {t.cancel}
                </CPBtn>
                <CPBtn onClick={()=>deleteEmployee(deleteId)} variant="danger">
                  🗑️ {L("Endgültig löschen","Eliminar definitivamente","Delete permanently","Elimina definitivamente")}
                </CPBtn>
              </div>
            </div>
          </CPModal>
        );
      })()}

      {payslipData&&(
        <PayslipModal canSend={isAdmin}
          emp={payslipData.emp} pay={payslipData.pay}
          month={payslipData.month} year={payslipData.year}
          lang={lang} t={t} onClose={()=>setPayslipData(null)}
          companySettings={companySettings}
        />
      )}
      {worksheetEmp&&(
        <WorkSheetModal canSend={isAdmin} emp={worksheetEmp} month={selMonth} year={selYear} jobs={jobs} clients={clients||[]}
          lang={lang} companySettings={companySettings} onClose={()=>setWorksheetEmp(null)}
          onSpesen={()=>setSpesenTick(x=>x+1)}/>
      )}
      {inviteEmp&&<AccessInviteModal emp={inviteEmp} lang={lang} onClose={()=>setInviteEmp(null)}/>}
    </CPScreen>
  );
}

// ─── PAYROLL APP (standalone icon) ───────────────────────────
function PayrollApp({t, lang, employees, timeclock, jobs, clients, currentUser, notify, onBack, companySettings}){
  const now = new Date();
  const [selMonth,setSelMonth] = useState(now.getMonth()+1);
  const [selYear,setSelYear] = useState(now.getFullYear());
  const [payslipData,setPayslipData] = useState(null);
  const [worksheetEmp,setWorksheetEmp] = useState(null);
  const [,setSpesenTick] = useState(0);
  useQstTariffs(employees);
  const isAdmin = currentUser?.role==="admin";
  const [paySearch,setPaySearch] = useState("");
  const visibleEmps = (isAdmin ? employees : employees.filter(e=>e.id===currentUser?.id)).filter(e=>matchSearch(paySearch,e.name,e.ahv,e.phone));
  const monthNames = MONTHS[lang]||MONTHS.EN;
  const L = makeL(lang);

  const totals = employees.reduce((acc,emp)=>{
    const pay=calcSwissPayroll(emp,timeclock,selMonth,selYear,jobs,{spesen:getSavedSpesen(emp.id,selYear,selMonth)});
    acc.net+=parseFloat(pay.net);
    acc.gross+=parseFloat(pay.grossTotal);
    acc.cost+=parseFloat(pay.totalCost);
    return acc;
  },{net:0,gross:0,cost:0});

  return (
    <CPScreen title={t.payrollTitle||"Payroll"} icon="💵" onBack={onBack} t={t}>
      {/* Period selector */}
      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14,flexWrap:"wrap"}}>
        <select value={selMonth} onChange={e=>setSelMonth(Number(e.target.value))} style={{
          background:"rgba(255,255,255,0.08)",border:`1px solid ${CP.border}`,
          borderRadius:10,color:"#fff",padding:"8px 14px",fontSize:14,outline:"none",cursor:"pointer",
        }}>
          {monthNames.map((m,i)=><option key={i} value={i+1} style={{background:"#1a1a2e"}}>{m}</option>)}
        </select>
        <select value={selYear} onChange={e=>setSelYear(Number(e.target.value))} style={{
          background:"rgba(255,255,255,0.08)",border:`1px solid ${CP.border}`,
          borderRadius:10,color:"#fff",padding:"8px 14px",fontSize:14,outline:"none",cursor:"pointer",
        }}>
          {[now.getFullYear()-1, now.getFullYear(), now.getFullYear()+1].map(y=><option key={y} value={y} style={{background:"#1a1a2e"}}>{y}</option>)}
        </select>

        {isAdmin&&(
          <div style={{display:"flex",gap:8,marginLeft:"auto",flexWrap:"wrap"}}>
            {[
              {l:t.grossSalary||"Brutto", v:`CHF ${totals.gross.toFixed(2)}`, c:"#74C0FC", bg:"rgba(28,126,214,0.12)", bc:"rgba(28,126,214,0.3)"},
              {l:t.netSalary||"Netto", v:`CHF ${totals.net.toFixed(2)}`, c:"#69DB7C", bg:"rgba(12,166,120,0.12)", bc:"rgba(12,166,120,0.3)"},
              {l:t.totalCost||"AG Total", v:`CHF ${totals.cost.toFixed(2)}`, c:"#aab0b8", bg:"rgba(134,142,150,0.1)", bc:"rgba(134,142,150,0.25)"},
            ].map(item=>(
              <div key={item.l} style={{background:item.bg,border:`1px solid ${item.bc}`,borderRadius:12,padding:"8px 14px",textAlign:"center",minWidth:110}}>
                <div style={{color:CP.textSecondary,fontSize:10,fontWeight:700,textTransform:"uppercase",marginBottom:2}}>{item.l}</div>
                <div style={{color:item.c,fontWeight:700,fontSize:15}}>{item.v}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Swiss norms bar */}
      <CPCard style={{marginBottom:14,background:"rgba(28,126,214,0.07)",border:"1px solid rgba(28,126,214,0.18)"}}>
        <div style={{color:"#74C0FC",fontSize:12}}>
          🇨🇭 <strong>Swiss Payroll 2024</strong> · AHV 5.25+5.30% · ALV 1.1+1.1% · NBUV 1.2% · BVG ~7+7% · KTG 0.5+0.5%
        </div>
      </CPCard>

      {/* Employee list */}
      {isAdmin&&<SearchBox value={paySearch} onChange={setPaySearch} lang={lang} placeholder={`🔍 ${makeL(lang)("Mitarbeiter suchen","Buscar empleado","Search employee","Cerca dipendente")}`}/>}
      <div style={{display:"flex",flexDirection:"column",gap:10}}>
        {visibleEmps.map(emp=>{
          const pay=calcSwissPayroll(emp,timeclock,selMonth,selYear,jobs,{spesen:getSavedSpesen(emp.id,selYear,selMonth)});
          return (
            <CPCard key={emp.id}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
                <div style={{display:"flex",alignItems:"center",gap:10}}>
                  <div style={{width:46,height:46,borderRadius:"50%",background:"linear-gradient(135deg,#0CA678,#1C7ED6)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22}}>👤</div>
                  <div>
                    <div style={{color:CP.textPrimary,fontWeight:700,fontSize:15}}>{emp.name}</div>
                    <div style={{color:CP.textSecondary,fontSize:12}}>
                      {emp.type==="hourly"
                        ?`${pay.hoursWorked}h × CHF ${emp.hourlyRate}/h`
                        :`${t.fixedSalary||"Fixlohn"}: CHF ${emp.fixedSalary}/M`}
                    </div>
                  </div>
                </div>
                <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                  <CPBtn onClick={()=>setPayslipData({emp,pay,month:selMonth,year:selYear})} variant="success" size="sm">
                    📄 {t.payrollView||"Anzeigen"}
                  </CPBtn>
                  <CPBtn onClick={()=>setWorksheetEmp(emp)} variant="secondary" size="sm">
                    📋 {L("Arbeitsrapport","Hoja mensual","Work sheet","Rapporto")}
                  </CPBtn>
                </div>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}}>
                <div style={{background:"rgba(28,126,214,0.1)",border:"1px solid rgba(28,126,214,0.2)",borderRadius:10,padding:"10px 12px",textAlign:"center"}}>
                  <div style={{color:CP.textTertiary,fontSize:10,marginBottom:2}}>{t.grossSalary||"Brutto"}</div>
                  <div style={{color:"#74C0FC",fontWeight:700,fontSize:14}}>CHF {pay.grossTotal}</div>
                </div>
                <div style={{background:"rgba(201,42,42,0.08)",border:"1px solid rgba(201,42,42,0.2)",borderRadius:10,padding:"10px 12px",textAlign:"center"}}>
                  <div style={{color:CP.textTertiary,fontSize:10,marginBottom:2}}>{t.totalDeductionsEmployee||"Abzüge AN"}</div>
                  <div style={{color:"#FF8787",fontWeight:700,fontSize:14}}>−CHF {pay.totalDeductEmp}</div>
                </div>
                <div style={{background:"rgba(12,166,120,0.15)",border:"1px solid rgba(12,166,120,0.35)",borderRadius:10,padding:"10px 12px",textAlign:"center"}}>
                  <div style={{color:CP.textTertiary,fontSize:10,marginBottom:2}}>{t.netSalary||"Netto"}</div>
                  <div style={{color:"#69DB7C",fontWeight:700,fontSize:18}}>CHF {pay.net}</div>
                </div>
              </div>
              {isAdmin&&(
                <div style={{marginTop:8,color:CP.textTertiary,fontSize:11,textAlign:"right"}}>
                  {t.totalCost||"Gesamtkosten AG"}: CHF {pay.totalCost}
                </div>
              )}
            </CPCard>
          );
        })}
      </div>

      {payslipData&&(
        <PayslipModal canSend={isAdmin}
          emp={payslipData.emp} pay={payslipData.pay}
          month={payslipData.month} year={payslipData.year}
          lang={lang} t={t} onClose={()=>setPayslipData(null)}
          companySettings={companySettings}
        />
      )}
      {worksheetEmp&&(
        <WorkSheetModal canSend={isAdmin} emp={worksheetEmp} month={selMonth} year={selYear} jobs={jobs} clients={clients||[]}
          lang={lang} companySettings={companySettings} onClose={()=>setWorksheetEmp(null)}
          onSpesen={()=>setSpesenTick(x=>x+1)}/>
      )}
    </CPScreen>
  );
}

// ─── DASHBOARD ───────────────────────────────────────────────
function DashApp({t,clients,jobs,invoices,employees,timeclock,notify,openApp,onBack,lang,companySettings}){
  const L = makeL(lang);
  const today=ymd(new Date());
  const income=invoices.filter(i=>i.status==="paid"&&(i.date||"").startsWith(today.slice(0,7))).reduce((s,i)=>s+(Number(i.total)||0),0);
  const pending=invoices.filter(i=>i.status==="pending"||i.status==="overdue").length;
  const overdue=invoices.filter(i=>i.status==="overdue");
  const todayJobs=jobs.filter(j=>j.date===today);
  const notClockedIn=employees.filter(e=>e.active&&!timeclock.find(tc=>tc.date===today&&tc.employeeId===e.id)).length;
  const incompleteJobs=jobs.filter(j=>j.status!=="completed"&&j.date===today);
  return (
    <CPScreen title={t.dashboard} icon="🏠" onBack={onBack} t={t}
      actions={<CPBtn onClick={()=>sendByEmail({to:companySettings?.email||"info@patjacservices.ch",subject:`${t.sendReport} — Patjac Business Suite`,body:`${L("Guten Tag","Buenos días","Dear","Gentile")},\n\n${t.sendReport}.\n\n${L("Mit freundlichen Grüssen","Saludos cordiales","Kind regards","Cordiali saluti")},\nPatjac Reinigung Garten & Services`})} variant="secondary" size="sm">📧 {t.sendReport||"Bericht"}</CPBtn>}
    >
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:12,marginBottom:20}}>
        <CPStat label={t.totalClients} value={clients.filter(c=>c.active).length} icon="👥" accent="#1C7ED6"/>
        <CPStat label={t.todayJobs} value={todayJobs.length} icon="📋" accent="#F08C00"/>
        <CPStat label={t.monthIncome} value={`CHF ${income.toLocaleString("de-CH",{minimumFractionDigits:2})}`} icon="💰" accent="#2F9E44"/>
        <CPStat label={t.pendingInvoices} value={pending} icon="🧾" accent={pending>0?"#C92A2A":"#2F9E44"}/>
        <CPStat label={t.activeEmployees} value={employees.filter(e=>e.active).length} icon="👤" accent="#7048E8"/>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
        <CPCard>
          <div style={{color:CP.textSecondary,fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:.5,marginBottom:12}}>📋 {t.todayJobs}</div>
          {todayJobs.map(job=>(
            <div key={job.id} style={{borderBottom:`1px solid ${CP.border}`,padding:"8px 0",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div>
                <div style={{color:CP.textPrimary,fontWeight:600,fontSize:13}}>{job.clientName}</div>
                <div style={{color:CP.textSecondary,fontSize:11}}>{job.timeStart} · {job.employeeName}</div>
              </div>
              <CPBadge text={job.status==="completed"?t.completed:job.status==="inProgress"?t.inProgress:t.pending}
                color={job.status==="completed"?"green":job.status==="inProgress"?"blue":"yellow"}/>
            </div>
          ))}
          {todayJobs.length===0&&<div style={{color:CP.textTertiary,fontSize:13,textAlign:"center",padding:"1rem 0"}}>—</div>}
        </CPCard>
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          <CPCard>
            <div style={{color:CP.textSecondary,fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:.5,marginBottom:10}}>⚠️ {t.alerts}</div>
            {overdue.length>0&&<div onClick={()=>openApp("invoices")} style={{background:"rgba(201,42,42,.12)",border:"1px solid rgba(201,42,42,.3)",borderRadius:10,padding:"8px 12px",cursor:"pointer",marginBottom:6}}><div style={{color:"#FF8787",fontSize:13,fontWeight:600}}>🧾 {overdue.length} {t.overdueInvoices}</div></div>}
            {notClockedIn>0&&<div onClick={()=>openApp("timeclock")} style={{background:"rgba(240,140,0,.12)",border:"1px solid rgba(240,140,0,.3)",borderRadius:10,padding:"8px 12px",cursor:"pointer",marginBottom:6}}><div style={{color:"#FFD43B",fontSize:13,fontWeight:600}}>⏱️ {notClockedIn} {t.employeesNotClockedIn}</div></div>}
            {incompleteJobs.length>0&&<div onClick={()=>openApp("jobs")} style={{background:"rgba(28,126,214,.12)",border:"1px solid rgba(28,126,214,.3)",borderRadius:10,padding:"8px 12px",cursor:"pointer"}}><div style={{color:"#74C0FC",fontSize:13,fontWeight:600}}>📋 {incompleteJobs.length} {t.incompleteJobs}</div></div>}
            {overdue.length===0&&notClockedIn===0&&incompleteJobs.length===0&&<div style={{color:"#69DB7C",fontSize:13,textAlign:"center"}}>✅ {L("Alles OK","Todo bien","All good","Tutto OK")}</div>}
          </CPCard>
          <CPCard>
            <div style={{color:CP.textSecondary,fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:.5,marginBottom:10}}>⚡ {t.quickActions||"Quick"}</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
              {[{l:t.newJob||"Neu",i:"📋",a:"jobs"},{l:t.addClient||"Kunde",i:"👥",a:"clients"},{l:t.generateInvoice||"Rechnung",i:"🧾",a:"invoices"},{l:t.optimizeRoute||"Route",i:"🗺️",a:"routes"}].map(q=>(
                <button key={q.a} onClick={()=>openApp(q.a)} style={{background:"rgba(28,126,214,.15)",border:"1px solid rgba(28,126,214,.3)",borderRadius:10,padding:"8px 6px",color:"#fff",cursor:"pointer",fontSize:11,fontWeight:600,display:"flex",alignItems:"center",gap:4,transition:"background .15s"}}
                  onMouseEnter={e=>e.currentTarget.style.background="rgba(28,126,214,.3)"}
                  onMouseLeave={e=>e.currentTarget.style.background="rgba(28,126,214,.15)"}
                >{q.i} {q.l}</button>
              ))}
            </div>
          </CPCard>
        </div>
      </div>
    </CPScreen>
  );
}

// ─── CLIENTS ─────────────────────────────────────────────────
function ClientsApp({t,clients,setClients,notify,onBack,lang}){
  const L = makeL(lang);
  const [modal,setModal]=useState(null);
  const [editId,setEditId]=useState(null);
  const [form,setForm]=useState({});
  const [search,setSearch]=useState(()=>takePendingSearch("clients"));
  const ff=clients.filter(c=>matchSearch(search,c.name,c.street,c.city,c.postalCode,c.phone,c.email,c.notes));
  const bulk=useBulkSelect();

  const openAdd=()=>{setForm({firstName:"",lastName:"",street:"",number:"",postalCode:"",city:"",phone:"",email:"",frequency:"weekly",billingType:"perService",price:"",serviceType:"cleaning",notes:"",active:true});setEditId(null);setModal("form");};
  const save=()=>{
    if(!form.firstName||!form.lastName){notify(t.error,"error");return;}
    const n=`${form.firstName} ${form.lastName}`;
    if(editId) setClients(p=>p.map(c=>c.id===editId?{...form,name:n,id:editId}:c));
    else setClients(p=>[...p,{...form,name:n,id:gid()}]);
    notify(t.success);setModal(null);
  };
  const freqLabel=(f)=>({daily:t.daily,weekly:t.weekly,monthly:t.monthly,once:t.once}[f]||f);

  return (
    <CPScreen title={t.clients} icon="👥" onBack={onBack} t={t}
      actions={<CPBtn onClick={openAdd}>＋ {t.addClient}</CPBtn>}
    >
      <SearchBox value={search} onChange={setSearch} lang={lang} placeholder={`🔍 ${L("Kunde suchen (Name, Adresse, Telefon …)","Buscar cliente (nombre, dirección, teléfono …)","Search client (name, address, phone …)","Cerca cliente (nome, indirizzo, telefono …)")}`}/>
      <BulkBar bulk={bulk} visibleIds={ff.map(c=>c.id)} lang={lang}
        itemWord={{DE:"Kunden",ES:"clientes",EN:"clients",IT:"clienti"}}
        onDelete={ids=>{setClients(p=>p.filter(c=>!ids.has(c.id)));notify(t.success);}}/>
      <div style={{display:"flex",flexDirection:"column",gap:10}}>
        {ff.map(c=>(
          <CPCard key={c.id} onClick={bulk.selectMode?()=>bulk.toggle(c.id):undefined} style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:10,...(bulk.selected.has(c.id)?{outline:"2px solid #4DABF7"}:{})}}>
            {bulk.selectMode&&<SelBox checked={bulk.selected.has(c.id)} onChange={()=>bulk.toggle(c.id)}/>}
            <div style={{flex:1}}>
              <div style={{color:CP.textPrimary,fontWeight:700,fontSize:15}}>{c.name}</div>
              <div style={{color:CP.textSecondary,fontSize:12,marginTop:2}}>{c.street} {c.number}, {c.postalCode} {c.city}</div>
              <div style={{color:CP.textSecondary,fontSize:12}}>{c.phone} · {c.email}</div>
              <div style={{display:"flex",gap:6,marginTop:6,flexWrap:"wrap"}}>
                <CPBadge text={freqLabel(c.frequency)} color="blue"/>
                <CPBadge text={`🧾 ${c.billingType==="monthlyContract"?t.monthly:c.billingType==="weeklyContract"?t.weekly:t.perService}`} color={c.billingType==="monthlyContract"?"green":c.billingType==="weeklyContract"?"blue":"gray"}/>
                <CPBadge text={`CHF ${c.price||0}/h`} color="gray"/>
                {!c.active&&<CPBadge text={t.inactive||"Inaktiv"} color="gray"/>}
              </div>
            </div>
            {!bulk.selectMode&&<div style={{display:"flex",gap:6}}>
              <CPBtn onClick={()=>{setForm(withNameParts({...c}));setEditId(c.id);setModal("form");}} variant="secondary" size="sm">✏️</CPBtn>
              <CPBtn onClick={()=>{setEditId(c.id);setModal("del");}} variant="danger" size="sm">🗑️</CPBtn>
            </div>}
          </CPCard>
        ))}
        {ff.length===0&&<div style={{color:CP.textTertiary,textAlign:"center",padding:"2rem",fontSize:14}}>{t.noRecords}</div>}
      </div>

      {modal==="form"&&(
        <CPModal title={editId?t.editClient:t.addClient} onClose={()=>setModal(null)} width={540}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 14px"}}>
            <CPField label={t.firstName}><CPInput value={form.firstName||""} onChange={e=>setForm(f=>({...f,firstName:e.target.value}))}/></CPField>
            <CPField label={t.lastName}><CPInput value={form.lastName||""} onChange={e=>setForm(f=>({...f,lastName:e.target.value}))}/></CPField>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"2fr 1fr",gap:"0 14px"}}>
            <CPField label={t.street}><CPInput value={form.street||""} onChange={e=>setForm(f=>({...f,street:e.target.value}))}/></CPField>
            <CPField label={t.number}><CPInput value={form.number||""} onChange={e=>setForm(f=>({...f,number:e.target.value}))}/></CPField>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 2fr",gap:"0 14px"}}>
            <CPField label={t.postalCode}><CPInput value={form.postalCode||""} onChange={e=>setForm(f=>({...f,postalCode:e.target.value}))}/></CPField>
            <CPField label={t.city}><CPInput value={form.city||""} onChange={e=>setForm(f=>({...f,city:e.target.value}))}/></CPField>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 14px"}}>
            <CPField label={t.phone}><CPInput value={form.phone||""} onChange={e=>setForm(f=>({...f,phone:e.target.value}))}/></CPField>
            <CPField label={t.email}><CPInput type="email" value={form.email||""} onChange={e=>setForm(f=>({...f,email:e.target.value}))}/></CPField>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 14px"}}>
            <CPField label={t.frequency}>
              <CPSelect value={form.frequency||"weekly"} onChange={e=>setForm(f=>({...f,frequency:e.target.value}))}>
                <option value="daily">{t.daily}</option><option value="weekly">{t.weekly}</option>
                <option value="monthly">{t.monthly}</option><option value="once">{t.once}</option>
              </CPSelect>
            </CPField>
            <CPField label={t.billingType}>
              <CPSelect value={form.billingType||"perService"} onChange={e=>setForm(f=>({...f,billingType:e.target.value}))}>
                <option value="perService">🧾 {t.perService}</option><option value="weeklyContract">📅 {t.weekly}</option><option value="monthlyContract">🗓️ {t.monthly}</option>
              </CPSelect>
            </CPField>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 14px"}}>
            <CPField label={t.service||"Service"}>
              <CPSelect value={form.serviceType||"cleaning"} onChange={e=>setForm(f=>({...f,serviceType:e.target.value}))}>
                <option value="cleaning">{t.cleaning}</option><option value="gardening">{t.gardening}</option><option value="repairs">🔧 {makeL(lang)("Reparaturen","Reparaciones","Repairs","Riparazioni")}</option><option value="other">{t.other}</option>
              </CPSelect>
            </CPField>
            <CPField label={L("CHF pro Stunde","CHF por hora","CHF per hour","CHF all'ora")}><CPInput type="number" value={form.price||""} onChange={e=>setForm(f=>({...f,price:parseFloat(e.target.value)||""}))} placeholder="z.B. 45"/></CPField>
          </div>
          <CPField label={t.notes}><CPInput value={form.notes||""} onChange={e=>setForm(f=>({...f,notes:e.target.value}))}/></CPField>
          <div style={{display:"flex",gap:8,justifyContent:"flex-end",marginTop:6}}>
            <CPBtn onClick={()=>setModal(null)} variant="secondary">{t.cancel}</CPBtn>
            <CPBtn onClick={save}>💾 {t.save}</CPBtn>
          </div>
        </CPModal>
      )}
      {modal==="del"&&(
        <CPModal title={t.confirm} onClose={()=>setModal(null)} width={340}>
          <div style={{color:CP.textSecondary,textAlign:"center",marginBottom:20,fontSize:15}}>{t.deleteClient}?</div>
          <div style={{display:"flex",gap:8,justifyContent:"center"}}>
            <CPBtn onClick={()=>setModal(null)} variant="secondary">{t.cancel}</CPBtn>
            <CPBtn onClick={()=>{setClients(p=>p.filter(c=>c.id!==editId));notify(t.success);setModal(null);}} variant="danger">🗑️ {t.delete}</CPBtn>
          </div>
        </CPModal>
      )}
    </CPScreen>
  );
}

// ─── JOBS ────────────────────────────────────────────────────
function JobsApp({t,jobs,setJobs,clients,employees,notify,onBack,currentUser,lang}){
  const L = makeL(lang);
  const [filter,setFilter]=useState("all");
  const [modal,setModal]=useState(null);
  const [form,setForm]=useState({});
  const [deleteJobId,setDeleteJobId]=useState(null);
  const isAdmin = currentUser?.role==="admin";

  const deleteJob = (id) => {
    setJobs(p=>p.filter(j=>j.id!==id));
    setDeleteJobId(null);
    notify(L("Auftrag gelöscht","Trabajo eliminado","Job deleted","Lavoro eliminato"),"success");
  };

  // Employees only see their own jobs
  const visibleJobs = isAdmin
    ? jobs
    : jobs.filter(j=>j.employeeId===currentUser?.id);

  const [jobSearch,setJobSearch] = useState(()=>takePendingSearch("jobs"));
  const ff = visibleJobs
    .filter(j=>filter==="all"?true:j.status===filter)
    .filter(j=>matchSearch(jobSearch,j.clientName,j.employeeName,j.date,j.description,fmtAddr(clients.find(c=>c.id===j.clientId))))
    .sort((a,b)=>`${a.date||""}${a.timeStart||""}`.localeCompare(`${b.date||""}${b.timeStart||""}`));
  const bulk = useBulkSelect();
  // Client price is CHF per hour → job amount = rate × planned hours
  const withAutoAmount = (f) => ({...f, amount: jobAmountFor(clients.find(c=>c.id===f.clientId), f.timeStart, f.timeEnd)});
  // Total work hours are shared between the people on the job: 5 h with 2 people → each works 2.5 h,
  // the job ends earlier, each person is paid (and the client billed) for their share.
  const addHours = (start, h) => { const [hh,mm]=(start||"08:00").split(":").map(Number); const t=Math.round(hh*60+mm+h*60); const m=((t%1440)+1440)%1440; return `${String(Math.floor(m/60)).padStart(2,"0")}:${String(m%60).padStart(2,"0")}`; };
  const teamSize = (f) => Math.max(1,(f.employeeIds||[]).length);
  const splitHours = (f) => { const tot=Number(f.totalHours)||0; return tot>0 ? withAutoAmount({...f, timeEnd:addHours(f.timeStart, tot/teamSize(f))}) : withAutoAmount(f); };
  const statusLabel=(s)=>s==="completed"?t.completed:s==="inProgress"?t.inProgress:t.pending;
  const statusColor=(s)=>s==="completed"?"green":s==="inProgress"?"blue":"yellow";

  // A job can have several people. Internally each person gets their own copy of the job
  // (own clock-in/out, pay, reminder, work sheet), linked together by a shared teamId.
  const teamOf = (job) => job?.teamId ? jobs.filter(j=>j.teamId===job.teamId) : (job?[job]:[]);
  const save=()=>{
    const c=clients.find(x=>x.id===form.clientId);
    const ids = (form.employeeIds&&form.employeeIds.length) ? form.employeeIds : (form.employeeId?[form.employeeId]:[]);
    if(!ids.length){ notify(L("Mindestens eine Person wählen","Elija al menos una persona","Choose at least one person","Scegli almeno una persona"),"error"); return; }
    const {employeeIds, totalHours, ...clean} = form; // form-only helpers, not stored
    const common = {...clean, clientName:c?.name||""};
    const forEmp = (empId, extra={}) => { const e=employees.find(x=>x.id===empId); return {...common, employeeId:empId, employeeName:e?.name||"", ...extra}; };
    const batch = gid();
    const teamIdFor = (date) => ids.length>1 ? `${batch}_${date}` : null;

    if(form.id){
      const prevJob = jobs.find(j=>j.id===form.id);
      const team = teamOf(prevJob);
      const timeChanged = prevJob && (prevJob.date!==form.date || prevJob.timeStart!==form.timeStart);
      const teamId = ids.length>1 ? (prevJob?.teamId || `${batch}_${form.date}`) : null;
      const shared = ({id,employeeId,employeeName,actualStart,actualEnd,actualHours,status,photos,signature,reminderSent,recurringId,...rest})=>rest;
      setJobs(p=>{
        let next = [...p];
        // update or remove existing team members
        team.forEach(m=>{
          if(ids.includes(m.employeeId)){
            next = next.map(j=>j.id===m.id ? {...j, ...shared(common), teamId, ...(timeChanged?{reminderSent:false}:{})} : j);
          } else {
            next = next.filter(j=>j.id!==m.id);
          }
        });
        // add new members
        ids.filter(id=>!team.some(m=>m.employeeId===id)).forEach(id=>{
          next.push(forEmp(id,{id:gid(), teamId, recurringId:null, status:"pending", actualStart:null, actualEnd:null, actualHours:null, photos:[], signature:null, reminderSent:false}));
        });
        return next;
      });
      notify(t.success); setModal(null); return;
    }

    if(form.recurrence==="weekly" && !(form.recurWeekdays||[]).length){
      notify(L("Wähle mindestens einen Wochentag","Elige al menos un día de la semana","Pick at least one weekday","Scegli almeno un giorno"),"error");
      return;
    }
    const dates = [];
    if(form.recurrence==="weekly"){
      const startD = new Date(form.date+"T00:00:00");
      const horizonEnd = new Date(startD); horizonEnd.setDate(horizonEnd.getDate()+12*7); // ~3 months ahead
      let cursor = new Date(startD);
      while(cursor<=horizonEnd){ if(form.recurWeekdays.includes(cursor.getDay())) dates.push(ymd(cursor)); cursor.setDate(cursor.getDate()+1); }
    } else if(form.recurrence==="monthly"){
      const startD = new Date(form.date+"T00:00:00");
      const dayOfMonth = startD.getDate();
      for(let i=0;i<6;i++){ // ~6 months ahead
        const d = new Date(startD.getFullYear(), startD.getMonth()+i, 1);
        const lastDay = new Date(d.getFullYear(), d.getMonth()+1, 0).getDate();
        d.setDate(Math.min(dayOfMonth,lastDay)); dates.push(ymd(d));
      }
    } else dates.push(form.date);
    const recurring = form.recurrence==="weekly"||form.recurrence==="monthly";
    const created = [];
    ids.forEach(empId=>{
      const recurringId = recurring ? gid() : null; // one series per person
      dates.forEach(date=>created.push(forEmp(empId,{id:gid(), recurringId, teamId:teamIdFor(date), date, photos:[], signature:null})));
    });
    setJobs(p=>[...p,...created]);
    notify(created.length>1 ? `${t.success} (${created.length} ${L("Einsätze erstellt","trabajos creados","jobs created","lavori creati")})` : t.success);
    setModal(null);
  };

  // ── EMPLOYEE VIEW — read-only, minimal info ──────────────────
  if(!isAdmin){
    const getClientAddress = (job) => {
      const c = clients.find(x=>x.id===job.clientId);
      if(c) return `${c.street||""} ${c.number||""}, ${c.postalCode||""} ${c.city||""}`.trim().replace(/^,\s*/,"");
      return job.clientAddress||"";
    };

    return (
      <CPScreen title={t.jobs} icon="📋" onBack={onBack} t={t}
        actions={
          <div style={{display:"flex",gap:4}}>
            {["all","pending","inProgress","completed"].map(s=>(
              <button key={s} onClick={()=>setFilter(s)} style={{
                padding:"5px 12px",borderRadius:20,border:"none",cursor:"pointer",
                fontSize:12,fontWeight:700,
                background:filter===s?CP.accent:"rgba(255,255,255,.1)",color:"#fff",
              }}>
                {s==="all"?L("Alle","Todos","All","Tutti"):statusLabel(s)}
              </button>
            ))}
          </div>
        }
      >
        <SearchBox value={jobSearch} onChange={setJobSearch} lang={lang}/>
        {/* Summary bar */}
        <div style={{display:"flex",gap:10,marginBottom:14,flexWrap:"wrap"}}>
          {[
            [L("Heute","Hoy","Today","Oggi"), visibleJobs.filter(j=>j.date===todayStr).length, "#74C0FC"],
            [t.pending, visibleJobs.filter(j=>j.status==="pending").length, "#FFD43B"],
            [t.inProgress, visibleJobs.filter(j=>j.status==="inProgress").length, "#1C7ED6"],
            [t.completed, visibleJobs.filter(j=>j.status==="completed").length, "#2F9E44"],
          ].map(([label,val,color])=>(
            <div key={label} style={{
              background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",
              borderRadius:12,padding:"10px 16px",flex:1,minWidth:80,textAlign:"center",
            }}>
              <div style={{color,fontWeight:700,fontSize:20}}>{val}</div>
              <div style={{color:CP.textSecondary,fontSize:11,marginTop:2}}>{label}</div>
            </div>
          ))}
        </div>

        {/* Job cards — employee simplified view */}
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {ff.map(job=>{
            const addr = getClientAddress(job);
            const duration = (() => {
              if(!job.timeStart||!job.timeEnd) return null;
              const [h1,m1]=job.timeStart.split(":").map(Number);
              const [h2,m2]=job.timeEnd.split(":").map(Number);
              const mins=(h2*60+m2)-(h1*60+m1);
              if(mins<=0) return null;
              const h=Math.floor(mins/60), m=mins%60;
              return m>0?`${h}h ${m}min`:`${h}h`;
            })();

            return (
              <CPCard key={job.id} style={{
                border:job.date===todayStr?"2px solid rgba(28,126,214,0.4)":"1px solid rgba(255,255,255,0.06)",
                background:job.date===todayStr?"rgba(28,126,214,0.06)":"rgba(255,255,255,0.03)",
              }}>
                {/* Today badge */}
                {job.date===todayStr&&(
                  <div style={{
                    display:"inline-block",marginBottom:8,
                    background:"rgba(28,126,214,0.25)",border:"1px solid rgba(28,126,214,0.4)",
                    borderRadius:20,padding:"2px 10px",fontSize:11,fontWeight:700,color:"#74C0FC",
                  }}>
                    📅 {L("Heute","Hoy","Today","Oggi")}
                  </div>
                )}

                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:10}}>
                  <div style={{flex:1}}>

                    {/* Client name — prominent */}
                    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
                      <span style={{fontSize:20}}>{job.serviceType==="cleaning"?"🧹":"🌿"}</span>
                      <div>
                        <div style={{color:CP.textPrimary,fontWeight:700,fontSize:17}}>{job.clientName}</div>
                        <CPBadge text={statusLabel(job.status)} color={statusColor(job.status)}/>
                      </div>
                    </div>

                    {/* Address */}
                    {addr&&(
                      <div style={{
                        display:"flex",alignItems:"flex-start",gap:8,marginBottom:8,
                        background:"rgba(116,192,252,0.08)",border:"1px solid rgba(116,192,252,0.15)",
                        borderRadius:10,padding:"8px 12px",
                      }}>
                        <span style={{fontSize:16,flexShrink:0}}>📍</span>
                        <div>
                          <div style={{color:"#74C0FC",fontWeight:600,fontSize:13}}>{addr}</div>
                          <button onClick={()=>{
                            window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(addr)}&travelmode=driving`,"_blank");
                          }} style={{
                            marginTop:4,background:"rgba(28,126,214,0.3)",border:"none",
                            borderRadius:8,color:"#fff",padding:"3px 10px",cursor:"pointer",
                            fontSize:11,fontWeight:700,fontFamily:CP.font,
                          }}>
                            🗺️ {L("Navigation","Navegar","Navigate","Naviga")}
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Work time */}
                    <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
                      <div style={{
                        background:"rgba(255,215,0,0.08)",border:"1px solid rgba(255,215,0,0.2)",
                        borderRadius:10,padding:"6px 12px",display:"flex",alignItems:"center",gap:6,
                      }}>
                        <span style={{fontSize:14}}>🕐</span>
                        <div>
                          <div style={{color:"#FFD43B",fontWeight:700,fontSize:14}}>
                            {job.timeStart} – {job.timeEnd}
                          </div>
                          {duration&&(
                            <div style={{color:CP.textSecondary,fontSize:11}}>
                              ⏱️ {duration}
                            </div>
                          )}
                        </div>
                      </div>
                      <div style={{
                        background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",
                        borderRadius:10,padding:"6px 12px",display:"flex",alignItems:"center",gap:6,
                      }}>
                        <span style={{fontSize:14}}>📅</span>
                        <div style={{color:CP.textSecondary,fontSize:13}}>{fmtDate(job.date)}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CPCard>
            );
          })}
          {ff.length===0&&(
            <div style={{textAlign:"center",padding:"3rem",color:CP.textTertiary,fontSize:14}}>
              <div style={{fontSize:40,marginBottom:10}}>📋</div>
              {t.noRecords}
            </div>
          )}
        </div>
      </CPScreen>
    );
  }

  // ── ADMIN VIEW — full access ─────────────────────────────────
  return (
    <CPScreen title={t.jobs} icon="📋" onBack={onBack} t={t}
      actions={<>
        <div style={{display:"flex",gap:4}}>
          {["all","pending","inProgress","completed"].map(s=>(
            <button key={s} onClick={()=>setFilter(s)} style={{padding:"5px 12px",borderRadius:20,border:"none",cursor:"pointer",fontSize:12,fontWeight:700,background:filter===s?CP.accent:"rgba(255,255,255,.1)",color:"#fff"}}>{s==="all"?"All":statusLabel(s)}</button>
          ))}
        </div>
        {<CPBtn onClick={()=>{setForm(withAutoAmount({clientId:clients[0]?.id||"",employeeId:employees[0]?.id||"",employeeIds:employees[0]?[employees[0].id]:[],totalHours:2,serviceType:"cleaning",description:"",date:ymd(new Date()),timeStart:"08:00",timeEnd:"10:00",amount:"",notes:"",status:"pending",recurrence:"once",recurWeekdays:[]}));setModal("form");}} size="sm">＋ {t.newJob||"Neu"}</CPBtn>}
      </>}
    >
      <SearchBox value={jobSearch} onChange={setJobSearch} lang={lang} placeholder={`🔍 ${L("Auftrag suchen (Kunde, Mitarbeiter, Datum, Adresse …)","Buscar trabajo (cliente, empleado, fecha, dirección …)","Search job (client, employee, date, address …)","Cerca lavoro (cliente, dipendente, data, indirizzo …)")}`}/>
      {isAdmin&&<BulkBar bulk={bulk} visibleIds={ff.map(j=>j.id)} lang={lang}
        itemWord={{DE:"Aufträge",ES:"trabajos",EN:"jobs",IT:"lavori"}}
        onDelete={ids=>{setJobs(p=>p.filter(j=>!ids.has(j.id)));notify(L("Aufträge gelöscht","Trabajos eliminados","Jobs deleted","Lavori eliminati"),"success");}}/>}
      <div style={{display:"flex",flexDirection:"column",gap:10}}>
        {ff.map(job=>(
          <CPCard key={job.id} onClick={bulk.selectMode?()=>bulk.toggle(job.id):undefined} style={bulk.selected.has(job.id)?{outline:"2px solid #4DABF7"}:undefined}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:10}}>
              {bulk.selectMode&&<SelBox checked={bulk.selected.has(job.id)} onChange={()=>bulk.toggle(job.id)}/>}
              <div style={{flex:1}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}>
                  <span style={{fontSize:18}}>{job.serviceType==="cleaning"?"🧹":job.serviceType==="repairs"?"🔧":"🌿"}</span>
                  <span style={{color:CP.textPrimary,fontWeight:700,fontSize:15}}>{job.clientName}</span>
                  <CPBadge text={statusLabel(job.status)} color={statusColor(job.status)}/>
                </div>
                <div style={{color:CP.textSecondary,fontSize:13}}>{job.employeeName} · {fmtDate(job.date)} · {job.timeStart}–{job.timeEnd}</div>
                {(()=>{const c=clients.find(x=>x.id===job.clientId); const addr=c?fmtAddr(c):(job.clientAddress||""); return addr?(
                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addr)}`} target="_blank" rel="noopener noreferrer" onClick={e=>e.stopPropagation()}
                    style={{display:"inline-block",color:"#74C0FC",fontSize:12.5,marginTop:3,textDecoration:"none"}}>📍 {addr}</a>
                ):<div style={{color:"#FF8787",fontSize:12,marginTop:3}}>📍 {L("Keine Adresse beim Kunden","El cliente no tiene dirección guardada","Client has no address","Cliente senza indirizzo")}</div>;})()}
                {job.teamId&&(()=>{const team=teamOf(job);return team.length>1?(
                  <div style={{color:"#69DB7C",fontSize:12,marginTop:2}}>👥 {L("Team","Equipo","Team","Squadra")} ({team.length}): {team.map(m=>m.employeeName).join(", ")}</div>
                ):null;})()}
                {job.description&&<div style={{color:CP.textSecondary,fontSize:12,marginTop:2}}>{job.description}</div>}
                <div style={{color:"#FFD43B",fontWeight:700,fontSize:13,marginTop:4}}>CHF {(Number(job.amount)||0).toFixed(2)} <span style={{color:CP.textTertiary,fontWeight:500,fontSize:11}}>({hoursBetween(job.timeStart,job.timeEnd)} h)</span>{job.recurringId&&<span style={{color:"#74C0FC",fontWeight:600,fontSize:11}}> · 🔁</span>}</div>
                {bulk.selectMode&&job.recurringId&&(
                  <button type="button" onClick={e=>{e.stopPropagation();const ids=ff.filter(j=>j.recurringId===job.recurringId).map(j=>j.id);bulk.setSelected(prev=>new Set([...prev,...ids]));}} style={{marginTop:6,padding:"3px 10px",borderRadius:8,cursor:"pointer",fontSize:11,fontWeight:600,border:"1px dashed rgba(116,192,252,0.6)",background:"transparent",color:"#74C0FC"}}>
                    🔁 {L("Ganze Serie auswählen","Seleccionar toda la serie","Select whole series","Seleziona tutta la serie")}
                  </button>
                )}
              </div>
              {!bulk.selectMode&&<div style={{display:"flex",gap:6,flexShrink:0}}>
                {<CPBtn onClick={()=>{setForm({...job, employeeIds:teamOf(job).map(m=>m.employeeId), totalHours:Math.round(hoursBetween(job.timeStart,job.timeEnd)*teamOf(job).length*100)/100});setModal("form");}} variant="secondary" size="sm">✏️</CPBtn>}
                {job.status!=="completed"&&<CPBtn onClick={()=>{setJobs(p=>p.map(j=>j.id===job.id?{...j,status:job.status==="pending"?"inProgress":"completed"}:j));notify(t.success);}} variant={job.status==="pending"?"warning":"success"} size="sm">{job.status==="pending"?"▶":"✓"}</CPBtn>}
                <CPBtn onClick={()=>setDeleteJobId(job.id)} variant="danger" size="sm">🗑️</CPBtn>
              </div>}
            </div>
          </CPCard>
        ))}
        {ff.length===0&&<div style={{color:CP.textTertiary,textAlign:"center",padding:"2rem",fontSize:14}}>{t.noRecords}</div>}
      </div>

      {modal==="form"&&(
        <CPModal title={form.id?t.edit:t.newJob||"Neu"} onClose={()=>setModal(null)} width={540}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 14px"}}>
            <CPField label={t.clients}>
              <CPSelect value={form.clientId} onChange={e=>setForm(f=>withAutoAmount({...f,clientId:e.target.value}))}>{clients.map(c=><option key={c.id} value={c.id}>{c.name}</option>)}</CPSelect>
              {(()=>{const c=clients.find(x=>x.id===form.clientId);const addr=c?`${c.street||""} ${c.number||""}, ${c.postalCode||""} ${c.city||""}`.trim().replace(/^,\s*/,""):"";return addr?(<div style={{color:CP.textSecondary,fontSize:12,marginTop:4}}>📍 {addr}</div>):null;})()}
            </CPField>
            <CPField label={`${t.employees} (${(form.employeeIds||[]).length})`}>
              <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                {employees.filter(e=>e.active!==false).map(e=>{
                  const on=(form.employeeIds||[]).includes(e.id);
                  return (
                    <button key={e.id} type="button" onClick={()=>setForm(f=>{const cur=f.employeeIds||[];const next=on?cur.filter(x=>x!==e.id):[...cur,e.id];return splitHours({...f,employeeIds:next,employeeId:next[0]||""});})}
                      style={{padding:"6px 10px",borderRadius:10,cursor:"pointer",fontSize:12,fontWeight:700,
                        border:on?"1px solid rgba(12,166,120,0.7)":`1px solid ${CP.border}`,
                        background:on?"rgba(12,166,120,0.22)":"rgba(255,255,255,0.05)",color:on?"#69DB7C":CP.textSecondary}}>
                      {on?"✓ ":""}{e.name}
                    </button>
                  );
                })}
              </div>
              <div style={{color:CP.textTertiary,fontSize:11,marginTop:4}}>{L("Mehrere Personen möglich – jede erhält ihren eigenen Einsatz (Stempeln, Lohn, Erinnerung).","Puede elegir varias personas. Cada una tendrá su propio trabajo para fichar, cobrar su salario y recibir el aviso.","Several people possible – each gets their own job (clock-in, pay, reminder).","Più persone possibili – ognuna ha il proprio lavoro (timbratura, paga, promemoria).")}</div>
            </CPField>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"0 12px"}}>
            <CPField label={t.date}><CPInput type="date" value={form.date} onChange={e=>setForm(f=>({...f,date:e.target.value}))}/></CPField>
            <CPField label="Start"><CPInput type="time" value={form.timeStart} onChange={e=>setForm(f=>splitHours({...f,timeStart:e.target.value}))}/></CPField>
            <CPField label={L("Ende","Fin","End","Fine")}><CPInput type="time" value={form.timeEnd} onChange={e=>setForm(f=>withAutoAmount({...f,timeEnd:e.target.value,totalHours:Math.round(hoursBetween(f.timeStart,e.target.value)*teamSize(f)*100)/100}))}/></CPField>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 2fr",gap:"0 12px",alignItems:"end"}}>
            <CPField label={L("Arbeitsstunden total","Horas de trabajo totales","Total work hours","Ore di lavoro totali")}>
              <CPInput type="number" value={form.totalHours??""} onChange={e=>{const v=parseFloat(String(e.target.value).replace(",","."));setForm(f=>splitHours({...f,totalHours:isNaN(v)?"":v}));}}/>
            </CPField>
            <div style={{color:"#74C0FC",fontSize:12,marginBottom:14,lineHeight:1.5}}>
              {(()=>{const n=teamSize(form);const per=hoursBetween(form.timeStart,form.timeEnd);
                return n>1
                  ? <>👥 {form.totalHours||0} h ÷ {n} {L("Personen","personas","people","persone")} = <b>{per} h {L("pro Person","cada una","each","a testa")}</b> · {L("fertig um","terminan a las","done at","finito alle")} <b>{form.timeEnd}</b></>
                  : <>👤 {per} h · {L("fertig um","termina a las","done at","finito alle")} <b>{form.timeEnd}</b></>;})()}
            </div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 14px"}}>
            <CPField label={t.service||"Service"}><CPSelect value={form.serviceType} onChange={e=>setForm(f=>({...f,serviceType:e.target.value}))}><option value="cleaning">{t.cleaning}</option><option value="gardening">{t.gardening}</option><option value="other">{t.other}</option></CPSelect></CPField>
            <CPField label={L("Betrag CHF","Importe CHF","Amount CHF","Importo CHF")}>
              <CPInput type="number" value={form.amount} onChange={e=>setForm(f=>({...f,amount:parseFloat(e.target.value)||""}))}/>
              {(()=>{const c=clients.find(x=>x.id===form.clientId);const rate=parseFloat(c?.price)||0;const h=hoursBetween(form.timeStart,form.timeEnd);
                return rate
                  ? <div style={{color:"#74C0FC",fontSize:11,marginTop:4}}>CHF {rate.toFixed(2)}/h × {h} h = CHF {(rate*h).toFixed(2)} {L("pro Person","por persona","per person","per persona")}
                      {(form.employeeIds||[]).length>1&&<div style={{color:"#FFD43B",fontWeight:700}}>{L("Total Kunde","Total cliente","Client total","Totale cliente")}: {Math.round(h*(form.employeeIds||[]).length*100)/100} h × CHF {rate.toFixed(2)} = CHF {((form.employeeIds||[]).length*rate*h).toFixed(2)}</div>}
                    </div>
                  : <div style={{color:"#FFA94D",fontSize:11,marginTop:4}}>{L("Kunde hat keinen Stundensatz","El cliente no tiene precio por hora","Client has no hourly rate","Il cliente non ha tariffa oraria")}</div>;})()}
            </CPField>
          </div>
          <CPField label={t.description}><CPInput value={form.description} onChange={e=>setForm(f=>({...f,description:e.target.value}))}/></CPField>
          <CPField label={t.status}><CPSelect value={form.status} onChange={e=>setForm(f=>({...f,status:e.target.value}))}><option value="pending">{t.pending}</option><option value="inProgress">{t.inProgress}</option><option value="completed">{t.completed}</option></CPSelect></CPField>
          <CPField label={t.notes}><CPInput value={form.notes} onChange={e=>setForm(f=>({...f,notes:e.target.value}))}/></CPField>

          {!form.id && (
            <>
              <CPField label={L("Wiederholung","Repetición","Repeat","Ripetizione")}>
                <CPSelect value={form.recurrence||"once"} onChange={e=>setForm(f=>({...f,recurrence:e.target.value}))}>
                  <option value="once">{t.perService}</option>
                  <option value="weekly">{t.weekly}</option>
                  <option value="monthly">{t.monthlyContract}</option>
                </CPSelect>
              </CPField>
              {form.recurrence==="weekly" && (
                <CPField label={L("¿Qué días?","¿Qué días?","Which days?","Quali giorni?")}>
                  <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                    {[1,2,3,4,5,6,0].map(d=>{
                      const dayLabels = L("Mo,Di,Mi,Do,Fr,Sa,So","Lun,Mar,Mié,Jue,Vie,Sáb,Dom","Mon,Tue,Wed,Thu,Fri,Sat,Sun","Lun,Mar,Mer,Gio,Ven,Sab,Dom").split(",");
                      const idx=[1,2,3,4,5,6,0].indexOf(d);
                      const active = (form.recurWeekdays||[]).includes(d);
                      return (
                        <button key={d} type="button" onClick={()=>setForm(f=>{
                          const cur = f.recurWeekdays||[];
                          const next = cur.includes(d) ? cur.filter(x=>x!==d) : [...cur,d];
                          return {...f,recurWeekdays:next};
                        })} style={{
                          padding:"6px 12px",borderRadius:10,cursor:"pointer",fontSize:13,fontWeight:700,
                          border:active?"1px solid rgba(28,126,214,0.6)":`1px solid ${CP.border}`,
                          background:active?"rgba(28,126,214,0.25)":"rgba(255,255,255,0.05)",
                          color:active?"#74C0FC":CP.textSecondary,
                        }}>{dayLabels[idx]}</button>
                      );
                    })}
                  </div>
                  <div style={{display:"flex",gap:6,flexWrap:"wrap",marginTop:8}}>
                    {[
                      {days:[1,2,3,4,5],     label:L("Mo–Fr","Lun–Vie","Mon–Fri","Lun–Ven")},
                      {days:[1,2,3,4,5,6],   label:L("Mo–Sa","Lun–Sáb","Mon–Sat","Lun–Sab")},
                      {days:[0,1,2,3,4,5,6], label:L("Jeden Tag","Todos los días","Every day","Ogni giorno")},
                      {days:[],              label:L("Keine","Ninguno","None","Nessuno")},
                    ].map(p=>(
                      <button key={p.label} type="button" onClick={()=>setForm(f=>({...f,recurWeekdays:[...p.days]}))} style={{
                        padding:"4px 10px",borderRadius:8,cursor:"pointer",fontSize:11,fontWeight:600,
                        border:`1px dashed ${CP.border}`,background:"transparent",color:CP.textSecondary,
                      }}>{p.label}</button>
                    ))}
                  </div>
                  <div style={{color:(form.recurWeekdays||[]).length?"#74C0FC":"#FFA94D",fontSize:12,fontWeight:600,marginTop:8}}>
                    {(form.recurWeekdays||[]).length
                      ? L(`${form.recurWeekdays.length} Tag(e) pro Woche ausgewählt`,`${form.recurWeekdays.length} día(s) por semana seleccionados`,`${form.recurWeekdays.length} day(s) per week selected`,`${form.recurWeekdays.length} giorno/i a settimana selezionati`)
                      : L("Wähle mindestens einen Tag","Elige al menos un día","Pick at least one day","Scegli almeno un giorno")}
                  </div>
                  <div style={{color:CP.textTertiary,fontSize:11,marginTop:6}}>
                    {L("Se generarán automáticamente los próximos meses, y la app irá creando más con el tiempo.","Se generarán automáticamente los próximos meses, y la app irá creando más con el tiempo.","Upcoming occurrences are generated automatically and extended over time.","Le prossime occorrenze vengono generate automaticamente ed estese nel tempo.")}
                  </div>
                </CPField>
              )}
              {form.recurrence==="monthly" && (
                <div style={{color:CP.textTertiary,fontSize:11,margin:"-6px 0 10px"}}>
                  {L(`Se repetirá cada mes el día ${form.date?new Date(form.date).getDate():"—"}.`,`Se repetirá cada mes el día ${form.date?new Date(form.date).getDate():"—"}.`,`Repeats monthly on day ${form.date?new Date(form.date).getDate():"—"}.`,`Si ripete ogni mese il giorno ${form.date?new Date(form.date).getDate():"—"}.`)}
                </div>
              )}
            </>
          )}
          <div style={{display:"flex",gap:8,justifyContent:"flex-end",marginTop:6}}>
            <CPBtn onClick={()=>setModal(null)} variant="secondary">{t.cancel}</CPBtn>
            <CPBtn onClick={save}>💾 {t.save}</CPBtn>
          </div>
        </CPModal>
      )}

      {/* ── DELETE JOB MODAL ── */}
      {deleteJobId&&(()=>{
        const job = jobs.find(j=>j.id===deleteJobId);
        return (
          <CPModal title={L("Auftrag löschen","Eliminar trabajo","Delete job","Elimina lavoro")} onClose={()=>setDeleteJobId(null)} width={420}>
            <div style={{padding:"8px 0 20px"}}>
              <div style={{textAlign:"center",marginBottom:14}}><span style={{fontSize:44}}>⚠️</span></div>
              <div style={{background:"rgba(201,42,42,0.1)",border:"1px solid rgba(201,42,42,0.3)",borderRadius:12,padding:"12px 16px",marginBottom:14,textAlign:"center"}}>
                <div style={{color:"#FF8787",fontWeight:700,fontSize:15}}>{job?.serviceType==="cleaning"?"🧹":"🌿"} {job?.clientName}</div>
                <div style={{color:CP.textSecondary,fontSize:12,marginTop:4}}>{fmtDate(job?.date)} · {job?.timeStart}–{job?.timeEnd} · CHF {(job?.amount||0).toFixed(2)}</div>
              </div>
              <div style={{color:CP.textSecondary,fontSize:13,textAlign:"center",marginBottom:18,lineHeight:1.6}}>
                {L("Dieser Auftrag wird permanent gelöscht.","Este trabajo será eliminado permanentemente.","This job will be permanently deleted.","Questo lavoro verrà eliminato definitivamente.")}
              </div>
              <div style={{display:"flex",gap:10,justifyContent:"flex-end"}}>
                <CPBtn onClick={()=>setDeleteJobId(null)} variant="secondary">{t.cancel}</CPBtn>
                <CPBtn onClick={()=>deleteJob(deleteJobId)} variant="danger">🗑️ {L("Löschen","Eliminar","Delete","Elimina")}</CPBtn>
              </div>
            </div>
          </CPModal>
        );
      })()}
    </CPScreen>
  );
}

// ─── SEARCH (names, numbers and dates in any format) ─────────
const normTxt = v => String(v??"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");
// A date is searchable as 2026-09-28, 28.09.2026, 28/09/2026 and "28 septiembre 2026" in all 4 languages
const dateSearchText = d => {
  const s = toYmd(d); if(!s) return "";
  const [y,m,dd] = s.split("-");
  return [s, `${dd}.${m}.${y}`, `${+dd}.${+m}.${y}`, `${dd}/${m}/${y}`, `${+dd}/${+m}/${y}`, ...["DE","ES","EN","IT"].map(l=>fmtDate(s,l).replace(".",""))].join(" ");
};
const searchText = (...vals) => normTxt(vals.map(v => (typeof v==="string" && /^\d{4}-\d{2}-\d{2}/.test(v)) ? `${v} ${dateSearchText(v)}` : v).join(" "));
// Every word typed must appear (order does not matter): "hans septiembre" finds Hans's items in September
const matchSearch = (q, ...vals) => { const words = normTxt(q).replace(/[,;]/g," ").split(/\s+/).filter(Boolean); if(!words.length) return true; const txt = searchText(...vals); return words.every(w=>txt.includes(w)); };

// Search box used inside each section
function SearchBox({value, onChange, placeholder, lang}){
  const L = makeL(lang||appLang);
  return (
    <div style={{position:"relative",marginBottom:14}}>
      <CPInput value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder||`🔍 ${L("Suchen (Name, Datum …)","Buscar (nombre, fecha …)","Search (name, date …)","Cerca (nome, data …)")}`}/>
      {value&&<button onClick={()=>onChange("")} style={{position:"absolute",right:10,top:9,background:"rgba(255,255,255,.12)",border:"none",borderRadius:8,color:"#fff",cursor:"pointer",padding:"4px 9px"}}>✕</button>}
    </div>
  );
}

// Search that a section should start with (set by the global search when opening a result)
let pendingSectionSearch = null;
const takePendingSearch = (app) => { if(pendingSectionSearch && pendingSectionSearch.app===app){ const q=pendingSectionSearch.q; pendingSectionSearch=null; return q; } return ""; };

// ─── GLOBAL SEARCH (everything in the app) ───────────────────
function GlobalSearch({lang, onClose, openApp, clients, employees, jobs, invoices, contracts, orders, products, suppliers}){
  const L = makeL(lang);
  const [q,setQ] = useState("");
  const [docs,setDocs] = useState([]);
  useEffect(()=>{ docsFetch("employee_documents?select=id,employee_id,title,category,period,created_at&order=created_at.desc&limit=500").then(r=>setDocs(r||[])).catch(()=>{}); },[]);
  const empName = id => (employees||[]).find(e=>e.id===id)?.name || L("Alle","Todos","All","Tutti");
  const fm = n => `CHF ${Number(n||0).toFixed(2)}`;
  const groups = useMemo(()=>{
    if(normTxt(q).trim().length<2) return [];
    const G = (key, icon, title, app, items) => ({key,icon,title,app,items:items.slice(0,30),count:items.length});
    return [
      G("clients","👥",L("Kunden","Clientes","Clients","Clienti"),"clients",
        (clients||[]).filter(c=>matchSearch(q,c.name,c.street,c.city,c.postalCode,c.phone,c.email,c.notes))
          .map(c=>({id:c.id,title:c.name,sub:[fmtAddr(c),c.phone].filter(Boolean).join(" · "),search:c.name}))),
      G("employees","👤",L("Mitarbeiter","Empleados","Employees","Dipendenti"),"employees",
        (employees||[]).filter(e=>matchSearch(q,e.name,e.city,e.phone,e.email,e.ahv,e.startDate))
          .map(e=>({id:e.id,title:e.name,sub:[e.phone,e.email].filter(Boolean).join(" · "),search:e.name}))),
      G("jobs","📋",L("Aufträge","Trabajos","Jobs","Lavori"),"jobs",
        (jobs||[]).filter(j=>matchSearch(q,j.clientName,j.employeeName,j.date,j.description,j.serviceType==="cleaning"?"limpieza reinigung cleaning":j.serviceType==="repairs"?"reparaciones reparatur repairs":"jardineria garten gardening"))
          .sort((a,b)=>String(b.date).localeCompare(String(a.date)))
          .map(j=>({id:j.id,title:`${j.clientName} · ${fmtDate(j.date)}`,sub:`${j.employeeName||""} · ${j.timeStart||""}–${j.timeEnd||""}`,search:`${j.clientName} ${fmtDate(j.date)}`}))),
      G("invoices","🧾",L("Rechnungen","Facturas","Invoices","Fatture"),"invoices",
        (invoices||[]).filter(i=>matchSearch(q,i.invoiceNumber,i.clientName,i.date,i.dueDate,i.periodFrom,i.periodTo,String(i.total)))
          .sort((a,b)=>String(b.date).localeCompare(String(a.date)))
          .map(i=>({id:i.id,title:`${i.invoiceNumber} · ${i.clientName}`,sub:`${fmtDate(i.date)} · ${fm(i.total)} · ${i.status==="paid"?L("bezahlt","pagada","paid","pagata"):L("offen","pendiente","open","aperta")}`,search:i.invoiceNumber}))),
      G("contracts","📝",L("Verträge","Contratos","Contracts","Contratti"),"contracts",
        (contracts||[]).filter(c=>matchSearch(q,c.entityName,c.contractDate,c.startDate,c.endDate,c.type==="client"?"cliente client kunde":"empleado employee mitarbeiter"))
          .map(c=>({id:c.id,title:c.entityName||"—",sub:`${c.type==="client"?L("Kundenvertrag","Contrato de cliente","Client contract","Contratto cliente"):L("Arbeitsvertrag","Contrato laboral","Employment contract","Contratto di lavoro")} · ${fmtDate(c.contractDate||c.startDate)}`,search:c.entityName}))),
      G("documents","📁",L("Dokumente","Documentos","Documents","Documenti"),"documents",
        docs.filter(d=>matchSearch(q,d.title,empName(d.employee_id),d.created_at,d.period?`${d.period}-01`:""))
          .map(d=>({id:d.id,title:d.title,sub:`${empName(d.employee_id)} · ${fmtDate(d.created_at)}`,search:""}))),
      G("orders","📦",L("Bestellungen","Pedidos","Orders","Ordini"),"inventory",
        (orders||[]).filter(o=>matchSearch(q,o.supplierName,o.date,o.deliveryDate,(o.items||[]).map(i=>i.productName).join(" ")))
          .map(o=>({id:o.id,title:`${o.supplierName} · ${fmtDate(o.date)}`,sub:fm(o.total),search:""}))),
      G("products","🧴",L("Artikel","Productos","Products","Prodotti"),"inventory",
        (products||[]).filter(p=>matchSearch(q,p.name,p.nameES,p.nameEN,p.nameIT,p.category))
          .map(p=>({id:p.id,title:({DE:p.name,ES:p.nameES,EN:p.nameEN,IT:p.nameIT})[lang]||p.name,sub:`${L("Bestand","Stock","Stock","Scorta")}: ${p.stock??"—"}`,search:p.name}))),
      G("suppliers","🏪",L("Lieferanten","Proveedores","Suppliers","Fornitori"),"inventory",
        (suppliers||[]).filter(s=>matchSearch(q,s.name,s.contact,s.city,s.email,s.phone,s.category,s.website))
          .map(s=>({id:s.id,title:s.name,sub:[s.category,s.phone].filter(Boolean).join(" · "),search:s.name}))),
    ].filter(g=>g.count>0);
  },[q,clients,employees,jobs,invoices,contracts,orders,products,suppliers,docs,lang]);
  const total = groups.reduce((a,g)=>a+g.count,0);
  const go = (g,it) => { if(it.search) pendingSectionSearch={app:g.app,q:it.search}; openApp(g.app); onClose(); };
  return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.85)",backdropFilter:"blur(10px)",zIndex:99990,display:"flex",justifyContent:"center",alignItems:"flex-start",padding:"16px"}} onClick={onClose}>
      <div style={{width:"min(720px,100%)",maxHeight:"92vh",display:"flex",flexDirection:"column",fontFamily:CP.font,background:"rgba(10,14,26,.98)",border:`1px solid ${CP.border}`,borderRadius:18,overflow:"hidden"}} onClick={e=>e.stopPropagation()}>
        <div style={{padding:"14px 14px 4px",display:"flex",gap:8,alignItems:"flex-start"}}>
          <div style={{flex:1}}>
            <input autoFocus value={q} onChange={e=>setQ(e.target.value)} placeholder={`🔍 ${L("Alles suchen: Name, Rechnung, Datum (z.B. 28 September 2026)…","Buscar todo: nombre, factura, fecha (ej. 28 septiembre 2026)…","Search everything: name, invoice, date (e.g. 28 September 2026)…","Cerca tutto: nome, fattura, data (es. 28 settembre 2026)…")}`}
              style={{width:"100%",boxSizing:"border-box",padding:"14px 16px",borderRadius:12,border:`1px solid ${CP.border}`,background:"rgba(255,255,255,.08)",color:"#fff",fontSize:16,outline:"none",fontFamily:CP.font}}/>
          </div>
          <button onClick={onClose} style={{background:"rgba(255,255,255,.1)",border:"none",borderRadius:10,color:"#fff",padding:"12px 14px",cursor:"pointer",fontSize:15}}>✕</button>
        </div>
        <div style={{padding:"4px 16px 8px",color:CP.textTertiary,fontSize:12}}>
          {normTxt(q).trim().length<2 ? L("Mindestens 2 Zeichen eingeben. Beispiele: «Müller», «2026-014», «septiembre 2026», «28.09.2026».","Escribe al menos 2 letras. Ejemplos: «Müller», «2026-014», «septiembre 2026», «28.09.2026».","Type at least 2 characters. Examples: «Müller», «2026-014», «September 2026», «28.09.2026».","Scrivi almeno 2 caratteri. Esempi: «Müller», «2026-014», «settembre 2026», «28.09.2026».")
            : `${total} ${L("Treffer","resultados","results","risultati")}`}
        </div>
        <div style={{overflowY:"auto",padding:"0 14px 14px"}}>
          {normTxt(q).trim().length>=2&&!groups.length&&<div style={{color:CP.textSecondary,textAlign:"center",padding:30}}>😕 {L("Nichts gefunden","No se encontró nada","Nothing found","Nessun risultato")}</div>}
          {groups.map(g=>(
            <div key={g.key} style={{marginBottom:12}}>
              <div style={{color:"#74C0FC",fontWeight:700,fontSize:13,margin:"6px 2px"}}>{g.icon} {g.title} ({g.count})</div>
              {g.items.map(it=>(
                <button key={it.id} onClick={()=>go(g,it)} style={{display:"block",width:"100%",textAlign:"left",background:"rgba(255,255,255,.04)",border:`1px solid ${CP.border}`,borderRadius:10,padding:"9px 12px",marginBottom:5,cursor:"pointer",fontFamily:CP.font}}>
                  <div style={{color:CP.textPrimary,fontWeight:600,fontSize:14}}>{it.title}</div>
                  {it.sub&&<div style={{color:CP.textSecondary,fontSize:12,marginTop:2}}>{it.sub}</div>}
                </button>
              ))}
              {g.count>g.items.length&&<div style={{color:CP.textTertiary,fontSize:12}}>+ {g.count-g.items.length} {L("weitere – Suche genauer eingeben","más – escribe algo más concreto","more – refine your search","altri – precisa la ricerca")}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── SHARE THE APP (always the public app address, never GitHub/Vercel pages) ───
function ShareAppModal({lang, onClose}){
  const L = makeL(lang);
  const url = APP_PUBLIC_URL;
  const text = L("Patjac Reinigung Garten & Services – App","Patjac Reinigung Garten & Services – App","Patjac Reinigung Garten & Services – App","Patjac Reinigung Garten & Services – App");
  const [copied,setCopied] = useState(false);
  const btn = bg => ({background:bg,border:"none",borderRadius:12,color:"#fff",padding:"12px 14px",cursor:"pointer",fontWeight:700,fontSize:14,textAlign:"center",textDecoration:"none",display:"block",fontFamily:CP.font});
  return (
    <CPModal title={`📲 ${L("App teilen","Compartir la app","Share the app","Condividi l'app")}`} onClose={onClose} width={460}>
      <div style={{color:CP.textSecondary,fontSize:13,marginBottom:10,lineHeight:1.5}}>
        {L("Teilen Sie immer diesen Link. Er öffnet direkt die App (nicht GitHub oder Vercel).","Comparte siempre este enlace: abre directamente la app (no GitHub ni Vercel).","Always share this link – it opens the app directly (not GitHub or Vercel).","Condividi sempre questo link: apre direttamente l'app (non GitHub o Vercel).")}
      </div>
      <div style={{background:"rgba(0,0,0,.3)",border:`1px solid ${CP.border}`,borderRadius:10,padding:"10px 12px",color:"#74C0FC",fontWeight:700,fontSize:15,marginBottom:12,wordBreak:"break-all"}}>{url}</div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
        {typeof navigator!=="undefined"&&navigator.share&&<button onClick={()=>navigator.share({title:"Patjac App",text,url}).catch(()=>{})} style={{...btn("#7048E8"),gridColumn:"span 2"}}>📱 {L("Teilen …","Compartir …","Share …","Condividi …")}</button>}
        <a href={`https://wa.me/?text=${encodeURIComponent(text+"\n"+url)}`} target="_blank" rel="noopener noreferrer" style={btn("#25D366")}>💬 WhatsApp</a>
        <a href={`mailto:?subject=${encodeURIComponent("Patjac App")}&body=${encodeURIComponent(text+"\n"+url)}`} style={btn("#1C7ED6")}>📧 E-mail</a>
        <button onClick={()=>{ try{ navigator.clipboard.writeText(url); setCopied(true); setTimeout(()=>setCopied(false),2000); }catch(e){} }} style={{...btn("rgba(255,255,255,.12)"),gridColumn:"span 2"}}>{copied?"✅ "+L("Kopiert","Copiado","Copied","Copiato"):"📋 "+L("Link kopieren","Copiar enlace","Copy link","Copia link")}</button>
      </div>
      <div style={{color:CP.textTertiary,fontSize:12,marginTop:12,lineHeight:1.5}}>
        💡 {L("Auf dem Handy: Link öffnen → «Zum Home-Bildschirm» – dann startet die App wie jede andere App.","En el móvil: abre el enlace → «Añadir a pantalla de inicio» y la app se abrirá como cualquier otra.","On the phone: open the link → «Add to Home Screen» – the app then starts like any other app.","Sul telefono: apri il link → «Aggiungi a Home» e l'app si avvia come le altre.")}
      </div>
    </CPModal>
  );
}

// ─── BILLING REMINDERS ───────────────────────────────────────
// Client billing type: perService → on the day of each service, weeklyContract → when the week (Mon–Sun) ends,
// monthlyContract → when the month ends. A job counts as invoiced if an invoice lists it or covers its date for that client.
const clientBillingMode = c => c?.billingType==="weeklyContract"?"week":c?.billingType==="monthlyContract"?"month":"job";
const computeBillingDue = (clients, jobs, invoices, today=ymd(new Date())) => {
  const invoicedIds = new Set(); (invoices||[]).forEach(i=>(i.jobIds||[]).forEach(id=>invoicedIds.add(id)));
  const covered = (j) => invoicedIds.has(j.id) || (invoices||[]).some(i=>i.clientId===j.clientId && i.periodFrom && i.periodTo && j.date>=i.periodFrom && j.date<=i.periodTo && !(i.jobIds||[]).length);
  const limit = (()=>{ const d=new Date(today+"T12:00:00"); d.setDate(d.getDate()-120); return ymd(d); })();
  const out=[];
  (clients||[]).filter(c=>c.active!==false).forEach(c=>{
    const mode = clientBillingMode(c);
    const js = (jobs||[]).filter(j=>j.clientId===c.id && j.date && j.date>=limit && j.date<=today && j.status!=="cancelled" && !covered(j));
    if(!js.length) return;
    const groups = {};
    js.forEach(j=>{
      let key, from, to;
      if(mode==="job"){ key=j.teamId||j.id; from=to=j.date; }
      else if(mode==="week"){ [from,to]=invWeekRange(j.date); key=from; }
      else { [from,to]=invMonthRange(j.date.slice(0,7)); key=from.slice(0,7); }
      if(mode!=="job" && today<to) return;               // week / month not finished yet
      const g = groups[key] || (groups[key]={clientId:c.id, clientName:c.name, mode, from, to, hours:0, jobIds:[]});
      g.hours += hoursBetween(j.timeStart,j.timeEnd); g.jobIds.push(j.id);
    });
    Object.values(groups).forEach(g=>{ g.hours=Math.round(g.hours*100)/100; g.amount=Math.round(g.hours*(parseFloat(c.price)||0)*100)/100; g.key=`${c.id}_${g.mode}_${g.from}`; g.today = g.mode==="job" ? g.from===today : g.to===today; out.push(g); });
  });
  let dismissed={}; try{ dismissed=JSON.parse(localStorage.getItem("patjac_billing_dismissed")||"{}"); }catch(e){}
  return out.filter(g=>!dismissed[g.key]).sort((a,b)=>a.to.localeCompare(b.to));
};
function BillingDuePanel({due, lang, onIssue, compact}){
  const L = makeL(lang);
  const [hidden,setHidden] = useState({});
  due = due.filter(g=>!hidden[g.key]);
  if(!due.length) return null;
  const dismiss = (g) => { try{ const d=JSON.parse(localStorage.getItem("patjac_billing_dismissed")||"{}"); d[g.key]=1; localStorage.setItem("patjac_billing_dismissed",JSON.stringify(d)); }catch(e){} setHidden(h=>({...h,[g.key]:1})); };
  const modeTxt = m => m==="job"?L("Pro Dienst","Por servicio","Per service","Per servizio"):m==="week"?L("Wöchentlich","Semanal","Weekly","Settimanale"):L("Monatlich","Mensual","Monthly","Mensile");
  const list = compact ? due.slice(0,5) : due;
  return (
    <CPCard style={{marginBottom:14,border:"1px solid rgba(250,176,5,.45)",background:"rgba(250,176,5,.08)"}}>
      <div style={{color:"#FFD43B",fontWeight:700,fontSize:14,marginBottom:10}}>🔔 {L("Rechnungen zu erstellen","Facturas por emitir","Invoices to issue","Fatture da emettere")} ({due.length})</div>
      <div style={{display:"flex",flexDirection:"column",gap:8}}>
        {list.map(g=>(
          <div key={g.key} style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,flexWrap:"wrap",padding:"8px 10px",borderRadius:10,background:"rgba(0,0,0,.2)"}}>
            <div style={{minWidth:0}}>
              <div style={{color:CP.textPrimary,fontWeight:700,fontSize:14}}>{g.clientName} {g.today&&<span style={{color:"#FF8787",fontSize:11,fontWeight:700}}>● {L("HEUTE","HOY","TODAY","OGGI")}</span>}</div>
              <div style={{color:CP.textSecondary,fontSize:12}}>{modeTxt(g.mode)} · {g.mode==="job"?invFmtDate(g.from):`${invFmtDate(g.from)} – ${invFmtDate(g.to)}`} · {g.hours} h · CHF {g.amount.toFixed(2)}</div>
            </div>
            <div style={{display:"flex",gap:6}}>
              <CPBtn size="sm" onClick={()=>onIssue(g)}>🧾 {L("Rechnung erstellen","Emitir factura","Issue invoice","Emetti fattura")}</CPBtn>
              <CPBtn size="sm" variant="secondary" onClick={()=>dismiss(g)}>✓ {L("Schon verrechnet","Ya facturado","Already billed","Già fatturato")}</CPBtn>
            </div>
          </div>
        ))}
        {compact&&due.length>list.length&&<div style={{color:CP.textSecondary,fontSize:12}}>+ {due.length-list.length} {L("weitere","más","more","altre")}</div>}
      </div>
    </CPCard>
  );
}

// ─── INVOICES ────────────────────────────────────────────────
// Billing modes: per job, per week, per month. Amounts = planned hours × client price per hour (no VAT).
const INV_SERVICES = [
  {id:"cleaning",  icon:"🧹", L:["Reinigung","Limpieza","Cleaning","Pulizia"]},
  {id:"gardening", icon:"🌿", L:["Gartenpflege","Jardinería","Gardening","Giardinaggio"]},
  {id:"repairs",   icon:"🔧", L:["Reparaturen","Reparaciones","Repairs","Riparazioni"]},
];
const invSvcId = st => st==="gardening"||st==="garden" ? "gardening" : st==="repairs" ? "repairs" : "cleaning";
const invLangIdx = lang => ({DE:0,ES:1,EN:2,IT:3}[lang] ?? 1);
const invSvcLabel = (id,lang) => { const s=INV_SERVICES.find(x=>x.id===id)||INV_SERVICES[0]; return s.L[invLangIdx(lang)]; };
const invFmtDate = d => fmtDate(d);
const invWeekRange = (dateStr) => { const d=new Date((dateStr||ymd(new Date()))+"T12:00:00"); const wd=(d.getDay()+6)%7; const mon=new Date(d); mon.setDate(d.getDate()-wd); const sun=new Date(mon); sun.setDate(mon.getDate()+6); return [ymd(mon), ymd(sun)]; };
const invMonthRange = (ym) => { const [y,m]=(ym||ymd(new Date()).slice(0,7)).split("-").map(Number); return [`${y}-${String(m).padStart(2,"0")}-01`, ymd(new Date(y,m,0))]; };
const INV_BUCKET_URL = "https://rtviublrukagwxaypmit.supabase.co/storage/v1/object/";

// PDF engine (loaded on demand from the CDN, only when a PDF is created)
let _html2pdfPromise = null;
const loadHtml2Pdf = () => {
  if(window.html2pdf) return Promise.resolve(window.html2pdf);
  if(_html2pdfPromise) return _html2pdfPromise;
  const srcs = ["https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js","https://cdn.jsdelivr.net/npm/html2pdf.js@0.10.1/dist/html2pdf.bundle.min.js"];
  _html2pdfPromise = new Promise((res,rej)=>{
    const tryOne = (i) => { if(i>=srcs.length){ _html2pdfPromise=null; rej(new Error("pdf lib")); return; }
      const s=document.createElement("script"); s.src=srcs[i]; s.async=true;
      s.onload=()=> window.html2pdf ? res(window.html2pdf) : tryOne(i+1);
      s.onerror=()=>{ s.remove(); tryOne(i+1); };
      document.head.appendChild(s); };
    tryOne(0);
  });
  return _html2pdfPromise;
};
const invoicePdfBlob = async (el) => {
  const h2p = await loadHtml2Pdf();
  return h2p().set({margin:[10,10,12,10], image:{type:"jpeg",quality:0.95}, html2canvas:{scale:2,useCORS:true,backgroundColor:"#ffffff"}, jsPDF:{unit:"mm",format:"a4",orientation:"portrait"}, pagebreak:{mode:["avoid-all","css"]}}).from(el).outputPdf("blob");
};
const uploadInvoicePdf = async (blob, path) => {
  const res = await fetch(INV_BUCKET_URL+"invoices/"+path, {method:"POST", headers:{apikey:DOCS_KEY, Authorization:`Bearer ${DOCS_KEY}`, "Content-Type":"application/pdf", "x-upsert":"true"}, body:blob});
  if(!res.ok) throw new Error(await res.text());
  return INV_BUCKET_URL+"public/invoices/"+path;
};

// The printable invoice (used for preview, print and PDF)
function InvoiceDocument({inv, client, cs, lang}){
  const L = makeL(lang);
  const fm = n => Number(n||0).toLocaleString("de-CH",{minimumFractionDigits:2,maximumFractionDigits:2});
  const modeLabel = inv.billingMode==="job"?L("Pro Dienst","Por servicio","Per service","Per servizio"):inv.billingMode==="week"?L("Wöchentlich","Semanal","Weekly","Settimanale"):inv.billingMode==="month"?L("Monatlich","Mensual","Monthly","Mensile"):"";
  const addr = client ? [`${client.street||""} ${client.number||""}`.trim(), `${client.postalCode||""} ${client.city||""}`.trim()].filter(Boolean) : [];
  const th = {padding:"7px 8px",textAlign:"left",fontWeight:700,fontSize:11};
  const td = {padding:"7px 8px",fontSize:11,borderBottom:"1px solid #e5e7eb",verticalAlign:"top"};
  return (
    <div style={{background:"#fff",color:"#111",padding:"26px 28px",fontFamily:"Arial,Helvetica,sans-serif",width:"100%",boxSizing:"border-box"}}>
      <div style={{display:"flex",justifyContent:"space-between",gap:16,marginBottom:22}}>
        <div>
          <img src={PATJAC_LOGO} alt="Patjac" style={{height:48,width:"auto",objectFit:"contain",display:"block",marginBottom:6}}/>
          <div style={{fontSize:11,lineHeight:1.5,color:"#444"}}>
            <div style={{fontWeight:700,color:"#111"}}>{cs.name}</div>
            <div>{cs.street} {cs.number}, {cs.postalCode} {cs.city}</div>
            <div>{cs.phone} · {cs.email}</div>
            {cs.uid&&<div>UID: {cs.uid}</div>}
          </div>
        </div>
        <div style={{textAlign:"right"}}>
          <div style={{fontSize:24,fontWeight:700,color:"#1C7ED6",letterSpacing:1}}>{L("RECHNUNG","FACTURA","INVOICE","FATTURA")}</div>
          <div style={{fontSize:12,marginTop:6}}>Nr. <strong>{inv.invoiceNumber}</strong></div>
          <div style={{fontSize:11,color:"#555"}}>{L("Datum","Fecha","Date","Data")}: {invFmtDate(inv.date)}</div>
          <div style={{fontSize:11,color:"#555"}}>{L("Zahlbar bis","Vence","Due","Scadenza")}: {invFmtDate(inv.dueDate)}</div>
        </div>
      </div>
      <div style={{display:"flex",justifyContent:"space-between",gap:16,marginBottom:16}}>
        <div style={{background:"#f5f7fa",padding:"10px 14px",borderRadius:6,fontSize:12,lineHeight:1.5,minWidth:220}}>
          <div style={{fontSize:10,color:"#777",textTransform:"uppercase",letterSpacing:.5}}>{L("Rechnung an","Facturar a","Bill to","Fatturare a")}</div>
          <div style={{fontWeight:700}}>{inv.clientName}</div>
          {addr.map((a,i)=><div key={i}>{a}</div>)}
        </div>
        {(inv.periodFrom||modeLabel)&&(
          <div style={{fontSize:12,textAlign:"right",lineHeight:1.6,color:"#333"}}>
            {modeLabel&&<div><strong>{L("Abrechnung","Facturación","Billing","Fatturazione")}:</strong> {modeLabel}</div>}
            {inv.periodFrom&&<div><strong>{L("Zeitraum","Periodo","Period","Periodo")}:</strong> {invFmtDate(inv.periodFrom)} – {invFmtDate(inv.periodTo)}</div>}
          </div>
        )}
      </div>
      <table style={{width:"100%",borderCollapse:"collapse",marginBottom:14}}>
        <thead><tr style={{background:"#1C7ED6",color:"#fff"}}>
          <th style={th}>{L("Beschreibung","Descripción","Description","Descrizione")}</th>
          <th style={{...th,textAlign:"right"}}>{L("Stunden","Horas","Hours","Ore")}</th>
          <th style={{...th,textAlign:"right"}}>{L("CHF/Std.","CHF/hora","CHF/h","CHF/ora")}</th>
          <th style={{...th,textAlign:"right"}}>Total CHF</th>
        </tr></thead>
        <tbody>{(inv.items||[]).map((it,i)=>(
          <tr key={i}>
            <td style={td}><div style={{fontWeight:700}}>{it.service?invSvcLabel(it.service,lang):it.description}</div>{it.service&&it.detail&&<div style={{color:"#555",fontSize:10.5,marginTop:2}}>{it.detail}</div>}</td>
            <td style={{...td,textAlign:"right"}}>{Number(it.qty||0).toLocaleString("de-CH",{maximumFractionDigits:2})}</td>
            <td style={{...td,textAlign:"right"}}>{fm(it.price)}</td>
            <td style={{...td,textAlign:"right",fontWeight:700}}>{fm(it.total)}</td>
          </tr>))}
        </tbody>
      </table>
      <div style={{display:"flex",justifyContent:"flex-end"}}>
        <div style={{width:250,fontSize:12}}>
          <div style={{display:"flex",justifyContent:"space-between",color:"#555",padding:"3px 0"}}><span>{L("Total Stunden","Total horas","Total hours","Totale ore")}</span><span>{(inv.items||[]).reduce((s,i)=>s+(Number(i.qty)||0),0).toLocaleString("de-CH",{maximumFractionDigits:2})} h</span></div>
          <div style={{color:"#777",padding:"3px 0",fontSize:10}}>{L("Nicht MWST-pflichtig (Umsatz unter CHF 100'000)","No sujeto a IVA (facturación inferior a CHF 100'000)","Not subject to VAT (turnover below CHF 100,000)","Non assoggettato all'IVA (cifra d'affari inferiore a CHF 100'000)")}</div>
          <div style={{display:"flex",justifyContent:"space-between",fontWeight:700,fontSize:16,borderTop:"2px solid #111",paddingTop:6,marginTop:4}}><span>Total CHF</span><span>{fm(inv.total)}</span></div>
        </div>
      </div>
      <div style={{marginTop:18,padding:"10px 14px",background:"#e8f4fd",borderRadius:6,fontSize:11,lineHeight:1.6}}>
        <strong>{L("Zahlungsangaben","Datos de pago","Payment details","Dati di pagamento")}</strong><br/>
        {L("Empfänger","Beneficiario","Payee","Beneficiario")}: {cs.name}, {cs.postalCode} {cs.city}<br/>
        IBAN: {cs.iban}{cs.bic?` · BIC: ${cs.bic}`:""}<br/>
        {L("Zahlbar bis","Pagar antes del","Due by","Pagabile entro")}: {invFmtDate(inv.dueDate)} · {L("Vermerk","Referencia","Reference","Riferimento")}: {inv.invoiceNumber}
      </div>
      <div style={{marginTop:14,fontSize:10.5,color:"#666",textAlign:"center"}}>{L("Vielen Dank für Ihr Vertrauen!","¡Gracias por su confianza!","Thank you for your trust!","Grazie per la fiducia!")}</div>
    </div>
  );
}

function InvoicesApp({t,invoices,setInvoices,clients,jobs,companySettings,notify,onBack,lang,invoicePrefill,clearInvoicePrefill}){
  const L = makeL(lang);
  const cs = {name:"Patjac Reinigung Garten & Services",street:"",number:"",postalCode:"",city:"Zürich",phone:"",email:"info@patjacservices.ch",uid:"",iban:"",bic:"",...(companySettings||{})};
  const [modal,setModal]=useState(null);
  const [selInv,setSelInv]=useState(null);   // invoice object (preview) or id (edit)
  const [form,setForm]=useState({});
  const [deleteInvId,setDeleteInvId]=useState(null);
  const [sendState,setSendState]=useState({status:"idle",url:"",blob:null});
  const bulk=useBulkSelect();
  const [invSearch,setInvSearch] = useState(()=>takePendingSearch("invoices"));
  const previewRef = useRef(null);
  const li = invLangIdx(lang);

  const deleteInvoice = (id) => {
    setInvoices(p=>p.filter(i=>i.id!==id));
    setDeleteInvId(null);
    notify(L("Rechnung gelöscht","Factura eliminada","Invoice deleted","Fattura eliminata"),"success");
  };
  // Patjac is not VAT-registered (turnover < CHF 100'000): invoices are issued without VAT.
  const calc=(items)=>{const s=items.reduce((a,i)=>a+(Number(i.total)||0),0);return{s:s.toFixed(2),v:(0).toFixed(2),t:s.toFixed(2)};};
  const sc=(s)=>s==="paid"?"green":s==="overdue"?"red":"yellow";
  const sl=(s)=>s==="paid"?t.paid:s==="overdue"?t.overdue:t.pending;
  const r2 = n => Math.round(n*100)/100;

  // ── Automatic calculation from the jobs ─────────────────────
  const client = clients.find(c=>c.id===form.clientId);
  const rate = parseFloat(client?.price)||0;
  const billedJobIds = useMemo(()=>{ const s=new Set(); (invoices||[]).forEach(i=>{ if(i.id!==form.id) (i.jobIds||[]).forEach(x=>s.add(x)); }); return s; },[invoices, form.id]);
  // One entry per job (team jobs = several rows with the same teamId → one job with the total hours)
  const jobGroups = useMemo(()=>{
    if(!form.clientId||!form.periodFrom||!form.periodTo) return [];
    const rows=(jobs||[]).filter(j=>j.clientId===form.clientId&&j.date&&j.date>=form.periodFrom&&j.date<=form.periodTo&&j.status!=="cancelled");
    const map=new Map();
    rows.forEach(j=>{ const k=j.teamId||j.id; const g=map.get(k)||{key:k,ids:[],date:j.date,start:j.timeStart,end:j.timeEnd,service:invSvcId(j.serviceType),hours:0,people:0};
      g.ids.push(j.id); g.hours+=hoursBetween(j.timeStart,j.timeEnd); g.people+=1;
      if((j.timeStart||"")<(g.start||"99")) g.start=j.timeStart; if((j.timeEnd||"")>(g.end||"")) g.end=j.timeEnd; map.set(k,g); });
    return [...map.values()].map(g=>({...g,hours:r2(g.hours),billed:g.ids.some(id=>billedJobIds.has(id))})).sort((a,b)=>`${a.date}${a.start}`.localeCompare(`${b.date}${b.start}`));
  },[jobs, form.clientId, form.periodFrom, form.periodTo, billedJobIds]);

  const buildItems = (mode, groups, selected) => {
    if(mode==="job"){
      return groups.filter(g=>selected.includes(g.key)).map(g=>({_k:gid(),service:g.service,
        detail:`${invFmtDate(g.date)} · ${g.start||""}–${g.end||""}${g.people>1?` · ${g.people} ${L("Personen","personas","people","persone")}`:""}`,
        qty:g.hours,price:rate,total:r2(g.hours*rate)}));
    }
    const by={}; groups.filter(g=>!g.billed||selected.includes(g.key)).forEach(g=>{ (by[g.service]=by[g.service]||{h:0,n:0,dates:[]}); by[g.service].h+=g.hours; by[g.service].n+=1; by[g.service].dates.push(fmtDateShort(g.date)); });
    return Object.entries(by).map(([svc,v])=>({_k:gid(),service:svc,
      detail:`${v.n} ${v.n===1?L("Einsatz","servicio","visit","intervento"):L("Einsätze","servicios","visits","interventi")} (${v.dates.join(", ")}) · ${invFmtDate(form.periodFrom)}–${invFmtDate(form.periodTo)}`,
      qty:r2(v.h),price:rate,total:r2(v.h*rate)}));
  };
  // Recalculate automatically whenever client, mode, period or selected jobs change
  useEffect(()=>{
    if(modal!=="form"||!form.billingMode||form._manual) return;
    const sel = form.billingMode==="job"
      ? (form._selTouched ? (form._sel||[]).filter(k=>jobGroups.some(g=>g.key===k)) : jobGroups.filter(g=>!g.billed).map(g=>g.key))
      : jobGroups.filter(g=>!g.billed).map(g=>g.key);
    const items = buildItems(form.billingMode, jobGroups, sel);
    const jobIds = jobGroups.filter(g=>sel.includes(g.key)).flatMap(g=>g.ids);
    setForm(f=>({...f, items, jobIds, ...(f.billingMode==="job"&&!f._selTouched?{_sel:sel}:{})}));
  },[jobGroups, form.billingMode, form._selTouched?JSON.stringify(form._sel||[]):"", rate, modal, form._manual]);

  const pickMode = (mode, clientIdArg) => {
    const today = ymd(new Date());
    const cid = clientIdArg || form.clientId;
    let from=form.periodFrom, to=form.periodTo;
    if(mode==="week"){ [from,to]=invWeekRange(today); }
    else if(mode==="month"){ const d=new Date(); d.setDate(1); d.setMonth(d.getMonth()-1); [from,to]=invMonthRange(ymd(d).slice(0,7)); }
    else {
      // Per job: the day of the client's most recent job not yet invoiced (or today)
      const cand=(jobs||[]).filter(j=>j.clientId===cid&&j.date&&j.date<=today&&!billedJobIds.has(j.id)).map(j=>j.date).sort();
      from=to=cand.length?cand[cand.length-1]:today;
    }
    setForm(f=>({...f,clientId:cid,billingMode:mode,periodFrom:from,periodTo:to,_sel:[],_selTouched:false,_manual:false}));
  };
  // Open a new invoice already filled for a reminder (client + billing type + period)
  const issueFromDue = (g) => {
    newInvoice();
    setForm(f=>({...f,clientId:g.clientId,billingMode:g.mode,periodFrom:g.from,periodTo:g.to,_sel:[],_selTouched:false,_manual:false}));
  };
  useEffect(()=>{ if(invoicePrefill){ issueFromDue(invoicePrefill); clearInvoicePrefill&&clearInvoicePrefill(); } },[invoicePrefill]);
  const due = useMemo(()=>computeBillingDue(clients,jobs,invoices),[clients,jobs,invoices]);

  const newInvoice = () => {
    const yr=new Date().getFullYear();
    const nums=invoices.filter(i=>(i.invoiceNumber||"").startsWith(`${yr}-`)).map(i=>parseInt((i.invoiceNumber||"").split("-")[1],10)).filter(x=>!isNaN(x));
    const next=(nums.length?Math.max(...nums):0)+1;
    const d=new Date(); d.setDate(d.getDate()+30);
    setForm({id:gid(),clientId:"",invoiceNumber:`${yr}-${String(next).padStart(3,"0")}`,date:todayStr,dueDate:ymd(d),items:[],status:"pending",billingMode:"",periodFrom:"",periodTo:"",_sel:[]});
    setSelInv(null); setModal("form");
  };

  const save=()=>{
    if(!form.clientId){ notify(L("Bitte Kunde wählen","Elija un cliente","Choose a client","Scegli un cliente"),"error"); return; }
    if(!(form.items||[]).length){ notify(L("Keine Positionen","La factura no tiene líneas","No line items","Nessuna voce"),"error"); return; }
    const c=clients.find(x=>x.id===form.clientId);
    const{s}=calc(form.items||[]);
    const items=(form.items||[]).map(({_k,...it})=>({...it,description:`${invSvcLabel(it.service||"cleaning",lang)}${it.detail?` – ${it.detail}`:""}`}));
    const {_sel,_manual,_selTouched,...rest}=form;
    const inv={...rest,items,clientName:c?.name||"",amount:parseFloat(s),vatAmount:0,total:parseFloat(s),pdfUrl:"",
      periodFrom:form.periodFrom||null,periodTo:form.periodTo||null,billingMode:form.billingMode||"manual",jobIds:form.jobIds||[]};
    if(invoices.some(i=>i.id===inv.id)) setInvoices(p=>p.map(i=>i.id===inv.id?inv:i));
    else setInvoices(p=>[...p,inv]);
    notify(t.success,"success"); setModal("preview"); setSelInv(inv); setSendState({status:"idle",url:"",blob:null});
  };

  const setItem = (idx, patch) => setForm(f=>{ const it=[...(f.items||[])]; const n={...it[idx],...patch}; n.total=r2((Number(n.qty)||0)*(Number(n.price)||0)); it[idx]=n; return {...f,items:it,_manual:true}; });

  // ── Send: build the PDF, store it and give WhatsApp / e-mail links ──
  const clientOf = inv => clients.find(c=>c.id===inv?.clientId||c.name===inv?.clientName);
  const pdfName = inv => `${L("Rechnung","Factura","Invoice","Fattura")}_${inv.invoiceNumber}_${(inv.clientName||"").replace(/[^\w]+/g,"_")}.pdf`;
  const preparePdf = async (inv) => {
    if(!previewRef.current) return;
    setSendState(s=>({...s,status:"working"}));
    try{
      const blob = await invoicePdfBlob(previewRef.current);
      let url = "";
      try{ url = await uploadInvoicePdf(blob, `${inv.id}-${Math.random().toString(36).slice(2,10)}.pdf`);
        setInvoices(p=>p.map(i=>i.id===inv.id?{...i,pdfUrl:url}:i)); setSelInv(v=>v&&v.id===inv.id?{...v,pdfUrl:url}:v);
      }catch(e){ console.error("upload",e); }
      setSendState({status:"ready",url,blob});
      if(!url) notify(L("PDF erstellt, aber Link nicht verfügbar – PDF herunterladen und anhängen","PDF creado, pero no se pudo crear el enlace: descárguelo y adjúntelo","PDF created but no link – download and attach it","PDF creato ma senza link – scaricalo e allegalo"),"error");
    }catch(e){ console.error(e); setSendState({status:"error",url:"",blob:null}); notify(L("PDF konnte nicht erstellt werden","No se pudo crear el PDF","Could not create the PDF","Impossibile creare il PDF"),"error"); }
  };
  const downloadBlob = (blob,name) => { const u=URL.createObjectURL(blob); const a=document.createElement("a"); a.href=u; a.download=name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(u),30000); };
  const msgFor = (inv,url) => {
    const fm = n => Number(n||0).toLocaleString("de-CH",{minimumFractionDigits:2,maximumFractionDigits:2});
    return L(
`Guten Tag ${inv.clientName}\n\nAnbei erhalten Sie unsere Rechnung Nr. ${inv.invoiceNumber}.\nBetrag: CHF ${fm(inv.total)}\nZahlbar bis: ${invFmtDate(inv.dueDate)}\n${url?`\n📄 Rechnung (PDF): ${url}\n`:""}\nIBAN: ${cs.iban}\n\nVielen Dank für Ihr Vertrauen!\n${cs.name}\n${cs.phone||""}`,
`Buenos días ${inv.clientName}:\n\nLe enviamos nuestra factura n.º ${inv.invoiceNumber}.\nImporte: CHF ${fm(inv.total)}\nVence el: ${invFmtDate(inv.dueDate)}\n${url?`\n📄 Factura (PDF): ${url}\n`:""}\nIBAN: ${cs.iban}\n\n¡Gracias por su confianza!\n${cs.name}\n${cs.phone||""}`,
`Hello ${inv.clientName},\n\nPlease find our invoice no. ${inv.invoiceNumber}.\nAmount: CHF ${fm(inv.total)}\nDue: ${invFmtDate(inv.dueDate)}\n${url?`\n📄 Invoice (PDF): ${url}\n`:""}\nIBAN: ${cs.iban}\n\nThank you for your trust!\n${cs.name}\n${cs.phone||""}`,
`Buongiorno ${inv.clientName}\n\nLe inviamo la nostra fattura n. ${inv.invoiceNumber}.\nImporto: CHF ${fm(inv.total)}\nScadenza: ${invFmtDate(inv.dueDate)}\n${url?`\n📄 Fattura (PDF): ${url}\n`:""}\nIBAN: ${cs.iban}\n\nGrazie per la fiducia!\n${cs.name}\n${cs.phone||""}`);
  };
  const openPreview = (inv) => { setSelInv(inv); setSendState(inv.pdfUrl?{status:"ready",url:inv.pdfUrl,blob:null}:{status:"idle",url:"",blob:null}); setModal("preview"); };

  const modeBtn = (id,icon,label,sub) => (
    <button key={id} onClick={()=>pickMode(id)} style={{flex:1,minWidth:120,padding:"12px 10px",borderRadius:14,cursor:"pointer",fontFamily:CP.font,
      border:`2px solid ${form.billingMode===id?"#1C7ED6":"rgba(255,255,255,.12)"}`,background:form.billingMode===id?"rgba(28,126,214,.25)":"rgba(255,255,255,.05)",color:"#fff",textAlign:"center"}}>
      <div style={{fontSize:24}}>{icon}</div><div style={{fontWeight:700,fontSize:14}}>{label}</div><div style={{fontSize:11,color:CP.textSecondary}}>{sub}</div>
    </button>);

  return (
    <CPScreen title={t.invoices} icon="🧾" onBack={onBack} t={t}
      actions={<CPBtn onClick={newInvoice} size="sm">＋ {t.generateInvoice}</CPBtn>}>
      <BillingDuePanel due={due} lang={lang} onIssue={issueFromDue}/>
      <BulkBar bulk={bulk} visibleIds={invoices.filter(i=>matchSearch(invSearch,i.invoiceNumber,i.clientName,i.date,i.dueDate,String(i.total))).map(i=>i.id)} lang={lang}
        itemWord={{DE:"Rechnungen",ES:"facturas",EN:"invoices",IT:"fatture"}}
        onDelete={ids=>{setInvoices(p=>p.filter(i=>!ids.has(i.id)));notify(L("Rechnungen gelöscht","Facturas eliminadas","Invoices deleted","Fatture eliminate"),"success");}}/>
      <div style={{display:"flex",flexDirection:"column",gap:10}}>
        {invoices.length===0&&<CPCard style={{textAlign:"center",padding:28}}><div style={{fontSize:40}}>🧾</div><div style={{color:CP.textSecondary,marginTop:8}}>{L("Noch keine Rechnungen.","Todavía no hay facturas.","No invoices yet.","Ancora nessuna fattura.")}</div></CPCard>}
        {invoices.length>0&&<SearchBox value={invSearch} onChange={setInvSearch} lang={lang} placeholder={`🔍 ${L("Rechnung suchen (Nr., Kunde, Datum, Betrag …)","Buscar factura (n.º, cliente, fecha, importe …)","Search invoice (no., client, date, amount …)","Cerca fattura (n., cliente, data, importo …)")}`}/>}
        {[...invoices].filter(i=>matchSearch(invSearch,i.invoiceNumber,i.clientName,i.date,i.dueDate,i.periodFrom,i.periodTo,String(i.total),i.status==="paid"?"pagada bezahlt paid":"pendiente offen open")).sort((a,b)=>String(b.date||"").localeCompare(String(a.date||""))).map(inv=>(
          <CPCard key={inv.id} onClick={bulk.selectMode?()=>bulk.toggle(inv.id):undefined} style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:10,...(bulk.selected.has(inv.id)?{outline:"2px solid #4DABF7"}:{})}}>
            {bulk.selectMode&&<SelBox checked={bulk.selected.has(inv.id)} onChange={()=>bulk.toggle(inv.id)}/>}
            <div style={{flex:1,minWidth:180}}>
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4,flexWrap:"wrap"}}>
                <span style={{color:"#74C0FC",fontWeight:700,fontSize:15}}>{inv.invoiceNumber}</span>
                <CPBadge text={sl(inv.status)} color={sc(inv.status)}/>
                {inv.pdfUrl&&<span style={{fontSize:11,color:"#69DB7C"}}>📄 PDF</span>}
              </div>
              <div style={{color:CP.textPrimary,fontWeight:600,fontSize:14}}>{inv.clientName}</div>
              <div style={{color:CP.textSecondary,fontSize:12}}>{invFmtDate(inv.date)} → {invFmtDate(inv.dueDate)}{inv.periodFrom?` · ${L("Zeitraum","Periodo","Period","Periodo")} ${invFmtDate(inv.periodFrom)}–${invFmtDate(inv.periodTo)}`:""}</div>
              <div style={{color:"#FFD43B",fontWeight:700,fontSize:14,marginTop:4}}>CHF {(Number(inv.total)||0).toFixed(2)}</div>
            </div>
            {!bulk.selectMode&&<div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
              <CPBtn onClick={()=>openPreview(inv)} variant="primary" size="sm">📤 {L("Senden","Enviar","Send","Invia")}</CPBtn>
              <CPBtn onClick={()=>openPreview(inv)} variant="secondary" size="sm">👁️</CPBtn>
              {inv.status!=="paid"&&<CPBtn onClick={()=>{setInvoices(p=>p.map(i=>i.id===inv.id?{...i,status:"paid"}:i));notify(t.paid,"success");}} variant="success" size="sm">✓ {t.paid}</CPBtn>}
              <CPBtn onClick={()=>{setForm({...inv,items:(inv.items||[]).map(i=>({_k:gid(),service:i.service||"cleaning",detail:i.detail??i.description??"",...i})),_sel:[],_manual:true});setSelInv(inv.id);setModal("form");}} variant="secondary" size="sm">✏️</CPBtn>
              <CPBtn onClick={()=>setDeleteInvId(inv.id)} variant="danger" size="sm">🗑️</CPBtn>
            </div>}
          </CPCard>
        ))}
      </div>

      {modal==="form"&&(
        <CPModal title={t.generateInvoice} onClose={()=>setModal(null)} width={640}>
          {/* 1. Client */}
          <CPField label={`1. ${L("Kunde","Cliente","Client","Cliente")}`}>
            <CPSelect value={form.clientId} onChange={e=>{ const id=e.target.value; const c=clients.find(x=>x.id===id); if(c) pickMode(clientBillingMode(c), id); else setForm(f=>({...f,clientId:id,billingMode:"",_sel:[],_manual:false})); }}>
              <option value="">— {L("Kunde wählen","Elija un cliente","Choose a client","Scegli un cliente")} —</option>
              {clients.map(c=><option key={c.id} value={c.id}>{c.name}</option>)}
            </CPSelect>
          </CPField>
          {client&&<div style={{color:CP.textSecondary,fontSize:12,margin:"-4px 0 4px"}}>🧾 {L("Abrechnung des Kunden","Facturación del cliente","Client billing","Fatturazione del cliente")}: <strong style={{color:"#74C0FC"}}>{clientBillingMode(client)==="job"?L("Pro Dienst","Por servicio","Per service","Per servizio"):clientBillingMode(client)==="week"?L("Wöchentlich","Semanal","Weekly","Settimanale"):L("Monatlich","Mensual","Monthly","Mensile")}</strong></div>}
          {client&&<div style={{color:CP.textSecondary,fontSize:12,margin:"0 0 10px"}}>💶 {L("Preis pro Stunde","Precio por hora","Price per hour","Prezzo orario")}: <strong style={{color:rate?"#69DB7C":"#FF8787"}}>CHF {rate.toFixed(2)}</strong>{!rate&&` — ${L("im Kunden erfassen","añádalo en la ficha del cliente","set it on the client","impostalo nel cliente")}`}</div>}

          {/* 2. Billing mode */}
          {form.clientId&&(<>
            <div style={{color:CP.textSecondary,fontSize:12,fontWeight:700,margin:"4px 0 8px",textTransform:"uppercase",letterSpacing:.5}}>2. {L("Abrechnungsart","Tipo de facturación","Billing type","Tipo di fatturazione")}</div>
            <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:12}}>
              {modeBtn("job","🧾",L("Pro Dienst","Por servicio","Per service","Per servizio"),L("Tag des Dienstes","Día del servicio","Day of service","Giorno del servizio"))}
              {modeBtn("week","📅",L("Woche","Semana","Week","Settimana"),L("Mo – So","Lun – Dom","Mon – Sun","Lun – Dom"))}
              {modeBtn("month","🗓️",L("Monat","Mensual","Monthly","Mensile"),L("Ganzer Monat","Mes completo","Whole month","Mese intero"))}
            </div>
          </>)}

          {/* 3. Period */}
          {form.clientId&&form.billingMode&&(<>
            <div style={{color:CP.textSecondary,fontSize:12,fontWeight:700,margin:"4px 0 8px",textTransform:"uppercase",letterSpacing:.5}}>3. {L("Zeitraum","Periodo","Period","Periodo")}</div>
            {(()=>{
              const [wF,wT]=invWeekRange(form.periodFrom); const [mF,mT]=invMonthRange((form.periodFrom||"").slice(0,7));
              const clampTo = (v,min,max)=> v<min?min:v>max?max:v;
              if(form.billingMode==="job") return (
                <div style={{display:"grid",gridTemplateColumns:"1fr",gap:"0 10px"}}>
                  <CPField label={L("Datum des Dienstes","Fecha del servicio","Service date","Data del servizio")}>
                    <CPInput type="date" value={form.periodFrom} onChange={e=>{const v=e.target.value; setForm(f=>({...f,periodFrom:v,periodTo:v,_sel:[],_selTouched:false,_manual:false}));}}/>
                  </CPField>
                  {(()=>{ const days=[...new Set((jobs||[]).filter(j=>j.clientId===form.clientId&&j.date).map(j=>j.date))].sort().reverse().slice(0,12); return days.length?(
                    <div style={{display:"flex",gap:6,flexWrap:"wrap",margin:"-4px 0 10px"}}>
                      {days.map(d=><button key={d} onClick={()=>setForm(f=>({...f,periodFrom:d,periodTo:d,_sel:[],_selTouched:false,_manual:false}))} style={{padding:"4px 10px",borderRadius:14,border:"none",cursor:"pointer",fontSize:12,fontWeight:600,fontFamily:CP.font,background:form.periodFrom===d?CP.accent:"rgba(255,255,255,.1)",color:"#fff"}}>{invFmtDate(d)}</button>)}
                    </div>):null; })()}
                </div>);
              if(form.billingMode==="week") return (
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 10px"}}>
                  <CPField label={L("Von","Desde","From","Da")}><CPInput type="date" value={form.periodFrom} onChange={e=>{const v=e.target.value; if(!v) return; const [a,b]=invWeekRange(v); setForm(f=>({...f,periodFrom:v,periodTo:clampTo(f.periodTo&&invWeekRange(f.periodTo)[0]===a?f.periodTo:b,v,b),_manual:false}));}}/></CPField>
                  <CPField label={`${L("Bis","Hasta","To","A")} (${L("gleiche Woche","misma semana","same week","stessa settimana")})`}><CPInput type="date" min={form.periodFrom} max={wT} value={form.periodTo} onChange={e=>{const v=e.target.value; if(!v) return; setForm(f=>({...f,periodTo:clampTo(v,f.periodFrom,wT),_manual:false}));}}/></CPField>
                  <div style={{gridColumn:"span 2",color:CP.textTertiary,fontSize:11.5,margin:"-8px 0 10px"}}>📅 {L("Woche","Semana","Week","Settimana")}: {invFmtDate(wF)} – {invFmtDate(wT)}</div>
                </div>);
              return (
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"0 10px"}}>
                  <CPField label={L("Monat","Mes","Month","Mese")}><CPInput type="month" value={(form.periodFrom||"").slice(0,7)} onChange={e=>{if(!e.target.value) return; const [a,b]=invMonthRange(e.target.value);setForm(f=>({...f,periodFrom:a,periodTo:b,_manual:false}));}}/></CPField>
                  <CPField label={L("Von","Desde","From","Da")}><CPInput type="date" min={mF} max={mT} value={form.periodFrom} onChange={e=>{const v=e.target.value; if(!v) return; const [a,b]=invMonthRange(v.slice(0,7)); setForm(f=>({...f,periodFrom:v,periodTo:(f.periodTo||"").slice(0,7)===v.slice(0,7)&&f.periodTo>=v?f.periodTo:b,_manual:false}));}}/></CPField>
                  <CPField label={`${L("Bis","Hasta","To","A")} (${L("gleicher Monat","mismo mes","same month","stesso mese")})`}><CPInput type="date" min={form.periodFrom} max={mT} value={form.periodTo} onChange={e=>{const v=e.target.value; if(!v) return; setForm(f=>({...f,periodTo:clampTo(v,f.periodFrom,mT),_manual:false}));}}/></CPField>
                </div>);
            })()}
            {/* Job list */}
            <div style={{background:"rgba(0,0,0,.2)",borderRadius:12,padding:"8px 10px",marginBottom:12,maxHeight:220,overflowY:"auto"}}>
              {jobGroups.length===0&&<div style={{color:CP.textSecondary,fontSize:12,padding:6}}>ℹ️ {L("Keine Einsätze in diesem Zeitraum.","No hay trabajos de este cliente en ese periodo.","No jobs in this period.","Nessun intervento nel periodo.")}</div>}
              {jobGroups.map(g=>{
                const checked = form.billingMode==="job" ? (form._sel||[]).includes(g.key) : !g.billed;
                return (
                  <label key={g.key} style={{display:"flex",alignItems:"center",gap:8,padding:"6px 4px",borderBottom:"1px solid rgba(255,255,255,.05)",cursor:form.billingMode==="job"?"pointer":"default",fontSize:13,color:CP.textPrimary,opacity:g.billed&&!checked?.55:1}}>
                    {form.billingMode==="job"&&<input type="checkbox" checked={checked} onChange={()=>setForm(f=>{const s=new Set(f._sel||[]); s.has(g.key)?s.delete(g.key):s.add(g.key); return {...f,_sel:[...s],_selTouched:true,_manual:false};})}/>}
                    <span>{INV_SERVICES.find(s=>s.id===g.service)?.icon}</span>
                    <span style={{flex:1}}>{invFmtDate(g.date)} · {g.start}–{g.end}{g.people>1?` · 👥 ${g.people}`:""}</span>
                    <span style={{color:"#74C0FC",fontWeight:700}}>{g.hours} h</span>
                    <span style={{color:"#FFD43B",minWidth:80,textAlign:"right"}}>CHF {(g.hours*rate).toFixed(2)}</span>
                    {g.billed&&<span style={{fontSize:10,color:"#FAB005"}}>{L("bereits verrechnet","ya facturado","already billed","già fatturato")}</span>}
                  </label>);
              })}
            </div>
          </>)}

          {/* 4. Lines */}
          {form.clientId&&(<>
            <div style={{color:CP.textSecondary,fontSize:12,fontWeight:700,margin:"4px 0 8px",textTransform:"uppercase",letterSpacing:.5}}>4. {L("Beschreibung","Descripción","Description","Descrizione")}</div>
            {(form.items||[]).map((item,idx)=>(
              <div key={item._k||idx} style={{background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.06)",borderRadius:10,padding:8,marginBottom:6}}>
                <div style={{display:"grid",gridTemplateColumns:"1.3fr 2fr auto",gap:6,marginBottom:6}}>
                  <CPSelect value={item.service||"cleaning"} onChange={e=>setItem(idx,{service:e.target.value})}>
                    {INV_SERVICES.map(s=><option key={s.id} value={s.id}>{s.icon} {s.L[li]}</option>)}
                  </CPSelect>
                  <CPInput value={item.detail||""} onChange={e=>setItem(idx,{detail:e.target.value})} placeholder={L("Details (optional)","Detalle (opcional)","Details (optional)","Dettagli (opzionale)")}/>
                  <CPBtn onClick={()=>setForm(f=>({...f,items:f.items.filter((_,i)=>i!==idx),_manual:true}))} variant="danger" size="sm">✕</CPBtn>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,alignItems:"center"}}>
                  <div><div style={{color:CP.textTertiary,fontSize:10}}>{L("Stunden","Horas","Hours","Ore")}</div><CPInput type="number" value={item.qty} onChange={e=>setItem(idx,{qty:parseFloat(e.target.value)||0})}/></div>
                  <div><div style={{color:CP.textTertiary,fontSize:10}}>CHF / {L("Std.","hora","h","ora")}</div><CPInput type="number" value={item.price} onChange={e=>setItem(idx,{price:parseFloat(e.target.value)||0})}/></div>
                  <div style={{color:"#FFD43B",fontSize:15,fontWeight:700,textAlign:"right"}}>CHF {(Number(item.total)||0).toFixed(2)}</div>
                </div>
              </div>
            ))}
            <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
              <CPBtn onClick={()=>setForm(f=>({...f,items:[...(f.items||[]),{_k:gid(),service:"cleaning",detail:"",qty:1,price:rate,total:rate}],_manual:true}))} variant="secondary" size="sm">＋ {L("Position","Línea","Line item","Voce")}</CPBtn>
              {form._manual&&form.billingMode&&<CPBtn onClick={()=>setForm(f=>({...f,_manual:false}))} variant="secondary" size="sm">🔄 {L("Neu berechnen","Recalcular","Recalculate","Ricalcola")}</CPBtn>}
            </div>
          </>)}

          {/* 5. Dates + total */}
          {form.clientId&&(<>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"0 10px",marginTop:12}}>
              <CPField label={t.invoiceNumber}><CPInput value={form.invoiceNumber} onChange={e=>setForm(f=>({...f,invoiceNumber:e.target.value}))}/></CPField>
              <CPField label={t.date}><CPInput type="date" value={form.date} onChange={e=>setForm(f=>({...f,date:e.target.value}))}/></CPField>
              <CPField label={t.dueDate}><CPInput type="date" value={form.dueDate} onChange={e=>setForm(f=>({...f,dueDate:e.target.value}))}/></CPField>
            </div>
            {(()=>{const{t:tot}=calc(form.items||[]); const hrs=(form.items||[]).reduce((a,i)=>a+(Number(i.qty)||0),0); return(
              <div style={{background:"rgba(0,0,0,.25)",borderRadius:12,padding:"12px 16px",marginTop:4}}>
                <div style={{display:"flex",justifyContent:"space-between",color:CP.textSecondary,fontSize:13,marginBottom:4}}><span>{L("Total Stunden","Total horas","Total hours","Totale ore")}</span><span>{r2(hrs)} h</span></div>
                <div style={{color:CP.textTertiary,fontSize:11,marginBottom:6}}>{L("Ohne MWST – nicht MWST-pflichtig","Sin IVA – empresa no sujeta a IVA","No VAT – not VAT-registered","Senza IVA – non assoggettato IVA")}</div>
                <div style={{display:"flex",justifyContent:"space-between",color:"#FFD43B",fontSize:18,fontWeight:700,borderTop:`1px solid ${CP.border}`,paddingTop:8}}><span>Total</span><span>CHF {tot}</span></div>
              </div>);})()}
          </>)}
          <div style={{display:"flex",gap:8,justifyContent:"flex-end",marginTop:12}}>
            <CPBtn onClick={()=>setModal(null)} variant="secondary">{t.cancel}</CPBtn>
            <CPBtn onClick={save}>💾 {L("Speichern & Vorschau","Guardar y ver","Save & preview","Salva e anteprima")}</CPBtn>
          </div>
        </CPModal>
      )}

      {modal==="preview"&&selInv&&typeof selInv==="object"&&(()=>{
        const inv = invoices.find(i=>i.id===selInv.id)||selInv;
        const c = clientOf(inv);
        const wa = swissWa(c?.phone);
        const ready = sendState.status==="ready";
        const msg = msgFor(inv, sendState.url);
        const subj = `${L("Rechnung","Factura","Invoice","Fattura")} ${inv.invoiceNumber} — ${cs.name}`;
        const canShareFile = ready && sendState.blob && typeof navigator!=="undefined" && navigator.canShare && (()=>{ try{ return navigator.canShare({files:[new File([sendState.blob],pdfName(inv),{type:"application/pdf"})]}); }catch(e){ return false; } })();
        const aBtn = (bg)=>({background:bg,border:"none",borderRadius:12,color:"#fff",padding:"11px 12px",cursor:"pointer",fontWeight:700,fontSize:13,textAlign:"center",textDecoration:"none",display:"block",fontFamily:CP.font});
        return (
          <CPModal title={`🧾 ${inv.invoiceNumber} · ${inv.clientName}`} onClose={()=>setModal(null)} width={720}>
            {/* SEND PANEL */}
            <div style={{background:"rgba(28,126,214,.1)",border:"1px solid rgba(28,126,214,.3)",borderRadius:14,padding:12,marginBottom:12}}>
              <div style={{color:"#74C0FC",fontWeight:700,fontSize:14,marginBottom:8}}>📤 {L("Rechnung als PDF an den Kunden senden","Enviar la factura en PDF al cliente","Send the invoice PDF to the client","Invia la fattura in PDF al cliente")}</div>
              {!ready&&(
                <CPBtn onClick={()=>preparePdf(inv)} full>{sendState.status==="working"?`⏳ ${L("PDF wird erstellt…","Creando PDF…","Creating PDF…","Creazione PDF…")}`:`📄 ${L("PDF erstellen","Crear PDF para enviar","Create PDF to send","Crea PDF da inviare")}`}</CPBtn>
              )}
              {ready&&(
                <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(130px,1fr))",gap:8}}>
                  <a href={wa?`https://wa.me/${wa}?text=${encodeURIComponent(msg)}`:undefined} target="_blank" rel="noopener noreferrer" onClick={e=>{if(!wa){e.preventDefault();notify(L("Kunde hat keine Telefonnummer","El cliente no tiene teléfono","Client has no phone","Il cliente non ha telefono"),"error");}}} style={{...aBtn("#25D366"),opacity:wa?1:.45}}>💬 WhatsApp</a>
                  {canShareFile&&<button onClick={async()=>{ try{ await navigator.share({files:[new File([sendState.blob],pdfName(inv),{type:"application/pdf"})],title:subj,text:msg}); }catch(e){} }} style={aBtn("#7048E8")}>📱 {L("PDF teilen","Compartir PDF","Share PDF","Condividi PDF")}</button>}
                  <button onClick={async()=>{ if(sendState.blob) downloadBlob(sendState.blob,pdfName(inv)); else if(sendState.url) window.open(sendState.url,"_blank"); }} style={aBtn("rgba(255,255,255,.15)")}>⬇️ {L("PDF herunterladen","Descargar PDF","Download PDF","Scarica PDF")}</button>
                </div>
              )}
              {ready&&<div style={{marginTop:8}}><CompanyEmailButtons to={c?.email||""} subject={subj} body={msg} lang={lang} disabled={!c?.email}/></div>}
              {ready&&<div style={{color:CP.textSecondary,fontSize:11.5,marginTop:8,lineHeight:1.5}}>
                ℹ️ {sendState.url
                  ? L("Die Nachricht enthält einen Link zum PDF. Der Kunde öffnet ihn mit einem Tipp.","El mensaje lleva un enlace al PDF: el cliente lo abre con un toque.","The message contains a link to the PDF – the client opens it with one tap.","Il messaggio contiene un link al PDF: il cliente lo apre con un tocco.")
                  : L("Kein Link verfügbar: PDF herunterladen und im WhatsApp/E-Mail anhängen.","Sin enlace: descargue el PDF y adjúntelo en WhatsApp o en el e-mail.","No link: download the PDF and attach it in WhatsApp/email.","Nessun link: scarica il PDF e allegalo in WhatsApp/e-mail.")}
                {!c?.email&&` ${L("(Kunde ohne E-Mail)","(el cliente no tiene e-mail guardado)","(client has no email)","(cliente senza e-mail)")}`}
                {ready&&<button onClick={()=>setSendState({status:"idle",url:"",blob:null})} style={{background:"none",border:"none",color:"#74C0FC",cursor:"pointer",fontSize:11.5,textDecoration:"underline",marginLeft:6}}>{L("PDF neu erstellen","Volver a crear PDF","Recreate PDF","Ricrea PDF")}</button>}
              </div>}
            </div>

            {/* INVOICE */}
            <div style={{borderRadius:14,overflow:"hidden",border:"1px solid rgba(255,255,255,.1)"}}>
              <div ref={previewRef}><InvoiceDocument inv={inv} client={c} cs={cs} lang={lang}/></div>
            </div>
            <div style={{display:"flex",gap:8,justifyContent:"flex-end",marginTop:14,flexWrap:"wrap"}}>
              <CPBtn onClick={()=>{ const el=previewRef.current; const w=window.open("","_blank"); if(w&&el){ w.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>${subj}</title><style>body{margin:0}@page{size:A4;margin:10mm}</style></head><body>${el.innerHTML}</body></html>`); w.document.close(); setTimeout(()=>{try{w.focus();w.print();}catch(e){}},500);} }} variant="secondary">🖨️ {L("Drucken","Imprimir","Print","Stampa")}</CPBtn>
              <CPBtn onClick={()=>setModal(null)} variant="secondary">{t.close}</CPBtn>
            </div>
          </CPModal>
        );
      })()}

      {/* ── DELETE INVOICE MODAL ── */}
      {deleteInvId&&(()=>{
        const inv = invoices.find(i=>i.id===deleteInvId);
        return (
          <CPModal title={L("Rechnung löschen","Eliminar factura","Delete invoice","Elimina fattura")} onClose={()=>setDeleteInvId(null)} width={420}>
            <div style={{padding:"8px 0 20px"}}>
              <div style={{textAlign:"center",marginBottom:14}}><span style={{fontSize:44}}>⚠️</span></div>
              <div style={{background:"rgba(201,42,42,0.1)",border:"1px solid rgba(201,42,42,0.3)",borderRadius:12,padding:"12px 16px",marginBottom:14,textAlign:"center"}}>
                <div style={{color:"#FF8787",fontWeight:700,fontSize:15}}>🧾 {inv?.invoiceNumber} — {inv?.clientName}</div>
                <div style={{color:CP.textSecondary,fontSize:12,marginTop:4}}>CHF {(Number(inv?.total)||0).toFixed(2)} · {invFmtDate(inv?.date)}</div>
              </div>
              <div style={{color:CP.textSecondary,fontSize:13,textAlign:"center",marginBottom:18,lineHeight:1.6}}>
                {L("Diese Rechnung wird permanent gelöscht.","Esta factura será eliminada permanentemente.","This invoice will be permanently deleted.","Questa fattura verrà eliminata definitivamente.")}
              </div>
              <div style={{display:"flex",gap:10,justifyContent:"flex-end"}}>
                <CPBtn onClick={()=>setDeleteInvId(null)} variant="secondary">{t.cancel}</CPBtn>
                <CPBtn onClick={()=>deleteInvoice(deleteInvId)} variant="danger">🗑️ {L("Löschen","Eliminar","Delete","Elimina")}</CPBtn>
              </div>
            </div>
          </CPModal>
        );
      })()}
    </CPScreen>
  );
}

// ─── FINANCE ─────────────────────────────────────────────────
function FinanceApp({t,invoices,employees,timeclock,expenses,setExpenses,orders,notify,onBack,lang,companySettings}){
  const cs = companySettings||{};
  const [modal,setModal] = useState(null);
  const [ef,setEf] = useState({description:"",amount:"",category:"materials",date:todayStr});
  const [periodFilter,setPeriodFilter] = useState("all"); // all | month | year
  const L = makeL(lang);

  // ── INCOME ────────────────────────────────────────────────
  const income = invoices.filter(i=>i.status==="paid").reduce((s,i)=>s+(i.total||0),0);
  const pendingIncome = invoices.filter(i=>i.status==="pending"||i.status==="overdue").reduce((s,i)=>s+(Number(i.total)||0),0);
  const mwstCollected = invoices.filter(i=>i.status==="paid").reduce((s,i)=>s+(i.vatAmount||0),0);

  // ── PAYROLL COST (Swiss 2024 – employer total) ─────────────
  const salaries = employees.reduce((s,emp)=>{
    const hrs=timeclock.filter(tc=>tc.employeeId===emp.id&&tc.hours).reduce((h,tc)=>h+(tc.hours||0),0);
    const gross=emp.type==="hourly"?hrs*(emp.hourlyRate||0):(emp.fixedSalary||0);
    // Employer contributions: AHV 5.3% + ALV 1.1% + BUV 0.5% + BVG 7% + KTG 0.5% = 14.4%
    return s+gross*(1+0.053+0.011+0.005+0.07+0.005);
  },0);

  // ── MANUAL EXPENSES ────────────────────────────────────────
  const manualExpenses = expenses.reduce((s,e)=>s+(e.amount||0),0);

  // ── WAREHOUSE / INVENTORY ORDERS (delivered = actual cost) ─
  const deliveredOrders = (orders||[]).filter(o=>o.status==="delivered");
  const pendingOrders   = (orders||[]).filter(o=>o.status==="pending");
  const warehouseCostDelivered = deliveredOrders.reduce((s,o)=>s+(o.total||0),0);
  const warehouseCostPending   = pendingOrders.reduce((s,o)=>s+(o.total||0),0);

  // ── TOTALS ────────────────────────────────────────────────
  const totalExpenses = manualExpenses + salaries + warehouseCostDelivered;
  const profit = income - totalExpenses;
  const mwstInput = mwstCollected>0 ? manualExpenses * 0.081 : 0; // input VAT only recoverable when VAT-registered
  const mwstPayable = Math.max(0, mwstCollected - mwstInput);

  // ── SWISS TAX ESTIMATES ───────────────────────────────────
  const taxZH   = Math.max(0, profit * 0.12);
  const taxFed  = Math.max(0, profit * 0.085);
  const ahvEmpl = salaries * 0.053;

  // ── CHART BARS (real data by month from invoices & orders) ─
  const now = new Date();
  const chartMonths = Array.from({length:12},(_,i)=>{
    const d = new Date(now.getFullYear(),i,1);
    const mStr = `${now.getFullYear()}-${String(i+1).padStart(2,"0")}`;
    const mIncome = invoices.filter(iv=>iv.status==="paid"&&iv.date?.startsWith(mStr)).reduce((s,iv)=>s+(iv.total||0),0);
    const mSalary = employees.reduce((s,emp)=>{
      const hrs=timeclock.filter(tc=>tc.employeeId===emp.id&&tc.date?.startsWith(mStr)&&tc.hours).reduce((h,tc)=>h+(tc.hours||0),0);
      const gross=emp.type==="hourly"?hrs*(emp.hourlyRate||0):(emp.fixedSalary||0);
      return s+gross*1.144;
    },0);
    const mWH = (orders||[]).filter(o=>o.status==="delivered"&&o.date?.startsWith(mStr)).reduce((s,o)=>s+(o.total||0),0);
    const mExp = expenses.filter(ex=>ex.date?.startsWith(mStr)).reduce((s,ex)=>s+(ex.amount||0),0);
    const mMonths = {
      DE:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],
      ES:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],
      EN:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
      IT:["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],
    };
    return {m:(mMonths[lang]||mMonths.EN)[i], income:mIncome||0, costs:(mSalary+mWH+mExp)||0};
  });
  const maxVal = Math.max(...chartMonths.map(b=>Math.max(b.income,b.costs)),100);

  return (
    <CPScreen title={t.finance} icon="💰" onBack={onBack} t={t}
      actions={<>
        <CPBtn onClick={()=>setModal("exp")} variant="secondary" size="sm">＋ {t.addExpense}</CPBtn>
        <CPBtn onClick={()=>sendByEmail({to:cs.email||"info@patjacservices.ch",subject:`${t.annualReport} — Patjac Reinigung Garten & Services`,body:`${L("Guten Tag","Buenos días","Dear","Gentile")},\n\n${L("Anbei der Jahresbericht","Adjunto el informe anual","Please find the annual report","In allegato il rapporto annuale")}.\n\n${L("Mit freundlichen Grüssen","Saludos cordiales","Kind regards","Cordiali saluti")},\nPatjac Reinigung Garten & Services\n${cs.email}`})} size="sm">📧 {t.annualReport}</CPBtn>
      </>}
    >
      {/* ── KPI ROW ── */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:10,marginBottom:18}}>
        <CPStat label={t.income} value={`CHF ${income.toLocaleString("de-CH",{minimumFractionDigits:2})}`} icon="💚" accent="#2F9E44"/>
        <CPStat label={t.salaries} value={`CHF ${salaries.toFixed(2)}`} icon="👥" accent="#C92A2A"/>
        <CPStat label={t.otherExpenses} value={`CHF ${manualExpenses.toFixed(2)}`} icon="📉" accent="#F08C00"/>
        <CPStat label={t.warehouseDelivered||"Warehouse"} value={`CHF ${warehouseCostDelivered.toFixed(2)}`} icon="📦" accent="#5C7CFA"/>
        <CPStat label={t.profit} value={`CHF ${profit.toFixed(2)}`} icon={profit>0?"📈":"📉"} accent={profit>0?"#2F9E44":"#C92A2A"}/>
        <CPStat label={L("MWST netto","IVA neto","VAT net","IVA netto")} value={`CHF ${mwstPayable.toFixed(2)}`} icon="🏛️" accent="#7048E8"/>
      </div>

      {/* ── COST BREAKDOWN ── */}
      <CPCard style={{marginBottom:14}}>
        <div style={{color:CP.textSecondary,fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:.5,marginBottom:14}}>
          📊 {t.costBreakdown}
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:8}}>
          {[
            {label:t.personalkosten||"Payroll", val:salaries, pct:totalExpenses>0?(salaries/totalExpenses*100):0, color:"#C92A2A"},
            {label:t.warehouseDelivered||"Warehouse", val:warehouseCostDelivered, pct:totalExpenses>0?(warehouseCostDelivered/totalExpenses*100):0, color:"#5C7CFA"},
            {label:t.otherExpenses, val:manualExpenses, pct:totalExpenses>0?(manualExpenses/totalExpenses*100):0, color:"#F08C00"},
          ].map(row=>(
            <div key={row.label}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
                <span style={{color:CP.textSecondary,fontSize:13}}>{row.label}</span>
                <span style={{color:"#fff",fontWeight:700,fontSize:13}}>CHF {row.val.toFixed(2)} <span style={{color:CP.textTertiary,fontSize:11,fontWeight:400}}>({row.pct.toFixed(1)}%)</span></span>
              </div>
              <div style={{height:7,background:"rgba(255,255,255,0.07)",borderRadius:20,overflow:"hidden"}}>
                <div style={{height:"100%",width:`${row.pct}%`,background:row.color,borderRadius:20,transition:"width .5s"}}/>
              </div>
            </div>
          ))}
          <div style={{borderTop:`1px solid ${CP.border}`,paddingTop:10,marginTop:4,display:"flex",justifyContent:"space-between"}}>
            <span style={{color:CP.textSecondary,fontWeight:700,fontSize:14}}>{t.totalExpenses}</span>
            <span style={{color:"#FF8787",fontWeight:700,fontSize:16}}>CHF {totalExpenses.toFixed(2)}</span>
          </div>
        </div>

        {/* Profit highlight */}
        <div style={{
          marginTop:14,background:profit>=0?"linear-gradient(90deg,rgba(47,158,68,0.2),rgba(47,158,68,0.05))":"linear-gradient(90deg,rgba(201,42,42,0.2),rgba(201,42,42,0.05))",
          border:`1px solid ${profit>=0?"rgba(47,158,68,0.4)":"rgba(201,42,42,0.4)"}`,
          borderRadius:12,padding:"12px 16px",display:"flex",justifyContent:"space-between",alignItems:"center",
        }}>
          <div>
            <div style={{color:CP.textSecondary,fontSize:12,marginBottom:2}}>{t.profit}</div>
            <div style={{color:CP.textTertiary,fontSize:11}}>
              CHF {income.toFixed(2)} − CHF {totalExpenses.toFixed(2)}
            </div>
          </div>
          <div style={{color:profit>=0?"#69DB7C":"#FF8787",fontWeight:700,fontSize:24}}>
            {profit>=0?"":"−"}CHF {Math.abs(profit).toFixed(2)}
          </div>
        </div>
      </CPCard>

      {/* ── CHART + SWISS TAXES ── */}
      <div style={{display:"grid",gridTemplateColumns:"2fr 1fr",gap:14,marginBottom:14}}>
        <CPCard>
          <div style={{color:CP.textSecondary,fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:.5,marginBottom:14}}>
            📊 {t.monthlyTrend} {now.getFullYear()} (CHF)
          </div>
          <div style={{display:"flex",alignItems:"flex-end",gap:3,height:110}}>
            {chartMonths.map(b=>(
              <div key={b.m} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2}}>
                <div style={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-end",height:90,gap:1}}>
                  <div style={{height:`${(b.income/maxVal)*80}px`,background:"rgba(47,158,68,.7)",borderRadius:"3px 3px 0 0",minHeight:b.income>0?4:0}}/>
                  <div style={{height:`${(b.costs/maxVal)*80}px`,background:"rgba(201,42,42,.55)",borderRadius:"3px 3px 0 0",minHeight:b.costs>0?4:0}}/>
                </div>
                <div style={{color:CP.textTertiary,fontSize:8}}>{b.m}</div>
              </div>
            ))}
          </div>
          <div style={{display:"flex",gap:16,marginTop:8,flexWrap:"wrap"}}>
            {[[`rgba(47,158,68,.7)`,t.income],[`rgba(201,42,42,.55)`,t.totalCostsLabel||t.otherExpenses]].map(([bg,lbl])=>(
              <div key={lbl} style={{display:"flex",alignItems:"center",gap:4}}>
                <div style={{width:10,height:10,background:bg,borderRadius:2}}/>
                <span style={{color:CP.textSecondary,fontSize:11}}>{lbl}</span>
              </div>
            ))}
          </div>
        </CPCard>

        <CPCard>
          <div style={{color:CP.textSecondary,fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:.5,marginBottom:12}}>
            🏛️ {t.swissTaxes}
          </div>
          {[
            [t.profitTax, `CHF ${taxZH.toFixed(0)}`],
            [t.federalTax, `CHF ${taxFed.toFixed(0)}`],
            [t.vatNet, `CHF ${mwstPayable.toFixed(0)}`],
            [t.ahvEmployer, `CHF ${ahvEmpl.toFixed(0)}`],
            [t.warehousePending, `CHF ${warehouseCostPending.toFixed(0)}`],
          ].map(([lbl,val])=>(
            <div key={lbl} style={{display:"flex",justifyContent:"space-between",padding:"6px 0",borderBottom:`1px solid ${CP.border}`,fontSize:12}}>
              <span style={{color:CP.textSecondary,lineHeight:1.4}}>{lbl}</span>
              <span style={{color:"#FFD43B",fontWeight:700,flexShrink:0,marginLeft:8}}>{val}</span>
            </div>
          ))}
          <div style={{marginTop:10}}>
            <CPBtn onClick={()=>sendByEmail({to:cs.email||"info@patjacservices.ch",subject:`${t.taxReport} — Patjac Reinigung Garten & Services`,body:`${L("Guten Tag","Buenos días","Dear","Gentile")},\n\n${L("Anbei der Steuerbericht","Adjunto el informe fiscal","Please find the tax report","In allegato il rapporto fiscale")}.\n\n${L("Mit freundlichen Grüssen","Saludos cordiales","Kind regards","Cordiali saluti")},\nPatjac Reinigung Garten & Services\n${cs.email}`})} variant="warning" size="sm">📧 {t.taxReport}</CPBtn>
          </div>
        </CPCard>
      </div>

      {/* ── WAREHOUSE ORDERS IN EXPENSES ── */}
      {(orders||[]).length>0&&(
        <CPCard style={{marginBottom:14}}>
          <div style={{color:CP.textSecondary,fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:.5,marginBottom:12}}>
            📦 {t.warehouseOrders}
          </div>
          <div style={{display:"flex",gap:10,marginBottom:12,flexWrap:"wrap"}}>
            <div style={{background:"rgba(47,158,68,0.12)",border:"1px solid rgba(47,158,68,0.3)",borderRadius:10,padding:"8px 14px"}}>
              <div style={{color:CP.textTertiary,fontSize:10,marginBottom:2}}>{t.orderDelivered}</div>
              <div style={{color:"#69DB7C",fontWeight:700,fontSize:15}}>CHF {warehouseCostDelivered.toFixed(2)}</div>
            </div>
            <div style={{background:"rgba(240,140,0,0.12)",border:"1px solid rgba(240,140,0,0.3)",borderRadius:10,padding:"8px 14px"}}>
              <div style={{color:CP.textTertiary,fontSize:10,marginBottom:2}}>{t.orderPending}</div>
              <div style={{color:"#FFD43B",fontWeight:700,fontSize:15}}>CHF {warehouseCostPending.toFixed(2)}</div>
            </div>
          </div>
          <CPTable
            headers={[t.date, t.supplier||"Lieferant", t.orderItems||"Artikel", "CHF", t.status]}
            rows={(orders||[]).map(o=>[
              fmtDate(o.date)||"—",
              o.supplierName||"—",
              <div style={{fontSize:11,color:CP.textSecondary}}>{(o.items||[]).map(i=>i.productName).join(", ")}</div>,
              <span style={{fontWeight:700,color:o.status==="delivered"?"#69DB7C":o.status==="pending"?"#FFD43B":"#FF8787"}}>CHF {(o.total||0).toFixed(2)}</span>,
              <CPBadge text={o.status==="delivered"?t.orderDelivered:o.status==="pending"?t.orderPending:t.orderCancelled}
                color={o.status==="delivered"?"green":o.status==="pending"?"yellow":"red"}/>,
            ])}
          />
        </CPCard>
      )}

      {/* ── MANUAL EXPENSES TABLE ── */}
      <CPCard style={{marginBottom:14}}>
        <div style={{color:CP.textSecondary,fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:.5,marginBottom:10}}>
          📉 {t.otherExpenses}
        </div>
        <CPTable
          headers={[t.date, t.description, t.category||"Kategorie", t.amount, ""]}
          rows={expenses.map(ex=>[
            fmtDate(ex.date)||"—",
            ex.description||"—",
            <CPBadge text={ex.category||"—"} color="gray"/>,
            `CHF ${(ex.amount||0).toFixed(2)}`,
            <CPBtn onClick={()=>setExpenses(p=>p.filter(e=>e.id!==ex.id))} variant="danger" size="sm">🗑️</CPBtn>,
          ])}
        />
        {expenses.length===0&&<div style={{color:CP.textTertiary,textAlign:"center",padding:"1rem",fontSize:13}}>—</div>}
      </CPCard>

      {/* ── ADD EXPENSE MODAL ── */}
      {modal==="exp"&&(
        <CPModal title={t.addExpense||"Ausgabe hinzufügen"} onClose={()=>setModal(null)} width={380}>
          <CPField label={t.date||"Datum"}><CPInput type="date" value={ef.date} onChange={e=>setEf(f=>({...f,date:e.target.value}))}/></CPField>
          <CPField label={t.description||"Beschreibung"}><CPInput value={ef.description} onChange={e=>setEf(f=>({...f,description:e.target.value}))}/></CPField>
          <CPField label="CHF"><CPInput type="number" value={ef.amount} onChange={e=>setEf(f=>({...f,amount:e.target.value}))}/></CPField>
          <CPField label={L("Kategorie","Categoría","Category","Categoria")}>
            <CPSelect value={ef.category} onChange={e=>setEf(f=>({...f,category:e.target.value}))}>
              <option value="materials">{L("Materialien","Materiales","Materials","Materiali")}</option>
              <option value="vehicle">{L("Fahrzeug","Vehículo","Vehicle","Veicolo")}</option>
              <option value="equipment">{L("Ausrüstung","Equipamiento","Equipment","Attrezzatura")}</option>
              <option value="other">{L("Sonstige","Otros","Other","Altro")}</option>
            </CPSelect>
          </CPField>
          <div style={{display:"flex",gap:8,justifyContent:"flex-end",marginTop:4}}>
            <CPBtn onClick={()=>setModal(null)} variant="secondary">{t.cancel||"Abbrechen"}</CPBtn>
            <CPBtn onClick={()=>{
              if(!ef.description||!ef.amount){notify(t.error,"error");return;}
              setExpenses(p=>[...p,{...ef,id:gid(),amount:parseFloat(ef.amount)||0}]);
              notify(t.success);setModal(null);
            }}>💾 {t.save||"Speichern"}</CPBtn>
          </div>
        </CPModal>
      )}
    </CPScreen>
  );
}
// ── CLOCK-IN / CLOCK-OUT LOCATION (anti-fraud) ──────────────────────────────
// Records the real GPS position when an employee clocks in/out, turns it into a street address
// (OpenStreetMap) and measures the distance to the client's address.
const getGeoPoint = () => new Promise((resolve)=>{
  if(!navigator.geolocation){ resolve({error:"unsupported"}); return; }
  navigator.geolocation.getCurrentPosition(
    p=>resolve({lat:p.coords.latitude, lon:p.coords.longitude, acc:Math.round(p.coords.accuracy||0)}),
    e=>resolve({error:e.code===1?"denied":"unavailable"}),
    {enableHighAccuracy:true, timeout:10000, maximumAge:0}
  );
});
async function reverseGeocode(lat,lon){
  try{
    const r = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`,{headers:{"Accept-Language":"de"}});
    const j = await r.json(); const a = j.address||{};
    const street = [a.road||a.pedestrian||a.footway||a.path, a.house_number].filter(Boolean).join(" ");
    const town = [a.postcode, a.city||a.town||a.village||a.suburb].filter(Boolean).join(" ");
    return [street,town].filter(Boolean).join(", ") || j.display_name || null;
  }catch(e){ return null; }
}
async function captureClockLocation(clientAddr){
  const g = await getGeoPoint();
  if(g.error) return {text: g.error==="denied" ? "GPS: permiso denegado / Zugriff verweigert" : "GPS: no disponible / nicht verfügbar"};
  const addr = await reverseGeocode(g.lat,g.lon);
  let dist = null;
  if(clientAddr){ const c = await geocodeCH(clientAddr); if(c) dist = Math.round(haversineKm({lat:g.lat,lon:g.lon},c)*1000); }
  return {text:`${addr || `${g.lat.toFixed(5)}, ${g.lon.toFixed(5)}`} (±${g.acc} m)`, lat:g.lat, lon:g.lon, dist};
}
function DistBadge({m,lang}){
  const L = makeL(lang);
  if(m===null||m===undefined||m==="") return <span style={{fontSize:11,color:"#888"}}>—</span>;
  const d=Number(m);
  const [bg,fg,txt] = d<=300 ? ["rgba(47,158,68,.18)","#69DB7C",L("beim Kunden","en el cliente","at client","dal cliente")]
    : d<=1000 ? ["rgba(240,140,0,.18)","#FFA94D",L("in der Nähe","cerca","nearby","vicino")]
    : ["rgba(201,42,42,.2)","#FF8787",L("⚠️ weit entfernt","⚠️ lejos del cliente","⚠️ far away","⚠️ lontano")];
  return <span style={{fontSize:11,fontWeight:700,padding:"2px 8px",borderRadius:10,background:bg,color:fg}}>{txt} · {d<1000?`${d} m`:`${(d/1000).toFixed(1)} km`}</span>;
}
function ClockLocationsView({jobs,employees,isAdmin,selEmp,lang}){
  const L = makeL(lang);
  const [who,setWho] = useState(isAdmin?"all":selEmp);
  const [days,setDays] = useState(30);
  const since = ymd(new Date(Date.now()-days*86400000));
  const rows = (jobs||[]).filter(j=>j.actualStart && j.date>=since && (who==="all"||j.employeeId===who))
    .sort((a,b)=>`${b.date}${b.actualStart}`.localeCompare(`${a.date}${a.actualStart}`));
  const suspicious = rows.filter(j=>Number(j.startDistM)>1000||Number(j.endDistM)>1000).length;
  const mapLink = (lat,lon)=> lat&&lon ? `https://www.google.com/maps?q=${lat},${lon}` : null;
  return (
    <div>
      <div style={{display:"flex",gap:10,flexWrap:"wrap",marginBottom:12}}>
        {isAdmin&&<CPSelect value={who} onChange={e=>setWho(e.target.value)} style={{maxWidth:260}}>
          <option value="all">{L("Alle Mitarbeiter","Todos los empleados","All employees","Tutti i dipendenti")}</option>
          {employees.map(e=><option key={e.id} value={e.id}>{e.name}</option>)}
        </CPSelect>}
        <CPSelect value={days} onChange={e=>setDays(Number(e.target.value))} style={{maxWidth:200}}>
          {[7,30,90].map(d=><option key={d} value={d}>{L(`Letzte ${d} Tage`,`Últimos ${d} días`,`Last ${d} days`,`Ultimi ${d} giorni`)}</option>)}
        </CPSelect>
        {suspicious>0&&<span style={{alignSelf:"center",color:"#FF8787",fontWeight:700,fontSize:13}}>⚠️ {suspicious} {L("auffällige Stempelungen","fichajes sospechosos","suspicious clock-ins","timbrature sospette")}</span>}
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:10}}>
        {rows.map(j=>(
          <CPCard key={j.id} style={{padding:"12px 16px"}}>
            <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:6,marginBottom:6}}>
              <div style={{color:CP.textPrimary,fontWeight:700,fontSize:14}}>{j.clientName} {isAdmin&&<span style={{color:CP.textSecondary,fontWeight:500}}>· {j.employeeName}</span>}</div>
              <div style={{color:CP.textSecondary,fontSize:12}}>{fmtDate(j.date)}</div>
            </div>
            {[["▶",L("Eingang","Entrada","In","Entrata"),j.actualStart,j.startLocation,j.startDistM,j.startLat,j.startLon],
              ["■",L("Ausgang","Salida","Out","Uscita"),j.actualEnd,j.endLocation,j.endDistM,j.endLat,j.endLon]].map(([ic,lbl,time,loc,dist,lat,lon])=>(
              <div key={lbl} style={{display:"flex",gap:8,alignItems:"flex-start",flexWrap:"wrap",padding:"4px 0",borderTop:`1px solid ${CP.border}`}}>
                <span style={{color:ic==="▶"?"#69DB7C":"#FF8787",fontWeight:700,minWidth:90,fontSize:13}}>{ic} {lbl} {time||"—"}</span>
                <span style={{color:CP.textSecondary,fontSize:12,flex:1,minWidth:180}}>📍 {loc || (time?L("Keine Position","Sin ubicación","No location","Nessuna posizione"):"—")}</span>
                <DistBadge m={dist} lang={lang}/>
                {mapLink(lat,lon)&&<a href={mapLink(lat,lon)} target="_blank" rel="noreferrer" style={{fontSize:12,color:"#74C0FC"}}>🗺️ {L("Karte","Mapa","Map","Mappa")}</a>}
              </div>
            ))}
          </CPCard>
        ))}
        {rows.length===0&&<div style={{color:CP.textTertiary,textAlign:"center",padding:"2rem",fontSize:14}}>{L("Keine Stempelungen in diesem Zeitraum","No hay fichajes en este periodo","No clock-ins in this period","Nessuna timbratura")}</div>}
      </div>
    </div>
  );
}

// ─── TIMECLOCK ───────────────────────────────────────────────
function TimeclockApp({t,timeclock,setTimeclock,employees,currentUser,notify,onBack,lang,jobs,setJobs,clients=[]}){
  const L = makeL(lang);
  const [tab,setTab] = useState("clock");
  const clientAddrOf = (job)=> fmtAddr(clients.find(c=>c.id===job.clientId));
  const [selEmp,setSelEmp] = useState(currentUser?.role==="employee"?currentUser?.id:employees[0]?.id);

  // General day record (for history & monthly total)
  const tc = timeclock.find(x=>x.employeeId===selEmp&&x.date===todayStr);
  const empHistory = timeclock
    .filter(x=>x.employeeId===selEmp)
    .sort((a,b)=>b.date.localeCompare(a.date))
    .slice(0,30);
  const totalHrsMonth = timeclock.filter(x=>x.employeeId===selEmp&&(x.date||"").startsWith(todayStr.slice(0,7))).reduce((s,x)=>s+(Number(x.hours)||0),0);

  // Today's jobs for selected employee, sorted by start time
  const todayJobs = (jobs||[])
    .filter(j=>j.employeeId===selEmp && j.date===todayStr)
    .sort((a,b)=>(a.timeStart||"00:00").localeCompare(b.timeStart||"00:00"));

  // Per-job timeclock helpers
  const getJobClock = (job) => ({
    in:  job.actualStart || null,
    out: job.actualEnd   || null,
    hrs: job.actualHours || null,
    active: !!job.actualStart && !job.actualEnd,
  });

  // Clock IN for a specific job/client
  const jobClockIn = async (job) => {
    const now = new Date().toTimeString().slice(0,5);
    const updated = {...job, actualStart:now, status:"inProgress"};
    setJobs(prev=>prev.map(j=>j.id===job.id?updated:j));
    captureClockLocation(clientAddrOf(job)).then(loc=>{
      setJobs(prev=>prev.map(j=>j.id===job.id?{...j,startLocation:loc.text,startLat:loc.lat??null,startLon:loc.lon??null,startDistM:loc.dist??null}:j));
      if(loc.dist>1000) notify(`⚠️ ${L("Sie sind weit von der Kundenadresse entfernt","Está lejos de la dirección del cliente","You are far from the client address","Sei lontano dall'indirizzo del cliente")} (${(loc.dist/1000).toFixed(1)} km)`,"warning",6000);
    });

    // Also update or create the day record
    const emp = employees.find(e=>e.id===selEmp);
    if(!tc){
      const loc = await getGeoLocation();
      setTimeclock(p=>[...p,{
        id:gid(), employeeId:selEmp, employeeName:emp?.name||"",
        date:todayStr, clockIn:now, clockOut:null, hours:null,
        location:loc, jobCount:todayJobs.length,
      }]);
    } else if(!tc.clockIn){
      setTimeclock(p=>p.map(x=>x.id===tc.id?{...x,clockIn:now}:x));
    }
    notify(`✅ ${L("Eingestempelt bei","Fichado entrada en","Clocked in at","Timbrato entrata da")} ${job.clientName}: ${now}`,"success");
  };

  // Clock OUT for a specific job/client
  const jobClockOut = (job) => {
    const now = new Date().toTimeString().slice(0,5);
    const [h1,m1] = (job.actualStart||job.timeStart||"08:00").split(":").map(Number);
    const [h2,m2] = now.split(":").map(Number);
    const hrs = Math.max(0,((h2*60+m2)-(h1*60+m1))/60);

    const updated = {...job, actualEnd:now, actualHours:hrs, status:"completed"};
    setJobs(prev=>prev.map(j=>j.id===job.id?updated:j));
    captureClockLocation(clientAddrOf(job)).then(loc=>{
      setJobs(prev=>prev.map(j=>j.id===job.id?{...j,endLocation:loc.text,endLat:loc.lat??null,endLon:loc.lon??null,endDistM:loc.dist??null}:j));
    });

    // Recalculate total day hours from all completed jobs
    const allUpdatedJobs = (jobs||[])
      .filter(j=>j.employeeId===selEmp && j.date===todayStr)
      .map(j=>j.id===job.id?updated:j);
    const totalDayHrs = allUpdatedJobs.reduce((s,j)=>s+(j.actualHours||0),0);

    // Find last end time among completed jobs
    const lastEnd = allUpdatedJobs
      .filter(j=>j.actualEnd)
      .map(j=>j.actualEnd)
      .sort()
      .reverse()[0] || now;

    if(tc){
      setTimeclock(p=>p.map(x=>x.id===tc.id?{...x,clockOut:lastEnd,hours:totalDayHrs}:x));
    }
    notify(`✅ ${L("Ausgestempelt bei","Fichado salida en","Clocked out at","Timbrato uscita da")} ${job.clientName}: ${now} · ${hrs.toFixed(1)}h`,"success");
  };

  // Total hours from actual times today
  const totalActualHrsToday = todayJobs.reduce((s,j)=>s+(j.actualHours||0),0);

  return (
    <CPScreen title={t.timeclock} icon="⏱️" onBack={onBack} t={t}>
      <div style={{display:"flex",gap:8,marginBottom:14}}>
        {[["clock","⏱️ "+L("Stempeln","Fichar","Clock","Timbrare")],["locations","📍 "+L("Standorte","Ubicaciones","Locations","Posizioni")]].map(([k,lbl])=>(
          <button key={k} onClick={()=>setTab(k)} style={{padding:"7px 16px",borderRadius:20,border:"none",cursor:"pointer",fontWeight:700,fontSize:13,
            background:tab===k?CP.accent:"rgba(255,255,255,.1)",color:"#fff"}}>{lbl}</button>
        ))}
      </div>
      {tab==="locations" ? <ClockLocationsView jobs={jobs} employees={employees} isAdmin={currentUser?.role==="admin"} selEmp={selEmp} lang={lang}/> : (<>

      {/* Employee selector (admin only) */}
      {currentUser?.role==="admin"&&(
        <div style={{marginBottom:16}}>
          <CPField label={t.employees}>
            <CPSelect value={selEmp} onChange={e=>setSelEmp(e.target.value)}>
              {employees.map(e=><option key={e.id} value={e.id}>{e.name}</option>)}
            </CPSelect>
          </CPField>
        </div>
      )}

      {/* Day summary bar */}
      {tc&&(
        <CPCard style={{marginBottom:14,background:"rgba(12,166,120,0.08)",border:"1px solid rgba(12,166,120,0.22)"}}>
          <div style={{display:"flex",gap:20,flexWrap:"wrap"}}>
            {[
              [L("Erster Einsatz","Primera entrada","First clock-in","Prima entrata"), tc.clockIn||"—", "#69DB7C"],
              [L("Letzter Abschluss","Última salida","Last clock-out","Ultima uscita"), tc.clockOut||"—", "#FF8787"],
              [L("Total heute","Total hoy","Total today","Totale oggi"), totalActualHrsToday>0?`${totalActualHrsToday.toFixed(1)}h`:(tc.hours?`${Number(tc.hours).toFixed(1)}h`:"—"), "#FFD43B"],
              [L("Aufträge","Trabajos","Jobs","Lavori"), `${todayJobs.filter(j=>j.status==="completed").length}/${todayJobs.length}`, "#74C0FC"],
              [L("Monat","Mes","Month","Mese"), `${totalHrsMonth.toFixed(1)}h`, "#a78bfa"],
            ].map(([l,v,c])=>(
              <div key={l}>
                <div style={{color:CP.textSecondary,fontSize:11,marginBottom:3}}>{l}</div>
                <div style={{color:c,fontWeight:700,fontSize:15}}>{v}</div>
              </div>
            ))}
          </div>
        </CPCard>
      )}

      {/* No jobs message */}
      {todayJobs.length===0&&(
        <CPCard style={{marginBottom:14,textAlign:"center",padding:"28px 20px"}}>
          <div style={{fontSize:40,marginBottom:10}}>📋</div>
          <div style={{color:CP.textSecondary,fontSize:15,fontWeight:600}}>
            {L("Keine Aufträge für heute","Sin trabajos para hoy","No jobs for today","Nessun lavoro oggi")}
          </div>
          <div style={{color:CP.textTertiary,fontSize:13,marginTop:6}}>
            {L("Aufträge werden im Modul 'Aufträge' vom Administrator zugeteilt.",
               "Los trabajos son asignados en el módulo 'Trabajos' por el administrador.",
               "Jobs are assigned in the 'Jobs' module by the administrator.",
               "I lavori vengono assegnati nel modulo 'Lavori' dall'amministratore.")}
          </div>
        </CPCard>
      )}

      {/* Per-client clock in/out cards */}
      {todayJobs.length>0&&(
        <div style={{marginBottom:14}}>
          <div style={{color:CP.textSecondary,fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:.5,marginBottom:12}}>
            📋 {L("Zeiterfassung pro Kunde","Fichaje por cliente","Time tracking per client","Timbrature per cliente")}
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            {todayJobs.map((job,idx)=>{
              const jc = getJobClock(job);
              const isActive = jc.active;
              const isDone = !!jc.out;
              const isNext = !isActive && !isDone;

              // Job duration display
              let elapsed = null;
              if(jc.in && jc.out){
                elapsed = `${Number(jc.hrs||0).toFixed(1)}h`;
              }

              return (
                <div key={job.id} style={{
                  background: isDone?"rgba(47,158,68,0.08)":isActive?"rgba(28,126,214,0.12)":"rgba(255,255,255,0.03)",
                  border:`2px solid ${isDone?"rgba(47,158,68,0.35)":isActive?"rgba(28,126,214,0.5)":"rgba(255,255,255,0.08)"}`,
                  borderRadius:18,padding:"16px 18px",
                  transition:"all .2s",
                }}>
                  {/* Header row */}
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12}}>
                    <div style={{display:"flex",alignItems:"center",gap:10}}>
                      {/* Status dot */}
                      <div style={{
                        width:14,height:14,borderRadius:"50%",flexShrink:0,
                        background:isDone?"#2F9E44":isActive?"#1C7ED6":"rgba(255,255,255,0.2)",
                        boxShadow:isActive?"0 0 10px rgba(28,126,214,0.6)":isDone?"0 0 8px rgba(47,158,68,0.5)":"none",
                      }}/>
                      <div>
                        <div style={{color:CP.textPrimary,fontWeight:700,fontSize:16}}>{job.clientName}</div>
                        <div style={{color:CP.textSecondary,fontSize:12,marginTop:2}}>
                          {job.serviceType==="cleaning"?t.cleaning:t.gardening}
                          {" · "}
                          <span style={{color:"#74C0FC"}}>
                            {L("Geplant","Planificado","Scheduled","Pianificato")}: {job.timeStart}–{job.timeEnd}
                          </span>
                        </div>
                      </div>
                    </div>
                    <CPBadge
                      text={isDone?t.completed:isActive?t.inProgress:t.pending}
                      color={isDone?"green":isActive?"blue":"yellow"}
                    />
                  </div>

                  {/* Time display row */}
                  <div style={{display:"flex",gap:10,marginBottom:12,flexWrap:"wrap"}}>
                    <div style={{
                      flex:1,minWidth:100,
                      background:"rgba(47,158,68,0.1)",border:"1px solid rgba(47,158,68,0.25)",
                      borderRadius:12,padding:"10px 14px",textAlign:"center",
                    }}>
                      <div style={{color:CP.textTertiary,fontSize:10,fontWeight:700,marginBottom:4}}>
                        🟢 {t.clockIn}
                      </div>
                      <div style={{color:jc.in?"#69DB7C":CP.textTertiary,fontWeight:700,fontSize:jc.in?20:14}}>
                        {jc.in||"—"}
                      </div>
                    </div>
                    <div style={{
                      flex:1,minWidth:100,
                      background:"rgba(201,42,42,0.1)",border:"1px solid rgba(201,42,42,0.25)",
                      borderRadius:12,padding:"10px 14px",textAlign:"center",
                    }}>
                      <div style={{color:CP.textTertiary,fontSize:10,fontWeight:700,marginBottom:4}}>
                        🔴 {t.clockOut}
                      </div>
                      <div style={{color:jc.out?"#FF8787":CP.textTertiary,fontWeight:700,fontSize:jc.out?20:14}}>
                        {jc.out||"—"}
                      </div>
                    </div>
                    {elapsed&&(
                      <div style={{
                        minWidth:80,
                        background:"rgba(255,215,0,0.1)",border:"1px solid rgba(255,215,0,0.25)",
                        borderRadius:12,padding:"10px 14px",textAlign:"center",
                      }}>
                        <div style={{color:CP.textTertiary,fontSize:10,fontWeight:700,marginBottom:4}}>
                          ⏱️ {L("Zeit","Tiempo","Time","Tempo")}
                        </div>
                        <div style={{color:"#FFD43B",fontWeight:700,fontSize:20}}>{elapsed}</div>
                      </div>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div style={{display:"flex",gap:10}}>
                    {/* Clock IN button */}
                    <button
                      onClick={()=>jobClockIn(job)}
                      disabled={isActive||isDone}
                      style={{
                        flex:1,padding:"12px 10px",
                        background:isDone||isActive?"rgba(47,158,68,0.1)":"rgba(47,158,68,0.85)",
                        border:`2px solid ${isDone||isActive?"rgba(47,158,68,0.25)":"#2F9E44"}`,
                        borderRadius:14,color:"#fff",fontWeight:700,fontSize:15,
                        cursor:isDone||isActive?"not-allowed":"pointer",
                        opacity:isDone||isActive?0.5:1,
                        display:"flex",alignItems:"center",justifyContent:"center",gap:8,
                        transition:"all .18s",fontFamily:CP.font,
                        boxShadow:(!isDone&&!isActive)?"0 4px 16px rgba(47,158,68,0.35)":"none",
                      }}
                    >
                      🟢 {t.clockIn}
                    </button>

                    {/* Clock OUT button */}
                    <button
                      onClick={()=>jobClockOut(job)}
                      disabled={!isActive}
                      style={{
                        flex:1,padding:"12px 10px",
                        background:isActive?"rgba(201,42,42,0.85)":"rgba(201,42,42,0.1)",
                        border:`2px solid ${isActive?"#C92A2A":"rgba(201,42,42,0.25)"}`,
                        borderRadius:14,color:"#fff",fontWeight:700,fontSize:15,
                        cursor:isActive?"pointer":"not-allowed",
                        opacity:isActive?1:0.5,
                        display:"flex",alignItems:"center",justifyContent:"center",gap:8,
                        transition:"all .18s",fontFamily:CP.font,
                        boxShadow:isActive?"0 4px 16px rgba(201,42,42,0.35)":"none",
                      }}
                    >
                      🔴 {t.clockOut}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Total worked today */}
          {totalActualHrsToday>0&&(
            <div style={{
              marginTop:14,padding:"12px 18px",
              background:"linear-gradient(90deg,rgba(12,166,120,0.15),rgba(28,126,214,0.1))",
              border:"1px solid rgba(12,166,120,0.3)",borderRadius:14,
              display:"flex",justifyContent:"space-between",alignItems:"center",
            }}>
              <div style={{color:CP.textSecondary,fontWeight:700,fontSize:14}}>
                ⏱️ {L("Gesamte Arbeitszeit heute","Total tiempo trabajado hoy","Total worked time today","Totale ore lavorate oggi")}
              </div>
              <div style={{color:"#69DB7C",fontWeight:700,fontSize:22}}>
                {totalActualHrsToday.toFixed(1)}h
              </div>
            </div>
          )}
        </div>
      )}

      {/* History table */}
      <CPCard>
        <div style={{color:CP.textSecondary,fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:.5,marginBottom:10}}>
          {t.clockHistory||L("Stempelkarte","Historial","Time card","Scheda timbrature")}
        </div>
        <CPTable
          headers={[t.date, t.clockIn, t.clockOut, L("Std.","Horas","Hours","Ore"), L("Aufträge","Trabajos","Jobs","Lavori")]}
          rows={empHistory.map(x=>[
            fmtDate(x.date),
            x.clockIn||"—",
            x.clockOut||"—",
            x.hours?`${Number(x.hours).toFixed(1)}h`:"—",
            x.jobCount!=null?String(x.jobCount):"—",
          ])}
        />
      </CPCard>
      </>)}
    </CPScreen>
  );
}

// ─── MESSAGING ───────────────────────────────────────────────
function MessagingApp({t,messages,setMessages,employees,currentUser,notify,onBack,lang}){
  const L = makeL(lang);
  const [selConv,setSelConv]=useState(null);
  const [newMsg,setNewMsg]=useState("");
  const [imgPreview,setImgPreview]=useState(null);
  const [search,setSearch]=useState("");
  const fileRef=useRef();
  const cameraRef=useRef();
  const chatRef=useRef();
  const myId=currentUser?.id||"admin";
  const isAdmin=currentUser?.role==="admin";
  const THREE_DAYS=3*24*60*60*1000;

  // Messages are deleted automatically by the server every Sunday at 12:00 (Zurich time).

  // Clean today's messages (admin only)
  const cleanToday = () => {
    const today = new Date().toDateString();
    setMessages(prev=>prev.filter(m=>new Date(m.timestamp).toDateString()!==today));
    notify(L("Nachrichten von heute gelöscht ✓","Mensajes de hoy eliminados ✓","Today's messages deleted ✓","Messaggi di oggi eliminati ✓"),"success");
  };

  const convs = isAdmin
    ? employees.filter(e=>e.active!==false&&(!search||e.name.toLowerCase().includes(search.toLowerCase())))
    : [{id:"admin",name:"Administrator"}];

  useEffect(()=>{ if(!isAdmin&&!selConv) setSelConv("admin"); },[isAdmin]);
  useEffect(()=>{ if(chatRef.current) chatRef.current.scrollTop=chatRef.current.scrollHeight; },[selConv,messages]);
  // Opening a conversation marks its incoming messages as read
  useEffect(()=>{
    if(!selConv) return;
    if(messages.some(m=>m.from===selConv&&m.to===myId&&!m.read))
      setMessages(p=>p.map(m=>m.from===selConv&&m.to===myId&&!m.read?{...m,read:true}:m));
  },[selConv,messages]);

  const convMsgs=selConv?messages.filter(m=>(m.from===myId&&m.to===selConv)||(m.from===selConv&&m.to===myId)).sort((a,b)=>new Date(a.timestamp)-new Date(b.timestamp)):[];
  const unread=(id)=>messages.filter(m=>m.from===id&&m.to===myId&&!m.read).length;
  const lastMsg=(id)=>{ const msgs=messages.filter(m=>(m.from===myId&&m.to===id)||(m.from===id&&m.to===myId)).sort((a,b)=>new Date(a.timestamp)-new Date(b.timestamp)); return msgs.length>0?msgs[msgs.length-1]:null; };

  const send=()=>{
    if((!newMsg.trim()&&!imgPreview)||!selConv)return;
    setMessages(p=>[...p,{id:gid(),from:myId,to:selConv,fromName:currentUser?.name||"Admin",toName:selConv,content:newMsg.trim(),image:imgPreview||null,timestamp:new Date().toISOString(),read:false}]);
    setNewMsg("");setImgPreview(null);
  };

  const handleImage=(e)=>{
    const file=e.target.files[0];if(!file)return;
    if(file.size>2*1024*1024){notify(L("Bild max. 2MB","Imagen máx. 2MB","Image max. 2MB","Immagine max. 2MB"),"error");return;}
    const reader=new FileReader();
    reader.onload=ev=>setImgPreview(ev.target.result);
    reader.readAsDataURL(file);e.target.value="";
  };

  const formatTime=(ts)=>{
    const d=new Date(ts),today=new Date();
    return d.toDateString()===today.toDateString()
      ?d.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})
      :fmtDateShort(d)+" "+d.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});
  };

  return (
    <CPScreen title={selConv?convs.find(c=>c.id===selConv)?.name||"Chat":t.messaging} icon="💬" onBack={selConv?()=>setSelConv(null):onBack} t={t}
      actions={isAdmin&&!selConv&&(
        <CPBtn onClick={cleanToday} variant="danger" size="sm">🗑️ {L("Heute","Hoy","Today","Oggi")}</CPBtn>
      )}
    >
      <div style={{height:"calc(100% - 10px)",display:"flex",flexDirection:"column"}}>
        {selConv ? (
          /* ── CHAT VIEW ── */
          <div style={{flex:1,display:"flex",flexDirection:"column",background:"rgba(0,0,0,.15)",borderRadius:16,border:`1px solid ${CP.border}`,overflow:"hidden"}}>
            {/* Sub-header */}
            <div style={{padding:"8px 14px",borderBottom:`1px solid ${CP.border}`,background:"rgba(0,0,0,.2)",display:"flex",alignItems:"center",gap:10}}>
              <div style={{width:36,height:36,borderRadius:"50%",background:`linear-gradient(135deg,${CP.accent},#00bcf2)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,fontWeight:700,color:"#fff",flexShrink:0}}>
                {(convs.find(c=>c.id===selConv)?.name||"A").charAt(0).toUpperCase()}
              </div>
              <div style={{flex:1}}>
                <div style={{color:CP.textPrimary,fontWeight:700,fontSize:14}}>{convs.find(c=>c.id===selConv)?.name||selConv}</div>
                <div style={{color:CP.textTertiary,fontSize:10}}>{L("Auto-Löschung jeden Sonntag 12:00","Se borran solos cada domingo a las 12:00","Auto-deleted every Sunday 12:00","Eliminati ogni domenica alle 12:00")}</div>
              </div>
              {isAdmin&&<button onClick={cleanToday} style={{background:"rgba(255,0,0,.15)",border:"1px solid rgba(255,0,0,.3)",borderRadius:8,padding:"5px 8px",color:"#FF8787",cursor:"pointer",fontSize:12}}>🗑️</button>}
            </div>
            {/* Messages */}
            <div ref={chatRef} style={{flex:1,overflow:"auto",padding:"12px 10px",display:"flex",flexDirection:"column",gap:5}}>
              {convMsgs.length===0&&<div style={{textAlign:"center",color:CP.textTertiary,fontSize:13,marginTop:"3rem"}}><div style={{fontSize:36,marginBottom:10}}>💬</div>{L("Noch keine Nachrichten","Sin mensajes aún","No messages yet","Nessun messaggio")}</div>}
              {convMsgs.map(msg=>{
                const isMe=msg.from===myId;
                return(
                  <div key={msg.id} style={{display:"flex",justifyContent:isMe?"flex-end":"flex-start",alignItems:"flex-end",gap:6}}>
                    {!isMe&&<div style={{width:26,height:26,borderRadius:"50%",background:`linear-gradient(135deg,${CP.accent},#00bcf2)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:"#fff",flexShrink:0}}>{(convs.find(c=>c.id===selConv)?.name||"?").charAt(0).toUpperCase()}</div>}
                    <div style={{maxWidth:"78%",background:isMe?"linear-gradient(135deg,rgba(28,126,214,.9),rgba(0,100,200,.85))":"rgba(255,255,255,.1)",borderRadius:isMe?"18px 18px 4px 18px":"18px 18px 18px 4px",padding:"9px 13px",boxShadow:"0 2px 6px rgba(0,0,0,.2)"}}>
                      {msg.image&&<img src={msg.image} alt="img" style={{maxWidth:"100%",borderRadius:10,marginBottom:msg.content?6:0,display:"block",cursor:"pointer"}} onClick={()=>window.open(msg.image,"_blank")}/>}
                      {msg.content&&<div style={{color:"#fff",fontSize:14,lineHeight:1.4}}>{msg.content}</div>}
                      <div style={{color:"rgba(255,255,255,.4)",fontSize:10,marginTop:3,textAlign:"right"}}>{formatTime(msg.timestamp)}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Image preview */}
            {imgPreview&&<div style={{padding:"8px 12px",borderTop:`1px solid ${CP.border}`,display:"flex",alignItems:"center",gap:8,background:"rgba(0,0,0,.3)"}}>
              <img src={imgPreview} alt="preview" style={{height:52,borderRadius:8,objectFit:"cover"}}/>
              <span style={{color:CP.textTertiary,fontSize:12,flex:1}}>{L("Bild bereit zum Senden","Imagen lista","Image ready","Immagine pronta")}</span>
              <button onClick={()=>setImgPreview(null)} style={{background:"rgba(255,0,0,.5)",border:"none",borderRadius:"50%",width:20,height:20,color:"#fff",cursor:"pointer",fontSize:11}}>✕</button>
            </div>}
            {/* Input */}
            <div style={{padding:"10px 10px",borderTop:`1px solid ${CP.border}`,display:"flex",gap:7,alignItems:"center",background:"rgba(0,0,0,.15)"}}>
              <input ref={fileRef} type="file" accept="image/*" style={{display:"none"}} onChange={handleImage}/>
              <input ref={cameraRef} type="file" accept="image/*" capture="environment" style={{display:"none"}} onChange={handleImage}/>
              <button onClick={()=>fileRef.current.click()} style={{background:"rgba(255,255,255,.1)",border:`1px solid ${CP.border}`,borderRadius:10,width:38,height:38,cursor:"pointer",fontSize:17,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>🖼️</button>
              <button onClick={()=>cameraRef.current.click()} style={{background:"rgba(255,255,255,.1)",border:`1px solid ${CP.border}`,borderRadius:10,width:38,height:38,cursor:"pointer",fontSize:17,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>📷</button>
              <input value={newMsg} onChange={e=>setNewMsg(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()}
                placeholder={makeL(lang)("Nachricht schreiben…","Escribe un mensaje…","Write a message…","Scrivi un messaggio…")} style={{flex:1,padding:"10px 14px",background:"rgba(255,255,255,.08)",border:`1px solid ${CP.border}`,borderRadius:22,color:"#fff",fontSize:14,outline:"none",fontFamily:CP.font}}/>
              <button onClick={send} disabled={!newMsg.trim()&&!imgPreview}
                style={{width:38,height:38,borderRadius:"50%",background:(!newMsg.trim()&&!imgPreview)?"rgba(255,255,255,.1)":`linear-gradient(135deg,${CP.accent},#00bcf2)`,border:"none",color:"#fff",cursor:"pointer",fontSize:17,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>➤</button>
            </div>
          </div>
        ) : (
          /* ── CONTACT LIST ── */
          <div style={{display:"flex",flexDirection:"column",borderRadius:16,overflow:"hidden",border:`1px solid ${CP.border}`,flex:1}}>
            {/* Search */}
            {isAdmin&&<div style={{padding:"10px 12px",background:"rgba(0,0,0,.2)",borderBottom:`1px solid ${CP.border}`}}>
              <input value={search} onChange={e=>setSearch(e.target.value)} placeholder={`🔍 ${L("Mitarbeiter suchen...","Buscar empleado...","Search employee...","Cerca dipendente...")}`}
                style={{width:"100%",padding:"8px 14px",background:"rgba(255,255,255,.07)",border:`1px solid ${CP.border}`,borderRadius:20,color:"#fff",fontSize:13,outline:"none",fontFamily:CP.font,boxSizing:"border-box"}}/>
            </div>}
            <div style={{flex:1,overflowY:"auto"}}>
              {convs.length===0&&<div style={{textAlign:"center",color:CP.textTertiary,fontSize:13,padding:"40px 20px"}}><div style={{fontSize:36,marginBottom:10}}>👥</div>{L("Keine Mitarbeiter","Sin empleados","No employees","Nessun dipendente")}</div>}
              {convs.map(conv=>{
                const last=lastMsg(conv.id);const u=unread(conv.id);
                return(
                  <div key={conv.id} onClick={()=>setSelConv(conv.id)}
                    style={{display:"flex",alignItems:"center",gap:12,padding:"13px 16px",cursor:"pointer",borderBottom:`1px solid ${CP.border}`,background:"transparent",transition:"background .15s"}}
                    onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,.04)"}
                    onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
                    <div style={{width:46,height:46,borderRadius:"50%",background:`linear-gradient(135deg,${CP.accent},#00bcf2)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:19,fontWeight:700,color:"#fff",flexShrink:0}}>
                      {(conv.name||"?").charAt(0).toUpperCase()}
                    </div>
                    <div style={{flex:1,minWidth:0}}>
                      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:2}}>
                        <span style={{color:CP.textPrimary,fontWeight:700,fontSize:15}}>{conv.name}</span>
                        {last&&<span style={{color:u>0?CP.accent:CP.textTertiary,fontSize:11,flexShrink:0,marginLeft:6}}>{formatTime(last.timestamp)}</span>}
                      </div>
                      <div style={{color:last?.image?"#00bcf2":CP.textTertiary,fontSize:13,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                        {last?(last.image?"📷 "+L("Bild","Imagen","Image","Immagine"):last.content):L("Noch keine Nachrichten","Sin mensajes","No messages","Nessun messaggio")}
                      </div>
                    </div>
                    {u>0&&<div style={{width:20,height:20,borderRadius:"50%",background:CP.accent,color:"#fff",fontSize:11,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,flexShrink:0}}>{u}</div>}
                    <div style={{color:CP.textTertiary,fontSize:16,marginLeft:2}}>›</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </CPScreen>
  );
}

// ─── ROUTES ──────────────────────────────────────────────────
function RoutesApp({t,jobs,clients,notify,onBack,lang,currentUser}){
  const L = makeL(lang);
  const [navigating,setNavigating] = useState(null); // job.id being navigated

  // Filter today's jobs; employees see only their own
  const allToday = jobs
    .filter(j=>j.date===todayStr)
    .sort((a,b)=>(a.timeStart||"").localeCompare(b.timeStart||""));
  const tj = currentUser?.role==="employee"
    ? allToday.filter(j=>j.employeeId===currentUser?.id)
    : allToday;

  const getAddr = (job) => {
    const c = clients.find(x=>x.id===job.clientId);
    if(c) return `${c.street} ${c.number}, ${c.postalCode} ${c.city}`;
    return job.clientAddress || "Zürich";
  };

  // Build Google Maps navigation URL for a specific job
  const buildNavUrl = (job) => {
    const dest = encodeURIComponent(getAddr(job));
    // Use current location as origin → destination
    return `https://www.google.com/maps/dir/?api=1&destination=${dest}&travelmode=driving`;
  };

  // Open navigation for a job
  const startNavigation = (job) => {
    setNavigating(job.id);
    const url = buildNavUrl(job);
    window.open(url, "_blank");
    notify(
      `🗺️ ${L("Navigation gestartet zu","Navegación iniciada hacia","Navigation started to","Navigazione avviata verso")} ${job.clientName}`,
      "success"
    );
  };

  // Build full-day optimised route in Google Maps
  const openFullRoute = () => {
    if(tj.length===0) return;
    const origin = encodeURIComponent("Industriestrasse 14, 8004 Zürich");
    const waypoints = tj.slice(0,-1).map(j=>encodeURIComponent(getAddr(j))).join("|");
    const dest = encodeURIComponent(getAddr(tj[tj.length-1]));
    const url = waypoints
      ? `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${dest}&waypoints=${waypoints}&travelmode=driving`
      : `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${dest}&travelmode=driving`;
    window.open(url, "_blank");
    notify(L("Gesamtroute in Google Maps geöffnet","Ruta completa abierta en Google Maps","Full route opened in Google Maps","Percorso completo aperto in Google Maps"),"success");
  };

  const statusColor = (s) => s==="completed"?"green":s==="inProgress"?"blue":"yellow";
  const statusLabel = (s) => s==="completed"?t.completed:s==="inProgress"?t.inProgress:t.pending;

  return (
    <CPScreen title={t.routes} icon="🗺️" onBack={onBack} t={t}
      actions={
        <CPBtn onClick={openFullRoute} size="sm" variant="primary">
          🗺️ {L("Gesamtroute","Ruta completa","Full route","Percorso completo")}
        </CPBtn>
      }
    >
      {/* Start point + summary */}
      <div style={{
        background:"rgba(28,126,214,0.1)",border:"1px solid rgba(28,126,214,0.25)",
        borderRadius:14,padding:"12px 16px",marginBottom:16,
        display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:8,
      }}>
        <div style={{color:"#74C0FC",fontSize:13}}>
          📍 <strong>Industriestrasse 14, 8004 Zürich</strong>
          <span style={{color:CP.textSecondary,marginLeft:8}}>→ {tj.length} Stops</span>
        </div>
        <button onClick={openFullRoute} style={{
          background:"linear-gradient(90deg,#1C7ED6,#0CA678)",border:"none",
          borderRadius:10,color:"#fff",padding:"8px 16px",cursor:"pointer",
          fontSize:13,fontWeight:700,display:"flex",alignItems:"center",gap:6,
          fontFamily:CP.font,boxShadow:"0 4px 16px rgba(28,126,214,0.4)",
        }}>
          🚗 {L("Alle Stops in Google Maps","Todos en Google Maps","All stops in Google Maps","Tutti in Google Maps")}
        </button>
      </div>

      {/* Job cards with navigation */}
      <div style={{display:"flex",flexDirection:"column",gap:12,marginBottom:16}}>
        {tj.length===0&&(
          <CPCard style={{textAlign:"center",padding:"32px 20px"}}>
            <div style={{fontSize:40,marginBottom:10}}>🗺️</div>
            <div style={{color:CP.textTertiary,fontSize:14}}>{t.noRecords}</div>
          </CPCard>
        )}
        {tj.map((job,idx)=>{
          const addr = getAddr(job);
          const isNav = navigating===job.id;
          return (
            <CPCard key={job.id} style={{
              border:isNav?"2px solid rgba(28,126,214,0.6)":"1px solid rgba(255,255,255,0.06)",
              background:isNav?"rgba(28,126,214,0.08)":"rgba(255,255,255,0.03)",
            }}>
              {/* Stop number + client info */}
              <div style={{display:"flex",alignItems:"flex-start",gap:12,marginBottom:12}}>
                <div style={{
                  width:38,height:38,borderRadius:"50%",flexShrink:0,
                  background:job.status==="completed"?"#2F9E44":job.status==="inProgress"?CP.accent:"rgba(255,255,255,0.15)",
                  display:"flex",alignItems:"center",justifyContent:"center",
                  color:"#fff",fontWeight:700,fontSize:16,
                  boxShadow:job.status==="inProgress"?`0 0 12px rgba(28,126,214,0.5)`:"none",
                }}>{idx+1}</div>

                <div style={{flex:1}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:6}}>
                    <div>
                      <div style={{color:CP.textPrimary,fontWeight:700,fontSize:16}}>{job.clientName}</div>
                      <div style={{
                        color:"#74C0FC",fontSize:13,marginTop:3,
                        display:"flex",alignItems:"center",gap:4,
                      }}>
                        📍 {addr}
                      </div>
                      <div style={{color:CP.textTertiary,fontSize:12,marginTop:3}}>
                        🕐 {job.timeStart}–{job.timeEnd}
                        {job.employeeName&&currentUser?.role==="admin"&&(
                          <span style={{marginLeft:8}}>· {job.employeeName}</span>
                        )}
                      </div>
                    </div>
                    <CPBadge text={statusLabel(job.status)} color={statusColor(job.status)}/>
                  </div>
                </div>
              </div>

              {/* Navigation buttons row */}
              <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>

                {/* 🚗 Start navigation button */}
                <button onClick={()=>startNavigation(job)} style={{
                  flex:1,minWidth:140,
                  padding:"11px 14px",
                  background:isNav
                    ?"linear-gradient(90deg,rgba(28,126,214,0.9),rgba(12,166,120,0.9))"
                    :"rgba(28,126,214,0.85)",
                  border:"none",borderRadius:12,
                  color:"#fff",fontWeight:700,fontSize:14,cursor:"pointer",
                  display:"flex",alignItems:"center",justifyContent:"center",gap:7,
                  transition:"all .2s",fontFamily:CP.font,
                  boxShadow:"0 4px 14px rgba(28,126,214,0.4)",
                }}
                  onMouseEnter={e=>e.currentTarget.style.transform="scale(1.02)"}
                  onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}
                >
                  🚗 {isNav
                    ? L("Navigation läuft…","Navegando…","Navigating…","Navigando…")
                    : L("Navigation starten","Iniciar navegación","Start navigation","Avvia navigazione")}
                </button>

                {/* 🗺️ Open in Google Maps (address only) */}
                <button onClick={()=>{
                  const url=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addr)}`;
                  window.open(url,"_blank");
                }} style={{
                  padding:"11px 14px",
                  background:"rgba(255,255,255,0.07)",
                  border:"1px solid rgba(255,255,255,0.15)",
                  borderRadius:12,color:CP.textSecondary,fontWeight:600,fontSize:13,
                  cursor:"pointer",display:"flex",alignItems:"center",gap:6,
                  transition:"all .2s",fontFamily:CP.font,
                }}
                  onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.14)";e.currentTarget.style.color="#fff";}}
                  onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.07)";e.currentTarget.style.color=CP.textSecondary;}}
                  title={L("Adresse in Google Maps anzeigen","Ver dirección en Google Maps","View address in Google Maps","Visualizza indirizzo in Google Maps")}
                >
                  🗺️ Maps
                </button>

                {/* 📋 Copy address */}
                <button onClick={()=>{
                  try{ navigator.clipboard.writeText(addr); }catch(e){}
                  notify(
                    `📋 ${L("Adresse kopiert","Dirección copiada","Address copied","Indirizzo copiato")}: ${addr}`,
                    "info"
                  );
                }} style={{
                  padding:"11px 14px",
                  background:"rgba(255,255,255,0.07)",
                  border:"1px solid rgba(255,255,255,0.15)",
                  borderRadius:12,color:CP.textSecondary,fontWeight:600,fontSize:13,
                  cursor:"pointer",display:"flex",alignItems:"center",gap:6,
                  transition:"all .2s",fontFamily:CP.font,
                }}
                  onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.14)";e.currentTarget.style.color="#fff";}}
                  onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.07)";e.currentTarget.style.color=CP.textSecondary;}}
                  title={L("Adresse kopieren","Copiar dirección","Copy address","Copia indirizzo")}
                >
                  📋
                </button>
              </div>

              {/* Navigation active indicator */}
              {isNav&&(
                <div style={{
                  marginTop:10,padding:"8px 12px",
                  background:"rgba(12,166,120,0.1)",border:"1px solid rgba(12,166,120,0.3)",
                  borderRadius:10,display:"flex",alignItems:"center",gap:8,
                }}>
                  <div style={{
                    width:8,height:8,borderRadius:"50%",background:"#0CA678",
                    boxShadow:"0 0 8px rgba(12,166,120,0.8)",
                    animation:"pulse 1s infinite",
                  }}/>
                  <span style={{color:"#69DB7C",fontSize:12,fontWeight:600}}>
                    {L("Google Maps geöffnet – Navigation läuft","Google Maps abierto – Navegando","Google Maps opened – Navigating","Google Maps aperto – Navigazione attiva")}
                  </span>
                  <button onClick={()=>setNavigating(null)} style={{
                    marginLeft:"auto",background:"none",border:"none",
                    color:CP.textTertiary,cursor:"pointer",fontSize:12,
                  }}>✕</button>
                </div>
              )}
            </CPCard>
          );
        })}
      </div>

      {/* Quick tip */}
      {tj.length>0&&(
        <div style={{
          background:"rgba(240,140,0,0.08)",border:"1px solid rgba(240,140,0,0.2)",
          borderRadius:12,padding:"10px 14px",fontSize:12,color:"#FFD43B",
        }}>
          💡 {L(
            "Tipp: '🚗 Navigation starten' öffnet Google Maps mit Echtzeit-Navigation direkt zum Kundenstandort.",
            "Consejo: '🚗 Iniciar navegación' abre Google Maps con navegación en tiempo real hasta la ubicación del cliente.",
            "Tip: '🚗 Start navigation' opens Google Maps with real-time navigation directly to the client location.",
            "Suggerimento: '🚗 Avvia navigazione' apre Google Maps con navigazione in tempo reale verso la sede del cliente."
          )}
        </div>
      )}
    </CPScreen>
  );
}

// ─── REPORTS ─────────────────────────────────────────────────
function ReportsApp({t,jobs,clients,invoices,employees,notify,onBack,lang,timeclock,companySettings,products=[],setProducts,suppliers=[]}){
  const L = makeL(lang);
  const cs = companySettings||{name:"Patjac Reinigung Garten & Services",email:"info@patjacservices.ch",uid:"CHE-123.456.789",mwstNr:"CHE-123.456.789 MWST",iban:"CH56 0483 5012 3456 7800 9",street:"Industriestrasse",number:"14",postalCode:"8004",city:"Zürich"};
  const [preview,setPreview] = useState(null); // null | "monthly"|"annual"|"tax"|"payroll"|"inventory"
  const [counts,setCounts] = useState({}); // physical stock count entered during an inventory
  const now = new Date();
  const income = invoices.filter(i=>i.status==="paid").reduce((s,i)=>s+(i.total||0),0);
  const pending = invoices.filter(i=>i.status==="pending").reduce((s,i)=>s+(i.total||0),0);
  const overdue = invoices.filter(i=>i.status==="overdue").length;
  const salaries = employees.reduce((s,emp)=>{
    const hrs=timeclock.filter(tc=>tc.employeeId===emp.id&&tc.hours).reduce((h,tc)=>h+(tc.hours||0),0);
    const gross=emp.type==="hourly"?hrs*(emp.hourlyRate||0):(emp.fixedSalary||0);
    return s+gross*1.144;
  },0);
  const profit = income - salaries;
  const mwst = invoices.filter(i=>i.status==="paid").reduce((s,i)=>s+(i.vatAmount||0),0);
  const reps = [
    {l:t.monthSummary||L("Monatsübersicht","Resumen mensual","Monthly Summary","Riepilogo mensile"), i:"📅", type:"monthly"},
    {l:t.annualReport||L("Jahresbericht","Informe anual","Annual Report","Rapporto annuale"),       i:"📈", type:"annual"},
    {l:t.taxReport||L("Steuerbericht","Informe fiscal","Tax Report","Rapporto fiscale"),            i:"🏛️", type:"tax"},
    {l:t.payslip||L("Lohnabrechnung","Nómina","Payroll","Busta paga"),                             i:"💼", type:"payroll"},
    {l:L("Inventur","Inventario","Inventory","Inventario"),                                          i:"📦", type:"inventory"},
  ];
  const today = fmtDate(now,lang);

  // Download helper
  const downloadReport = (html, name) => {
    try {
      const blob = new Blob([html],{type:"text/html;charset=utf-8"});
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href=url; a.download=name; document.body.appendChild(a); a.click();
      setTimeout(()=>{document.body.removeChild(a);URL.revokeObjectURL(url);},3000);
    } catch(e) { notify(L("Fehler beim Download","Error al descargar","Download error","Errore download"),"error"); }
  };

  // Build report content based on type
  const buildReport = (type) => {
    const titleMap = {
      monthly: L("Monatsübersicht","Resumen mensual","Monthly Summary","Riepilogo mensile"),
      annual:  L("Jahresbericht","Informe anual","Annual Report","Rapporto annuale"),
      tax:     L("Steuerbericht","Informe fiscal","Tax Report","Rapporto fiscale"),
      payroll: L("Lohnabrechnung","Nómina","Payroll Summary","Busta paga"),
    };
    const title = titleMap[type];
    const period = type==="annual" ? now.getFullYear().toString() :
      `${now.toLocaleString(lang==="DE"?"de-CH":lang==="ES"?"es-ES":"en-GB",{month:"long"})} ${now.getFullYear()}`;

    if(type==="monthly" || type==="annual") return (
      <div>
        <h3 style={{color:CP.textPrimary,fontWeight:700,fontSize:17,marginBottom:16}}>{title} — {period}</h3>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:16}}>
          {[
            [L("Einnahmen (bezahlt)","Ingresos (pagado)","Income (paid)","Entrate (pagate)"), `CHF ${income.toLocaleString("de-CH",{minimumFractionDigits:2})}`, "#69DB7C"],
            [L("Ausstehend","Pendiente","Pending","In sospeso"), `CHF ${pending.toFixed(2)}`, "#FFD43B"],
            [L("Personalkosten (AG)","Costes personal (empresa)","Payroll cost (employer)","Costi personale (azienda)"), `CHF ${salaries.toFixed(2)}`, "#FF8787"],
            [L("Betriebsergebnis","Resultado operativo","Operating result","Risultato operativo"), `CHF ${profit.toFixed(2)}`, profit>=0?"#69DB7C":"#FF8787"],
            [L("Aufträge gesamt","Trabajos total","Total jobs","Lavori totale"), jobs.length.toString(), "#74C0FC"],
            [L("Abgeschlossen","Completado","Completed","Completati"), jobs.filter(j=>j.status==="completed").length.toString(), "#74C0FC"],
            [L("Aktive Kunden","Clientes activos","Active clients","Clienti attivi"), clients.filter(c=>c.active).length.toString(), "#74C0FC"],
            [L("Überfällige Rechnungen","Facturas vencidas","Overdue invoices","Fatture scadute"), overdue.toString(), overdue>0?"#FF8787":"#74C0FC"],
          ].map(([l,v,c])=>(
            <div key={l} style={{background:"rgba(255,255,255,0.04)",border:`1px solid rgba(255,255,255,0.08)`,borderRadius:12,padding:"12px 14px"}}>
              <div style={{color:CP.textSecondary,fontSize:11,marginBottom:4}}>{l}</div>
              <div style={{color:c,fontWeight:700,fontSize:18}}>{v}</div>
            </div>
          ))}
        </div>
        <CPCard style={{marginBottom:12}}>
          <div style={{color:CP.textSecondary,fontSize:11,fontWeight:700,textTransform:"uppercase",marginBottom:10}}>{L("Letzte Rechnungen","Últimas facturas","Recent invoices","Ultime fatture")}</div>
          <CPTable
            headers={[L("Nr.","Nº","No.","N."), t.clients, L("Betrag","Importe","Amount","Importo"), t.status||"Status"]}
            rows={invoices.slice(-6).reverse().map(inv=>[
              inv.invoiceNumber,
              inv.clientName,
              `CHF ${inv.total?.toFixed(2)||"0.00"}`,
              <CPBadge text={inv.status==="paid"?t.paid:inv.status==="overdue"?t.overdue:t.pending}
                color={inv.status==="paid"?"green":inv.status==="overdue"?"red":"yellow"}/>,
            ])}
          />
        </CPCard>
        <CPCard>
          <div style={{color:CP.textSecondary,fontSize:11,fontWeight:700,textTransform:"uppercase",marginBottom:10}}>{L("Aufträge nach Status","Trabajos por estado","Jobs by status","Lavori per stato")}</div>
          {["pending","inProgress","completed"].map(s=>{
            const count=jobs.filter(j=>j.status===s).length;
            const pct=jobs.length>0?Math.round(count/jobs.length*100):0;
            return (
              <div key={s} style={{marginBottom:10}}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:4,fontSize:13}}>
                  <span style={{color:CP.textSecondary}}>{s==="completed"?t.completed:s==="inProgress"?t.inProgress:t.pending}</span>
                  <span style={{color:CP.textPrimary,fontWeight:700}}>{count} ({pct}%)</span>
                </div>
                <div style={{height:6,background:"rgba(255,255,255,0.07)",borderRadius:20,overflow:"hidden"}}>
                  <div style={{height:"100%",width:`${pct}%`,background:s==="completed"?"#2F9E44":s==="inProgress"?"#1C7ED6":"#F08C00",borderRadius:20}}/>
                </div>
              </div>
            );
          })}
        </CPCard>
      </div>
    );

    if(type==="tax") return (
      <div>
        <h3 style={{color:CP.textPrimary,fontWeight:700,fontSize:17,marginBottom:4}}>{title}</h3>
        <div style={{color:CP.textSecondary,fontSize:13,marginBottom:16}}>🇨🇭 {L("Steuerjahr","Año fiscal","Tax year","Anno fiscale")} {now.getFullYear()} · {cs.uid}</div>
        <CPCard style={{marginBottom:12,background:"rgba(201,42,42,0.07)",border:"1px solid rgba(201,42,42,0.2)"}}>
          <div style={{color:CP.textSecondary,fontSize:11,fontWeight:700,textTransform:"uppercase",marginBottom:12}}>MWST — {L("Quartalsabrechnung","Liquidación trimestral","Quarterly settlement","Liquidazione trimestrale")}</div>
          {[
            [L("MWST-Einnahmen 8.1%","IVA ingresos 8.1%","VAT on income 8.1%","IVA entrate 8.1%"), `CHF ${mwst.toFixed(2)}`],
            [L("Vorsteuer (geschätzt)","IVA soportado (estimado)","Input VAT (estimated)","IVA a credito (stimato)"), `CHF ${(mwst*0.3).toFixed(2)}`],
            [L("MWST zahlbar","IVA a pagar","VAT payable","IVA da pagare"), `CHF ${(mwst*0.7).toFixed(2)}`],
          ].map(([l,v])=>(
            <div key={l} style={{display:"flex",justifyContent:"space-between",padding:"8px 0",borderBottom:`1px solid ${CP.border}`,fontSize:13}}>
              <span style={{color:CP.textSecondary}}>{l}</span><span style={{color:"#FF8787",fontWeight:700}}>{v}</span>
            </div>
          ))}
        </CPCard>
        <CPCard style={{marginBottom:12}}>
          <div style={{color:CP.textSecondary,fontSize:11,fontWeight:700,textTransform:"uppercase",marginBottom:12}}>{L("Ertragssteuer Schweiz","Impuesto beneficios Suiza","Swiss profit tax","Imposte utili Svizzera")}</div>
          {[
            [L("Betriebsgewinn","Beneficio operativo","Operating profit","Utile operativo"), `CHF ${profit.toFixed(2)}`],
            [L("Gewinnsteuer Kt. ZH (~12%)","Impuesto ZH (~12%)","Profit tax ZH (~12%)","Imposta ZH (~12%)"), `CHF ${Math.max(0,profit*0.12).toFixed(2)}`],
            [L("Gewinnsteuer Bund (~8.5%)","Impuesto federal (~8.5%)","Federal tax (~8.5%)","Imposta fed. (~8.5%)"), `CHF ${Math.max(0,profit*0.085).toFixed(2)}`],
            [L("Total Steuerbelastung","Total carga fiscal","Total tax burden","Totale carico fiscale"), `CHF ${Math.max(0,profit*0.205).toFixed(2)}`],
          ].map(([l,v])=>(
            <div key={l} style={{display:"flex",justifyContent:"space-between",padding:"8px 0",borderBottom:`1px solid ${CP.border}`,fontSize:13}}>
              <span style={{color:CP.textSecondary}}>{l}</span><span style={{color:"#FFD43B",fontWeight:700}}>{v}</span>
            </div>
          ))}
        </CPCard>
        <div style={{background:"rgba(28,126,214,0.1)",border:"1px solid rgba(28,126,214,0.25)",borderRadius:12,padding:"10px 14px",fontSize:12,color:"#74C0FC"}}>
          ℹ️ {L("Angaben sind Schätzungen. Wenden Sie sich an Ihren Treuhänder für die offizielle Steuererklärung.","Las cifras son estimaciones. Consulte a su asesor fiscal para la declaración oficial.","Figures are estimates. Consult your tax advisor for the official return.","I dati sono stime. Consultare il proprio consulente fiscale per la dichiarazione ufficiale.")}
        </div>
      </div>
    );

    if(type==="payroll") return (
      <div>
        <h3 style={{color:CP.textPrimary,fontWeight:700,fontSize:17,marginBottom:16}}>{title} — {period}</h3>
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {employees.filter(e=>e.active).map(emp=>{
            const pay=calcSwissPayroll(emp,timeclock,now.getMonth()+1,now.getFullYear(),jobs,{spesen:getSavedSpesen(emp.id,now.getFullYear(),now.getMonth()+1)});
            const hrs=Number(pay.hoursWorked), gross=Number(pay.grossTotal), net=Number(pay.net);
            const ahv=Number(pay.totalDeductEmp),alv=0,nbuv=0,bvg=0,ktg=0;
            return (
              <CPCard key={emp.id}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:8}}>
                  <div>
                    <div style={{color:CP.textPrimary,fontWeight:700,fontSize:14}}>{emp.name}</div>
                    <div style={{color:CP.textSecondary,fontSize:12,marginTop:2}}>
                      {emp.type==="hourly"?`${hrs.toFixed(1)}h × CHF ${emp.hourlyRate}/h`:`${L("Festlohn","Salario fijo","Fixed salary","Stipendio fisso")}: CHF ${emp.fixedSalary}`}
                    </div>
                  </div>
                  <div style={{textAlign:"right"}}>
                    <div style={{color:CP.textTertiary,fontSize:11}}>{L("Brutto","Bruto","Gross","Lordo")}: CHF {gross.toFixed(2)}</div>
                    <div style={{color:"#FF8787",fontSize:11}}>{L("Abzüge","Deducciones","Deductions","Deduzioni")}: − CHF {(ahv+alv+nbuv+bvg+ktg).toFixed(2)}</div>
                    <div style={{color:"#69DB7C",fontWeight:700,fontSize:16}}>CHF {net.toFixed(2)}</div>
                  </div>
                </div>
              </CPCard>
            );
          })}
          <CPCard style={{background:"rgba(12,166,120,0.1)",border:"1px solid rgba(12,166,120,0.3)"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <span style={{color:CP.textSecondary,fontWeight:700}}>{L("Total Lohnaufwand AG","Total coste laboral empresa","Total employer payroll cost","Totale costo lavoro azienda")}</span>
              <span style={{color:"#69DB7C",fontWeight:700,fontSize:18}}>CHF {salaries.toFixed(2)}</span>
            </div>
          </CPCard>
        </div>
      </div>
    );
    if(type==="inventory"){
      const catLbl = c=>({cleaning:L("Reinigung","Limpieza","Cleaning","Pulizia"),gardening:L("Garten","Jardinería","Gardening","Giardinaggio"),equipment:L("Maschinen/Geräte","Maquinaria/equipos","Machines/equipment","Macchine/attrezzi"),safety:L("Sicherheit","Seguridad","Safety","Sicurezza"),construction:L("Kleinbau","Obras pequeñas","Small construction","Piccoli lavori")}[c]||c||"—");
      const supName = id => suppliers.find(x=>x.id===id)?.name || id || "—";
      const rows = [...products].sort((a,b)=>(a.category||"").localeCompare(b.category||"")||(a.name||"").localeCompare(b.name||""));
      const qty = p => counts[p.id]!==undefined && counts[p.id]!=="" ? Number(counts[p.id]) : Number(p.stock||0);
      const value = rows.reduce((s,p)=>s+qty(p)*Number(p.price ?? p.unitPrice ?? 0),0);
      const low = rows.filter(p=>qty(p) < Number(p.minStock||0));
      const out = rows.filter(p=>qty(p) <= 0);
      const th={padding:"6px 8px",textAlign:"left",borderBottom:"2px solid #333",fontSize:11,background:"#f1f5f9",color:"#111"};
      const td={padding:"5px 8px",borderBottom:"1px solid #e5e7eb",fontSize:11,color:"#111"};
      const changed = Object.keys(counts).filter(id=>counts[id]!=="" && Number(counts[id])!==Number(products.find(p=>p.id===id)?.stock||0));
      return (
        <div style={{background:"#fff",color:"#111",borderRadius:10,padding:16}}>
          <h3 style={{color:"#1C7ED6",fontWeight:700,fontSize:17,marginBottom:2}}>📦 {L("Inventur","Inventario","Inventory","Inventario")}</h3>
          <div style={{color:"#555",fontSize:12,marginBottom:12}}>{cs.name} · {today}</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8,marginBottom:12}}>
            {[[L("Artikel","Artículos","Items","Articoli"),rows.length,"#1C7ED6"],[L("Lagerwert","Valor del stock","Stock value","Valore scorte"),`CHF ${value.toFixed(2)}`,"#0CA678"],[L("Unter Minimum","Bajo mínimo","Below minimum","Sotto minimo"),low.length,"#F08C00"],[L("Leer","Agotados","Out of stock","Esauriti"),out.length,"#C92A2A"]].map(([l,v,c])=>(
              <div key={l} style={{border:`1px solid ${c}55`,borderRadius:8,padding:"8px 10px"}}><div style={{fontSize:10,color:"#555"}}>{l}</div><div style={{fontWeight:700,fontSize:15,color:c}}>{v}</div></div>
            ))}
          </div>
          <div style={{fontSize:11,color:"#1e40af",background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:6,padding:"6px 10px",marginBottom:10}}>
            ✍️ {L("Zählen Sie jeden Artikel und tragen Sie die Menge in «Gezählt» ein. Dann «Inventur speichern» drücken – der Bestand wird aktualisiert.","Cuente cada artículo y escriba la cantidad en la columna «Contado». Después pulse «Guardar inventario» y el stock se actualiza.","Count each item, enter the quantity under «Counted», then press «Save inventory» to update stock.","Contare ogni articolo, inserire la quantità in «Contato» e premere «Salva inventario».")}
          </div>
          <table style={{width:"100%",borderCollapse:"collapse"}}>
            <thead><tr>
              <th style={th}>{L("Artikel","Artículo","Item","Articolo")}</th><th style={th}>{L("Kategorie","Categoría","Category","Categoria")}</th>
              <th style={{...th,textAlign:"right"}}>{L("System","Sistema","System","Sistema")}</th><th style={{...th,textAlign:"right"}}>{L("Gezählt","Contado","Counted","Contato")}</th>
              <th style={{...th,textAlign:"right"}}>Min.</th><th style={{...th,textAlign:"right"}}>CHF/{L("Einh.","ud.","unit","unità")}</th><th style={{...th,textAlign:"right"}}>{L("Wert","Valor","Value","Valore")}</th>
            </tr></thead>
            <tbody>
              {rows.map(p=>{const q=qty(p);const isLow=q<Number(p.minStock||0);return(
                <tr key={p.id} style={{background:q<=0?"#fee2e2":isLow?"#fff7ed":"#fff"}}>
                  <td style={td}><b>{p.name}</b><div style={{color:"#666",fontSize:10}}>{supName(p.supplier)}</div></td>
                  <td style={td}>{catLbl(p.category)}</td>
                  <td style={{...td,textAlign:"right"}}>{Number(p.stock||0)} {p.unit||""}</td>
                  <td style={{...td,textAlign:"right"}}>
                    <input type="number" min="0" value={counts[p.id]??""} placeholder={String(p.stock??0)} onChange={e=>setCounts(c=>({...c,[p.id]:e.target.value}))}
                      style={{width:64,padding:"3px 5px",border:"1px solid #cbd5e1",borderRadius:4,textAlign:"right",fontSize:11}}/>
                  </td>
                  <td style={{...td,textAlign:"right"}}>{Number(p.minStock||0)}</td>
                  <td style={{...td,textAlign:"right"}}>{Number(p.price ?? p.unitPrice ?? 0).toFixed(2)}</td>
                  <td style={{...td,textAlign:"right",fontWeight:600}}>{(q*Number(p.price ?? p.unitPrice ?? 0)).toFixed(2)}</td>
                </tr>);})}
              {rows.length===0&&<tr><td colSpan={7} style={{...td,textAlign:"center",color:"#888",padding:18}}>{L("Keine Artikel im Lager","No hay artículos en el inventario","No items in stock","Nessun articolo")}</td></tr>}
            </tbody>
          </table>
          {low.length>0&&(
            <div style={{marginTop:14}}>
              <div style={{fontWeight:700,fontSize:13,color:"#C2410C",marginBottom:6}}>🛒 {L("Nachbestellen","Hay que pedir","To reorder","Da riordinare")}</div>
              <table style={{width:"100%",borderCollapse:"collapse"}}><tbody>
                {low.map(p=>{const sug=Math.max(1,Math.ceil(Number(p.minStock||0)*2-qty(p)));return(
                  <tr key={p.id}><td style={td}>{p.name}</td><td style={td}>{supName(p.supplier)}</td>
                    <td style={{...td,textAlign:"right"}}>{L("Vorschlag","Sugerido","Suggested","Suggerito")}: <b>{sug} {p.unit||""}</b></td>
                    <td style={{...td,textAlign:"right"}}>≈ CHF {(sug*Number(p.price ?? p.unitPrice ?? 0)).toFixed(2)}</td></tr>);})}
              </tbody></table>
            </div>
          )}
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:14,gap:10,flexWrap:"wrap"}}>
            <div style={{fontSize:10,color:"#666"}}>{L("Gezählt von","Contado por","Counted by","Contato da")}: ____________________ &nbsp; {L("Datum","Fecha","Date","Data")}: {today}</div>
            {setProducts&&<CPBtn onClick={()=>{
              if(!changed.length){ notify(L("Keine Änderungen","No hay cambios","No changes","Nessuna modifica"),"error"); return; }
              setProducts(prev=>prev.map(p=>counts[p.id]!==undefined&&counts[p.id]!==""?{...p,stock:Number(counts[p.id])}:p));
              notify(L(`${changed.length} Bestände aktualisiert`,`${changed.length} existencias actualizadas`,`${changed.length} stock levels updated`,`${changed.length} scorte aggiornate`),"success");
              setCounts({});
            }}>💾 {L("Inventur speichern","Guardar inventario","Save inventory","Salva inventario")} {changed.length?`(${changed.length})`:""}</CPBtn>}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <CPScreen title={t.reports} icon="📊" onBack={onBack} t={t}>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:12,marginBottom:20}}>
        {reps.map(r=>(
          <CPCard key={r.type} style={{textAlign:"center",padding:"20px 16px"}}>
            <div style={{fontSize:38,marginBottom:10}}>{r.i}</div>
            <div style={{color:CP.textPrimary,fontWeight:700,fontSize:15,marginBottom:14}}>{r.l}</div>
            <div style={{display:"flex",gap:6,justifyContent:"center"}}>
              <CPBtn onClick={()=>setPreview(r.type)} variant="secondary" size="sm">
                👁️ {L("Anzeigen","Ver","View","Vedi")}
              </CPBtn>
              <CPBtn onClick={()=>sendByEmail({
                to: cs.email||"info@patjacservices.ch",
                subject: `${r.l} — Patjac Reinigung Garten & Services`,
                body: `${L("Guten Tag","Buenos días","Dear","Gentile")},\n\n${L("Anbei der Bericht","Adjunto el informe","Please find the report","In allegato il rapporto")}: ${r.l}\n\n${L("Mit freundlichen Grüssen","Saludos cordiales","Kind regards","Cordiali saluti")},\nPatjac Reinigung Garten & Services\ninfo@patjacservices.ch`
              })} size="sm">📧</CPBtn>
            </div>
          </CPCard>
        ))}
      </div>

      <CPCard>
        <div style={{color:CP.textSecondary,fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:.5,marginBottom:14}}>
          📋 {L("Zusammenfassung","Resumen","Summary","Riepilogo")}
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:10}}>
          <CPStat label={t.totalClients||L("Kunden","Clientes","Clients","Clienti")} value={clients.length} icon="👥" accent="#1C7ED6"/>
          <CPStat label={t.jobs||L("Aufträge","Trabajos","Jobs","Lavori")} value={jobs.length} icon="📋" accent="#F08C00"/>
          <CPStat label={t.completed||L("Erledigt","Completado","Completed","Completati")} value={jobs.filter(j=>j.status==="completed").length} icon="✅" accent="#2F9E44"/>
          <CPStat label={t.income||L("Einnahmen","Ingresos","Income","Entrate")} value={`CHF ${income.toFixed(0)}`} icon="💰" accent="#FFD43B"/>
          <CPStat label={t.activeEmployees||L("Mitarbeiter","Empleados","Employees","Dipendenti")} value={employees.filter(e=>e.active).length} icon="👤" accent="#7048E8"/>
        </div>
      </CPCard>

      {/* ── PREVIEW MODAL ── */}
      {preview&&(
        <div style={{
          position:"fixed",inset:0,background:"rgba(0,0,0,0.85)",backdropFilter:"blur(12px)",
          display:"flex",alignItems:"flex-start",justifyContent:"center",
          zIndex:99990,padding:16,overflowY:"auto",
        }} onClick={()=>setPreview(null)}>
          <div style={{
            background:CP.surface,border:`1px solid ${CP.border}`,
            borderRadius:20,width:"min(700px,96vw)",marginTop:8,marginBottom:8,
            boxShadow:"0 24px 80px rgba(0,0,0,0.8)",
          }} onClick={e=>e.stopPropagation()}>

            {/* Header */}
            <div style={{
              background:"linear-gradient(90deg,#1C7ED6,#2F9E44)",
              borderRadius:"20px 20px 0 0",padding:"13px 20px",
              display:"flex",justifyContent:"space-between",alignItems:"center",
            }}>
              <div style={{color:"#fff",fontWeight:700,fontSize:15}}>
                📊 {reps.find(r=>r.type===preview)?.l}
              </div>
              <div style={{display:"flex",gap:8}}>
                <button onClick={()=>{
                  const content = document.getElementById("report-preview-content");
                  if(!content) return;
                  const title = reps.find(r=>r.type===preview)?.l||"Report";
                  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>${title}</title>
<style>*{margin:0;padding:0;box-sizing:border-box;font-family:Arial,sans-serif}body{padding:28px;font-size:12px;color:#000;background:#fff}h3{margin-bottom:16px;font-size:18px}table{width:100%;border-collapse:collapse}td,th{padding:6px 10px;border-bottom:1px solid #eee;font-size:12px}@media print{@page{margin:1.5cm;size:A4}}</style>
</head><body>${content.innerHTML}</body></html>`;
                  const blob=new Blob([html],{type:"text/html;charset=utf-8"});
                  const url=URL.createObjectURL(blob);
                  const a=document.createElement("a");
                  a.href=url;a.download=`${title.replace(/\s+/g,"_")}.html`;
                  document.body.appendChild(a);a.click();
                  setTimeout(()=>{document.body.removeChild(a);URL.revokeObjectURL(url);},3000);
                }} style={{
                  background:"rgba(255,255,255,0.2)",border:"1px solid rgba(255,255,255,0.3)",
                  borderRadius:10,color:"#fff",padding:"7px 14px",cursor:"pointer",
                  fontSize:13,fontWeight:700,fontFamily:CP.font,
                }}>⬇️ {L("Herunterladen","Descargar","Download","Scarica")}</button>
                <button onClick={()=>setPreview(null)} style={{
                  background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",
                  borderRadius:10,color:"#fff",padding:"7px 12px",cursor:"pointer",fontSize:13,
                }}>✕</button>
              </div>
            </div>

            {/* Report content */}
            <div id="report-preview-content" style={{padding:"20px 24px 24px",maxHeight:"75vh",overflowY:"auto"}}>
              <div style={{color:CP.textTertiary,fontSize:11,marginBottom:14}}>
                {cs.name} · {cs.uid} · {today}
              </div>
              {buildReport(preview)}
            </div>
          </div>
        </div>
      )}
    </CPScreen>
  );
}

// ─── ADMIN PASSWORD CHANGE FORM ────────────────────────────────
function SecurityPasswordForm({companySettings,setCompanySettings,notify,L}){
  const [current,setCurrent] = useState("");
  const [newEmail,setNewEmail] = useState(companySettings.adminEmail||"");
  const [newPw,setNewPw] = useState("");
  const [confirmPw,setConfirmPw] = useState("");
  const [busy,setBusy] = useState(false);

  const submit = async () => {
    if(newPw.length < 8){
      notify(L("Das neue Passwort muss mindestens 8 Zeichen haben.","La nueva contraseña debe tener al menos 8 caracteres.","New password must be at least 8 characters.","La nuova password deve avere almeno 8 caratteri."),"error");
      return;
    }
    if(newPw !== confirmPw){
      notify(L("Die neuen Passwörter stimmen nicht überein.","Las contraseñas nuevas no coinciden.","New passwords do not match.","Le nuove password non coincidono."),"error");
      return;
    }
    setBusy(true);
    let ok=false;
    try{ ok = await supaRpc("admin_change_credentials",{p_old:current,p_email:newEmail.trim(),p_new:newPw}); }catch(e){ ok=false; }
    setBusy(false);
    if(ok!==true){ notify(L("Aktuelles Passwort falsch.","Contraseña actual incorrecta.","Current password is incorrect.","Password attuale errata."),"error"); return; }
    setCompanySettings(prev=>({...prev, adminEmail:newEmail.trim()||prev.adminEmail}));
    notify(L("Zugangsdaten aktualisiert ✓","Datos de acceso actualizados ✓","Access credentials updated ✓","Credenziali di accesso aggiornate ✓"),"success");
    setCurrent(""); setNewPw(""); setConfirmPw("");
  };

  const label = {fontSize:12,color:CP.textTertiary,fontWeight:600,marginBottom:6,display:"block"};

  return (
    <div style={{display:"flex",flexDirection:"column",gap:12}}>
      <div style={{color:CP.textPrimary,fontWeight:700,fontSize:14,marginBottom:2}}>
        {L("Cambiar datos de acceso del administrador","Cambiar datos de acceso del administrador","Change administrator access credentials","Cambia le credenziali dell'amministratore")}
      </div>
      <div>
        <label style={label}>{L("Correo de administrador","Correo de administrador","Admin email","Email amministratore")}</label>
        <CPInput value={newEmail} onChange={e=>setNewEmail(e.target.value)} type="email"/>
      </div>
      <div>
        <label style={label}>{L("Contraseña actual","Contraseña actual","Current password","Password attuale")}</label>
        <CPInput value={current} onChange={e=>setCurrent(e.target.value)} type="password" placeholder="••••••••"/>
      </div>
      <div>
        <label style={label}>{L("Nueva contraseña","Nueva contraseña","New password","Nuova password")}</label>
        <CPInput value={newPw} onChange={e=>setNewPw(e.target.value)} type="password" placeholder="••••••••"/>
      </div>
      <div>
        <label style={label}>{L("Confirmar nueva contraseña","Confirmar nueva contraseña","Confirm new password","Conferma nuova password")}</label>
        <CPInput value={confirmPw} onChange={e=>setConfirmPw(e.target.value)} type="password" placeholder="••••••••"/>
      </div>
      <CPBtn onClick={submit} disabled={busy}>
        {L("Guardar nuevos datos de acceso","Guardar nuevos datos de acceso","Save new access credentials","Salva nuove credenziali")}
      </CPBtn>
    </div>
  );
}

// ─── SETTINGS ────────────────────────────────────────────────
function SettingsApp({t,lang,setLang,notify,onBack,companySettings,setCompanySettings,currentUser,clients,employees,jobs,invoices,contracts,expenses,orders,products,suppliers,messages}){
  const L = makeL(lang);
  const [tab,setTab] = useState("company");
  const [form,setForm] = useState({...companySettings});
  const [editing,setEditing] = useState(false);
  const [saved,setSaved] = useState(false);

  const isAdmin = currentUser?.role==="admin";

  const tabs = [
    {id:"company", l:t.companyInfo||"Firma", i:"🏢"},
    {id:"language", l:t.language, i:"🌐"},
    {id:"security", l:t.security, i:"🔒"},
    {id:"system",  l:t.system, i:"⚙️"},
  ];

  const saveCompany = () => {
    const {adminEmail,adminPassword,...companyFields} = form;
    setCompanySettings(prev=>({...prev,...companyFields}));
    setEditing(false);
    setSaved(true);
    notify(t.success+" – "+t.companyInfo,"success");
    setTimeout(()=>setSaved(false),3000);
  };

  const cancelEdit = () => {
    setForm({...companySettings});
    setEditing(false);
  };

  const fields = [
    {key:"name",    labelKey:"companyName",   ph:"Patjac Reinigung Garten & Services", full:true},
    {key:"street",  labelKey:"street",         ph:"Industriestrasse"},
    {key:"number",  labelKey:"number",         ph:"14"},
    {key:"postalCode",labelKey:"postalCode",   ph:"8004"},
    {key:"city",    labelKey:"city",           ph:"Zürich"},
    {key:"phone",   labelKey:"phone",          ph:"+41 44 123 4567"},
    {key:"email",   labelKey:"email",          ph:"info@meinefirma.ch", type:"email"},
    {key:"uid",     labelKey:"uid",            ph:"CHE-XXX.XXX.XXX"},
    {key:"mwstNr",  labelKey:"mwstNr",        ph:"CHE-XXX.XXX.XXX MWST"},
    {key:"iban",    labelKey:"iban",           ph:"CH56 XXXX XXXX XXXX XXXX X"},
    {key:"bic",     labelKey:"bic",            ph:"CRESCHZZ80A"},
  ];

  return (
    <CPScreen title={t.settings} icon="⚙️" onBack={onBack} t={t}>
      {/* Tabs */}
      <div style={{display:"flex",gap:8,marginBottom:20,flexWrap:"wrap"}}>
        {tabs.map(tb=>(
          <button key={tb.id} onClick={()=>{setTab(tb.id);setEditing(false);setForm({...companySettings});}} style={{
            padding:"9px 18px",borderRadius:24,border:"none",cursor:"pointer",
            fontSize:14,fontWeight:700,fontFamily:CP.font,transition:"background .15s",
            background:tab===tb.id?CP.accent:"rgba(255,255,255,.1)",color:"#fff",
            display:"flex",alignItems:"center",gap:6,
          }}>{tb.i} {tb.l}</button>
        ))}
      </div>

      {/* ── COMPANY TAB ── */}
      {tab==="company"&&(
        <div>
          {/* Header banner */}
          <div style={{
            background:"linear-gradient(135deg,rgba(28,126,214,0.18),rgba(12,166,120,0.1))",
            border:"1px solid rgba(28,126,214,0.3)",borderRadius:16,
            padding:"16px 20px",marginBottom:18,
            display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:10,
          }}>
            <div style={{display:"flex",alignItems:"center",gap:14}}>
              <div style={{fontSize:44}}>{companySettings.logo||"🌿"}</div>
              <div>
                <div style={{color:"#fff",fontWeight:700,fontSize:18}}>{companySettings.name}</div>
                <div style={{color:CP.textSecondary,fontSize:13,marginTop:2}}>
                  {companySettings.street} {companySettings.number}, {companySettings.postalCode} {companySettings.city}
                </div>
                <div style={{color:CP.textSecondary,fontSize:12,marginTop:1}}>
                  {companySettings.phone} · {companySettings.email}
                </div>
              </div>
            </div>
            {isAdmin && !editing && (
              <CPBtn onClick={()=>setEditing(true)} variant="primary">
                ✏️ {lang==="DE"?"Daten bearbeiten":lang==="ES"?"Editar datos":lang==="IT"?"Modifica dati":"Edit data"}
              </CPBtn>
            )}
            {isAdmin && editing && (
              <div style={{display:"flex",gap:8}}>
                <CPBtn onClick={cancelEdit} variant="secondary">✕ {t.cancel}</CPBtn>
                <CPBtn onClick={saveCompany} variant="success">💾 {t.save}</CPBtn>
              </div>
            )}
          </div>

          {saved&&(
            <div style={{background:"rgba(47,158,68,0.15)",border:"1px solid rgba(47,158,68,0.4)",borderRadius:12,padding:"10px 16px",marginBottom:14,color:"#69DB7C",fontWeight:600,fontSize:14}}>
              ✅ {lang==="DE"?"Firmendaten erfolgreich gespeichert!":lang==="ES"?"¡Datos de empresa guardados correctamente!":lang==="IT"?"Dati azienda salvati con successo!":"Company data saved successfully!"}
            </div>
          )}

          {!isAdmin && (
            <div style={{background:"rgba(201,42,42,0.1)",border:"1px solid rgba(201,42,42,0.3)",borderRadius:12,padding:"10px 16px",marginBottom:14,color:"#FF8787",fontSize:13,fontWeight:600}}>
              🔒 {lang==="DE"?"Nur der Administrator kann Firmendaten bearbeiten.":lang==="ES"?"Solo el administrador puede editar los datos de empresa.":lang==="IT"?"Solo l'amministratore può modificare i dati aziendali.":"Only the administrator can edit company data."}
            </div>
          )}

          {/* Fields */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:14}}>
            {fields.map(f=>(
              <div key={f.key} style={{gridColumn:f.full?"1/-1":"auto"}}>
                <div style={{color:CP.textSecondary,fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:.5,marginBottom:6}}>
                  {t[f.labelKey]||f.labelKey}
                </div>
                {editing && isAdmin ? (
                  <input
                    type={f.type||"text"}
                    value={form[f.key]||""}
                    onChange={e=>setForm(prev=>({...prev,[f.key]:e.target.value}))}
                    placeholder={f.ph}
                    style={{
                      width:"100%",padding:"10px 14px",
                      background:"rgba(255,255,255,0.08)",
                      border:`1px solid ${CP.accent}`,
                      borderRadius:10,color:"#fff",fontSize:14,
                      fontFamily:CP.font,outline:"none",boxSizing:"border-box",
                    }}
                  />
                ) : (
                  <div style={{
                    padding:"10px 14px",
                    background:"rgba(255,255,255,0.04)",
                    border:`1px solid ${CP.border}`,
                    borderRadius:10,color:CP.textPrimary,fontSize:14,fontWeight:600,
                    minHeight:42,display:"flex",alignItems:"center",
                  }}>
                    {companySettings[f.key]||<span style={{color:CP.textTertiary,fontStyle:"italic",fontWeight:400}}>—</span>}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Swiss QR / legal note */}
          <div style={{background:"rgba(0,0,0,0.2)",border:`1px solid ${CP.border}`,borderRadius:14,padding:"14px 18px",marginTop:20}}>
            <div style={{color:"#74C0FC",fontSize:12,fontWeight:700,marginBottom:8}}>
              🇨🇭 {t.swissLegalNotes||"Swiss Legal Notes"}
            </div>
            {[
              lang==="DE"?"UID-Nummer im Format CHE-XXX.XXX.XXX (Eidg. Handelsregister)":
              lang==="ES"?"Número UID en formato CHE-XXX.XXX.XXX (Registro mercantil federal)":
              lang==="IT"?"Numero UID nel formato CHE-XXX.XXX.XXX (Registro di commercio federale)":
              "UID number in format CHE-XXX.XXX.XXX (Federal commercial register)",

              lang==="DE"?"MWST-Nummer pflichtangabe ab CHF 100'000 Jahresumsatz":
              lang==="ES"?"Número IVA obligatorio a partir de CHF 100'000 de facturación anual":
              lang==="IT"?"Numero IVA obbligatorio da CHF 100'000 di fatturato annuo":
              "VAT number mandatory from CHF 100,000 annual turnover",

              lang==="DE"?"IBAN für Swiss QR-Rechnung (Postfinance oder Bankkonten CH)":
              lang==="ES"?"IBAN para factura QR suiza (PostFinance o cuentas bancarias CH)":
              lang==="IT"?"IBAN per fattura QR svizzera (PostFinance o conti bancari CH)":
              "IBAN for Swiss QR invoice (PostFinance or Swiss bank accounts)",
            ].map((note,i)=>(
              <div key={i} style={{color:CP.textSecondary,fontSize:12,marginBottom:5,display:"flex",gap:8}}>
                <span style={{color:"#74C0FC",flexShrink:0}}>•</span>{note}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── LANGUAGE TAB ── */}
      {tab==="language"&&(
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:10}}>
          {[["DE","🇩🇪 Deutsch"],["ES","🇪🇸 Español"],["EN","🇬🇧 English"],["IT","🇮🇹 Italiano"]].map(([code,label])=>(
            <CPCard key={code} onClick={()=>{setLang(code);notify(t.success);}}
              style={{textAlign:"center",padding:"20px",cursor:"pointer",
                background:lang===code?"rgba(28,126,214,.3)":CP.surface,
                border:`1px solid ${lang===code?CP.accent:CP.border}`,
              }}>
              <div style={{fontSize:28,marginBottom:8}}>{label.split(" ")[0]}</div>
              <div style={{color:CP.textPrimary,fontWeight:700,fontSize:15}}>{label.split(" ").slice(1).join(" ")}</div>
              {lang===code&&<div style={{color:"#74C0FC",fontSize:12,marginTop:6}}>✓ {t.active||"Active"}</div>}
            </CPCard>
          ))}
        </div>
      )}

      {/* ── SECURITY TAB ── */}
      {tab==="security"&&(
        <CPCard>
          {isAdmin ? (
            <SecurityPasswordForm companySettings={companySettings} setCompanySettings={setCompanySettings} notify={notify} L={L}/>
          ) : (
            <div style={{color:CP.textSecondary,fontSize:14,padding:"10px 0"}}>
              {L("Solo el administrador puede cambiar los datos de acceso.","Solo el administrador puede cambiar los datos de acceso.","Only the administrator can change access credentials.","Solo l'amministratore può modificare le credenziali.")}
            </div>
          )}
          {[
            "🔑 Login: Code + PIN ("+L("Mitarbeiter","Empleado","Employee","Dipendente")+")",
          ].map((item,i)=>(
            <div key={i} style={{padding:"10px 0",borderTop:`1px solid ${CP.border}`,marginTop:14,color:CP.textSecondary,fontSize:14}}>{item}</div>
          ))}
        </CPCard>
      )}

      {/* ── SYSTEM TAB ── */}
      {tab==="system"&&(
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {[
            {l:"ℹ️ "+L("App-Version 2.0","Versión App 2.0","App Version 2.0","Versione App 2.0"), v:()=>notify("Patjac Business Suite v2.0","info"), variant:"secondary"},
            {l:"💾 "+L("Backup erstellen","Crear copia de seguridad","Create backup","Crea backup"), v:()=>{
              const backup = {
                version:"2.0",
                date: new Date().toISOString(),
                company: companySettings,
                data: { clients, employees, jobs, invoices, contracts, expenses, orders, products, suppliers, messages }
              };
              const blob = new Blob([JSON.stringify(backup, null, 2)], {type:"application/json"});
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = `patjac-backup-${new Date().toISOString().slice(0,10)}.json`;
              a.click();
              URL.revokeObjectURL(url);
              notify(L("Backup heruntergeladen ✓","Copia descargada ✓","Backup downloaded ✓","Backup scaricato ✓"),"success");
            }, variant:"secondary"},
            {l:"📧 "+L("Systembericht senden","Enviar informe sistema","Send system report","Invia rapporto sistema"), v:()=>sendByEmail({
              to: companySettings.email||"info@patjacservices.ch",
              subject: `Patjac Business Suite — ${L("Systembericht","Informe del sistema","System Report","Rapporto di sistema")}`,
              body: `${L("Guten Tag","Buenos días","Dear","Gentile")},\n\n${L("Anbei der Systembericht von Patjac Business Suite.","Adjunto el informe del sistema de Patjac Business Suite.","Please find the system report from Patjac Business Suite.","In allegato il rapporto di sistema di Patjac Business Suite.")}\n\n${L("Mit freundlichen Grüssen","Saludos cordiales","Kind regards","Cordiali saluti")},\nPatjac Reinigung Garten & Services\ninfo@patjacservices.ch`
            }), variant:"secondary"},
            {l:"🔄 "+t.reset, v:()=>window.location.reload(), variant:"danger"},
          ].map(btn=>(
            <CPBtn key={btn.l} onClick={btn.v} variant={btn.variant} full>{btn.l}</CPBtn>
          ))}
        </div>
      )}
    </CPScreen>
  );
}


// ─── PATJAC ACADEMY (Enhanced – Swiss Standards) ────────────

// SVG illustrations per topic (inline, no external URLs needed)
const ACADEMY_ILLUSTRATIONS = {
  app_phone: `
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" rx="14" fill="#0b2a24"/>
      <circle cx="60" cy="40" r="28" fill="#0CA678" opacity="0.18"/>
      <circle cx="270" cy="140" r="36" fill="#1C7ED6" opacity="0.15"/>
      <rect x="118" y="14" width="84" height="152" rx="14" fill="#10151f" stroke="#0CA678" stroke-width="3"/>
      <rect x="126" y="30" width="68" height="120" rx="6" fill="#16202e"/>
      <rect x="148" y="20" width="24" height="4" rx="2" fill="#2a3444"/>
      <rect x="132" y="38" width="26" height="26" rx="7" fill="#1C7ED6"/><text x="145" y="57" font-size="14" text-anchor="middle">📋</text>
      <rect x="162" y="38" width="26" height="26" rx="7" fill="#0CA678"/><text x="175" y="57" font-size="14" text-anchor="middle">⏱️</text>
      <rect x="132" y="70" width="26" height="26" rx="7" fill="#7048E8"/><text x="145" y="89" font-size="14" text-anchor="middle">💬</text>
      <rect x="162" y="70" width="26" height="26" rx="7" fill="#E67700"/><text x="175" y="89" font-size="14" text-anchor="middle">🎓</text>
      <rect x="132" y="102" width="26" height="26" rx="7" fill="#2F9E44"/><text x="145" y="121" font-size="14" text-anchor="middle">💵</text>
      <rect x="162" y="102" width="26" height="26" rx="7" fill="#C92A2A"/><text x="175" y="121" font-size="14" text-anchor="middle">📍</text>
      <circle cx="160" cy="158" r="4" fill="#2a3444"/>
      <rect x="222" y="40" width="72" height="30" rx="12" fill="#0CA678"/><text x="258" y="60" font-size="14" text-anchor="middle" fill="white" font-weight="bold">🔑 PIN</text>
      <rect x="26" y="96" width="74" height="30" rx="12" fill="#1C7ED6"/><text x="63" y="116" font-size="14" text-anchor="middle" fill="white" font-weight="bold">✓ OK</text>
    </svg>`,
  cleaning: `
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" rx="14" fill="#0d1a2e"/>
      <!-- Floor -->
      <rect x="0" y="130" width="320" height="50" rx="0" fill="#1a2a40"/>
      <!-- Tiles pattern -->
      <line x1="80" y1="130" x2="80" y2="180" stroke="#243550" strokeWidth="1"/>
      <line x1="160" y1="130" x2="160" y2="180" stroke="#243550" strokeWidth="1"/>
      <line x1="240" y1="130" x2="240" y2="180" stroke="#243550" strokeWidth="1"/>
      <line x1="0" y1="155" x2="320" y2="155" stroke="#243550" strokeWidth="1"/>
      <!-- Mop handle -->
      <rect x="155" y="30" width="8" height="100" rx="4" fill="#4a90d9"/>
      <!-- Mop head -->
      <rect x="130" y="125" width="58" height="12" rx="6" fill="#6ab5f5"/>
      <!-- Water sparkles -->
      <circle cx="115" cy="118" r="4" fill="#a8d8ff" opacity="0.7"/>
      <circle cx="200" cy="122" r="3" fill="#a8d8ff" opacity="0.5"/>
      <circle cx="100" cy="128" r="2" fill="#a8d8ff" opacity="0.6"/>
      <circle cx="220" cy="116" r="3" fill="#a8d8ff" opacity="0.5"/>
      <!-- Bucket -->
      <rect x="240" y="95" width="40" height="36" rx="5" fill="#1c4d7a"/>
      <rect x="238" y="92" width="44" height="8" rx="4" fill="#2a6aaa"/>
      <rect x="253" y="80" width="14" height="14" rx="2" fill="#3a7abf"/>
      <!-- Soap bubbles -->
      <circle cx="248" cy="105" r="5" fill="none" stroke="#6ab5f5" strokeWidth="1.5" opacity="0.8"/>
      <circle cx="263" cy="100" r="4" fill="none" stroke="#6ab5f5" strokeWidth="1.5" opacity="0.6"/>
      <circle cx="272" cy="110" r="3" fill="none" stroke="#6ab5f5" strokeWidth="1.5" opacity="0.7"/>
      <!-- Spray bottle -->
      <rect x="40" y="70" width="28" height="55" rx="6" fill="#2F9E44"/>
      <rect x="40" y="68" width="28" height="10" rx="3" fill="#3aaa52"/>
      <rect x="55" y="60" width="13" height="12" rx="3" fill="#3aaa52"/>
      <line x1="62" y1="60" x2="78" y2="50" stroke="#3aaa52" strokeWidth="3" strokeLinecap="round"/>
      <!-- Label on spray -->
      <rect x="44" y="85" width="20" height="28" rx="3" fill="white" opacity="0.15"/>
      <!-- Gloves icon -->
      <ellipse cx="200" cy="60" rx="22" ry="14" fill="#f5c518" opacity="0.9"/>
      <rect x="178" y="55" width="44" height="20" rx="8" fill="#f5c518" opacity="0.9"/>
      <!-- Stars / clean indicators -->
      <text x="28" y="45" fill="#FFD43B" fontSize="16">✦</text>
      <text x="280" y="40" fill="#69DB7C" fontSize="14">✦</text>
      <text x="150" y="22" fill="#74C0FC" fontSize="12">✦</text>
      <!-- Swiss cross watermark -->
      <rect x="288" y="8" width="22" height="22" rx="3" fill="#C92A2A" opacity="0.6"/>
      <rect x="296" y="11" width="6" height="16" rx="1" fill="white" opacity="0.9"/>
      <rect x="291" y="16" width="16" height="6" rx="1" fill="white" opacity="0.9"/>
    </svg>`,
  cleaning_products: `
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" rx="14" fill="#0a1628"/>
      <!-- Shelf -->
      <rect x="20" y="130" width="280" height="8" rx="4" fill="#243550"/>
      <!-- Product 1: Disinfectant blue -->
      <rect x="40" y="70" width="36" height="62" rx="8" fill="#1C7ED6"/>
      <rect x="40" y="68" width="36" height="12" rx="4" fill="#2a8de8"/>
      <rect x="45" y="85" width="26" height="36" rx="3" fill="white" opacity="0.1"/>
      <text x="48" y="108" fill="white" fontSize="8" fontWeight="bold">DES</text>
      <!-- Product 2: Green eco cleaner -->
      <rect x="95" y="60" width="36" height="72" rx="8" fill="#2F9E44"/>
      <rect x="95" y="58" width="36" height="14" rx="4" fill="#3aaa52"/>
      <ellipse cx="113" cy="55" rx="8" ry="5" fill="#2F9E44"/>
      <rect x="100" y="75" width="26" height="40" rx="3" fill="white" opacity="0.1"/>
      <text x="104" y="100" fill="white" fontSize="7">ECO</text>
      <!-- Product 3: Descaler yellow -->
      <rect x="150" y="75" width="30" height="57" rx="7" fill="#F08C00"/>
      <rect x="150" y="73" width="30" height="11" rx="4" fill="#ffaa22"/>
      <rect x="154" y="88" width="22" height="32" rx="3" fill="white" opacity="0.1"/>
      <text x="155" y="110" fill="white" fontSize="7">KALK</text>
      <!-- Product 4: Neutral cleaner gray -->
      <rect x="198" y="65" width="32" height="67" rx="8" fill="#5C7CFA"/>
      <rect x="198" y="63" width="32" height="12" rx="4" fill="#6e8efb"/>
      <rect x="203" y="80" width="22" height="38" rx="3" fill="white" opacity="0.1"/>
      <text x="204" y="103" fill="white" fontSize="7">NEUTRAL</text>
      <!-- Product 5: Bleach white -->
      <rect x="248" y="72" width="30" height="60" rx="7" fill="#868E96"/>
      <rect x="248" y="70" width="30" height="11" rx="4" fill="#aab0b8"/>
      <rect x="252" y="85" width="22" height="34" rx="3" fill="white" opacity="0.12"/>
      <text x="252" y="107" fill="white" fontSize="7">BLEACH</text>
      <!-- Hazard symbols -->
      <text x="42" y="55" fill="#FF8787" fontSize="14">⚠</text>
      <text x="200" y="52" fill="#FFD43B" fontSize="11">⚠</text>
      <!-- Swiss norm label -->
      <rect x="230" y="148" width="72" height="20" rx="5" fill="#C92A2A" opacity="0.7"/>
      <text x="238" y="162" fill="white" fontSize="9" fontWeight="bold">SUVA Norm</text>
    </svg>`,
  cleaning_surfaces: `
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" rx="14" fill="#0d1a2e"/>
      <!-- Table surface being cleaned -->
      <rect x="30" y="90" width="260" height="15" rx="4" fill="#2a3f5f"/>
      <rect x="50" y="102" width="6" height="45" rx="3" fill="#1e3050"/>
      <rect x="264" y="102" width="6" height="45" rx="3" fill="#1e3050"/>
      <!-- Microfiber cloth -->
      <rect x="80" y="76" width="80" height="18" rx="9" fill="#4a90d9"/>
      <line x1="85" y1="85" x2="155" y2="85" stroke="#6ab5f5" strokeWidth="1.5" strokeDasharray="4 3"/>
      <!-- Hand holding cloth -->
      <ellipse cx="120" cy="68" rx="25" ry="12" fill="#f5a623" opacity="0.85"/>
      <rect x="100" y="58" width="40" height="16" rx="8" fill="#f5a623" opacity="0.85"/>
      <!-- Clean zone (sparkle) -->
      <text x="170" y="88" fill="#69DB7C" fontSize="16">✨</text>
      <text x="195" y="80" fill="#69DB7C" fontSize="11">✦</text>
      <!-- Dirty zone indicator (left) -->
      <circle cx="60" cy="84" r="5" fill="#C92A2A" opacity="0.5"/>
      <circle cx="72" cy="80" r="3" fill="#C92A2A" opacity="0.4"/>
      <!-- Surface types legend at bottom -->
      <rect x="20" y="155" width="55" height="18" rx="5" fill="#1C7ED6" opacity="0.5"/>
      <text x="28" y="167" fill="white" fontSize="8">Parkett</text>
      <rect x="84" y="155" width="55" height="18" rx="5" fill="#2F9E44" opacity="0.5"/>
      <text x="92" y="167" fill="white" fontSize="8">Marmor</text>
      <rect x="148" y="155" width="55" height="18" rx="5" fill="#F08C00" opacity="0.5"/>
      <text x="154" y="167" fill="white" fontSize="8">Granit</text>
      <rect x="212" y="155" width="75" height="18" rx="5" fill="#7048E8" opacity="0.5"/>
      <text x="218" y="167" fill="white" fontSize="8">Kunststoff</text>
      <!-- Swiss flag small -->
      <rect x="285" y="8" width="22" height="22" rx="3" fill="#C92A2A" opacity="0.7"/>
      <rect x="293" y="11" width="6" height="16" rx="1" fill="white"/>
      <rect x="288" y="16" width="16" height="6" rx="1" fill="white"/>
    </svg>`,
  garden_seasons: `
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" rx="14" fill="#0a1a0d"/>
      <!-- 4 seasonal panels -->
      <!-- Spring (top-left) -->
      <rect x="8" y="8" width="147" height="80" rx="10" fill="#1a3020"/>
      <text x="18" y="28" fill="#69DB7C" fontSize="11" fontWeight="bold">🌸 Frühling / Spring</text>
      <circle cx="50" cy="60" r="20" fill="#2F9E44" opacity="0.6"/>
      <circle cx="75" cy="52" r="16" fill="#3aaa52" opacity="0.7"/>
      <circle cx="100" cy="58" r="18" fill="#2F9E44" opacity="0.5"/>
      <rect x="50" y="72" width="4" height="14" rx="2" fill="#5a3e28"/>
      <rect x="75" y="66" width="4" height="14" rx="2" fill="#5a3e28"/>
      <text x="115" y="68" fill="#FFD43B" fontSize="18">🌼</text>
      <!-- Summer (top-right) -->
      <rect x="165" y="8" width="147" height="80" rx="10" fill="#2a1a05"/>
      <text x="175" y="28" fill="#FFD43B" fontSize="11" fontWeight="bold">☀️ Sommer / Summer</text>
      <circle cx="290" cy="48" r="22" fill="#F08C00" opacity="0.5"/>
      <circle cx="290" cy="48" r="14" fill="#FFD43B" opacity="0.6"/>
      <circle cx="200" cy="65" r="18" fill="#2F9E44" opacity="0.7"/>
      <circle cx="230" cy="58" r="22" fill="#3aaa52" opacity="0.6"/>
      <rect x="198" y="78" width="4" height="10" rx="2" fill="#5a3e28"/>
      <!-- Autumn (bottom-left) -->
      <rect x="8" y="94" width="147" height="78" rx="10" fill="#2a1a05"/>
      <text x="18" y="112" fill="#E67700" fontSize="11" fontWeight="bold">🍂 Herbst / Autumn</text>
      <circle cx="55" cy="148" r="18" fill="#C92A2A" opacity="0.5"/>
      <circle cx="80" cy="140" r="20" fill="#E67700" opacity="0.6"/>
      <circle cx="108" cy="146" r="16" fill="#F08C00" opacity="0.5"/>
      <text x="35" y="155" fill="#E67700" fontSize="10">🍂 🍁 🍂</text>
      <!-- Winter (bottom-right) -->
      <rect x="165" y="94" width="147" height="78" rx="10" fill="#0d1a2e"/>
      <text x="175" y="112" fill="#74C0FC" fontSize="11" fontWeight="bold">❄️ Winter / Hiver</text>
      <circle cx="200" cy="150" r="18" fill="#1C7ED6" opacity="0.2"/>
      <circle cx="235" cy="144" r="22" fill="#74C0FC" opacity="0.15"/>
      <circle cx="270" cy="150" r="18" fill="#1C7ED6" opacity="0.2"/>
      <text x="195" y="155" fill="#a8d8ff" fontSize="14">❄ ❄ ❄</text>
      <!-- Pruning shears icon center -->
      <text x="143" y="96" fill="#FFD43B" fontSize="22">✂</text>
    </svg>`,
  garden_tools: `
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" rx="14" fill="#0a1a0d"/>
      <!-- Ground line -->
      <rect x="0" y="148" width="320" height="32" rx="0" fill="#1a2e15"/>
      <!-- Grass blades -->
      <line x1="20" y1="148" x2="15" y2="132" stroke="#3aaa52" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="30" y1="148" x2="35" y2="130" stroke="#2F9E44" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="40" y1="148" x2="38" y2="134" stroke="#3aaa52" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="280" y1="148" x2="275" y2="132" stroke="#3aaa52" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="292" y1="148" x2="297" y2="130" stroke="#2F9E44" strokeWidth="2.5" strokeLinecap="round"/>
      <!-- Shovel -->
      <rect x="38" y="20" width="8" height="100" rx="4" fill="#8B5E3C"/>
      <ellipse cx="42" cy="130" rx="14" ry="20" fill="#5C7CFA"/>
      <rect x="30" y="118" width="24" height="16" rx="4" fill="#4a90d9"/>
      <!-- Rake -->
      <rect x="100" y="18" width="7" height="105" rx="3.5" fill="#8B5E3C"/>
      <rect x="78" y="118" width="52" height="8" rx="4" fill="#7048E8"/>
      <line x1="82" y1="126" x2="80" y2="142" stroke="#7048E8" strokeWidth="3" strokeLinecap="round"/>
      <line x1="94" y1="126" x2="92" y2="142" stroke="#7048E8" strokeWidth="3" strokeLinecap="round"/>
      <line x1="106" y1="126" x2="104" y2="142" stroke="#7048E8" strokeWidth="3" strokeLinecap="round"/>
      <line x1="118" y1="126" x2="116" y2="142" stroke="#7048E8" strokeWidth="3" strokeLinecap="round"/>
      <!-- Hedge trimmer -->
      <rect x="165" y="25" width="12" height="90" rx="5" fill="#8B5E3C"/>
      <rect x="148" y="108" width="50" height="14" rx="5" fill="#C92A2A"/>
      <!-- Blade teeth -->
      <line x1="152" y1="122" x2="150" y2="135" stroke="#FF8787" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="162" y1="122" x2="160" y2="135" stroke="#FF8787" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="172" y1="122" x2="170" y2="135" stroke="#FF8787" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="182" y1="122" x2="180" y2="135" stroke="#FF8787" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="192" y1="122" x2="190" y2="135" stroke="#FF8787" strokeWidth="2.5" strokeLinecap="round"/>
      <!-- Watering can -->
      <ellipse cx="258" cy="95" rx="30" ry="22" fill="#1C7ED6"/>
      <rect x="228" y="80" width="60" height="38" rx="12" fill="#2a8de8"/>
      <rect x="256" y="68" width="8" height="18" rx="4" fill="#4a90d9"/>
      <line x1="286" y1="88" x2="310" y2="110" stroke="#4a90d9" strokeWidth="5" strokeLinecap="round"/>
      <!-- Water drops -->
      <circle cx="295" cy="120" r="3" fill="#74C0FC" opacity="0.8"/>
      <circle cx="305" cy="125" r="2" fill="#74C0FC" opacity="0.7"/>
      <circle cx="312" cy="118" r="2" fill="#74C0FC" opacity="0.6"/>
      <!-- Labels -->
      <text x="30" y="15" fill="#74C0FC" fontSize="9" fontWeight="bold">Schaufel</text>
      <text x="90" y="13" fill="#ce93d8" fontSize="9" fontWeight="bold">Rechen</text>
      <text x="150" y="18" fill="#FF8787" fontSize="9" fontWeight="bold">Heckenschere</text>
      <text x="240" y="70" fill="#74C0FC" fontSize="9" fontWeight="bold">Giesskanne</text>
    </svg>`,
  garden_neophytes: `
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" rx="14" fill="#0a1a0d"/>
      <!-- Title area -->
      <rect x="8" y="8" width="304" height="30" rx="8" fill="#1a0808" opacity="0.8"/>
      <text x="16" y="28" fill="#FF8787" fontSize="12" fontWeight="bold">⚠ Invasive Neophyten – Freisetzungsverordnung CH 2024</text>
      <!-- 3 plant cards -->
      <!-- Goldenrute (Solidago) - forbidden -->
      <rect x="10" y="46" width="88" height="120" rx="10" fill="#1a0d0d"/>
      <rect x="10" y="46" width="88" height="22" rx="10" fill="#C92A2A" opacity="0.7"/>
      <rect x="10" y="57" width="88" height="11" fill="#C92A2A" opacity="0.7"/>
      <text x="18" y="62" fill="white" fontSize="8" fontWeight="bold">VERBOTEN ⛔</text>
      <text x="15" y="80" fill="#FFD43B" fontSize="22">🌻</text>
      <text x="14" y="98" fill="#fff" fontSize="9" fontWeight="bold">Goldrute</text>
      <text x="14" y="110" fill="#FF8787" fontSize="8">Solidago</text>
      <text x="14" y="124" fill="#aaa" fontSize="7">Anhang 2.1</text>
      <text x="14" y="136" fill="#aaa" fontSize="7">Umgangsverbot</text>
      <text x="14" y="150" fill="#aaa" fontSize="7">seit 1.9.2024</text>
      <!-- Japanischer Knöterich - forbidden -->
      <rect x="107" y="46" width="88" height="120" rx="10" fill="#1a0d0d"/>
      <rect x="107" y="46" width="88" height="22" rx="10" fill="#C92A2A" opacity="0.7"/>
      <rect x="107" y="57" width="88" height="11" fill="#C92A2A" opacity="0.7"/>
      <text x="115" y="62" fill="white" fontSize="8" fontWeight="bold">VERBOTEN ⛔</text>
      <text x="112" y="80" fill="#69DB7C" fontSize="22">🌿</text>
      <text x="111" y="98" fill="#fff" fontSize="9" fontWeight="bold">Jap. Knöterich</text>
      <text x="111" y="110" fill="#FF8787" fontSize="8">Fallopia</text>
      <text x="111" y="124" fill="#aaa" fontSize="7">Anhang 2.1</text>
      <text x="111" y="136" fill="#aaa" fontSize="7">Entsorgung Pflicht</text>
      <text x="111" y="150" fill="#aaa" fontSize="7">Sondermüll</text>
      <!-- Sommerflieder - restricted -->
      <rect x="204" y="46" width="108" height="120" rx="10" fill="#1a150a"/>
      <rect x="204" y="46" width="108" height="22" rx="10" fill="#F08C00" opacity="0.7"/>
      <rect x="204" y="57" width="108" height="11" fill="#F08C00" opacity="0.7"/>
      <text x="212" y="62" fill="white" fontSize="8" fontWeight="bold">EINGESCHRÄNKT ⚠</text>
      <text x="209" y="80" fill="#ce93d8" fontSize="22">🌺</text>
      <text x="208" y="98" fill="#fff" fontSize="9" fontWeight="bold">Sommerflieder</text>
      <text x="208" y="110" fill="#FFD43B" fontSize="8">Buddleja davidii</text>
      <text x="208" y="124" fill="#aaa" fontSize="7">Anhang 2.2</text>
      <text x="208" y="136" fill="#aaa" fontSize="7">Inverkehrbringen</text>
      <text x="208" y="150" fill="#aaa" fontSize="7">verboten</text>
    </svg>`,
  management_customer: `
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" rx="14" fill="#0d0d1a"/>
      <!-- Customer (left) -->
      <circle cx="70" cy="65" r="30" fill="#1C7ED6" opacity="0.3"/>
      <circle cx="70" cy="52" r="16" fill="#2a8de8"/>
      <rect x="45" y="72" width="50" height="35" rx="15" fill="#1C7ED6"/>
      <text x="57" y="95" fill="white" fontSize="10" fontWeight="bold">Kunde</text>
      <!-- Employee (right) -->
      <circle cx="250" cy="65" r="30" fill="#2F9E44" opacity="0.3"/>
      <circle cx="250" cy="52" r="16" fill="#3aaa52"/>
      <rect x="225" y="72" width="50" height="35" rx="15" fill="#2F9E44"/>
      <text x="230" y="95" fill="white" fontSize="9" fontWeight="bold">Mitarbeiter</text>
      <!-- Chat bubbles -->
      <rect x="90" y="38" width="90" height="30" rx="10" fill="#1C7ED6" opacity="0.8"/>
      <polygon points="90,55 80,65 95,55" fill="#1C7ED6" opacity="0.8"/>
      <text x="98" y="58" fill="white" fontSize="9">Gut gemacht!</text>
      <rect x="138" y="80" width="90" height="30" rx="10" fill="#2F9E44" opacity="0.8"/>
      <polygon points="228,95 240,105 228,95" fill="#2F9E44" opacity="0.8"/>
      <text x="144" y="100" fill="white" fontSize="9">Danke! Bis nächste</text>
      <text x="144" y="111" fill="white" fontSize="9">Woche!</text>
      <!-- Rating stars -->
      <text x="100" y="140" fill="#FFD43B" fontSize="20">★★★★★</text>
      <text x="102" y="158" fill="#aaa" fontSize="9">Kundenzufriedenheit 5/5</text>
      <!-- Handshake icon -->
      <text x="268" y="140" fill="#FFD43B" fontSize="28">🤝</text>
    </svg>`,
  management_invoice: `
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" rx="14" fill="#0d0d1a"/>
      <!-- Invoice paper -->
      <rect x="40" y="15" width="160" height="150" rx="10" fill="#1a1a2e"/>
      <rect x="40" y="15" width="160" height="150" rx="10" fill="white" opacity="0.06"/>
      <!-- Swiss flag on invoice -->
      <rect x="155" y="22" width="36" height="36" rx="5" fill="#C92A2A" opacity="0.8"/>
      <rect x="163" y="25" width="8" height="24" rx="1" fill="white"/>
      <rect x="158" y="30" width="18" height="8" rx="1" fill="white"/>
      <!-- Invoice header lines -->
      <rect x="50" y="62" width="140" height="6" rx="3" fill="#1C7ED6" opacity="0.7"/>
      <rect x="50" y="74" width="100" height="4" rx="2" fill="#aaa" opacity="0.4"/>
      <!-- Line items -->
      <rect x="50" y="88" width="80" height="3" rx="1.5" fill="#aaa" opacity="0.3"/>
      <rect x="140" y="88" width="50" height="3" rx="1.5" fill="#69DB7C" opacity="0.6"/>
      <rect x="50" y="98" width="80" height="3" rx="1.5" fill="#aaa" opacity="0.3"/>
      <rect x="140" y="98" width="50" height="3" rx="1.5" fill="#69DB7C" opacity="0.6"/>
      <rect x="50" y="108" width="80" height="3" rx="1.5" fill="#aaa" opacity="0.3"/>
      <rect x="140" y="108" width="50" height="3" rx="1.5" fill="#69DB7C" opacity="0.6"/>
      <!-- Total line -->
      <rect x="50" y="120" width="140" height="1" rx="0.5" fill="#FFD43B" opacity="0.5"/>
      <rect x="50" y="126" width="80" height="5" rx="2.5" fill="#FFD43B" opacity="0.4"/>
      <rect x="140" y="124" width="50" height="8" rx="4" fill="#FFD43B" opacity="0.8"/>
      <text x="145" y="132" fill="#0d0d1a" fontSize="8" fontWeight="bold">CHF</text>
      <!-- MWST label -->
      <rect x="50" y="140" width="60" height="14" rx="5" fill="#C92A2A" opacity="0.5"/>
      <text x="55" y="151" fill="white" fontSize="8">MWST 8.1%</text>
      <!-- QR code placeholder -->
      <rect x="220" y="80" width="75" height="75" rx="8" fill="#1a1a2e"/>
      <rect x="220" y="80" width="75" height="75" rx="8" fill="white" opacity="0.08"/>
      <text x="225" y="112" fill="#74C0FC" fontSize="9">Swiss QR</text>
      <text x="225" y="125" fill="#74C0FC" fontSize="9">Rechnung</text>
      <rect x="228" y="132" width="16" height="16" rx="2" fill="#1C7ED6" opacity="0.5"/>
      <rect x="250" y="132" width="16" height="16" rx="2" fill="#1C7ED6" opacity="0.5"/>
      <rect x="228" y="150" width="16" height="8" rx="2" fill="#1C7ED6" opacity="0.3"/>
      <rect x="250" y="150" width="16" height="8" rx="2" fill="#1C7ED6" opacity="0.3"/>
    </svg>`,
  safety_ppe: `
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" rx="14" fill="#0d0808"/>
      <!-- PPE items arranged -->
      <!-- Hard hat -->
      <ellipse cx="55" cy="55" rx="38" ry="28" fill="#F08C00"/>
      <rect x="22" y="55" width="66" height="12" rx="6" fill="#E67700"/>
      <ellipse cx="55" cy="55" rx="28" ry="18" fill="#FFD43B" opacity="0.3"/>
      <text x="38" y="44" fill="white" fontSize="9" fontWeight="bold">Helm</text>
      <!-- Safety glasses -->
      <rect x="108" y="32" width="70" height="28" rx="14" fill="#74C0FC" opacity="0.3"/>
      <rect x="108" y="38" width="28" height="16" rx="8" fill="#1C7ED6" opacity="0.7"/>
      <rect x="150" y="38" width="28" height="16" rx="8" fill="#1C7ED6" opacity="0.7"/>
      <rect x="136" y="44" width="14" height="4" rx="2" fill="#4a90d9"/>
      <rect x="98" y="44" width="12" height="3" rx="1.5" fill="#4a90d9"/>
      <rect x="178" y="44" width="12" height="3" rx="1.5" fill="#4a90d9"/>
      <text x="122" y="76" fill="#74C0FC" fontSize="9" fontWeight="bold">Schutzbrille</text>
      <!-- Gloves -->
      <ellipse cx="258" cy="55" rx="30" ry="22" fill="#2F9E44"/>
      <rect x="232" y="42" width="52" height="28" rx="12" fill="#3aaa52"/>
      <rect x="232" y="55" width="8" height="18" rx="4" fill="#2F9E44"/>
      <rect x="244" y="53" width="8" height="20" rx="4" fill="#2F9E44"/>
      <rect x="256" y="52" width="8" height="20" rx="4" fill="#2F9E44"/>
      <rect x="268" y="55" width="8" height="18" rx="4" fill="#2F9E44"/>
      <rect x="277" y="58" width="6" height="15" rx="3" fill="#2F9E44"/>
      <text x="238" y="86" fill="#69DB7C" fontSize="9" fontWeight="bold">Handschuhe</text>
      <!-- Safety shoes -->
      <ellipse cx="55" cy="138" rx="40" ry="20" fill="#5C7CFA"/>
      <rect x="18" y="130" width="74" height="22" rx="8" fill="#4a90d9"/>
      <rect x="18" y="120" width="55" height="18" rx="8" fill="#5C7CFA"/>
      <rect x="20" y="142" width="70" height="8" rx="4" fill="#243550"/>
      <text x="27" y="160" fill="#74C0FC" fontSize="9" fontWeight="bold">Sicherheitsschuhe S3</text>
      <!-- Hearing protection -->
      <circle cx="178" cy="128" rx="18" ry="18" fill="#C92A2A" opacity="0.8"/>
      <circle cx="215" cy="128" rx="18" ry="18" fill="#C92A2A" opacity="0.8"/>
      <path d="M 193 120 Q 196 110 200 110 Q 204 110 207 120" stroke="#FF8787" strokeWidth="4" fill="none" strokeLinecap="round"/>
      <text x="165" y="162" fill="#FF8787" fontSize="9" fontWeight="bold">Gehörschutz</text>
      <!-- Mask -->
      <rect x="240" y="108" width="68" height="45" rx="16" fill="#868E96"/>
      <rect x="248" y="118" width="52" height="28" rx="12" fill="#aab0b8"/>
      <line x1="260" y1="132" x2="296" y2="132" stroke="#868E96" strokeWidth="2"/>
      <line x1="260" y1="138" x2="296" y2="138" stroke="#868E96" strokeWidth="2"/>
      <text x="248" y="162" fill="#aab0b8" fontSize="9" fontWeight="bold">Atemschutz</text>
      <!-- SUVA badge -->
      <rect x="255" y="8" width="58" height="18" rx="6" fill="#C92A2A" opacity="0.8"/>
      <text x="260" y="21" fill="white" fontSize="8" fontWeight="bold">SUVA/VUV</text>
    </svg>`,
  safety_chemicals: `
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" rx="14" fill="#0d0808"/>
      <!-- GHS Hazard symbols (EU/CH standard) -->
      <!-- Explosive -->
      <rect x="10" y="30" width="60" height="60" rx="8" fill="#F08C00" opacity="0.8"/>
      <rect x="10" y="30" width="60" height="60" rx="8" fill="none" stroke="#E67700" strokeWidth="2"/>
      <text x="18" y="72" fill="white" fontSize="28">💥</text>
      <text x="14" y="100" fill="#FFD43B" fontSize="8" fontWeight="bold">GHS01</text>
      <text x="14" y="110" fill="#aaa" fontSize="7">Explosiv</text>
      <!-- Corrosive -->
      <rect x="84" y="30" width="60" height="60" rx="8" fill="#C92A2A" opacity="0.8"/>
      <text x="92" y="72" fill="white" fontSize="28">⚗️</text>
      <text x="88" y="100" fill="#FF8787" fontSize="8" fontWeight="bold">GHS05</text>
      <text x="88" y="110" fill="#aaa" fontSize="7">Ätzend</text>
      <!-- Harmful -->
      <rect x="158" y="30" width="60" height="60" rx="8" fill="#5C7CFA" opacity="0.8"/>
      <text x="166" y="72" fill="white" fontSize="28">☠️</text>
      <text x="161" y="100" fill="#74C0FC" fontSize="8" fontWeight="bold">GHS06</text>
      <text x="162" y="110" fill="#aaa" fontSize="7">Giftig</text>
      <!-- Flammable -->
      <rect x="232" y="30" width="68" height="60" rx="8" fill="#E67700" opacity="0.8"/>
      <text x="244" y="72" fill="white" fontSize="28">🔥</text>
      <text x="236" y="100" fill="#FFD43B" fontSize="8" fontWeight="bold">GHS02</text>
      <text x="235" y="110" fill="#aaa" fontSize="7">Entzündlich</text>
      <!-- SDS/MSDS info box -->
      <rect x="10" y="118" width="295" height="52" rx="10" fill="#1a1015"/>
      <rect x="10" y="118" width="295" height="52" rx="10" fill="white" opacity="0.04"/>
      <text x="18" y="134" fill="#FFD43B" fontSize="10" fontWeight="bold">⚠ Sicherheitsdatenblatt (SDS) – Pflicht laut ChemV Schweiz</text>
      <text x="18" y="148" fill="#aaa" fontSize="8">• Vor Gebrauch SDS lesen  • Gefahren kennen  • PSA anlegen</text>
      <text x="18" y="160" fill="#aaa" fontSize="8">• Lagervorschriften beachten  • Notfallnummer: 145 (Tox Info Suisse)</text>
    </svg>`,
  safety_ergonomics: `
    <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" rx="14" fill="#0d0d1a"/>
      <!-- Human figure with annotations -->
      <!-- Head -->
      <circle cx="160" cy="40" r="22" fill="#4a90d9" opacity="0.8"/>
      <!-- Body -->
      <rect x="140" y="62" width="40" height="55" rx="10" fill="#2a8de8" opacity="0.7"/>
      <!-- Arms -->
      <rect x="108" y="68" width="35" height="10" rx="5" fill="#1C7ED6" opacity="0.8"/>
      <rect x="177" y="68" width="35" height="10" rx="5" fill="#1C7ED6" opacity="0.8"/>
      <!-- Legs -->
      <rect x="140" y="115" width="16" height="45" rx="8" fill="#2a8de8" opacity="0.7"/>
      <rect x="164" y="115" width="16" height="45" rx="8" fill="#2a8de8" opacity="0.7"/>
      <!-- Correct posture indicator (back straight) -->
      <line x1="160" y1="28" x2="160" y2="155" stroke="#69DB7C" strokeWidth="2" strokeDasharray="4 3" opacity="0.6"/>
      <!-- Annotation: back -->
      <line x1="175" y1="85" x2="220" y2="75" stroke="#FFD43B" strokeWidth="1.5"/>
      <rect x="220" y="65" width="88" height="20" rx="5" fill="#1a1a2e"/>
      <text x="225" y="79" fill="#FFD43B" fontSize="9">Rücken gerade ✓</text>
      <!-- Annotation: knees -->
      <line x1="175" y1="125" x2="218" y2="128" stroke="#FFD43B" strokeWidth="1.5"/>
      <rect x="218" y="120" width="90" height="20" rx="5" fill="#1a1a2e"/>
      <text x="222" y="134" fill="#FFD43B" fontSize="9">Knie beugen – 90° ✓</text>
      <!-- Wrong posture (left) - red X -->
      <circle cx="55" cy="40" r="18" fill="#4a90d9" opacity="0.5"/>
      <rect x="40" y="58" width="30" height="42" rx="8" fill="#2a8de8" opacity="0.4"/>
      <!-- Bent back (wrong) -->
      <path d="M 45 62 Q 55 75 55 95" stroke="#C92A2A" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <rect x="18" y="48" width="80" height="18" rx="5" fill="#1a0808"/>
      <text x="22" y="61" fill="#FF8787" fontSize="8">❌ Falsch – Rücken</text>
      <text x="22" y="72" fill="#FF8787" fontSize="8">krumm = Verletzung</text>
      <!-- SUVA badge -->
      <rect x="8" y="155" width="110" height="18" rx="5" fill="#C92A2A" opacity="0.7"/>
      <text x="14" y="168" fill="white" fontSize="8" fontWeight="bold">SUVA Ergonomie-Richtlinie</text>
    </svg>`,
};

// Course data using illustration keys
const ACADEMY_COURSES_V2 = [
  // ── CLEANING ──────────────────────────────────────────
  {
    id:"ac1", category:"cleaning", badge:"featured",
    emoji:"🧹", color:"#1C7ED6", illustrationKey:"cleaning",
    titleKey:{
      DE:"Professionelle Reinigungstechniken (Allpura-Standard)",
      ES:"Técnicas de Limpieza Profesional (Estándar Allpura)",
      EN:"Professional Cleaning Techniques (Allpura Standard)",
      IT:"Tecniche di Pulizia Professionale (Standard Allpura)",
    },
    descKey:{
      DE:"Zertifizierter Kurs nach Allpura-Richtlinien (Verband Schweizer Reinigungsunternehmen, seit 1966). Lernen Sie moderne, effiziente Reinigungsmethoden für Büros, Wohnungen und Gewerbeobjekte – konform mit dem Gesamtarbeitsvertrag (GAV) der Reinigungsbranche Schweiz.",
      ES:"Curso certificado según directrices Allpura (Asociación de Empresas de Limpieza Suizas, desde 1966). Aprenda métodos modernos y eficientes para oficinas, apartamentos y locales comerciales, conforme al Convenio Colectivo de Trabajo (GAV) del sector de limpieza suizo.",
      EN:"Certified course following Allpura guidelines (Swiss Building Cleaning Association, since 1966). Learn modern, efficient cleaning methods for offices, apartments and commercial premises – compliant with the Swiss cleaning industry's collective labour agreement (GAV).",
      IT:"Corso certificato secondo le linee guida Allpura (Associazione Svizzera delle Imprese di Pulizia, dal 1966). Impara metodi moderni ed efficienti per uffici, appartamenti e locali commerciali, conformi al Contratto Collettivo di Lavoro (CCL) del settore pulizie svizzero.",
    },
    duration:{DE:"3h 00min",ES:"3h 00min",EN:"3h 00min",IT:"3h 00min"},
    level:"beginner", progress:75,
    lessons_list:[
      {
        id:"l1",
        titleKey:{DE:"Reinigungsgrundlagen & Arbeitsvorbereitung",ES:"Fundamentos y preparación del trabajo",EN:"Cleaning Basics & Work Preparation",IT:"Fondamenti di pulizia e preparazione"},
        done:true,
        illustrationKey:"cleaning",
        contentKey:{
          DE:"Bevor jede Reinigungsarbeit beginnt, ist eine sorgfältige Vorbereitung entscheidend. Gemäss dem Allpura Bildungskonzept und dem GAV Reinigungsbranche Schweiz gilt:\n\n🔹 ARBEITSPLAN: Erstellen Sie immer einen objektspezifischen Reinigungsplan. Definieren Sie Reinigungsintervalle (täglich, wöchentlich, monatlich) gemäss Kundenauftrag.\n\n🔹 MATERIAL CHECKEN: Alle Reinigungsmittel müssen vor dem Einsatz auf Verfallsdatum und Zustand geprüft werden. Sicherheitsdatenblatt (SDS) muss vorhanden sein.\n\n🔹 PSA ANLEGEN: Gemäss SUVA/VUV Artikel 5 sind Schutzhandschuhe, Sicherheitsschuhe und bei Bedarf Atemschutz obligatorisch – kostenlos vom Arbeitgeber bereitzustellen.\n\n🔹 OBJEKTÜBERGABE: Bei erstmaligem Reinigungseinsatz ist ein schriftliches Übergabeprotokoll zu erstellen. Beschädigungen vorher fotografisch dokumentieren.\n\n🔸 SUVA-PFLICHT: Jeder Mitarbeitende muss über die Gefahren am Arbeitsplatz schriftlich instruiert werden (VUV Art. 6).",
          ES:"Antes de comenzar cualquier trabajo de limpieza, la preparación cuidadosa es fundamental. Según el concepto formativo de Allpura y el Convenio Colectivo de Trabajo (GAV) del sector de limpieza suizo:\n\n🔹 PLAN DE TRABAJO: Cree siempre un plan de limpieza específico para cada objeto. Defina los intervalos de limpieza (diario, semanal, mensual) según el encargo del cliente.\n\n🔹 REVISIÓN DEL MATERIAL: Todos los productos de limpieza deben verificarse antes de usar: fecha de caducidad y estado. La ficha de datos de seguridad (SDS) debe estar disponible.\n\n🔹 EPI: Según SUVA/VUV artículo 5, guantes de protección, calzado de seguridad y protección respiratoria cuando sea necesario son obligatorios – proporcionados gratuitamente por el empleador.\n\n🔹 ENTREGA DE OBJETO: En el primer servicio, se debe crear un protocolo escrito de entrega. Documentar fotográficamente los daños previos.\n\n🔸 OBLIGACIÓN SUVA: Todo empleado debe ser instruido por escrito sobre los peligros en el lugar de trabajo (VUV Art. 6).",
          EN:"Before any cleaning work begins, careful preparation is crucial. According to the Allpura training concept and the GAV collective labour agreement of the Swiss cleaning industry:\n\n🔹 WORK PLAN: Always create an object-specific cleaning plan. Define cleaning intervals (daily, weekly, monthly) according to the client's order.\n\n🔹 MATERIAL CHECK: All cleaning products must be checked before use: expiry date and condition. Safety Data Sheet (SDS) must be available.\n\n🔹 PPE: According to SUVA/VUV Article 5, protective gloves, safety shoes and respiratory protection where needed are mandatory – provided free of charge by the employer.\n\n🔹 OBJECT HANDOVER: At first cleaning assignment, a written handover protocol must be created. Pre-existing damage must be documented photographically.\n\n🔸 SUVA OBLIGATION: Every employee must be briefed in writing on workplace hazards (VUV Art. 6).",
          IT:"Prima di iniziare qualsiasi lavoro di pulizia, la preparazione accurata è fondamentale. Secondo il concetto formativo di Allpura e il Contratto Collettivo di Lavoro (CCL) del settore pulizie svizzero:\n\n🔹 PIANO DI LAVORO: Creare sempre un piano di pulizia specifico per ogni oggetto. Definire gli intervalli di pulizia (giornaliero, settimanale, mensile) secondo l'incarico del cliente.\n\n🔹 CONTROLLO MATERIALI: Tutti i prodotti di pulizia devono essere verificati prima dell'uso: data di scadenza e condizioni. La scheda di sicurezza (SDS) deve essere disponibile.\n\n🔹 DPI: Secondo SUVA/VUV articolo 5, guanti protettivi, scarpe di sicurezza e protezione respiratoria quando necessario sono obbligatori – forniti gratuitamente dal datore di lavoro.\n\n🔹 CONSEGNA DELL'OGGETTO: Al primo intervento di pulizia, deve essere creato un protocollo di consegna scritto. I danni preesistenti devono essere documentati fotograficamente.",
        },
      },
      {
        id:"l2",
        titleKey:{DE:"Reinigungsmittel & Sicherheit (ChemV Schweiz)",ES:"Productos de limpieza y seguridad (ChemV Suiza)",EN:"Cleaning Products & Safety (Swiss ChemV)",IT:"Prodotti di pulizia e sicurezza (ChemO Svizzera)"},
        done:true, illustrationKey:"cleaning_products",
        contentKey:{
          DE:"Die Chemikalienverordnung der Schweiz (ChemV) und die GHS-Kennzeichnung regeln den sicheren Umgang mit Reinigungsmitteln:\n\n🔹 GHS-SYMBOLE kennen: GHS01 Explosiv · GHS02 Entzündlich · GHS05 Ätzend · GHS06 Giftig · GHS07 Reizend · GHS08 Gesundheitsgefährlich\n\n🔹 SICHERHEITSDATENBLATT: Jedes Produkt muss ein SDS (16 Punkte gemäss REACH/ChemV) haben. Notfallnummer Schweiz: 145 (Tox Info Suisse)\n\n🔹 DOSIERUNG: Immer Herstellerangaben befolgen. Überdosierung = teurer, gefährlicher und umweltschädlicher!\n\n🔹 LAGERUNG: Reinigungsmittel getrennt lagern. Säuren und Laugen nie zusammen. Kühl, trocken, kindersicher.\n\n🔹 MISCHUNGSVERBOT: Chlorhaltige Mittel + saure Mittel = giftige Chlorgas-Entwicklung! VERBOTEN.\n\n🔹 ECO-LABEL: Schweizer Unternehmen bevorzugen EU Ecolabel- und natureplus-zertifizierte Produkte für umweltschonendes Reinigen.",
          ES:"La Ordenanza sobre Productos Químicos de Suiza (ChemO) y el etiquetado GHS regulan el manejo seguro de los productos de limpieza:\n\n🔹 SÍMBOLOS GHS: GHS01 Explosivo · GHS02 Inflamable · GHS05 Corrosivo · GHS06 Tóxico · GHS07 Irritante · GHS08 Peligroso para la salud\n\n🔹 FICHA DE DATOS DE SEGURIDAD: Cada producto debe tener una SDS (16 puntos según REACH/ChemO). Número de emergencia Suiza: 145 (Tox Info Suisse)\n\n🔹 DOSIFICACIÓN: Seguir siempre las instrucciones del fabricante. ¡Sobredosificación = más caro, más peligroso y más contaminante!\n\n🔹 ALMACENAMIENTO: Almacenar productos por separado. Nunca ácidos y bases juntos. Fresco, seco, fuera del alcance de niños.\n\n🔹 PROHIBICIÓN DE MEZCLA: ¡Productos con cloro + productos ácidos = gas cloro tóxico! PROHIBIDO.",
          EN:"Switzerland's Chemical Ordinance (ChemO) and GHS labelling regulate safe handling of cleaning products:\n\n🔹 KNOW GHS SYMBOLS: GHS01 Explosive · GHS02 Flammable · GHS05 Corrosive · GHS06 Toxic · GHS07 Irritant · GHS08 Health hazard\n\n🔹 SAFETY DATA SHEET: Every product must have an SDS (16 sections per REACH/ChemO). Swiss emergency number: 145 (Tox Info Suisse)\n\n🔹 DOSAGE: Always follow manufacturer instructions. Overdosing = more expensive, more dangerous and more harmful to the environment!\n\n🔹 STORAGE: Store cleaning products separately. Never acids and alkalis together. Cool, dry, childproof.\n\n🔹 MIXING BAN: Chlorine-containing products + acidic products = toxic chlorine gas! FORBIDDEN.",
          IT:"L'Ordinanza sui prodotti chimici svizzera (OPChim) e l'etichettatura GHS regolano la manipolazione sicura dei prodotti di pulizia:\n\n🔹 SIMBOLI GHS: GHS01 Esplosivo · GHS02 Infiammabile · GHS05 Corrosivo · GHS06 Tossico · GHS07 Irritante · GHS08 Pericoloso per la salute\n\n🔹 SCHEDA DATI DI SICUREZZA: Ogni prodotto deve avere una SDS (16 punti secondo REACH/OPChim). Numero di emergenza Svizzera: 145 (Tox Info Suisse)\n\n🔹 DOSAGGIO: Seguire sempre le istruzioni del produttore. Overdosaggio = più costoso, più pericoloso e più dannoso per l'ambiente!\n\n🔹 STOCCAGGIO: Conservare i prodotti separatamente. Mai acidi e basi insieme. Fresco, asciutto, a prova di bambino.\n\n🔹 DIVIETO DI MISCELAZIONE: Prodotti contenenti cloro + prodotti acidi = gas cloro tossico! VIETATO.",
        },
      },
      {id:"l3",titleKey:{DE:"Oberflächenpflege & Materialkunde",ES:"Cuidado de superficies y materiales",EN:"Surface Care & Material Knowledge",IT:"Cura delle superfici e materiali"},done:true,illustrationKey:"cleaning_surfaces",
        contentKey:{DE:"Jede Oberfläche erfordert das richtige Reinigungsmittel:\n\n🔹 MARMOR & NATURSTEIN: Nur pH-neutrale Mittel! Säuren (Essigreiniger) greifen den Stein an. Mikrofasertuch verwenden.\n\n🔹 PARKETT/HOLZ: Minimaler Wassereinsatz. Nie nass aufwischen. Spezielle Holzpflege-Emulsionen einsetzen.\n\n🔹 GLAS & SPIEGEL: Glasreiniger + fusselfreies Tuch. Kreisförmig von innen nach aussen. Direkte Sonne vermeiden (trocknet zu schnell).\n\n🔹 EDELSTAHL: In Maserrichtung reinigen! Mikrofaser + Edelstahlreiniger. Keine Scheuermittel.\n\n🔹 KUNSTSTOFF: Milde Reiniger. Keine alkoholhaltigen Mittel auf empfindlichen Oberflächen.\n\n🔹 TEPPICH: Sofort bei Flecken handeln! Tupfen – nie reiben. Geeignete Teppichreiniger gemäss Herstellerangaben.\n\n🔸 PROFI-TIPP: Immer zuerst an einer versteckten Stelle testen!",
          ES:"Cada superficie requiere el producto de limpieza adecuado:\n\n🔹 MÁRMOL Y PIEDRA NATURAL: ¡Solo productos pH neutros! Los ácidos (vinagre) dañan la piedra. Usar paño de microfibra.\n\n🔹 PARQUET/MADERA: Mínimo uso de agua. Nunca fregar mojado. Usar emulsiones especiales para madera.\n\n🔹 CRISTAL Y ESPEJOS: Limpiacristales + paño sin pelusa. Circular de dentro hacia fuera. Evitar sol directo.\n\n🔹 ACERO INOXIDABLE: ¡Limpiar en la dirección de la veta! Microfibra + limpiador específico. Sin abrasivos.\n\n🔹 PLÁSTICO: Limpiadores suaves. Sin productos con alcohol en superficies sensibles.\n\n🔸 CONSEJO PRO: ¡Siempre probar primero en un lugar oculto!",
          EN:"Every surface requires the right cleaning product:\n\n🔹 MARBLE & NATURAL STONE: Only pH-neutral products! Acids (vinegar cleaners) attack the stone. Use microfibre cloth.\n\n🔹 PARQUET/WOOD: Minimal water use. Never mop wet. Use special wood care emulsions.\n\n🔹 GLASS & MIRRORS: Glass cleaner + lint-free cloth. Circular from inside out. Avoid direct sun (dries too fast).\n\n🔹 STAINLESS STEEL: Clean in the grain direction! Microfibre + stainless steel cleaner. No abrasives.\n\n🔹 PLASTIC: Mild cleaners. No alcohol-based products on sensitive surfaces.\n\n🔸 PRO TIP: Always test in a hidden spot first!",
          IT:"Ogni superficie richiede il prodotto detergente giusto:\n\n🔹 MARMO E PIETRA NATURALE: Solo prodotti pH neutri! Gli acidi (aceto) attaccano la pietra. Usare panno in microfibra.\n\n🔹 PARQUET/LEGNO: Uso minimo d'acqua. Mai passare il mop bagnato. Usare emulsioni speciali per legno.\n\n🔹 VETRO E SPECCHI: Detergente per vetri + panno senza pelucchi. Circolare dall'interno verso l'esterno. Evitare il sole diretto.\n\n🔹 ACCIAIO INOSSIDABILE: Pulire nella direzione della venatura! Microfibra + detergente per acciaio. Niente abrasivi.\n\n🔸 CONSIGLIO PRO: Testare sempre prima in un punto nascosto!",
        },
      },
      {id:"l4",titleKey:{DE:"Badezimmer & Hygienezonen",ES:"Baño y zonas de higiene",EN:"Bathroom & Hygiene Areas",IT:"Bagno e zone igieniche"},done:true,illustrationKey:"cleaning",contentKey:{DE:"Badezimmer erfordern besondere Hygienedisziplin:\n\n🔹 DESINFEKTION: Gemäss SN EN 1276 geprüfte Desinfektionsmittel einsetzen. WC, Waschbecken und Türgriffe zuerst desinfizieren, dann reinigen.\n\n🔹 KALKENTFERNUNG: Essigreiniger oder spezielle Entkalkungsmittel für Armaturen. Einwirkzeit beachten.\n\n🔹 REIHENFOLGE: Von oben nach unten, von innen nach aussen, vom saubersten zum schmutzigsten Bereich.\n\n🔹 FARBCODIERUNG: Rot = WC / Blau = Waschbecken / Gelb = Boden / Grün = andere Bereiche. Nie Tücher verwechseln!\n\n🔹 HYGIENEBERICHT: In der Schweiz verlangen viele Objekte einen schriftlichen Reinigungsnachweis.",
        ES:"Los baños requieren una disciplina de higiene especial:\n\n🔹 DESINFECCIÓN: Usar desinfectantes certificados según EN 1276. Desinfectar primero WC, lavabo y manillas, luego limpiar.\n\n🔹 DESCALCIFICACIÓN: Limpiador de vinagre o descalcificadores especiales para griferías. Respetar el tiempo de acción.\n\n🔹 ORDEN: De arriba hacia abajo, de dentro hacia fuera, de la zona más limpia a la más sucia.\n\n🔹 CÓDIGO DE COLORES: Rojo = WC / Azul = Lavabo / Amarillo = Suelo / Verde = Otras zonas. ¡Nunca mezclar paños!\n\n🔹 INFORME DE HIGIENE: En Suiza, muchos objetos requieren una comprobación escrita de limpieza.",
        EN:"Bathrooms require special hygiene discipline:\n\n🔹 DISINFECTION: Use disinfectants tested to EN 1276. Disinfect toilet, washbasin and door handles first, then clean.\n\n🔹 DESCALING: Vinegar cleaner or special descaling agents for fittings. Follow contact time.\n\n🔹 ORDER: Top to bottom, inside to outside, cleanest to dirtiest area.\n\n🔹 COLOUR CODING: Red = toilet / Blue = washbasin / Yellow = floor / Green = other areas. Never mix cloths!\n\n🔹 HYGIENE REPORT: In Switzerland, many objects require written cleaning verification.",
        IT:"I bagni richiedono una disciplina igienica speciale:\n\n🔹 DISINFEZIONE: Usare disinfettanti testati secondo EN 1276. Prima disinfettare WC, lavabo e maniglie, poi pulire.\n\n🔹 DECALCIFICAZIONE: Detergente all'aceto o decalcificatori speciali per i raccordi. Rispettare il tempo di contatto.\n\n🔹 ORDINE: Dall'alto verso il basso, dall'interno verso l'esterno, dalla zona più pulita a quella più sporca.\n\n🔹 CODICE COLORI: Rosso = WC / Blu = lavabo / Giallo = pavimento / Verde = altre zone. Non mescolare mai i panni!",
        }},
      {id:"l5",titleKey:{DE:"Fenster & Glasflächen professionell reinigen",ES:"Limpieza profesional de ventanas y cristales",EN:"Professional Window & Glass Cleaning",IT:"Pulizia professionale di vetri e finestre"},done:true,illustrationKey:"cleaning",contentKey:{DE:"Professionelle Fensterreinigung nach Schweizer Standard:\n\n🔹 WERKZEUG: Wischblatt (Squeegee) 35–45 cm · Fensterleder · Teleskopstange bis 6 m · Professioneller Glasreiniger\n\n🔹 TECHNIK: S-Kurven-Technik von oben nach unten. Bei direkter Sonneneinstrahlung: morgens früh oder abends reinigen.\n\n🔹 RAHMEN ZUERST: Rahmen, Laibung und Fensterbank vor dem Glas reinigen. Dreck fällt nach unten.\n\n🔹 SICHERHEIT: Für Arbeiten über 2 Meter: PSAgA (Absturzschutz) gemäss SUVA-Richtlinie obligatorisch. Keine Leitern ohne Sicherung!\n\n🔹 QUALITÄTSPRÜFUNG: Gegenlicht nutzen um Schlieren zu erkennen. Horizontale Wischbewegungen von innen sichtbar.",
        ES:"Limpieza profesional de ventanas según el estándar suizo:\n\n🔹 HERRAMIENTAS: Rasqueta (Squeegee) 35-45 cm · Gamuza · Palo telescópico hasta 6 m · Limpiador de vidrio profesional\n\n🔹 TÉCNICA: Técnica en S de arriba hacia abajo. Con luz solar directa: limpiar temprano por la mañana o al atardecer.\n\n🔹 MARCOS PRIMERO: Limpiar marcos, jambas y alféizares antes del cristal. La suciedad cae hacia abajo.\n\n🔹 SEGURIDAD: Para trabajos a más de 2 metros: EPI anticaída (PSAgA) obligatorio según directrices SUVA. ¡Sin escaleras sin asegurar!\n\n🔹 CONTROL DE CALIDAD: Usar luz de contorno para detectar rayas.",
        EN:"Professional window cleaning to Swiss standards:\n\n🔹 TOOLS: Squeegee 35–45 cm · Chamois leather · Telescopic pole up to 6 m · Professional glass cleaner\n\n🔹 TECHNIQUE: S-curve technique from top to bottom. In direct sunlight: clean early morning or evening.\n\n🔹 FRAMES FIRST: Clean frames, reveals and window sills before the glass. Dirt falls downward.\n\n🔹 SAFETY: For work over 2 metres: PSAgA (fall protection) mandatory per SUVA guidelines. No ladders without safety!\n\n🔹 QUALITY CHECK: Use backlight to detect streaks.",
        IT:"Pulizia professionale delle finestre secondo lo standard svizzero:\n\n🔹 STRUMENTI: Tergipavimento (Squeegee) 35-45 cm · Pelle di camoscio · Asta telescopica fino a 6 m · Detergente professionale per vetri\n\n🔹 TECNICA: Tecnica a S dall'alto verso il basso. Con luce solare diretta: pulire presto al mattino o di sera.\n\n🔹 PRIMA LE CORNICI: Pulire cornici, stipiti e davanzali prima del vetro. Lo sporco cade verso il basso.\n\n🔹 SICUREZZA: Per lavori oltre i 2 metri: DPI anticaduta (PSAgA) obbligatorio secondo le linee guida SUVA. Niente scale senza sicurezza!",
        }},
      {id:"l6",titleKey:{DE:"Bodenreinigung & Unterhaltspflege",ES:"Limpieza de suelos y mantenimiento",EN:"Floor Cleaning & Maintenance",IT:"Pulizia e manutenzione pavimenti"},done:true,illustrationKey:"cleaning",contentKey:{DE:"",ES:"",EN:"",IT:""},},
      {id:"l7",titleKey:{DE:"Qualitätskontrolle & Dokumentation",ES:"Control de calidad y documentación",EN:"Quality Control & Documentation",IT:"Controllo qualità e documentazione"},done:false,illustrationKey:"cleaning",contentKey:{DE:"",ES:"",EN:"",IT:""},},
      {id:"l8",titleKey:{DE:"Kundenabnahme & Reinigungsnachweis",ES:"Recepción del cliente y comprobante",EN:"Client Handover & Cleaning Record",IT:"Consegna cliente e attestato di pulizia"},done:false,illustrationKey:"cleaning",contentKey:{DE:"",ES:"",EN:"",IT:""},},
    ],
    quiz:[
      {q:{DE:"Welches Symbol warnt vor ätzenden Reinigungsmitteln?",ES:"¿Qué símbolo advierte sobre productos corrosivos?",EN:"Which symbol warns about corrosive cleaning products?",IT:"Quale simbolo avverte sui prodotti corrosivi?"},opts:{DE:["GHS05 – Ätzend","GHS01 – Explosiv","GHS02 – Entzündlich","GHS07 – Reizend"],ES:["GHS05 – Corrosivo","GHS01 – Explosivo","GHS02 – Inflamable","GHS07 – Irritante"],EN:["GHS05 – Corrosive","GHS01 – Explosive","GHS02 – Flammable","GHS07 – Irritant"],IT:["GHS05 – Corrosivo","GHS01 – Esplosivo","GHS02 – Infiammabile","GHS07 – Irritante"]},ans:0},
      {q:{DE:"Was ist bei der Reinigung von Marmor zu beachten?",ES:"¿Qué hay que tener en cuenta al limpiar mármol?",EN:"What must be observed when cleaning marble?",IT:"Cosa va osservato nella pulizia del marmo?"},opts:{DE:["Nur pH-neutrale Mittel verwenden","Essigreiniger ist ideal","Scheuerpulver anwenden","Heisses Wasser reicht"],ES:["Usar solo productos pH neutros","El vinagre es ideal","Aplicar limpiador abrasivo","Basta con agua caliente"],EN:["Use only pH-neutral products","Vinegar cleaner is ideal","Apply scouring powder","Hot water is enough"],IT:["Usare solo prodotti pH neutri","Il detergente all'aceto è ideale","Applicare polvere abrasiva","Basta acqua calda"]},ans:0},
      {q:{DE:"Welche Farbe hat gemäss Farbcodierung das Tuch für WC-Reinigung?",ES:"¿Qué color tiene el paño para la limpieza del WC según el código de colores?",EN:"According to colour coding, what colour is the cloth for toilet cleaning?",IT:"Secondo il codice colori, che colore ha il panno per la pulizia del WC?"},opts:{DE:["Rot","Blau","Gelb","Grün"],ES:["Rojo","Azul","Amarillo","Verde"],EN:["Red","Blue","Yellow","Green"],IT:["Rosso","Blu","Giallo","Verde"]},ans:0},
      {q:{DE:"Welche Notfallnummer gilt bei Vergiftung durch Reinigungsmittel in der Schweiz?",ES:"¿Qué número de emergencia aplica en caso de intoxicación por productos de limpieza en Suiza?",EN:"Which emergency number applies in case of poisoning by cleaning products in Switzerland?",IT:"Quale numero di emergenza si applica in caso di avvelenamento da prodotti di pulizia in Svizzera?"},opts:{DE:["145 (Tox Info Suisse)","117 (Polizei)","144 (Sanitätsnotruf)","118 (Feuerwehr)"],ES:["145 (Tox Info Suisse)","117 (Policía)","144 (Emergencias)","118 (Bomberos)"],EN:["145 (Tox Info Suisse)","117 (Police)","144 (Emergency medical)","118 (Fire brigade)"],IT:["145 (Tox Info Suisse)","117 (Polizia)","144 (Emergenza sanitaria)","118 (Vigili del fuoco)"]},ans:0},
    ],
  },

  // ── GARDENING ─────────────────────────────────────────
  {
    id:"ac2", category:"gardening", badge:"popular",
    emoji:"🌿", color:"#2F9E44", illustrationKey:"garden_seasons",
    titleKey:{
      DE:"Professionelle Gartenpflege (JardinSuisse-Standard)",
      ES:"Jardinería Profesional (Estándar JardinSuisse)",
      EN:"Professional Gardening (JardinSuisse Standard)",
      IT:"Giardinaggio Professionale (Standard JardinSuisse)",
    },
    descKey:{
      DE:"Umfassender Kurs nach den Standards von JardinSuisse (Unternehmerverband Gärtner Schweiz) und der revidierten Freisetzungsverordnung (1. September 2024). Inklusive Saisonpflege, Werkzeughandhabung, invasive Neophyten und Pflanzenschutzmittel-Fachbewilligung.",
      ES:"Curso integral según los estándares de JardinSuisse (Asociación de Jardineros Suizos) y la revisada Ordenanza de Liberación (1 de septiembre 2024). Incluye mantenimiento estacional, manejo de herramientas, neófitos invasivos y autorización profesional de fitosanitarios.",
      EN:"Comprehensive course following JardinSuisse (Swiss Gardeners' Association) standards and the revised Release Ordinance (1 September 2024). Includes seasonal maintenance, tool handling, invasive neophytes and plant protection product professional permit.",
      IT:"Corso completo secondo gli standard di JardinSuisse (Associazione Imprenditori Giardinieri Svizzera) e l'Ordinanza sulla liberazione rivista (1° settembre 2024). Include manutenzione stagionale, uso degli attrezzi, neofite invasive e autorizzazione professionale per fitofarmaci.",
    },
    duration:{DE:"4h 00min",ES:"4h 00min",EN:"4h 00min",IT:"4h 00min"},
    level:"intermediate", progress:30,
    lessons_list:[
      {id:"l1",titleKey:{DE:"Saisonale Gartenpflege (4 Jahreszeiten)",ES:"Mantenimiento estacional (4 estaciones)",EN:"Seasonal Garden Maintenance (4 seasons)",IT:"Manutenzione stagionale (4 stagioni)"},done:true,illustrationKey:"garden_seasons",
        contentKey:{
          DE:"Die Gartenpflege in der Schweiz folgt einem klaren Saisonkalender:\n\n🌸 FRÜHLING (März–Mai): Heckenschnitt (ausserhalb Brutzeit – nach Vogelschutzgesetz!), Rasen vertikutieren und düngen, Frühjahrsblumen pflanzen, Bewässerung einschalten und prüfen.\n\n☀️ SOMMER (Juni–August): Regelmässiges Mähen (jede 7–10 Tage). Bewässerung früh morgens (6–8 Uhr) um Verdunstung zu minimieren. Schädlingskontrolle. Heckenpflege abschliessen vor 1. August.\n\n🍂 HERBST (Sep–Nov): Laubreinigung wöchentlich. Stauden zurückschneiden. Winterdünger ausbringen. Bewässerung abstellen und entleeren (Frostschutz). Winterschutz für empfindliche Pflanzen.\n\n❄️ WINTER (Dez–Feb): Gehölzschnitt (bei frostfreien Tagen). Wege streuen – Salzalternativen verwenden (Umweltschutz!). Planung Frühjahr.\n\n🔸 SCHWEIZER VOGELSCHUTZ: Heckenschnitt verboten vom 1. April bis 15. Juli (Brutzeit)!",
          ES:"El mantenimiento del jardín en Suiza sigue un calendario estacional claro:\n\n🌸 PRIMAVERA (Marzo-Mayo): Poda de setos (fuera del período de cría - ¡según Ley de Protección de Aves!), escarificado y abonado del césped, plantación de flores de primavera, puesta en marcha y revisión del riego.\n\n☀️ VERANO (Junio-Agosto): Corte regular (cada 7-10 días). Riego temprano por la mañana (6-8 h) para minimizar evaporación. Control de plagas. Terminar poda de setos antes del 1 de agosto.\n\n🍂 OTOÑO (Sep-Nov): Limpieza semanal de hojas. Corte de vivaces. Abono de invierno. Desconectar y vaciar el riego (protección contra heladas). Protección invernal para plantas sensibles.\n\n❄️ INVIERNO (Dic-Feb): Poda de leñosas (días sin helada). Tratar caminos - usar alternativas a la sal.\n\n🔸 PROTECCIÓN DE AVES SUIZA: ¡Poda de setos prohibida del 1 de abril al 15 de julio (período de cría)!",
          EN:"Garden maintenance in Switzerland follows a clear seasonal calendar:\n\n🌸 SPRING (Mar–May): Hedge trimming (outside breeding season – per Bird Protection Act!), lawn scarifying and fertilising, spring flowers planting, turning on and checking irrigation.\n\n☀️ SUMMER (Jun–Aug): Regular mowing (every 7–10 days). Water early morning (6–8 am) to minimise evaporation. Pest control. Complete hedge maintenance before 1 August.\n\n🍂 AUTUMN (Sep–Nov): Weekly leaf collection. Cut back perennials. Apply winter fertiliser. Turn off and drain irrigation (frost protection). Winter protection for sensitive plants.\n\n❄️ WINTER (Dec–Feb): Woody plant pruning (frost-free days). Treat paths – use salt alternatives (environmental protection!).\n\n🔸 SWISS BIRD PROTECTION: Hedge trimming forbidden from 1 April to 15 July (breeding season)!",
          IT:"La manutenzione del giardino in Svizzera segue un chiaro calendario stagionale:\n\n🌸 PRIMAVERA (Mar-Mag): Potatura delle siepi (fuori dal periodo di nidificazione - secondo la Legge sulla protezione degli uccelli!), scarificatura e concimazione del prato, piantagione di fiori primaverili, avvio e controllo dell'irrigazione.\n\n☀️ ESTATE (Giu-Ago): Taglio regolare (ogni 7-10 giorni). Irrigazione la mattina presto (6-8 h) per minimizzare l'evaporazione. Controllo dei parassiti. Completare la manutenzione delle siepi prima del 1° agosto.\n\n🍂 AUTUNNO (Set-Nov): Raccolta settimanale delle foglie. Taglio delle perenni. Concime invernale. Spegnere e svuotare l'irrigazione (protezione dal gelo).\n\n❄️ INVERNO (Dic-Feb): Potatura delle piante legnose (giorni senza gelo). Trattare i percorsi - usare alternative al sale.\n\n🔸 PROTEZIONE UCCELLI SVIZZERA: Potatura siepi vietata dal 1° aprile al 15 luglio (periodo di nidificazione)!",
        }},
      {id:"l2",titleKey:{DE:"Werkzeuge, Maschinen & Pflege",ES:"Herramientas, máquinas y mantenimiento",EN:"Tools, Machines & Maintenance",IT:"Attrezzi, macchine e manutenzione"},done:true,illustrationKey:"garden_tools",
        contentKey:{
          DE:"Professioneller Umgang mit Gartengeräten:\n\n🔹 HECKENSCHERE: Klinge regelmässig schärfen und ölen. Sicherheitsabstand zu Personen: mind. 3 Meter. Schutzbrille und Gehörschutz Pflicht!\n\n🔹 RASENMÄHER: Vor Wartung IMMER Zündkabel abziehen. Messer-Bodenabstand prüfen. Messerwechsel mit Lederhandschuhen. Lärmschutz-Vorschriften beachten (max. 85 dB/8h).\n\n🔹 MOTORSÄGE: Nur mit Sicherheitskleidung (Schnittschutzstiefel, Schnittschutzhose, Helm mit Visier und Gehörschutz). In der Schweiz: Kurs obligatorisch!\n\n🔹 ELEKTRISCHE GERÄTE: Neue Schweizer Norm SN 441011 (ab Jan. 2025): nur Stecker/Steckdosen IP55 standard. Verlängerungskabel min. IP44.\n\n🔹 WARTUNG: Werkzeuge nach jedem Gebrauch reinigen, trocknen, einölen. Schäden sofort melden.\n\n🔸 LÄRM: Schweizer Lärmschutzverordnung: Gartenmaschinen nur Mo–Sa 07:00–20:00 Uhr.",
          ES:"Manejo profesional de herramientas de jardín:\n\n🔹 TIJERAS DE SETO: Afilar y lubricar la hoja regularmente. Distancia de seguridad de personas: mín. 3 metros. ¡Gafas y protección auditiva obligatorias!\n\n🔹 CORTACÉSPED: SIEMPRE desconectar el cable de encendido antes del mantenimiento. Revisar distancia al suelo de la cuchilla. Cambio de cuchilla con guantes de cuero.\n\n🔹 MOTOSIERRA: Solo con ropa de seguridad (botas anticorte, pantalón anticorte, casco con visera y protección auditiva). En Suiza: ¡curso obligatorio!\n\n🔹 APARATOS ELÉCTRICOS: Nueva norma suiza SN 441011 (desde ene. 2025): solo enchufes/tomas IP55. Cables de extensión mín. IP44.\n\n🔹 MANTENIMIENTO: Limpiar, secar y lubricar herramientas después de cada uso.\n\n🔸 RUIDO: Maquinaria de jardín solo Lun–Sáb 07:00–20:00 horas.",
          EN:"Professional handling of garden tools:\n\n🔹 HEDGE TRIMMER: Sharpen and oil blade regularly. Safety distance from persons: min. 3 metres. Safety glasses and hearing protection mandatory!\n\n🔹 LAWNMOWER: ALWAYS disconnect ignition cable before maintenance. Check blade ground clearance. Blade change with leather gloves.\n\n🔹 CHAINSAW: Only with safety clothing (anti-cut boots, anti-cut trousers, helmet with visor and hearing protection). In Switzerland: course mandatory!\n\n🔹 ELECTRIC TOOLS: New Swiss norm SN 441011 (from Jan. 2025): only IP55 plugs/sockets. Extension cables min. IP44.\n\n🔹 MAINTENANCE: Clean, dry, oil tools after every use.\n\n🔸 NOISE: Garden machinery only Mon–Sat 07:00–20:00.",
          IT:"Gestione professionale degli attrezzi da giardino:\n\n🔹 TOSASIEPE: Affilare e oliare la lama regolarmente. Distanza di sicurezza dalle persone: min. 3 metri. Occhiali di protezione e protezione uditiva obbligatori!\n\n🔹 TOSAERBA: SEMPRE scollegare il cavo di accensione prima della manutenzione. Controllare la distanza lama-suolo. Cambio lama con guanti in pelle.\n\n🔹 MOTOSEGA: Solo con abbigliamento di sicurezza (stivali antitaglio, pantaloni antitaglio, casco con visiera e protezione uditiva). In Svizzera: corso obbligatorio!\n\n🔹 ATTREZZI ELETTRICI: Nuova norma svizzera SN 441011 (da gen. 2025): solo spine/prese IP55. Cavi prolunga min. IP44.",
        }},
      {id:"l3",titleKey:{DE:"Invasive Neophyten – Freisetzungsverordnung 2024",ES:"Neófitos invasivos – Ordenanza de liberación 2024",EN:"Invasive Neophytes – Release Ordinance 2024",IT:"Neofite invasive – Ordinanza sulla liberazione 2024"},done:true,illustrationKey:"garden_neophytes",
        contentKey:{
          DE:"Die revidierte Freisetzungsverordnung (1. September 2024) ist für Gartenpflege-Betriebe bindend:\n\n⛔ ANHANG 2.1 – UMGANGSVERBOT (Pflanzen die nicht mehr gepflegt werden dürfen):\n• Japanischer Staudenknöterich (Fallopia japonica) – Entsorgung als Sondermüll!\n• Goldrute (Solidago canadensis/gigantea)\n• Drüsiges Springkraut (Impatiens glandulifera)\n• Riesenbärenklau (Heracleum mantegazzianum) – Giftig!\n\n⚠️ ANHANG 2.2 – INVERKEHRBRINGUNGSVERBOT:\n• Sommerflieder (Buddleja davidii)\n• Schmetterlingsflieder – Pflege bestehender Pflanzen noch erlaubt\n\n🔹 ENTSORGUNG JAPANISCHER KNÖTERICH: Pflanzenmaterial in reissdichten Säcken zum KIBAG/Sondermüll. NIE kompostieren!\n\n🔹 MELDEPFLICHT: Neufunde invasiver Pflanzen dem Kanton melden (info flora.ch).\n\n🔸 HAFTUNG: Gartenunternehmen haften für die Ausbreitung invasiver Pflanzen von ihren Baustellen!",
          ES:"La revisada Ordenanza de Liberación (1 de septiembre 2024) es vinculante para las empresas de jardinería:\n\n⛔ ANEXO 2.1 – PROHIBICIÓN DE MANIPULACIÓN (plantas que ya no se pueden cuidar):\n• Hierba nudosa japonesa (Fallopia japonica) – ¡Eliminar como residuo especial!\n• Vara de oro (Solidago canadensis/gigantea)\n• Impatiente glandulífera (Impatiens glandulifera)\n• Heracleum mantegazzianum – ¡Tóxica!\n\n⚠️ ANEXO 2.2 – PROHIBICIÓN DE COMERCIALIZACIÓN:\n• Buddleja davidii – Cuidado de plantas existentes aún permitido\n\n🔹 ELIMINACIÓN HIERBA NUDOSA: Material vegetal en bolsas resistentes al desgarro al servicio de residuos especiales. ¡NUNCA compostar!\n\n🔹 OBLIGACIÓN DE NOTIFICACIÓN: Informar al cantón sobre nuevos hallazgos (info flora.ch).",
          EN:"The revised Release Ordinance (1 September 2024) is binding for gardening companies:\n\n⛔ APPENDIX 2.1 – HANDLING BAN (plants that may no longer be maintained):\n• Japanese knotweed (Fallopia japonica) – Dispose as special waste!\n• Goldenrod (Solidago canadensis/gigantea)\n• Indian balsam (Impatiens glandulifera)\n• Giant hogweed (Heracleum mantegazzianum) – Toxic!\n\n⚠️ APPENDIX 2.2 – MARKETING BAN:\n• Butterfly bush (Buddleja davidii) – Maintenance of existing plants still permitted\n\n🔹 JAPANESE KNOTWEED DISPOSAL: Plant material in tear-proof bags to special waste. NEVER compost!\n\n🔹 REPORTING OBLIGATION: Report new finds of invasive plants to the canton (info flora.ch).\n\n🔸 LIABILITY: Garden companies are liable for the spread of invasive plants from their worksites!",
          IT:"L'Ordinanza sulla liberazione revisionata (1° settembre 2024) è vincolante per le imprese di giardinaggio:\n\n⛔ ALLEGATO 2.1 – DIVIETO DI MANIPOLAZIONE (piante che non possono più essere curate):\n• Poligono del Giappone (Fallopia japonica) – Smaltire come rifiuto speciale!\n• Verga d'oro (Solidago canadensis/gigantea)\n• Balsamina ghiandolosa (Impatiens glandulifera)\n• Panace di Mantegazzi (Heracleum mantegazzianum) – Tossica!\n\n⚠️ ALLEGATO 2.2 – DIVIETO DI COMMERCIALIZZAZIONE:\n• Buddleia (Buddleja davidii) – Manutenzione piante esistenti ancora permessa\n\n🔹 SMALTIMENTO POLIGONO DEL GIAPPONE: Materiale vegetale in sacchi resistenti allo strappo ai rifiuti speciali. MAI compostare!\n\n🔸 RESPONSABILITÀ: Le imprese di giardinaggio sono responsabili per la diffusione di piante invasive dai loro cantieri!",
        }},
      {id:"l4",titleKey:{DE:"Pflanzenschutz & Fachbewilligung",ES:"Fitosanitarios y autorización profesional",EN:"Plant Protection & Professional Permit",IT:"Fitofarmaci e autorizzazione professionale"},done:false,illustrationKey:"garden_seasons",contentKey:{DE:"",ES:"",EN:"",IT:""}},
      {id:"l5",titleKey:{DE:"Rasenpflege & Düngung",ES:"Cuidado del césped y abonado",EN:"Lawn Care & Fertilisation",IT:"Cura del prato e concimazione"},done:false,illustrationKey:"garden_tools",contentKey:{DE:"",ES:"",EN:"",IT:""}},
      {id:"l6",titleKey:{DE:"Bewässerungssysteme & Wasserrecht",ES:"Sistemas de riego y derecho al agua",EN:"Irrigation Systems & Water Rights",IT:"Sistemi irrigazione e diritto all'acqua"},done:false,illustrationKey:"garden_seasons",contentKey:{DE:"",ES:"",EN:"",IT:""}},
      {id:"l7",titleKey:{DE:"Abfallentsorgung im Gartenbau",ES:"Gestión de residuos en jardinería",EN:"Waste Disposal in Gardening",IT:"Smaltimento rifiuti nel giardinaggio"},done:false,illustrationKey:"garden_neophytes",contentKey:{DE:"",ES:"",EN:"",IT:""}},
      {id:"l8",titleKey:{DE:"Werkvertrag Gartenpflege (JardinSuisse AGB)",ES:"Contrato de obras jardinería (AGB JardinSuisse)",EN:"Gardening Service Contract (JardinSuisse T&C)",IT:"Contratto di opera giardinaggio (CGV JardinSuisse)"},done:false,illustrationKey:"garden_tools",contentKey:{DE:"",ES:"",EN:"",IT:""}},
    ],
    quiz:[
      {q:{DE:"Wann ist Heckenschnitt in der Schweiz verboten?",ES:"¿Cuándo está prohibida la poda de setos en Suiza?",EN:"When is hedge trimming forbidden in Switzerland?",IT:"Quando è vietata la potatura delle siepi in Svizzera?"},opts:{DE:["1. April bis 15. Juli (Brutzeit)","1. Juni bis 31. August","1. Oktober bis 31. März","Den ganzen Sommer"],ES:["1 abril al 15 julio (cría)","1 junio al 31 agosto","1 octubre al 31 marzo","Todo el verano"],EN:["1 April to 15 July (breeding)","1 June to 31 August","1 October to 31 March","All summer"],IT:["1 aprile al 15 luglio (nidificazione)","1 giugno al 31 agosto","1 ottobre al 31 marzo","Tutta l'estate"]},ans:0},
      {q:{DE:"Was ist beim Japanischen Knöterich laut Freisetzungsverordnung 2024 zu tun?",ES:"¿Qué hay que hacer con la hierba nudosa japonesa según la Ordenanza 2024?",EN:"What must be done with Japanese knotweed per the 2024 Release Ordinance?",IT:"Cosa va fatto con il poligono del Giappone secondo l'Ordinanza 2024?"},opts:{DE:["Als Sondermüll entsorgen – nie kompostieren","Normal im Grünabfall entsorgen","Kompostieren erlaubt","Im Wald deponieren"],ES:["Eliminar como residuo especial – nunca compostar","Eliminar en residuos verdes normales","Compostar permitido","Depositar en el bosque"],EN:["Dispose as special waste – never compost","Dispose in normal green waste","Composting allowed","Deposit in forest"],IT:["Smaltire come rifiuto speciale – non compostare mai","Smaltire nei rifiuti verdi normali","Compostaggio consentito","Depositare nel bosco"]},ans:0},
      {q:{DE:"Welche Schutznorm gilt für elektrische Verlängerungskabel im Garten ab Januar 2025?",ES:"¿Qué norma de protección aplica para cables de extensión eléctricos en jardines desde enero 2025?",EN:"Which protection standard applies for electrical extension cables in gardens from January 2025?",IT:"Quale standard di protezione si applica per i cavi prolunga elettrici in giardino da gennaio 2025?"},opts:{DE:["Mindestens IP44","IP20 reicht","Kein Standard nötig","IP67 Pflicht"],ES:["Mínimo IP44","IP20 es suficiente","Sin estándar necesario","IP67 obligatorio"],EN:["Minimum IP44","IP20 sufficient","No standard needed","IP67 mandatory"],IT:["Minimo IP44","IP20 sufficiente","Nessuno standard necessario","IP67 obbligatorio"]},ans:0},
    ],
  },

  // ── MANAGEMENT ────────────────────────────────────────
  {
    id:"ac3", category:"management", badge:"new", adminOnly:true,
    emoji:"📋", color:"#7048E8", illustrationKey:"management_customer",
    titleKey:{
      DE:"Betriebsmanagement & Kundenservice Schweiz",
      ES:"Gestión empresarial y atención al cliente en Suiza",
      EN:"Business Management & Customer Service Switzerland",
      IT:"Gestione aziendale e servizio clienti Svizzera",
    },
    descKey:{
      DE:"Professionelles Management eines Reinigung- und Gartenpflegebetriebs in der Schweiz: Angebotserstellung, Swiss QR-Rechnung, MWST 8.1%, GAV Einhaltung, Kundenbeziehungen, Arbeitsplanung und digitale Tools für KMU.",
      ES:"Gestión profesional de una empresa de limpieza y jardinería en Suiza: elaboración de ofertas, factura QR suiza, IVA 8.1%, cumplimiento del CCT, relaciones con clientes, planificación del trabajo y herramientas digitales para PYMES.",
      EN:"Professional management of a cleaning and gardening company in Switzerland: quote preparation, Swiss QR invoice, VAT 8.1%, GAV compliance, client relations, work planning and digital tools for SMEs.",
      IT:"Gestione professionale di un'impresa di pulizie e giardinaggio in Svizzera: preparazione preventivi, fattura QR svizzera, IVA 8.1%, conformità CCL, relazioni con i clienti, pianificazione del lavoro e strumenti digitali per PMI.",
    },
    duration:{DE:"2h 30min",ES:"2h 30min",EN:"2h 30min",IT:"2h 30min"},
    level:"intermediate", progress:0,
    lessons_list:[
      {id:"l1",titleKey:{DE:"Angebotserstellung & Preiskalkulation",ES:"Elaboración de ofertas y cálculo de precios",EN:"Quote Preparation & Price Calculation",IT:"Preparazione preventivi e calcolo prezzi"},done:false,illustrationKey:"management_invoice",
        contentKey:{
          DE:"Professionelle Angebotserstellung für Schweizer KMU:\n\n🔹 PREISKALKULATION: Stundenansatz Reinigung Zürich: CHF 20–28/h (GAV Mindestlohn 2024). Aufschlag für Material (5–15%), Fahrt, Overhead (30–40%).\n\n🔹 ANGEBOT MUSS ENTHALTEN: Firmenstempel mit UID-Nummer · Klare Leistungsbeschreibung · Preis inkl./exkl. MWST · Gültigkeitsdauer · Zahlungsbedingungen\n\n🔹 WERKVERTRAG: JardinSuisse stellt Musterverträge für Gartenpflege bereit. Für Reinigung: GAV-konforme Verträge verwenden.\n\n🔹 MONATSVERTRAG vs. EINZELAUFTRAG: Monatsverträge bieten Planungssicherheit. Automatische Indexierung nach LIK (Landesindex der Konsumentenpreise) empfohlen.\n\n🔹 ZAHLUNGSZIEL: Branchenüblich 30 Tage netto. Skonto 2% bei 10 Tagen möglich.\n\n🔸 MWST: Alle Rechnungen ab CHF 5'000/Jahr MWST-pflichtig. Satz 8.1% (Normalsatz). Quartalsmässige Abrechnung bei ESTV.",
          ES:"Elaboración profesional de ofertas para PYMES suizas:\n\n🔹 CÁLCULO DE PRECIOS: Tarifa horaria limpieza Zúrich: CHF 20–28/h (salario mínimo GAV 2024). Recargo por material (5–15%), desplazamiento, overhead (30–40%).\n\n🔹 LA OFERTA DEBE INCLUIR: Sello de empresa con número UID · Descripción clara de servicios · Precio inc./exc. IVA · Período de validez · Condiciones de pago\n\n🔹 CONTRATO DE OBRAS: JardinSuisse proporciona contratos modelo para jardinería. Para limpieza: usar contratos conformes al GAV.\n\n🔹 CONTRATO MENSUAL vs. ENCARGO ÚNICO: Los contratos mensuales ofrecen seguridad de planificación. Se recomienda indexación automática según IPC (Índice de Precios al Consumidor).\n\n🔹 PLAZO DE PAGO: Estándar del sector 30 días neto.\n\n🔸 IVA: Todas las facturas con volumen desde CHF 100'000/año sujetas a IVA. Tasa 8.1%. Liquidación trimestral con la AFC.",
          EN:"Professional quote preparation for Swiss SMEs:\n\n🔹 PRICE CALCULATION: Hourly rate cleaning Zurich: CHF 20–28/h (GAV minimum wage 2024). Markup for materials (5–15%), travel, overhead (30–40%).\n\n🔹 QUOTE MUST INCLUDE: Company stamp with UID number · Clear service description · Price incl./excl. VAT · Validity period · Payment terms\n\n🔹 WORKS CONTRACT: JardinSuisse provides model contracts for gardening. For cleaning: use GAV-compliant contracts.\n\n🔹 MONTHLY CONTRACT vs. ONE-OFF: Monthly contracts offer planning security. Automatic indexation per CPI (Consumer Price Index) recommended.\n\n🔹 PAYMENT TERMS: Industry standard 30 days net.\n\n🔸 VAT: All invoices from CHF 100'000/year subject to VAT. Rate 8.1%. Quarterly settlement with ESTV.",
          IT:"Preparazione professionale di preventivi per PMI svizzere:\n\n🔹 CALCOLO PREZZI: Tariffa oraria pulizie Zurigo: CHF 20–28/h (salario minimo CCL 2024). Maggiorazione per materiali (5–15%), trasferte, overhead (30–40%).\n\n🔹 IL PREVENTIVO DEVE CONTENERE: Timbro aziendale con numero UID · Descrizione chiara dei servizi · Prezzo incl./escl. IVA · Periodo di validità · Condizioni di pagamento\n\n🔹 CONTRATTO D'OPERA: JardinSuisse fornisce contratti tipo per il giardinaggio. Per le pulizie: usare contratti conformi al CCL.\n\n🔹 CONTRATTO MENSILE vs. ORDINE SINGOLO: I contratti mensili offrono sicurezza di pianificazione.\n\n🔸 IVA: Tutte le fatture da CHF 100'000/anno soggette a IVA. Aliquota 8.1%. Liquidazione trimestrale con l'AFC.",
        }},
      {id:"l2",titleKey:{DE:"Swiss QR-Rechnung & MWST",ES:"Factura QR suiza e IVA",EN:"Swiss QR Invoice & VAT",IT:"Fattura QR svizzera e IVA"},done:false,illustrationKey:"management_invoice",contentKey:{DE:"",ES:"",EN:"",IT:""}},
      {id:"l3",titleKey:{DE:"GAV Reinigung – Lohn & Arbeitszeiten",ES:"GAV Limpieza – Salario y horarios",EN:"GAV Cleaning – Wages & Working Hours",IT:"CCL Pulizie – Salario e orari di lavoro"},done:false,illustrationKey:"management_customer",contentKey:{DE:"",ES:"",EN:"",IT:""}},
      {id:"l4",titleKey:{DE:"Kundenbeziehung & Reklamationsmanagement",ES:"Relación con clientes y gestión de reclamaciones",EN:"Client Relations & Complaint Management",IT:"Relazioni con i clienti e gestione dei reclami"},done:false,illustrationKey:"management_customer",contentKey:{DE:"",ES:"",EN:"",IT:""}},
      {id:"l5",titleKey:{DE:"Arbeitsplanung & Routenoptimierung",ES:"Planificación del trabajo y optimización de rutas",EN:"Work Planning & Route Optimisation",IT:"Pianificazione del lavoro e ottimizzazione percorsi"},done:false,illustrationKey:"management_invoice",contentKey:{DE:"",ES:"",EN:"",IT:""}},
      {id:"l6",titleKey:{DE:"Digitale Tools für KMU (ERP, Zeiterfassung)",ES:"Herramientas digitales para PYMES (ERP, registro horario)",EN:"Digital Tools for SMEs (ERP, Time Tracking)",IT:"Strumenti digitali per PMI (ERP, timbrature)"},done:false,illustrationKey:"management_invoice",contentKey:{DE:"",ES:"",EN:"",IT:""}},
    ],
    quiz:[
      {q:{DE:"Wie hoch ist der Schweizer MWST-Normalsatz (2024)?",ES:"¿Cuál es la tasa normal del IVA suizo (2024)?",EN:"What is the Swiss normal VAT rate (2024)?",IT:"Qual è l'aliquota IVA normale svizzera (2024)?"},opts:{DE:["8.1%","7.7%","8.0%","9.0%"],ES:["8.1%","7.7%","8.0%","9.0%"],EN:["8.1%","7.7%","8.0%","9.0%"],IT:["8.1%","7.7%","8.0%","9.0%"]},ans:0},
      {q:{DE:"Wie lange beträgt das branchenübliche Zahlungsziel für Reinigungsrechnungen?",ES:"¿Cuál es el plazo de pago estándar del sector para facturas de limpieza?",EN:"What is the industry-standard payment term for cleaning invoices?",IT:"Qual è il termine di pagamento standard del settore per le fatture di pulizia?"},opts:{DE:["30 Tage netto","7 Tage","60 Tage","Sofort"],ES:["30 días neto","7 días","60 días","Al contado"],EN:["30 days net","7 days","60 days","Immediately"],IT:["30 giorni netti","7 giorni","60 giorni","Subito"]},ans:0},
    ],
  },

  // ── SAFETY ────────────────────────────────────────────
  {
    id:"ac4", category:"safety", badge:"featured",
    emoji:"🦺", color:"#C92A2A", illustrationKey:"safety_ppe",
    titleKey:{
      DE:"Arbeitssicherheit & Unfallschutz (SUVA/VUV Schweiz)",
      ES:"Seguridad laboral y prevención de accidentes (SUVA/VUV Suiza)",
      EN:"Work Safety & Accident Prevention (SUVA/VUV Switzerland)",
      IT:"Sicurezza sul lavoro e prevenzione infortuni (SUVA/VUV Svizzera)",
    },
    descKey:{
      DE:"Obligatorischer Sicherheitskurs nach SUVA-Richtlinien und der Verordnung über die Verhütung von Unfällen und Berufskrankheiten (VUV). Deckt PSA-Pflichten, chemische Sicherheit, Ergonomie, Erste Hilfe und die Branchenlösung Reinigung Schweiz ab.",
      ES:"Curso de seguridad obligatorio según las directrices de SUVA y la Ordenanza sobre la Prevención de Accidentes y Enfermedades Profesionales (VUV). Cubre obligaciones de EPI, seguridad química, ergonomía, primeros auxilios y la Solución Sectorial de Limpieza Suiza.",
      EN:"Mandatory safety course per SUVA guidelines and the Ordinance on Accident Prevention and Occupational Diseases (VUV). Covers PPE obligations, chemical safety, ergonomics, first aid and the Swiss Cleaning Industry Safety Solution.",
      IT:"Corso di sicurezza obbligatorio secondo le linee guida SUVA e l'Ordinanza sulla prevenzione degli infortuni e delle malattie professionali (OPI). Copre obblighi DPI, sicurezza chimica, ergonomia, pronto soccorso e la Soluzione di Branca Pulizie Svizzera.",
    },
    duration:{DE:"3h 30min",ES:"3h 30min",EN:"3h 30min",IT:"3h 30min"},
    level:"beginner", progress:100,
    lessons_list:[
      {id:"l1",titleKey:{DE:"PSA-Pflichten nach VUV Art. 5 (SUVA)",ES:"Obligaciones EPI según VUV Art. 5 (SUVA)",EN:"PPE Obligations per VUV Art. 5 (SUVA)",IT:"Obblighi DPI secondo VUV Art. 5 (SUVA)"},done:true,illustrationKey:"safety_ppe",
        contentKey:{
          DE:"Die Verordnung über die Verhütung von Unfällen und Berufskrankheiten (VUV) Art. 5 regelt klar:\n\n🔹 ARBEITGEBERPFLICHT: Der Arbeitgeber muss kostenlos geeignete PSA bereitstellen. Bei Nicht-Einhaltung: Strafrahmen bis CHF 540'000 (Art. 112 UVG).\n\n🔹 ARBEITNEHMERPFLICHT: Mitarbeitende MÜSSEN die bereitgestellte PSA tragen. Weigerung = Pflichtverletzung.\n\n🔹 PSA REINIGUNGSBRANCHE MINIMUM:\n✅ Schutzhandschuhe (Nitril/Latex – je nach Chemikalien)\n✅ Sicherheitsschuhe S1P oder S2 (rutschfest, Zehenkappe)\n✅ Schutzbrille bei Spritzgefahr\n✅ Atemschutz bei konzentrierten Chemikalien\n✅ Warnweste bei Verkehrsbereichen\n\n🔹 S-T-O-P PRINZIP (SUVA): Substitution → Technik → Organisation → PSA. PSA ist immer die letzte Option!\n\n🔹 KONFORMITÄTSERKLÄRUNG: Alle PSA müssen EU/CH-Konformitätszeichen tragen (CE-Kennzeichnung).\n\n🔸 ARBEITSMEDIZIN: Bei regelmässigem Umgang mit Chemikalien: Pflicht zur arbeitsmedizinischen Vorsorge.",
          ES:"La Ordenanza sobre Prevención de Accidentes (VUV) Art. 5 regula claramente:\n\n🔹 OBLIGACIÓN DEL EMPLEADOR: El empleador debe proporcionar gratuitamente los EPI adecuados. Incumplimiento: multa de hasta CHF 540'000 (Art. 112 UVG).\n\n🔹 OBLIGACIÓN DEL EMPLEADO: Los trabajadores DEBEN usar los EPI proporcionados. Negativa = incumplimiento de obligaciones.\n\n🔹 EPI MÍNIMO SECTOR LIMPIEZA:\n✅ Guantes de protección (nitrilo/látex – según productos químicos)\n✅ Calzado de seguridad S1P o S2 (antideslizante, puntera)\n✅ Gafas de protección ante riesgo de salpicaduras\n✅ Protección respiratoria con productos químicos concentrados\n✅ Chaleco reflectante en zonas de tráfico\n\n🔹 PRINCIPIO S-T-O-P (SUVA): Sustitución → Técnica → Organización → EPI. ¡Los EPI son siempre la última opción!\n\n🔹 DECLARACIÓN DE CONFORMIDAD: Todos los EPI deben llevar marcado de conformidad UE/CH (marcado CE).\n\n🔸 MEDICINA LABORAL: Con manejo regular de productos químicos: vigilancia médica preventiva obligatoria.",
          EN:"The Ordinance on Accident Prevention (VUV) Art. 5 clearly regulates:\n\n🔹 EMPLOYER OBLIGATION: The employer must provide suitable PPE free of charge. Non-compliance: fine up to CHF 540,000 (Art. 112 UVG).\n\n🔹 EMPLOYEE OBLIGATION: Employees MUST wear the provided PPE. Refusal = breach of duty.\n\n🔹 MINIMUM PPE CLEANING INDUSTRY:\n✅ Protective gloves (nitrile/latex – depending on chemicals)\n✅ Safety shoes S1P or S2 (non-slip, toe cap)\n✅ Safety glasses when splash risk exists\n✅ Respiratory protection with concentrated chemicals\n✅ Hi-vis vest in traffic areas\n\n🔹 S-T-O-P PRINCIPLE (SUVA): Substitution → Technology → Organisation → PPE. PPE is always the last option!\n\n🔹 DECLARATION OF CONFORMITY: All PPE must carry EU/CH conformity marking (CE marking).\n\n🔸 OCCUPATIONAL MEDICINE: With regular chemical handling: occupational health surveillance mandatory.",
          IT:"L'Ordinanza sulla prevenzione degli infortuni (OPI) Art. 5 regola chiaramente:\n\n🔹 OBBLIGO DEL DATORE DI LAVORO: Il datore di lavoro deve fornire gratuitamente DPI adeguati. Inadempienza: multa fino a CHF 540'000 (Art. 112 LAINF).\n\n🔹 OBBLIGO DEL LAVORATORE: I dipendenti DEVONO indossare i DPI forniti. Rifiuto = violazione degli obblighi.\n\n🔹 DPI MINIMI SETTORE PULIZIE:\n✅ Guanti protettivi (nitrile/lattice – a seconda dei prodotti chimici)\n✅ Scarpe antinfortunistiche S1P o S2 (antiscivolo, puntale)\n✅ Occhiali protettivi in caso di rischio di schizzi\n✅ Protezione respiratoria con prodotti chimici concentrati\n✅ Gilet ad alta visibilità nelle zone di traffico\n\n🔹 PRINCIPIO S-T-O-P (SUVA): Sostituzione → Tecnica → Organizzazione → DPI. I DPI sono sempre l'ultima opzione!\n\n🔹 DICHIARAZIONE DI CONFORMITÀ: Tutti i DPI devono portare la marcatura di conformità UE/CH (marcatura CE).",
        }},
      {id:"l2",titleKey:{DE:"Chemische Sicherheit & GHS (ChemV/REACH)",ES:"Seguridad química y GHS (ChemO/REACH)",EN:"Chemical Safety & GHS (ChemO/REACH)",IT:"Sicurezza chimica e GHS (OPChim/REACH)"},done:true,illustrationKey:"safety_chemicals",
        contentKey:{
          DE:"Sicherheit beim Umgang mit Chemikalien gemäss Schweizer ChemV und EU REACH:\n\n🔹 SICHERHEITSDATENBLATT (SDS): 16-Punkte-Dokument Pflicht für alle Gefahrstoffe. Muss am Arbeitsort verfügbar sein!\n\n🔹 GHS-EINSTUFUNG (8 Gefahrenklassen):\n⛔ GHS01 Explosiv | 🔥 GHS02 Entzündlich | ⚡ GHS03 Oxidierend\n☢ GHS04 Druckgas | 🧪 GHS05 Ätzend | ☠ GHS06 Akut toxisch\n🫁 GHS07 Reizend/sensibilisierend | 🌍 GHS09 Umweltgefährlich\n\n🔹 NOTFALLNUMMER SCHWEIZ: 145 (Tox Info Suisse) – 24/7 erreichbar\n\n🔹 VERBOTENE MISCHUNGEN in der Reinigung:\n❌ Chlorreiniger + Säure = Giftgas (Cl₂)\n❌ Chlorreiniger + Ammoniak = Giftgas (NH₂Cl)\n❌ Wasserstoffperoxid + Essigsäure = Peressigsäure (ätzend)\n\n🔹 LAGERUNG: Max. Mengen pro Raum beachten. Getrennte Schränke für Säuren/Laugen. Sicherheitsschrank (EN 14727) bei grossen Mengen.\n\n🔸 MELDEPFLICHT: Berufskrankheiten durch Chemikalien müssen der SUVA gemeldet werden.",
          ES:"Seguridad en el manejo de productos químicos según ChemO suiza y EU REACH:\n\n🔹 FICHA DE DATOS DE SEGURIDAD (SDS): Documento de 16 puntos obligatorio para todos los productos peligrosos. ¡Debe estar disponible en el lugar de trabajo!\n\n🔹 CLASIFICACIÓN GHS (8 clases de peligro):\n⛔ GHS01 Explosivo | 🔥 GHS02 Inflamable | ⚡ GHS03 Oxidante\n☢ GHS04 Gas a presión | 🧪 GHS05 Corrosivo | ☠ GHS06 Tóxico agudo\n🫁 GHS07 Irritante/sensibilizante | 🌍 GHS09 Peligroso para el medio ambiente\n\n🔹 NÚMERO DE EMERGENCIA SUIZA: 145 (Tox Info Suisse) – 24/7\n\n🔹 MEZCLAS PROHIBIDAS:\n❌ Limpiador con cloro + ácido = gas tóxico (Cl₂)\n❌ Limpiador con cloro + amoniaco = gas tóxico (NH₂Cl)\n\n🔹 ALMACENAMIENTO: Respetar cantidades máximas por sala. Armarios separados para ácidos/bases.",
          EN:"Chemical handling safety per Swiss ChemO and EU REACH:\n\n🔹 SAFETY DATA SHEET (SDS): 16-point document mandatory for all hazardous substances. Must be available at the workplace!\n\n🔹 GHS CLASSIFICATION (8 hazard classes):\n⛔ GHS01 Explosive | 🔥 GHS02 Flammable | ⚡ GHS03 Oxidising\n☢ GHS04 Pressurised gas | 🧪 GHS05 Corrosive | ☠ GHS06 Acutely toxic\n🫁 GHS07 Irritant/sensitising | 🌍 GHS09 Environmentally hazardous\n\n🔹 SWISS EMERGENCY NUMBER: 145 (Tox Info Suisse) – 24/7\n\n🔹 FORBIDDEN MIXTURES in cleaning:\n❌ Chlorine cleaner + acid = toxic gas (Cl₂)\n❌ Chlorine cleaner + ammonia = toxic gas (NH₂Cl)\n\n🔹 STORAGE: Observe max. quantities per room. Separate cabinets for acids/alkalis.\n\n🔸 REPORTING: Occupational diseases from chemicals must be reported to SUVA.",
          IT:"Sicurezza nella manipolazione dei prodotti chimici secondo OPChim svizzera e EU REACH:\n\n🔹 SCHEDA DATI DI SICUREZZA (SDS): Documento a 16 punti obbligatorio per tutte le sostanze pericolose. Deve essere disponibile nel luogo di lavoro!\n\n🔹 CLASSIFICAZIONE GHS (8 classi di pericolo):\n⛔ GHS01 Esplosivo | 🔥 GHS02 Infiammabile | ⚡ GHS03 Ossidante\n☢ GHS04 Gas pressurizzato | 🧪 GHS05 Corrosivo | ☠ GHS06 Acutamente tossico\n🫁 GHS07 Irritante/sensibilizzante | 🌍 GHS09 Pericoloso per l'ambiente\n\n🔹 NUMERO DI EMERGENZA SVIZZERA: 145 (Tox Info Suisse) – 24/7\n\n🔹 MISCELE VIETATE:\n❌ Detergente al cloro + acido = gas tossico (Cl₂)\n❌ Detergente al cloro + ammoniaca = gas tossico (NH₂Cl)",
        }},
      {id:"l3",titleKey:{DE:"Ergonomie & Rückengesundheit (SUVA)",ES:"Ergonomía y salud de la espalda (SUVA)",EN:"Ergonomics & Back Health (SUVA)",IT:"Ergonomia e salute della schiena (SUVA)"},done:true,illustrationKey:"safety_ergonomics",
        contentKey:{
          DE:"Ergonomie am Arbeitsplatz gemäss SUVA-Präventionsprogramm:\n\n🔹 HEBEN & TRAGEN: Niemals Lasten über 25 kg allein heben (ArGV 3 Art. 24). Korrekte Technik: Rücken gerade, Knie beugen, Last körpernah halten.\n\n🔹 SAUGEN & WISCHEN: Teleskopstangen nutzen um Bücken zu vermeiden. Wischbewegung mit Körperdrehung – nicht nur Arme!\n\n🔹 COMPUTERARBEITSPLATZ (Büroreinigung): Geräte immer ausgeschaltet und gesichert während Reinigung.\n\n🔹 REPETITIVE BEWEGUNGEN: Bei gleichen Bewegungsabläufen >4h/Tag: Mikropausen alle 30 Min. obligatorisch.\n\n🔹 ARBEIT IN KNIE (Bodenreinigung): Knieschoner Pflicht! Kniebelastung max. 30 Min. ohne Pause.\n\n🔹 ARBEITEN ÜBER KOPF (Fenster): Nicht länger als 2 Stunden ohne Pause. Teleskopgeräte bevorzugen.\n\n🔸 BERUFSKRANKHEITEN PRÄVENTION: Häufigste Berufskrankheiten in der Reinigung: Kontaktdermatitis (Hände), Rückenbeschwerden, Atemwegserkrankungen.",
          ES:"Ergonomía en el trabajo según el programa de prevención SUVA:\n\n🔹 LEVANTAMIENTO Y TRANSPORTE: Nunca levantar cargas de más de 25 kg solo (ArGV 3 Art. 24). Técnica correcta: espalda recta, doblar rodillas, mantener la carga cerca del cuerpo.\n\n🔹 ASPIRAR Y FREGAR: Usar mangos telescópicos para evitar agacharse. Movimiento de fregado con rotación corporal – ¡no solo los brazos!\n\n🔹 MOVIMIENTOS REPETITIVOS: Con los mismos movimientos >4h/día: micropausas cada 30 min. obligatorias.\n\n🔹 TRABAJO DE RODILLAS (limpieza de suelos): ¡Rodilleras obligatorias! Carga de rodillas máx. 30 min. sin pausa.\n\n🔸 PREVENCIÓN ENFERMEDADES PROFESIONALES: Las más frecuentes en limpieza: dermatitis de contacto (manos), problemas de espalda, enfermedades respiratorias.",
          EN:"Workplace ergonomics per SUVA prevention programme:\n\n🔹 LIFTING & CARRYING: Never lift loads over 25 kg alone (ArGV 3 Art. 24). Correct technique: back straight, bend knees, keep load close to body.\n\n🔹 VACUUMING & MOPPING: Use telescopic handles to avoid bending. Mopping movement with body rotation – not just arms!\n\n🔹 REPETITIVE MOVEMENTS: With same movements >4h/day: micro-breaks every 30 min. mandatory.\n\n🔹 KNEELING WORK (floor cleaning): Knee pads mandatory! Knee load max. 30 min. without break.\n\n🔹 OVERHEAD WORK (windows): No more than 2 hours without break. Prefer telescopic tools.\n\n🔸 OCCUPATIONAL DISEASE PREVENTION: Most frequent in cleaning: contact dermatitis (hands), back problems, respiratory diseases.",
          IT:"Ergonomia sul lavoro secondo il programma di prevenzione SUVA:\n\n🔹 SOLLEVAMENTO E TRASPORTO: Non sollevare mai carichi superiori a 25 kg da soli (ArGV 3 Art. 24). Tecnica corretta: schiena dritta, piegare le ginocchia, mantenere il carico vicino al corpo.\n\n🔹 ASPIRAZIONE E LAVAGGIO: Usare manici telescopici per evitare di chinarsi. Movimento di lavaggio con rotazione del corpo – non solo le braccia!\n\n🔹 MOVIMENTI RIPETITIVI: Con gli stessi movimenti >4h/giorno: micro-pause ogni 30 min. obbligatorie.\n\n🔹 LAVORO IN GINOCCHIO (pulizia pavimenti): Ginocchiere obbligatorie! Carico sulle ginocchia max. 30 min. senza pausa.\n\n🔸 PREVENZIONE MALATTIE PROFESSIONALI: Le più frequenti nelle pulizie: dermatite da contatto (mani), problemi alla schiena, malattie respiratorie.",
        }},
      {id:"l4",titleKey:{DE:"Erste Hilfe & Notfallverfahren",ES:"Primeros auxilios y procedimientos de emergencia",EN:"First Aid & Emergency Procedures",IT:"Pronto soccorso e procedure di emergenza"},done:true,illustrationKey:"safety_ppe",contentKey:{DE:"",ES:"",EN:"",IT:""}},
      {id:"l5",titleKey:{DE:"Absturzsicherung & Höhenarbeiten (SUVA)",ES:"Protección anticaída y trabajos en altura (SUVA)",EN:"Fall Protection & Height Work (SUVA)",IT:"Protezione anticaduta e lavori in quota (SUVA)"},done:true,illustrationKey:"safety_ergonomics",contentKey:{DE:"",ES:"",EN:"",IT:""}},
      {id:"l6",titleKey:{DE:"SiBe-Kurs – Sicherheitsbeauftragter Betrieb",ES:"Curso SiBe – Delegado de seguridad de empresa",EN:"SiBe Course – Company Safety Officer",IT:"Corso SiBe – Addetto sicurezza aziendale"},done:true,illustrationKey:"safety_ppe",contentKey:{DE:"",ES:"",EN:"",IT:""}},
      {id:"l7",titleKey:{DE:"Unfallmeldung, Dokumentation & UVG",ES:"Reporte de accidentes, documentación y LAINF",EN:"Accident Reporting, Documentation & UVG",IT:"Segnalazione infortuni, documentazione e LAINF"},done:true,illustrationKey:"safety_chemicals",contentKey:{DE:"",ES:"",EN:"",IT:""}},
    ],
    quiz:[
      {q:{DE:"Wer ist laut VUV Art. 5 verpflichtet, PSA kostenlos bereitzustellen?",ES:"Según VUV Art. 5, ¿quién está obligado a proporcionar EPI gratuitamente?",EN:"Who is obliged per VUV Art. 5 to provide PPE free of charge?",IT:"Chi è obbligato secondo VUV Art. 5 a fornire DPI gratuitamente?"},opts:{DE:["Der Arbeitgeber","Der Arbeitnehmer","Die SUVA","Der Staat"],ES:["El empleador","El empleado","La SUVA","El Estado"],EN:["The employer","The employee","The SUVA","The State"],IT:["Il datore di lavoro","Il lavoratore","La SUVA","Lo Stato"]},ans:0},
      {q:{DE:"Welche Chemikalien dürfen NIEMALS gemischt werden?",ES:"¿Qué productos químicos NUNCA se deben mezclar?",EN:"Which chemicals may NEVER be mixed?",IT:"Quali prodotti chimici non devono MAI essere mescolati?"},opts:{DE:["Chlorreiniger + Säure","Wasser + Seife","Glasreiniger + Mikrofasertuch","Bodenreiniger + Warmwasser"],ES:["Limpiador cloro + ácido","Agua + jabón","Limpiacristales + microfibra","Limpiador suelos + agua caliente"],EN:["Chlorine cleaner + acid","Water + soap","Glass cleaner + microfibre","Floor cleaner + warm water"],IT:["Detergente al cloro + acido","Acqua + sapone","Detergente vetri + microfibra","Detergente pavimenti + acqua calda"]},ans:0},
      {q:{DE:"Was bedeutet das S-T-O-P Prinzip der SUVA?",ES:"¿Qué significa el principio S-T-O-P de SUVA?",EN:"What does the SUVA S-T-O-P principle mean?",IT:"Cosa significa il principio S-T-O-P della SUVA?"},opts:{DE:["Substitution, Technik, Organisation, PSA","Sicher, Testen, Optimieren, Prüfen","Stopp, Transfer, Ordnung, Pflege","Schutz, Training, Operation, Praxis"],ES:["Sustitución, Técnica, Organización, EPI","Seguro, Testar, Optimizar, Probar","Parar, Transferir, Ordenar, Cuidar","Protección, Entrenamiento, Operación, Práctica"],EN:["Substitution, Technology, Organisation, PPE","Safe, Test, Optimise, Practise","Stop, Transfer, Order, Care","Shelter, Train, Operate, Protect"],IT:["Sostituzione, Tecnica, Organizzazione, DPI","Sicuro, Testare, Ottimizzare, Praticare","Stop, Trasferire, Ordinare, Curare","Protezione, Training, Operazione, Pratica"]},ans:0},
      {q:{DE:"Welche Schweizer Notfallnummer gilt bei Vergiftungen?",ES:"¿Qué número de emergencia suizo aplica en caso de intoxicación?",EN:"Which Swiss emergency number applies for poisonings?",IT:"Quale numero di emergenza svizzero si applica in caso di avvelenamento?"},opts:{DE:["145 (Tox Info Suisse)","117 (Polizei)","144 (Sanitätsnotruf)","112 (Europanotruf)"],ES:["145 (Tox Info Suisse)","117 (Policía)","144 (Emergencias)","112 (Europeo)"],EN:["145 (Tox Info Suisse)","117 (Police)","144 (Emergency medical)","112 (European)"],IT:["145 (Tox Info Suisse)","117 (Polizia)","144 (Emergenza sanitaria)","112 (Europeo)"]},ans:0},
    ],
  },
  // ── APP GUIDE FOR EMPLOYEES (simple, no jargon) ──────
  {
   "id": "ac7",
   "category": "app",
   "badge": "featured",
   "emoji": "📱",
   "color": "#0CA678",
   "illustrationKey": "app_phone",
   "titleKey": {
    "DE": "App-Anleitung für Mitarbeiter",
    "ES": "Guía de la app para empleados",
    "EN": "App guide for employees",
    "IT": "Guida all'app per dipendenti"
   },
   "descKey": {
    "DE": "Einfach erklärt, Schritt für Schritt: anmelden, Aufträge ansehen, ein- und ausstempeln, Nachrichten, Lohn und Monatsrapport. Ohne Fachwörter.",
    "ES": "Explicado fácil, paso a paso: entrar, ver tus trabajos, fichar entrada y salida, mensajes, nómina y hoja mensual. Sin palabras técnicas.",
    "EN": "Explained simply, step by step: log in, see your jobs, clock in and out, messages, payslip and monthly sheet. No technical words.",
    "IT": "Spiegato in modo semplice, passo dopo passo: accedere, vedere i lavori, timbrare, messaggi, busta paga e rapporto mensile. Senza parole tecniche."
   },
   "duration": {
    "DE": "30 min",
    "ES": "30 min",
    "EN": "30 min",
    "IT": "30 min"
   },
   "level": "beginner",
   "progress": 0,
   "lessons_list": [
    {
     "id": "ac7l1",
     "titleKey": {
      "DE": "1. So kommen Sie in die App",
      "ES": "1. Cómo entrar en la app",
      "EN": "1. How to get into the app",
      "IT": "1. Come entrare nell'app"
     },
     "done": false,
     "illustrationKey": "app_phone",
     "contentKey": {
      "DE": "📲 DER LINK\nSie erhalten von der Firma eine Nachricht (WhatsApp, E-Mail oder SMS) mit dem Link zur App und Ihrem PIN.\nDie App-Adresse ist: patjac-app.vercel.app\n\n🔑 ANMELDEN – 3 Schritte\n1. Link antippen.\n2. «Mitarbeiter» wählen.\n3. Ihren 4-stelligen PIN eingeben. Fertig!\n\n📱 TIPP: APP AUF DEN STARTBILDSCHIRM\n• iPhone: in Safari auf «Teilen» ⬆️ tippen → «Zum Home-Bildschirm».\n• Android: in Chrome auf ⋮ tippen → «Zum Startbildschirm hinzufügen».\nSo öffnen Sie die App wie jede andere App mit einem Tipp.\n\n⚠️ IHR PIN IST GEHEIM\n• Geben Sie Ihren PIN niemandem – auch nicht Kolleginnen oder Kollegen.\n• Niemand darf mit Ihrem PIN für Sie stempeln.\n• PIN vergessen oder verloren? Sofort der Firma melden. Sie bekommen einen neuen.\n\n🚪 ABMELDEN\nOben rechts auf «Abmelden» tippen – besonders wichtig auf fremden Geräten.",
      "ES": "📲 EL ENLACE\nLa empresa te envía un mensaje (WhatsApp, e-mail o SMS) con el enlace de la app y tu PIN.\nLa dirección de la app es: patjac-app.vercel.app\n\n🔑 ENTRAR – 3 pasos\n1. Toca el enlace.\n2. Elige «Empleado».\n3. Escribe tu PIN de 4 números. ¡Listo!\n\n📱 CONSEJO: PON LA APP EN TU PANTALLA DE INICIO\n• iPhone: en Safari toca «Compartir» ⬆️ → «Añadir a pantalla de inicio».\n• Android: en Chrome toca ⋮ → «Añadir a pantalla de inicio».\nAsí abres la app con un solo toque, como cualquier otra app.\n\n⚠️ TU PIN ES SECRETO\n• No le des tu PIN a nadie, tampoco a tus compañeros.\n• Nadie puede fichar por ti con tu PIN.\n• ¿Olvidaste o perdiste tu PIN? Avisa a la empresa enseguida y te dará uno nuevo.\n\n🚪 SALIR\nToca «Salir» arriba a la derecha. Es muy importante si usas un teléfono que no es tuyo.",
      "EN": "📲 THE LINK\nThe company sends you a message (WhatsApp, email or SMS) with the app link and your PIN.\nThe app address is: patjac-app.vercel.app\n\n🔑 LOG IN – 3 steps\n1. Tap the link.\n2. Choose «Employee».\n3. Type your 4-digit PIN. Done!\n\n📱 TIP: PUT THE APP ON YOUR HOME SCREEN\n• iPhone: in Safari tap «Share» ⬆️ → «Add to Home Screen».\n• Android: in Chrome tap ⋮ → «Add to Home screen».\nThen you open the app with one tap, like any other app.\n\n⚠️ YOUR PIN IS SECRET\n• Never give your PIN to anyone, not even colleagues.\n• Nobody may clock in for you with your PIN.\n• Forgot or lost your PIN? Tell the company right away and you will get a new one.\n\n🚪 LOG OUT\nTap «Logout» at the top right – very important on a phone that is not yours.",
      "IT": "📲 IL LINK\nL'azienda ti invia un messaggio (WhatsApp, e-mail o SMS) con il link dell'app e il tuo PIN.\nL'indirizzo dell'app è: patjac-app.vercel.app\n\n🔑 ACCEDERE – 3 passi\n1. Tocca il link.\n2. Scegli «Dipendente».\n3. Scrivi il tuo PIN di 4 cifre. Fatto!\n\n📱 CONSIGLIO: METTI L'APP SULLA SCHERMATA HOME\n• iPhone: in Safari tocca «Condividi» ⬆️ → «Aggiungi alla schermata Home».\n• Android: in Chrome tocca ⋮ → «Aggiungi a schermata Home».\nCosì apri l'app con un tocco, come qualsiasi altra app.\n\n⚠️ IL TUO PIN È SEGRETO\n• Non dare il tuo PIN a nessuno, nemmeno ai colleghi.\n• Nessuno può timbrare per te con il tuo PIN.\n• PIN dimenticato o perso? Avvisa subito l'azienda e ne riceverai uno nuovo.\n\n🚪 USCIRE\nTocca «Esci» in alto a destra – molto importante su un telefono che non è tuo."
     }
    },
    {
     "id": "ac7l2",
     "titleKey": {
      "DE": "2. Meine Aufträge ansehen",
      "ES": "2. Ver mis trabajos",
      "EN": "2. See my jobs",
      "IT": "2. Vedere i miei lavori"
     },
     "done": false,
     "illustrationKey": "cleaning",
     "contentKey": {
      "DE": "📋 WO?\nTippen Sie auf das Symbol 📋 «Aufträge».\n\n👀 WAS SEHE ICH?\nNur Ihre eigenen Aufträge. Für jeden Auftrag:\n• Kunde und Adresse 📍\n• Datum und Uhrzeit (Beginn – Ende)\n• Art der Arbeit: 🧹 Reinigung oder 🌿 Garten\nAufträge von heute sind blau markiert mit «📅 Heute».\n\n🔘 FILTER OBEN\n«Alle» · «Ausstehend» · «In Bearbeitung» · «Abgeschlossen» – so finden Sie schnell, was Sie suchen.\n\n🗺️ HINFAHREN\nTippen Sie auf «Navigation». Die Karte öffnet sich mit dem Weg zum Kunden.\n\n👥 ARBEIT IM TEAM\nManchmal arbeiten 2 oder mehr Personen im selben Auftrag. Die Arbeitsstunden werden aufgeteilt.\nBeispiel: 5 Stunden Arbeit mit 2 Personen → jede Person arbeitet 2½ Stunden und wird für ihren Teil bezahlt.\nIn Ihrem Auftrag sehen Sie nur Ihre eigene Zeit.",
      "ES": "📋 ¿DÓNDE?\nToca el icono 📋 «Trabajos».\n\n👀 ¿QUÉ VEO?\nSolo tus propios trabajos. En cada trabajo ves:\n• Cliente y dirección 📍\n• Fecha y hora (inicio – fin)\n• Tipo de trabajo: 🧹 limpieza o 🌿 jardín\nLos trabajos de hoy salen en azul con «📅 Hoy».\n\n🔘 FILTROS ARRIBA\n«Todos» · «Pendiente» · «En curso» · «Completado». Así encuentras rápido lo que buscas.\n\n🗺️ CÓMO LLEGAR\nToca «Navegar». Se abre el mapa con el camino hasta el cliente.\n\n👥 TRABAJO EN EQUIPO\nA veces van 2 o más personas al mismo trabajo. Las horas se reparten.\nEjemplo: un trabajo de 5 horas con 2 personas → cada una trabaja 2 horas y media y cobra su parte.\nEn tu trabajo solo ves tu propio horario.",
      "EN": "📋 WHERE?\nTap the 📋 «Jobs» icon.\n\n👀 WHAT DO I SEE?\nOnly your own jobs. For each job:\n• Client and address 📍\n• Date and time (start – end)\n• Type of work: 🧹 cleaning or 🌿 garden\nToday's jobs are shown in blue with «📅 Today».\n\n🔘 FILTERS AT THE TOP\n«All» · «Pending» · «In progress» · «Completed» – to find things quickly.\n\n🗺️ GETTING THERE\nTap «Navigate». The map opens with the way to the client.\n\n👥 TEAMWORK\nSometimes 2 or more people work on the same job. The hours are shared.\nExample: a 5-hour job with 2 people → each person works 2½ hours and is paid for their part.\nIn your job you only see your own time.",
      "IT": "📋 DOVE?\nTocca l'icona 📋 «Lavori».\n\n👀 COSA VEDO?\nSolo i tuoi lavori. Per ogni lavoro:\n• Cliente e indirizzo 📍\n• Data e ora (inizio – fine)\n• Tipo di lavoro: 🧹 pulizia o 🌿 giardino\nI lavori di oggi sono in blu con «📅 Oggi».\n\n🔘 FILTRI IN ALTO\n«Tutti» · «In attesa» · «In corso» · «Completato» – per trovare subito ciò che cerchi.\n\n🗺️ COME ARRIVARE\nTocca «Naviga». Si apre la mappa con la strada fino al cliente.\n\n👥 LAVORO IN SQUADRA\nA volte 2 o più persone lavorano allo stesso lavoro. Le ore vengono divise.\nEsempio: un lavoro di 5 ore con 2 persone → ognuno lavora 2 ore e mezza ed è pagato per la sua parte.\nNel tuo lavoro vedi solo il tuo orario."
     }
    },
    {
     "id": "ac7l3",
     "titleKey": {
      "DE": "3. Ein- und Ausstempeln",
      "ES": "3. Fichar entrada y salida",
      "EN": "3. Clock in and out",
      "IT": "3. Timbrare entrata e uscita"
     },
     "done": false,
     "illustrationKey": "management_invoice",
     "contentKey": {
      "DE": "⏱️ WO?\nTippen Sie auf das Symbol ⏱️ «Zeiterfassung». Sie sehen Ihre Aufträge von heute.\n\n▶️ ANKOMMEN BEIM KUNDEN\nTippen Sie beim richtigen Kunden auf den grünen Knopf «🟢 Arbeitsbeginn». Die Uhrzeit wird gespeichert.\n\n⏹️ ARBEIT FERTIG\nTippen Sie beim selben Kunden auf den roten Knopf «🔴 Arbeitsende». Die App rechnet Ihre Stunden automatisch.\n\n➡️ NÄCHSTER KUNDE\nBeim nächsten Kunden wieder «🟢 Arbeitsbeginn» und am Ende «🔴 Arbeitsende». Jeder Kunde hat seine eigenen Knöpfe.\n\n📍 STANDORT\nBeim Ein- und Ausstempeln speichert die App den Ort, an dem Sie sind.\n• Erlauben Sie der App den Zugriff auf den Standort, wenn das Handy fragt.\n• Stempeln Sie immer VOR ORT beim Kunden – nicht zu Hause oder unterwegs.\n• Sind Sie weit weg von der Kundenadresse, erscheint eine Warnung.\nDas schützt Sie und die Firma: Ihre Arbeitszeit ist klar belegt.\n\n📍 REGISTERKARTE «STANDORTE»\nDort sehen Sie, wo und wann Sie ein- und ausgestempelt haben.\n\n❗ VERGESSEN ZU STEMPELN?\nKein Problem – schreiben Sie sofort der Firma im Chat 💬 die richtige Uhrzeit.",
      "ES": "⏱️ ¿DÓNDE?\nToca el icono ⏱️ «Fichaje». Ves tus trabajos de hoy.\n\n▶️ AL LLEGAR AL CLIENTE\nToca el botón verde «🟢 Entrada» en el cliente correcto. La hora queda guardada.\n\n⏹️ AL TERMINAR\nToca el botón rojo «🔴 Salida» en el mismo cliente. La app calcula tus horas sola.\n\n➡️ SIGUIENTE CLIENTE\nEn el siguiente cliente, otra vez «🟢 Entrada» y al final «🔴 Salida». Cada cliente tiene sus propios botones.\n\n📍 UBICACIÓN\nAl fichar entrada y salida, la app guarda el lugar donde estás.\n• Cuando el teléfono pregunte, permite que la app use tu ubicación.\n• Ficha siempre EN EL LUGAR del cliente, no en casa ni en el camino.\n• Si estás lejos de la dirección del cliente, sale un aviso.\nEsto te protege a ti y a la empresa: tu tiempo de trabajo queda demostrado.\n\n📍 PESTAÑA «UBICACIONES»\nAhí ves dónde y a qué hora fichaste entrada y salida.\n\n❗ ¿SE TE OLVIDÓ FICHAR?\nNo pasa nada. Escribe enseguida a la empresa en el chat 💬 con la hora correcta.",
      "EN": "⏱️ WHERE?\nTap the ⏱️ «Time Clock» icon. You see today's jobs.\n\n▶️ WHEN YOU ARRIVE AT THE CLIENT\nTap the green «🟢 Clock In» button on the right client. The time is saved.\n\n⏹️ WHEN YOU FINISH\nTap the red «🔴 Clock Out» button on the same client. The app counts your hours by itself.\n\n➡️ NEXT CLIENT\nAt the next client, again «🟢 Clock In» and at the end «🔴 Clock Out». Each client has its own buttons.\n\n📍 LOCATION\nWhen you clock in and out, the app saves the place where you are.\n• When the phone asks, allow the app to use your location.\n• Always clock in AT the client's place – not at home or on the way.\n• If you are far from the client's address, a warning appears.\nThis protects you and the company: your working time is proven.\n\n📍 «LOCATIONS» TAB\nThere you see where and when you clocked in and out.\n\n❗ FORGOT TO CLOCK?\nNo problem – write to the company in the chat 💬 right away with the correct time.",
      "IT": "⏱️ DOVE?\nTocca l'icona ⏱️ «Timbrature». Vedi i lavori di oggi.\n\n▶️ QUANDO ARRIVI DAL CLIENTE\nTocca il pulsante verde «🟢 Entrata» sul cliente giusto. L'ora viene salvata.\n\n⏹️ QUANDO FINISCI\nTocca il pulsante rosso «🔴 Uscita» sullo stesso cliente. L'app calcola le ore da sola.\n\n➡️ CLIENTE SUCCESSIVO\nDal cliente successivo, di nuovo «🟢 Entrata» e alla fine «🔴 Uscita». Ogni cliente ha i suoi pulsanti.\n\n📍 POSIZIONE\nQuando timbri, l'app salva il luogo in cui ti trovi.\n• Quando il telefono lo chiede, permetti all'app di usare la posizione.\n• Timbra sempre SUL POSTO dal cliente, non a casa o per strada.\n• Se sei lontano dall'indirizzo del cliente, appare un avviso.\nQuesto protegge te e l'azienda: il tuo tempo di lavoro è dimostrato.\n\n📍 SCHEDA «POSIZIONI»\nLì vedi dove e quando hai timbrato entrata e uscita.\n\n❗ HAI DIMENTICATO DI TIMBRARE?\nNessun problema: scrivi subito all'azienda nella chat 💬 con l'ora giusta."
     }
    },
    {
     "id": "ac7l4",
     "titleKey": {
      "DE": "4. Nachrichten & Erinnerungen",
      "ES": "4. Mensajes y avisos",
      "EN": "4. Messages & reminders",
      "IT": "4. Messaggi e promemoria"
     },
     "done": false,
     "illustrationKey": "app_phone",
     "contentKey": {
      "DE": "💬 CHAT MIT DER FIRMA\nTippen Sie auf das Symbol 💬 «Nachrichten». Sie schreiben direkt mit der Firma.\n• Text schreiben und senden.\n• 🖼️ Foto aus der Galerie oder 📷 direkt mit der Kamera senden – z.B. um einen Schaden oder die fertige Arbeit zu zeigen.\n\n⏰ ERINNERUNG 1 STUNDE VORHER\nEine Stunde vor jedem Auftrag bekommen Sie automatisch eine Nachricht mit Kunde, Adresse und Uhrzeit.\n\n🔔 BENACHRICHTIGUNGEN EINSCHALTEN\nWenn die App fragt «Benachrichtigungen erlauben?», tippen Sie auf «Erlauben». So sehen Sie neue Nachrichten sofort.\nTipp: Lassen Sie die App im Hintergrund offen.\n\n🧹 CHAT WIRD AUFGERÄUMT\nJeden Sonntag um 12:00 Uhr werden alle Nachrichten automatisch gelöscht.\nWichtige Infos (z.B. einen Türcode) bitte selbst notieren.\n\n🙂 GUTE REGELN IM CHAT\n• Kurz und klar schreiben.\n• Probleme sofort melden: Verspätung, Krankheit, Schaden, fehlendes Material.\n• Keine Fotos von Kunden oder privaten Sachen der Kunden weitergeben.",
      "ES": "💬 CHAT CON LA EMPRESA\nToca el icono 💬 «Mensajes». Escribes directamente con la empresa.\n• Escribe un texto y envíalo.\n• Manda una 🖼️ foto de la galería o 📷 hazla con la cámara, por ejemplo para mostrar un daño o el trabajo terminado.\n\n⏰ AVISO 1 HORA ANTES\nUna hora antes de cada trabajo recibes automáticamente un mensaje con el cliente, la dirección y la hora.\n\n🔔 ACTIVA LAS NOTIFICACIONES\nCuando la app pregunte «¿Permitir notificaciones?», toca «Permitir». Así ves los mensajes nuevos al momento.\nConsejo: deja la app abierta en segundo plano.\n\n🧹 EL CHAT SE LIMPIA\nCada domingo a las 12:00 se borran todos los mensajes automáticamente.\nSi hay algo importante (por ejemplo, el código de una puerta), apúntalo tú.\n\n🙂 BUENAS REGLAS EN EL CHAT\n• Escribe corto y claro.\n• Avisa enseguida de cualquier problema: retraso, enfermedad, daño o falta de material.\n• No compartas con nadie fotos de los clientes ni de sus cosas privadas.",
      "EN": "💬 CHAT WITH THE COMPANY\nTap the 💬 «Messages» icon. You write directly with the company.\n• Write a text and send it.\n• Send a 🖼️ photo from the gallery or 📷 take one with the camera – e.g. to show damage or finished work.\n\n⏰ REMINDER 1 HOUR BEFORE\nOne hour before each job you automatically get a message with client, address and time.\n\n🔔 TURN ON NOTIFICATIONS\nWhen the app asks «Allow notifications?», tap «Allow». Then you see new messages right away.\nTip: leave the app open in the background.\n\n🧹 THE CHAT IS CLEANED\nEvery Sunday at 12:00 all messages are deleted automatically.\nPlease write down important info yourself (e.g. a door code).\n\n🙂 GOOD CHAT RULES\n• Write short and clear.\n• Report problems right away: delay, illness, damage, missing material.\n• Never share photos of clients or their private things.",
      "IT": "💬 CHAT CON L'AZIENDA\nTocca l'icona 💬 «Messaggi». Scrivi direttamente con l'azienda.\n• Scrivi un testo e invialo.\n• Invia una 🖼️ foto dalla galleria o 📷 scattala con la fotocamera, ad es. per mostrare un danno o il lavoro finito.\n\n⏰ PROMEMORIA 1 ORA PRIMA\nUn'ora prima di ogni lavoro ricevi automaticamente un messaggio con cliente, indirizzo e ora.\n\n🔔 ATTIVA LE NOTIFICHE\nQuando l'app chiede «Consentire le notifiche?», tocca «Consenti». Così vedi subito i nuovi messaggi.\nConsiglio: lascia l'app aperta in background.\n\n🧹 LA CHAT VIENE PULITA\nOgni domenica alle 12:00 tutti i messaggi vengono cancellati automaticamente.\nAnnota tu le informazioni importanti (ad es. un codice della porta).\n\n🙂 BUONE REGOLE NELLA CHAT\n• Scrivi breve e chiaro.\n• Segnala subito i problemi: ritardo, malattia, danno, materiale mancante.\n• Non condividere foto dei clienti o delle loro cose private."
     }
    },
    {
     "id": "ac7l5",
     "titleKey": {
      "DE": "5. Meine Dokumente: Lohn & Verträge",
      "ES": "5. Mis documentos: nómina y contratos",
      "EN": "5. My documents: payslip & contracts",
      "IT": "5. I miei documenti: busta paga e contratti"
     },
     "done": false,
     "illustrationKey": "management_invoice",
     "contentKey": {
      "DE": "📁 WO?\nTippen Sie auf das Symbol 📁 «Dokumente». Dort finden Sie:\n• 💵 Lohnabrechnungen – am Ende jedes Monats erscheint die neue.\n• 📝 Verträge – Ihr Arbeitsvertrag.\n• 📂 Andere Dokumente – z.B. Bescheinigungen oder Reglemente.\nAlles können Sie öffnen, herunterladen und drucken (oder als PDF speichern).\n\n📄 LOHNABRECHNUNG – EINFACH ERKLÄRT\n• BRUTTOLOHN: alles, was Sie verdient haben (Stunden × Stundenlohn + Zuschläge wie Ferien und Feiertage).\n• ABZÜGE: Beiträge, die das Gesetz verlangt – AHV (Rente), ALV (Arbeitslosigkeit), Unfallversicherung, Pensionskasse (BVG, ab einem bestimmten Lohn) und evtl. Quellensteuer.\n• NETTOLOHN: das Geld, das auf Ihr Konto kommt.\n• FAMILIENZULAGEN: Haben Sie Kinder, kommt Geld für die Kinder dazu.\n\n📋 MONATSRAPPORT\nTippen Sie auf «📋 Arbeitsrapport». Sie sehen für jeden Tag:\n• Datum, Kunde und Ort\n• Ein- und Ausstempelzeit\n• Gefahrene Kilometer\n• Fahrtkosten\n\n🚗 FAHRTKOSTEN\n• Der Weg von zu Hause zum ERSTEN Kunden ist Ihr privater Arbeitsweg.\n• Die Fahrten VON Kunde ZU Kunde bezahlt die Firma:\n  – mit dem Auto: CHF 0.75 pro Kilometer\n  – mit dem ÖV (Bus, Tram, Zug): das Billett.\n\n✅ BITTE KONTROLLIEREN\nSchauen Sie jeden Monat Ihren Rapport an. Stimmt etwas nicht? Schreiben Sie der Firma im Chat 💬.",
      "ES": "📁 ¿DÓNDE?\nToca el icono 📁 «Documentos». Ahí encuentras:\n• 💵 Nóminas: al final de cada mes aparece la nueva.\n• 📝 Contratos: tu contrato de trabajo.\n• 📂 Otros documentos: por ejemplo certificados o reglamentos.\nTodo lo puedes abrir, descargar e imprimir (o guardar como PDF).\n\n📄 LA NÓMINA, FÁCIL\n• SALARIO BRUTO: todo lo que ganaste (horas × precio por hora + suplementos como vacaciones y festivos).\n• DEDUCCIONES: lo que pide la ley. AHV (jubilación), ALV (paro), seguro de accidentes, caja de pensiones (BVG, a partir de cierto sueldo) y, si te toca, impuesto en la fuente.\n• SALARIO NETO: el dinero que llega a tu cuenta.\n• ASIGNACIONES FAMILIARES: si tienes hijos, recibes además un dinero por cada hijo.\n\n📋 HOJA MENSUAL\nToca «📋 Hoja mensual». Para cada día ves:\n• Fecha, cliente y lugar\n• Hora de entrada y de salida\n• Kilómetros recorridos\n• Gastos de transporte\n\n🚗 TRANSPORTE\n• El camino de tu casa al PRIMER cliente es tu trayecto privado.\n• Los viajes DE un cliente A otro los paga la empresa:\n  – en coche: CHF 0.75 por kilómetro\n  – en transporte público (bus, tranvía, tren): el billete.\n\n✅ REVÍSALO\nMira tu hoja cada mes. ¿Algo no cuadra? Escribe a la empresa en el chat 💬.",
      "EN": "📁 WHERE?\nTap the 📁 «Documents» icon. There you find:\n• 💵 Payslips – a new one appears at the end of each month.\n• 📝 Contracts – your employment contract.\n• 📂 Other documents – e.g. certificates or rules.\nYou can open, download and print everything (or save it as PDF).\n\n📄 PAYSLIP – MADE EASY\n• GROSS PAY: everything you earned (hours × hourly rate + supplements like holidays and public holidays).\n• DEDUCTIONS: what the law requires – AHV (pension), ALV (unemployment), accident insurance, pension fund (BVG, from a certain salary) and maybe withholding tax.\n• NET PAY: the money that arrives in your account.\n• FAMILY ALLOWANCES: if you have children, you get extra money for each child.\n\n📋 MONTHLY SHEET\nTap «📋 Work sheet». For each day you see:\n• Date, client and place\n• Clock-in and clock-out time\n• Kilometres travelled\n• Travel costs\n\n🚗 TRAVEL\n• The way from home to your FIRST client is your private commute.\n• Trips FROM one client TO another are paid by the company:\n  – by car: CHF 0.75 per kilometre\n  – by public transport (bus, tram, train): the ticket.\n\n✅ PLEASE CHECK\nLook at your sheet every month. Something wrong? Write to the company in the chat 💬.",
      "IT": "📁 DOVE?\nTocca l'icona 📁 «Documenti». Lì trovi:\n• 💵 Buste paga – alla fine di ogni mese compare la nuova.\n• 📝 Contratti – il tuo contratto di lavoro.\n• 📂 Altri documenti – ad es. certificati o regolamenti.\nPuoi aprire, scaricare e stampare tutto (o salvarlo in PDF).\n\n📄 BUSTA PAGA – SEMPLICE\n• SALARIO LORDO: tutto ciò che hai guadagnato (ore × paga oraria + supplementi come vacanze e festivi).\n• DEDUZIONI: ciò che chiede la legge – AVS (pensione), AD (disoccupazione), assicurazione infortuni, cassa pensione (LPP, da un certo salario) ed eventualmente imposta alla fonte.\n• SALARIO NETTO: i soldi che arrivano sul tuo conto.\n• ASSEGNI FAMILIARI: se hai figli, ricevi in più dei soldi per ogni figlio.\n\n📋 RAPPORTO MENSILE\nTocca «📋 Rapporto». Per ogni giorno vedi:\n• Data, cliente e luogo\n• Ora di entrata e di uscita\n• Chilometri percorsi\n• Spese di trasporto\n\n🚗 TRASPORTO\n• La strada da casa al PRIMO cliente è il tuo tragitto privato.\n• I viaggi DA un cliente A un altro li paga l'azienda:\n  – in auto: CHF 0.75 al chilometro\n  – con i mezzi pubblici (bus, tram, treno): il biglietto.\n\n✅ CONTROLLA\nGuarda il tuo rapporto ogni mese. Qualcosa non va? Scrivi all'azienda nella chat 💬."
     }
    },
    {
     "id": "ac7l6",
     "titleKey": {
      "DE": "6. Academy & goldene Regeln",
      "ES": "6. Academy y reglas de oro",
      "EN": "6. Academy & golden rules",
      "IT": "6. Academy e regole d'oro"
     },
     "done": false,
     "illustrationKey": "cleaning",
     "contentKey": {
      "DE": "🎓 PATJAC ACADEMY\nHier lernen Sie Ihren Beruf: Reinigung, Garten und Sicherheit.\n• Kurs antippen → Lektion lesen → «Lektion abschliessen».\n• Am Ende gibt es ein kleines Quiz. Keine Angst – Sie können es wiederholen.\n\n⭐ DIE 8 GOLDENEN REGELN\n1. Pünktlich sein. Verspätung? Sofort im Chat melden.\n2. Immer vor Ort beim Kunden ein- und ausstempeln.\n3. Ihren PIN niemandem geben.\n4. Schutzkleidung tragen (Handschuhe, Schuhe).\n5. Reinigungsmittel nie mischen.\n6. Schäden sofort mit Foto melden – ehrlich sein ist immer besser.\n7. Freundlich sein und die Privatsphäre der Kunden respektieren.\n8. Bei Fragen: fragen! Die Firma hilft Ihnen gerne.\n\n❓ PROBLEM MIT DER APP?\n• Seite neu laden (nach unten ziehen oder ⟳).\n• Abmelden und wieder mit PIN anmelden.\n• Hilft das nicht: der Firma im Chat oder per Telefon Bescheid geben.",
      "ES": "🎓 PATJAC ACADEMY\nAquí aprendes tu oficio: limpieza, jardín y seguridad.\n• Toca un curso → lee la lección → «Marcar como completada».\n• Al final hay un pequeño test. Tranquilo/a, lo puedes repetir.\n\n⭐ LAS 8 REGLAS DE ORO\n1. Sé puntual. ¿Vas a llegar tarde? Avisa enseguida en el chat.\n2. Ficha siempre en el lugar del cliente, al entrar y al salir.\n3. No le des tu PIN a nadie.\n4. Usa la ropa de protección (guantes, calzado).\n5. Nunca mezcles productos de limpieza.\n6. Si hay un daño, avisa enseguida con una foto. Ser sincero siempre es mejor.\n7. Sé amable y respeta la privacidad del cliente.\n8. Si tienes dudas, ¡pregunta! La empresa te ayuda con gusto.\n\n❓ ¿PROBLEMAS CON LA APP?\n• Recarga la página (desliza hacia abajo o toca ⟳).\n• Sal y vuelve a entrar con tu PIN.\n• Si sigue sin funcionar, avisa a la empresa por el chat o por teléfono.",
      "EN": "🎓 PATJAC ACADEMY\nHere you learn your job: cleaning, garden and safety.\n• Tap a course → read the lesson → «Mark as Complete».\n• At the end there is a short quiz. Don't worry – you can repeat it.\n\n⭐ THE 8 GOLDEN RULES\n1. Be on time. Running late? Tell us in the chat right away.\n2. Always clock in and out at the client's place.\n3. Never give your PIN to anyone.\n4. Wear protective clothing (gloves, shoes).\n5. Never mix cleaning products.\n6. Report damage right away with a photo – being honest is always better.\n7. Be friendly and respect the client's privacy.\n8. Questions? Ask! The company is happy to help.\n\n❓ PROBLEM WITH THE APP?\n• Reload the page (pull down or tap ⟳).\n• Log out and log in again with your PIN.\n• Still not working? Tell the company in the chat or by phone.",
      "IT": "🎓 PATJAC ACADEMY\nQui impari il tuo mestiere: pulizie, giardino e sicurezza.\n• Tocca un corso → leggi la lezione → «Segna come completata».\n• Alla fine c'è un piccolo quiz. Tranquillo/a: puoi ripeterlo.\n\n⭐ LE 8 REGOLE D'ORO\n1. Sii puntuale. In ritardo? Avvisa subito nella chat.\n2. Timbra sempre sul posto dal cliente, in entrata e in uscita.\n3. Non dare a nessuno il tuo PIN.\n4. Indossa gli indumenti protettivi (guanti, scarpe).\n5. Non mescolare mai i prodotti di pulizia.\n6. Segnala subito un danno con una foto: essere onesti è sempre meglio.\n7. Sii gentile e rispetta la privacy del cliente.\n8. Hai dubbi? Chiedi! L'azienda ti aiuta volentieri.\n\n❓ PROBLEMI CON L'APP?\n• Ricarica la pagina (scorri verso il basso o tocca ⟳).\n• Esci e rientra con il tuo PIN.\n• Se non funziona ancora, avvisa l'azienda nella chat o per telefono."
     }
    }
   ],
   "quiz": [
    {
     "q": {
      "DE": "Wie melden Sie sich in der App an?",
      "ES": "¿Cómo entras en la app?",
      "EN": "How do you log into the app?",
      "IT": "Come entri nell'app?"
     },
     "opts": {
      "DE": [
       "«Mitarbeiter» wählen und PIN eingeben",
       "Mit dem PIN eines Kollegen",
       "Mit meinem Facebook-Konto",
       "Ich rufe jeden Tag die Firma an"
      ],
      "ES": [
       "Elijo «Empleado» y escribo mi PIN",
       "Con el PIN de un compañero",
       "Con mi cuenta de Facebook",
       "Llamo a la empresa cada día"
      ],
      "EN": [
       "Choose «Employee» and type my PIN",
       "With a colleague's PIN",
       "With my Facebook account",
       "I call the company every day"
      ],
      "IT": [
       "Scelgo «Dipendente» e scrivo il PIN",
       "Con il PIN di un collega",
       "Con il mio account Facebook",
       "Chiamo l'azienda ogni giorno"
      ]
     },
     "ans": 0
    },
    {
     "q": {
      "DE": "Wo stempeln Sie ein?",
      "ES": "¿Dónde fichas la entrada?",
      "EN": "Where do you clock in?",
      "IT": "Dove timbri l'entrata?"
     },
     "opts": {
      "DE": [
       "Vor Ort beim Kunden",
       "Zu Hause beim Frühstück",
       "Im Bus auf dem Weg",
       "Am Abend, für den ganzen Tag"
      ],
      "ES": [
       "En el lugar del cliente",
       "En casa desayunando",
       "En el autobús de camino",
       "Por la noche, para todo el día"
      ],
      "EN": [
       "At the client's place",
       "At home at breakfast",
       "On the bus on the way",
       "In the evening, for the whole day"
      ],
      "IT": [
       "Sul posto dal cliente",
       "A casa a colazione",
       "Sul bus per strada",
       "La sera, per tutto il giorno"
      ]
     },
     "ans": 0
    },
    {
     "q": {
      "DE": "Wann bekommen Sie eine Erinnerung an einen Auftrag?",
      "ES": "¿Cuándo recibes el aviso de un trabajo?",
      "EN": "When do you get a job reminder?",
      "IT": "Quando ricevi il promemoria di un lavoro?"
     },
     "opts": {
      "DE": [
       "1 Stunde vorher",
       "1 Woche vorher",
       "Nach der Arbeit",
       "Nie"
      ],
      "ES": [
       "1 hora antes",
       "1 semana antes",
       "Después del trabajo",
       "Nunca"
      ],
      "EN": [
       "1 hour before",
       "1 week before",
       "After the work",
       "Never"
      ],
      "IT": [
       "1 ora prima",
       "1 settimana prima",
       "Dopo il lavoro",
       "Mai"
      ]
     },
     "ans": 0
    },
    {
     "q": {
      "DE": "Wie viel bezahlt die Firma pro Kilometer mit dem Auto von Kunde zu Kunde?",
      "ES": "¿Cuánto paga la empresa por kilómetro en coche de un cliente a otro?",
      "EN": "How much does the company pay per km by car from client to client?",
      "IT": "Quanto paga l'azienda al km in auto da un cliente all'altro?"
     },
     "opts": {
      "DE": [
       "CHF 0.75",
       "CHF 0.10",
       "CHF 5.00",
       "Nichts"
      ],
      "ES": [
       "CHF 0.75",
       "CHF 0.10",
       "CHF 5.00",
       "Nada"
      ],
      "EN": [
       "CHF 0.75",
       "CHF 0.10",
       "CHF 5.00",
       "Nothing"
      ],
      "IT": [
       "CHF 0.75",
       "CHF 0.10",
       "CHF 5.00",
       "Niente"
      ]
     },
     "ans": 0
    },
    {
     "q": {
      "DE": "Ein Freund fragt nach Ihrem PIN. Was tun Sie?",
      "ES": "Un amigo te pide tu PIN. ¿Qué haces?",
      "EN": "A friend asks for your PIN. What do you do?",
      "IT": "Un amico ti chiede il PIN. Cosa fai?"
     },
     "opts": {
      "DE": [
       "Ich gebe ihn niemandem",
       "Ich gebe ihn nur Freunden",
       "Ich schreibe ihn auf Facebook",
       "Ich klebe ihn an die Tür"
      ],
      "ES": [
       "No se lo doy a nadie",
       "Solo se lo doy a amigos",
       "Lo publico en Facebook",
       "Lo pego en la puerta"
      ],
      "EN": [
       "I give it to nobody",
       "I only give it to friends",
       "I post it on Facebook",
       "I stick it on the door"
      ],
      "IT": [
       "Non lo do a nessuno",
       "Lo do solo agli amici",
       "Lo scrivo su Facebook",
       "Lo attacco alla porta"
      ]
     },
     "ans": 0
    },
    {
     "q": {
      "DE": "Wann wird der Chat automatisch gelöscht?",
      "ES": "¿Cuándo se borra el chat automáticamente?",
      "EN": "When is the chat deleted automatically?",
      "IT": "Quando viene cancellata la chat automaticamente?"
     },
     "opts": {
      "DE": [
       "Jeden Sonntag um 12:00",
       "Jeden Tag um 08:00",
       "Nie",
       "Einmal im Jahr"
      ],
      "ES": [
       "Cada domingo a las 12:00",
       "Cada día a las 08:00",
       "Nunca",
       "Una vez al año"
      ],
      "EN": [
       "Every Sunday at 12:00",
       "Every day at 08:00",
       "Never",
       "Once a year"
      ],
      "IT": [
       "Ogni domenica alle 12:00",
       "Ogni giorno alle 08:00",
       "Mai",
       "Una volta all'anno"
      ]
     },
     "ans": 0
    }
   ]
  },
  // ── MANAGEMENT: PATJAC BUSINESS SUITE (admin only) ────
  {
   "id": "ac6",
   "category": "management",
   "badge": "new",
   "emoji": "💼",
   "color": "#7048E8",
   "illustrationKey": "management_invoice",
   "adminOnly": true,
   "titleKey": {
    "DE": "Patjac Business Suite — Administratorhandbuch v3",
    "ES": "Patjac Business Suite — Manual del Administrador v3",
    "EN": "Patjac Business Suite — Administrator Guide v3",
    "IT": "Patjac Business Suite — Guida Amministratore v3"
   },
   "descKey": {
    "DE": "Aktualisiert mit allen Neuheiten: wiederkehrende Aufträge, Teams mit Stundenaufteilung, Preis pro Stunde, Lohnabrechnung 2026 mit Quellensteuer-Liste, Monatsrapport mit Kilometern, Verträge mit Rechte-&-Pflichten-Seite, Rechnungen ohne MwSt., Lieferanten & Inventar, Standort beim Stempeln, Erinnerungen und automatischer Zugangsversand.",
    "ES": "Actualizado con todas las novedades: trabajos recurrentes, equipos con horas repartidas, precio por hora, nómina 2026 con lista de impuesto en la fuente, hoja mensual con kilómetros, contratos con página de derechos y obligaciones, facturas sin IVA, proveedores e inventario, ubicación al fichar, avisos y envío automático del acceso.",
    "EN": "Updated with all new features: recurring jobs, teams with split hours, price per hour, 2026 payroll with withholding-tax list, monthly sheet with kilometres, contracts with rights & obligations page, invoices without VAT, suppliers & inventory, clock-in location, reminders and automatic access sending.",
    "IT": "Aggiornato con tutte le novità: lavori ricorrenti, squadre con ore divise, prezzo orario, stipendi 2026 con lista imposta alla fonte, rapporto mensile con chilometri, contratti con pagina diritti e obblighi, fatture senza IVA, fornitori e inventario, posizione alla timbratura, promemoria e invio automatico dell'accesso."
   },
   "duration": {
    "DE": "2h 00min",
    "ES": "2h 00min",
    "EN": "2h 00min",
    "IT": "2h 00min"
   },
   "level": "intermediate",
   "progress": 0,
   "lessons_list": [
    {
     "id": "ac6l1",
     "titleKey": {
      "DE": "Kunden & Aufträge",
      "ES": "Clientes y trabajos",
      "EN": "Clients & jobs",
      "IT": "Clienti e lavori"
     },
     "done": false,
     "illustrationKey": "management_customer",
     "contentKey": {
      "DE": "👥 KUNDEN\n🔹 «+ Hinzufügen»: Vorname, Nachname, Adresse, Telefon, E-Mail und PREIS PRO STUNDE (CHF).\n🔹 🔍 Suche: nach Name, Ort oder Telefon.\n🔹 ✏️ Bearbeiten: das Formular zeigt alle aktuellen Daten (inkl. Namen) – nur ändern, was nötig ist.\n🔹 ☑️ Mehrfachauswahl: mehrere Kunden anhaken → «Löschen» (wie bei E-Mails).\n\n📋 AUFTRÄGE\n🔹 NEUER AUFTRAG: Kunde, Datum, Beginn, Ende, Art (🧹/🌿).\n🔹 WIEDERKEHREND: mehrere Wochentage anhaken (z.B. Mo + Mi + Fr). Die App erstellt jeden Einsatz automatisch.\n🔹 TEAM: mehrere Mitarbeiter für einen Auftrag wählen.\n🔹 GESAMTSTUNDEN AUFTEILEN: Gesamtstunden eingeben – die App teilt sie durch die Anzahl Personen.\n   Beispiel: 5 h mit 2 Personen → je 2.5 h (08:00–10:30). Jeder wird für seinen Teil bezahlt.\n🔹 BERECHNUNG: Kunde = geplante Stunden × Preis pro Stunde. Mitarbeiter = vereinbarte Stunden × Stundenlohn.\n🔹 ☑️ Mehrere Aufträge auf einmal löschen.\n\n⏰ ERINNERUNG: 1 Stunde vor jedem Auftrag erhält der Mitarbeiter automatisch eine Nachricht in der App.",
      "ES": "👥 CLIENTES\n🔹 «+ Añadir»: nombre, apellidos, dirección, teléfono, e-mail y PRECIO POR HORA (CHF).\n🔹 🔍 Buscar: por nombre, ciudad o teléfono.\n🔹 ✏️ Editar: el formulario muestra todos los datos actuales (también los nombres). Cambia solo lo necesario.\n🔹 ☑️ Selección múltiple: marca varios clientes → «Eliminar» (como en el correo).\n\n📋 TRABAJOS\n🔹 NUEVO TRABAJO: cliente, fecha, hora de inicio, hora de fin y tipo (🧹/🌿).\n🔹 RECURRENTE: marca varios días de la semana (por ejemplo lun + mié + vie). La app crea cada servicio sola.\n🔹 EQUIPO: elige varios empleados para un mismo trabajo.\n🔹 REPARTIR HORAS: escribe las horas totales y la app las divide entre las personas.\n   Ejemplo: 5 h con 2 personas → 2,5 h cada una (08:00–10:30). Cada una cobra su parte.\n🔹 CÁLCULO: cliente = horas planificadas × precio por hora. Empleado = horas pactadas × su precio por hora.\n🔹 ☑️ Borra varios trabajos a la vez.\n\n⏰ AVISO: 1 hora antes de cada trabajo, el empleado recibe automáticamente un mensaje en la app.",
      "EN": "👥 CLIENTS\n🔹 «+ Add»: first name, last name, address, phone, email and PRICE PER HOUR (CHF).\n🔹 🔍 Search: by name, city or phone.\n🔹 ✏️ Edit: the form shows all current data (incl. names) – change only what you need.\n🔹 ☑️ Multi-select: tick several clients → «Delete» (like email).\n\n📋 JOBS\n🔹 NEW JOB: client, date, start, end, type (🧹/🌿).\n🔹 RECURRING: tick several weekdays (e.g. Mon + Wed + Fri). The app creates each visit automatically.\n🔹 TEAM: choose several employees for one job.\n🔹 SPLIT TOTAL HOURS: enter total hours – the app divides them by the number of people.\n   Example: 5 h with 2 people → 2.5 h each (08:00–10:30). Each is paid for their part.\n🔹 CALCULATION: client = planned hours × price per hour. Employee = agreed hours × hourly rate.\n🔹 ☑️ Delete several jobs at once.\n\n⏰ REMINDER: 1 hour before each job the employee automatically gets an in-app message.",
      "IT": "👥 CLIENTI\n🔹 «+ Aggiungi»: nome, cognome, indirizzo, telefono, e-mail e PREZZO ORARIO (CHF).\n🔹 🔍 Cerca: per nome, città o telefono.\n🔹 ✏️ Modifica: il modulo mostra tutti i dati attuali (anche i nomi) – cambia solo il necessario.\n🔹 ☑️ Selezione multipla: spunta più clienti → «Elimina» (come nelle e-mail).\n\n📋 LAVORI\n🔹 NUOVO LAVORO: cliente, data, inizio, fine, tipo (🧹/🌿).\n🔹 RICORRENTE: spunta più giorni della settimana (es. lun + mer + ven). L'app crea ogni intervento da sola.\n🔹 SQUADRA: scegli più dipendenti per un lavoro.\n🔹 DIVIDERE LE ORE: inserisci le ore totali – l'app le divide per il numero di persone.\n   Esempio: 5 h con 2 persone → 2,5 h ciascuno (08:00–10:30). Ognuno è pagato per la sua parte.\n🔹 CALCOLO: cliente = ore pianificate × prezzo orario. Dipendente = ore concordate × paga oraria.\n🔹 ☑️ Elimina più lavori insieme.\n\n⏰ PROMEMORIA: 1 ora prima di ogni lavoro il dipendente riceve automaticamente un messaggio nell'app."
     }
    },
    {
     "id": "ac6l2",
     "titleKey": {
      "DE": "Mitarbeiter & Zugang",
      "ES": "Empleados y acceso",
      "EN": "Employees & access",
      "IT": "Dipendenti e accesso"
     },
     "done": false,
     "illustrationKey": "management_customer",
     "contentKey": {
      "DE": "👤 NEUER MITARBEITER\n🔹 Vorname, Nachname, Adresse, Telefon, E-Mail, AHV-Nr., Geburtsdatum, Bewilligung, Eintritt.\n🔹 GAV-KATEGORIE: Tätigkeit wählen → Mindestlohn wird eingesetzt.\n   Reinigung 2026: Unterhalt I 21.40 · Unterhalt II 22.90 · Spezial I 23.40 · Spezial II 24.90 · EBA 23.10 · EFZ 25.80 CHF/h.\n🔹 LOHN: Stundenlohn oder Monatslohn.\n🔹 FAMILIE: Zivilstand, Kinder (unter 12 / 12–16 / in Ausbildung) → Familienzulagen ZH automatisch.\n🔹 QUELLENSTEUER: Tarif einfach aus der Liste wählen (A/B/C/H + Kinder + Kirche). Kein Tippen nötig – der Satz kommt aus der offiziellen ZH-Tabelle.\n🔹 TRANSPORT: Auto (CHF 0.75/km) oder ÖV (Billettpreis).\n🔹 🔍 Suche nach Name, Ort, Telefon oder AHV.\n\n🔑 ZUGANG SENDEN\nNach dem Speichern öffnet sich «Zugang senden» automatisch. Link + PIN + Vertraulichkeitshinweis gehen per:\n• 💬 WhatsApp\n• 📧 Outlook, Gmail oder Mail-App (Nachricht ist vorbereitet – nur «Senden» klicken)\n• 📱 SMS (nur vom Handy)\n🔹 Später: Knopf «🔑 Zugang senden» auf der Mitarbeiterkarte.\n🔹 PIN verloren? Neuen PIN erzeugen – das Fenster öffnet sich wieder.\n🔹 Der Link lautet immer: patjac-app.vercel.app",
      "ES": "👤 NUEVO EMPLEADO\n🔹 Nombre, apellidos, dirección, teléfono, e-mail, n.º AHV, fecha de nacimiento, permiso y fecha de entrada.\n🔹 CATEGORÍA GAV: elige la actividad y la app pone el salario mínimo.\n   Limpieza 2026 (CHF/h): mantenimiento I 21,40 · mantenimiento II 22,90 · especial I 23,40 · especial II 24,90 · EBA 23,10 · EFZ 25,80.\n🔹 SALARIO: por hora o mensual.\n🔹 FAMILIA: estado civil e hijos (menores de 12 / de 12 a 16 / estudiando). Las asignaciones familiares de ZH se calculan solas.\n🔹 IMPUESTO EN LA FUENTE: elige la tarifa de la lista (A/B/C/H + hijos + iglesia). No hay que escribir nada: el % sale de la tabla oficial de ZH.\n🔹 TRANSPORTE: coche (CHF 0,75/km) o transporte público (precio del billete).\n🔹 🔍 Busca por nombre, ciudad, teléfono o AHV.\n\n🔑 ENVIAR ACCESO\nAl guardar un empleado se abre sola la ventana «Enviar acceso». El enlace, el PIN y el aviso de confidencialidad se envían por:\n• 💬 WhatsApp\n• 📧 Outlook, Gmail o App de correo (el mensaje ya está escrito; solo pulsa «Enviar»)\n• 📱 SMS (solo desde el móvil)\n🔹 Más tarde: botón «🔑 Enviar acceso» en la tarjeta del empleado.\n🔹 ¿Perdió el PIN? Genera uno nuevo y la ventana se abre otra vez.\n🔹 El enlace siempre es: patjac-app.vercel.app",
      "EN": "👤 NEW EMPLOYEE\n🔹 First name, last name, address, phone, email, AHV no., birth date, permit, start date.\n🔹 GAV CATEGORY: choose the activity → the minimum wage is filled in.\n   Cleaning 2026: maintenance I 21.40 · maintenance II 22.90 · special I 23.40 · special II 24.90 · EBA 23.10 · EFZ 25.80 CHF/h.\n🔹 WAGE: hourly or monthly.\n🔹 FAMILY: marital status, children (under 12 / 12–16 / in education) → ZH family allowances automatically.\n🔹 WITHHOLDING TAX: just pick the tariff from the list (A/B/C/H + children + church). No typing – the rate comes from the official ZH table.\n🔹 TRANSPORT: car (CHF 0.75/km) or public transport (ticket price).\n🔹 🔍 Search by name, city, phone or AHV.\n\n🔑 SEND ACCESS\nAfter saving, «Send access» opens automatically. Link + PIN + confidentiality notice go by:\n• 💬 WhatsApp\n• 📧 Outlook, Gmail or mail app (message is ready – just click «Send»)\n• 📱 SMS (from a phone only)\n🔹 Later: «🔑 Send access» button on the employee card.\n🔹 Lost PIN? Generate a new PIN – the window opens again.\n🔹 The link is always: patjac-app.vercel.app",
      "IT": "👤 NUOVO DIPENDENTE\n🔹 Nome, cognome, indirizzo, telefono, e-mail, n. AVS, data di nascita, permesso, entrata.\n🔹 CATEGORIA GAV: scegli l'attività → il salario minimo viene inserito.\n   Pulizie 2026: manutenzione I 21.40 · manutenzione II 22.90 · speciale I 23.40 · speciale II 24.90 · EBA 23.10 · EFZ 25.80 CHF/h.\n🔹 SALARIO: orario o mensile.\n🔹 FAMIGLIA: stato civile, figli (sotto 12 / 12–16 / in formazione) → assegni familiari ZH automatici.\n🔹 IMPOSTA ALLA FONTE: scegli la tariffa dalla lista (A/B/C/H + figli + chiesa). Niente da digitare – l'aliquota viene dalla tabella ufficiale ZH.\n🔹 TRASPORTO: auto (CHF 0.75/km) o mezzi pubblici (prezzo del biglietto).\n🔹 🔍 Cerca per nome, città, telefono o AVS.\n\n🔑 INVIA ACCESSO\nDopo il salvataggio si apre da sola «Invia accesso». Link + PIN + avviso di riservatezza via:\n• 💬 WhatsApp\n• 📧 Outlook, Gmail o app mail (il messaggio è pronto – basta cliccare «Invia»)\n• 📱 SMS (solo dal telefono)\n🔹 In seguito: pulsante «🔑 Invia accesso» sulla scheda del dipendente.\n🔹 PIN perso? Genera un nuovo PIN – la finestra si riapre.\n🔹 Il link è sempre: patjac-app.vercel.app"
     }
    },
    {
     "id": "ac6l3",
     "titleKey": {
      "DE": "Lohn, Monatsrapport & Verträge",
      "ES": "Nómina, hoja mensual y contratos",
      "EN": "Payroll, monthly sheet & contracts",
      "IT": "Stipendi, rapporto mensile e contratti"
     },
     "done": false,
     "illustrationKey": "management_invoice",
     "contentKey": {
      "DE": "💵 LOHNABRECHNUNG 2026 (automatisch)\n🔹 Stundenlohn + GAV-Zuschläge: Ferien 8.33% (oder 10.64%), Feiertage, 13. Monatslohn 8.33%.\n🔹 Abzüge Mitarbeiter: AHV/IV/EO 5.3% · ALV 1.1% · NBU 1.2% (ab 8 h/Woche) · KTG 0.5% · BVG (ab CHF 22'680/Jahr) · Quellensteuer (falls Tarif).\n🔹 Familienzulagen ZH: CHF 215 pro Kind, CHF 268 in Ausbildung.\n🔹 Arbeitgeberkosten werden nur Ihnen angezeigt.\n🔹 📄 Lohnabrechnung als PDF · 📧 per E-Mail senden.\n\n📋 MONATSRAPPORT\n🔹 Pro Tag: Datum, Kunde, Ort, Ein-/Ausstempelzeit, Kilometer.\n🔹 Weg Zuhause → 1. Kunde = privat. Kunde → Kunde = Arbeitszeit, wird bezahlt.\n🔹 Auto CHF 0.75/km oder ÖV-Billett.\n🔹 Kilometer werden über Karten berechnet. Fehlt ein Wert («?»), antippen und von Hand eintragen.\n\n📝 VERTRÄGE\n🔹 Mitarbeiter- oder Kundenvertrag wählen, GAV-Tätigkeit und Vertragsart.\n🔹 NEU: Jeder Vertrag hat eine Zusatzseite «Rechte & Pflichten» (Firma ↔ Mitarbeiter bzw. Firma ↔ Kunde) – für volle Transparenz.\n🔹 🔍 Suche nach Name.\n\n📁 DOKUMENTE (NEU)\n🔹 Mitarbeiter sehen die Lohnabrechnung nicht mehr als eigenes Symbol, sondern im Symbol «📁 Dokumente»: Lohnabrechnungen (jeden Monat automatisch nach Monatsende), Arbeitsrapport, Verträge und andere Dokumente.\n🔹 Als Admin: Mitarbeiter wählen → «📂 Andere Dokumente» → «⬆️ Dokument hochladen» (PDF, Bild, Word, max. 5 MB), für eine Person oder für alle.\n🔹 📤 In jeder Lohnabrechnung, jedem Arbeitsrapport und jedem Arbeitsvertrag gibt es den Knopf «An Mitarbeiter-Dokumente senden». Danach sieht der Mitarbeiter genau dieses Dokument in «📁 Dokumente» und kann es drucken.",
      "ES": "💵 NÓMINA 2026 (automática)\n🔹 Precio por hora + suplementos GAV: vacaciones 8,33 % (o 10,64 %), festivos y 13.º salario 8,33 %.\n🔹 Deducciones del empleado: AHV/IV/EO 5,3 % · ALV 1,1 % · NBU 1,2 % (desde 8 h/semana) · KTG 0,5 % · BVG (desde CHF 22 680/año) · impuesto en la fuente (si tiene tarifa).\n🔹 Asignaciones familiares ZH: CHF 215 por hijo y CHF 268 si está estudiando.\n🔹 El coste de la empresa solo lo ves tú.\n🔹 📄 Nómina en PDF · 📧 envío por e-mail.\n\n📋 HOJA MENSUAL\n🔹 Por día: fecha, cliente, lugar, horas de entrada y salida y kilómetros.\n🔹 De casa al primer cliente = trayecto privado. De un cliente a otro = tiempo de trabajo, y se paga.\n🔹 Coche CHF 0,75/km o billete de transporte público.\n🔹 Los kilómetros se calculan con mapas. Si falta alguno («?»), tócalo y escríbelo a mano.\n\n📝 CONTRATOS\n🔹 Elige contrato de empleado o de cliente, la actividad GAV y el tipo de contrato.\n🔹 NUEVO: cada contrato lleva una página extra de «Derechos y obligaciones» (empresa ↔ empleado o empresa ↔ cliente), para que todo sea transparente.\n🔹 🔍 Busca por nombre.\n\n📁 DOCUMENTOS (NUEVO)\n🔹 Los empleados ya no ven la nómina como icono aparte. Ahora está en el icono «📁 Documentos», junto con la hoja mensual, los contratos y otros documentos. La nómina de cada mes aparece sola al terminar el mes.\n🔹 Como administrador: elige el empleado → «📂 Otros documentos» → «⬆️ Subir documento» (PDF, imagen o Word, máx. 5 MB), para una persona o para todos.\n🔹 📤 Cada nómina, hoja mensual y contrato laboral tiene el botón «Enviar a Documentos del empleado». Al pulsarlo, el empleado ve ese documento en «📁 Documentos» y puede imprimirlo.",
      "EN": "💵 PAYROLL 2026 (automatic)\n🔹 Hourly wage + GAV supplements: holidays 8.33% (or 10.64%), public holidays, 13th salary 8.33%.\n🔹 Employee deductions: AHV/IV/EO 5.3% · ALV 1.1% · NBU 1.2% (from 8 h/week) · KTG 0.5% · BVG (from CHF 22,680/year) · withholding tax (if tariff).\n🔹 ZH family allowances: CHF 215 per child, CHF 268 in education.\n🔹 Employer costs are shown only to you.\n🔹 📄 Payslip as PDF · 📧 send by email.\n\n📋 MONTHLY SHEET\n🔹 Per day: date, client, place, clock-in/out time, kilometres.\n🔹 Home → 1st client = private. Client → client = working time, paid.\n🔹 Car CHF 0.75/km or public transport ticket.\n🔹 Kilometres are calculated with maps. If a value is missing («?»), tap it and enter it by hand.\n\n📝 CONTRACTS\n🔹 Choose employee or client contract, GAV activity and contract type.\n🔹 NEW: every contract has an extra page «Rights & obligations» (company ↔ employee or company ↔ client) – for full transparency.\n🔹 🔍 Search by name.\n\n📁 DOCUMENTS (NEW)\n🔹 Employees no longer see payroll as a separate icon but inside «📁 Documents»: payslips (automatically after each month-end), work sheet, contracts and other documents.\n🔹 As admin: choose the employee → «📂 Other documents» → «⬆️ Upload document» (PDF, image, Word, max 5 MB), for one person or for everyone.\n🔹 📤 Every payslip, work sheet and employment contract has the button «Send to employee documents». The employee then sees exactly that document in «📁 Documents» and can print it.",
      "IT": "💵 BUSTA PAGA 2026 (automatica)\n🔹 Paga oraria + supplementi GAV: vacanze 8.33% (o 10.64%), festivi, 13a mensilità 8.33%.\n🔹 Deduzioni dipendente: AVS/AI/IPG 5.3% · AD 1.1% · AINP 1.2% (da 8 h/settimana) · IGM 0.5% · LPP (da CHF 22'680/anno) · imposta alla fonte (se tariffa).\n🔹 Assegni familiari ZH: CHF 215 per figlio, CHF 268 in formazione.\n🔹 I costi del datore di lavoro sono visibili solo a te.\n🔹 📄 Busta paga in PDF · 📧 invio per e-mail.\n\n📋 RAPPORTO MENSILE\n🔹 Per giorno: data, cliente, luogo, ora di entrata/uscita, chilometri.\n🔹 Casa → 1° cliente = privato. Cliente → cliente = tempo di lavoro, pagato.\n🔹 Auto CHF 0.75/km o biglietto dei mezzi pubblici.\n🔹 I chilometri sono calcolati con le mappe. Se manca un valore («?»), toccalo e inseriscilo a mano.\n\n📝 CONTRATTI\n🔹 Scegli contratto dipendente o cliente, attività GAV e tipo di contratto.\n🔹 NUOVO: ogni contratto ha una pagina in più «Diritti e obblighi» (azienda ↔ dipendente o azienda ↔ cliente) – per piena trasparenza.\n🔹 🔍 Cerca per nome.\n\n📁 DOCUMENTI (NUOVO)\n🔹 I dipendenti non vedono più gli stipendi come icona separata ma dentro «📁 Documenti»: buste paga (automaticamente a fine mese), rapporto, contratti e altri documenti.\n🔹 Come admin: scegli il dipendente → «📂 Altri documenti» → «⬆️ Carica documento» (PDF, immagine, Word, max 5 MB), per una persona o per tutti.\n🔹 📤 Ogni busta paga, rapporto e contratto di lavoro ha il pulsante «Invia ai documenti del dipendente». Il dipendente vede poi quel documento in «📁 Documenti» e può stamparlo."
     }
    },
    {
     "id": "ac6l4",
     "titleKey": {
      "DE": "Rechnungen, Lager & Berichte",
      "ES": "Facturas, almacén e informes",
      "EN": "Invoices, warehouse & reports",
      "IT": "Fatture, magazzino e rapporti"
     },
     "done": false,
     "illustrationKey": "management_invoice",
     "contentKey": {
      "DE": "🧾 RECHNUNGEN\n🔹 Kunde wählen → Betrag = geplante Stunden × Preis pro Stunde.\n🔹 OHNE MwSt.: Rechnungen an Kunden werden ohne Mehrwertsteuer erstellt.\n🔹 Swiss-QR-Zahlungsteil mit Ihrer IBAN (in Einstellungen hinterlegen).\n🔹 Status: Offen → Bezahlt. ☑️ Mehrere auf einmal löschen.\n\n📦 LAGER & LIEFERANTEN\n🔹 Produkte mit Preis und Bestand. Mindestbestand → Warnung.\n🔹 Lieferanten nach Kategorie filtern: 🧹 Reinigung · 🌿 Garten · 🧱 Kleinbau · 🛠️ Maschinen (22 Lieferanten mit Webseite und Notizen bereits erfasst).\n🔹 Bestellungen erstellen und per E-Mail senden.\n\n📈 BERICHTE → INVENTAR\n🔹 Jederzeit eine Inventur machen: gezählte Menge eintragen → Differenz und Wert werden berechnet → «Inventar speichern».\n🔹 Empfehlung: einmal pro Monat.",
      "ES": "🧾 FACTURAS\n🔹 Elige el cliente. El importe = horas planificadas × precio por hora.\n🔹 SIN IVA: las facturas a clientes se hacen sin IVA.\n🔹 La parte de pago Swiss QR lleva tu IBAN (guárdalo en Configuración).\n🔹 Estado: Pendiente → Pagada. ☑️ Puedes borrar varias a la vez.\n\n📦 ALMACÉN Y PROVEEDORES\n🔹 Productos con precio y existencias. Si bajan del mínimo, sale un aviso.\n🔹 Filtra los proveedores por categoría: 🧹 limpieza · 🌿 jardín · 🧱 obras pequeñas · 🛠️ maquinaria. Ya hay 22 proveedores guardados, con su web y notas.\n🔹 Crea pedidos y envíalos por e-mail.\n\n📈 INFORMES → INVENTARIO\n🔹 Haz inventario cuando quieras: escribe la cantidad contada. La app calcula la diferencia y el valor. Luego pulsa «Guardar inventario».\n🔹 Recomendación: una vez al mes.",
      "EN": "🧾 INVOICES\n🔹 Choose client → amount = planned hours × price per hour.\n🔹 NO VAT: client invoices are created without VAT.\n🔹 Swiss QR payment part with your IBAN (store it in Settings).\n🔹 Status: Open → Paid. ☑️ Delete several at once.\n\n📦 WAREHOUSE & SUPPLIERS\n🔹 Products with price and stock. Minimum stock → warning.\n🔹 Filter suppliers by category: 🧹 cleaning · 🌿 garden · 🧱 small construction · 🛠️ machinery (22 suppliers with website and notes already saved).\n🔹 Create orders and send them by email.\n\n📈 REPORTS → INVENTORY\n🔹 Do a stock count any time: enter the counted quantity → difference and value are calculated → «Save inventory».\n🔹 Recommended: once a month.",
      "IT": "🧾 FATTURE\n🔹 Scegli il cliente → importo = ore pianificate × prezzo orario.\n🔹 SENZA IVA: le fatture ai clienti sono create senza IVA.\n🔹 Sezione di pagamento Swiss QR con il tuo IBAN (da salvare in Impostazioni).\n🔹 Stato: Aperta → Pagata. ☑️ Elimina più fatture insieme.\n\n📦 MAGAZZINO E FORNITORI\n🔹 Prodotti con prezzo e giacenza. Sotto il minimo → avviso.\n🔹 Filtra i fornitori per categoria: 🧹 pulizie · 🌿 giardino · 🧱 piccole opere · 🛠️ macchinari (22 fornitori con sito web e note già salvati).\n🔹 Crea ordini e inviali per e-mail.\n\n📈 RAPPORTI → INVENTARIO\n🔹 Fai l'inventario quando vuoi: inserisci la quantità contata → differenza e valore calcolati → «Salva inventario».\n🔹 Consiglio: una volta al mese."
     }
    },
    {
     "id": "ac6l5",
     "titleKey": {
      "DE": "Zeiterfassung, Standorte & Nachrichten",
      "ES": "Fichaje, ubicaciones y mensajes",
      "EN": "Time clock, locations & messages",
      "IT": "Timbrature, posizioni e messaggi"
     },
     "done": false,
     "illustrationKey": "management_customer",
     "contentKey": {
      "DE": "⏱️ ZEITERFASSUNG\n🔹 Mitarbeiter stempeln pro Kunde ein und aus. Stunden werden automatisch berechnet.\n🔹 Als Admin: Mitarbeiter oben wählen, um seine Stempelungen zu sehen.\n\n📍 STANDORTE (Betrugsschutz)\n🔹 Registerkarte «📍 Standorte»: Adresse beim Einstempeln und beim Ausstempeln, mit Distanz zur Kundenadresse.\n🔹 Grün = beim Kunden · Gelb/Rot = weit entfernt → nachfragen.\n🔹 Filter nach Mitarbeiter.\n\n💬 NACHRICHTEN\n🔹 Chat mit jedem Mitarbeiter, mit Fotos (Galerie oder Kamera).\n🔹 🔔 Benachrichtigungen erlauben, damit neue Nachrichten sofort erscheinen.\n🔹 ⏰ Automatische Erinnerung an den Mitarbeiter 1 Stunde vor jedem Auftrag.\n🔹 🧹 Jeden Sonntag um 12:00 werden alle Nachrichten automatisch gelöscht.\n\n🛡️ TIPPS\n🔹 Mitarbeiter sehen nur ihre eigenen Daten (Aufträge, Stempelungen, Lohn).\n🔹 Schicken Sie jedem neuen Mitarbeiter den Kurs «App-Anleitung für Mitarbeiter» in der Academy.",
      "ES": "⏱️ FICHAJE\n🔹 Los empleados fichan entrada y salida en cada cliente. Las horas se calculan solas.\n🔹 Como administrador: elige arriba el empleado para ver sus fichajes.\n\n📍 UBICACIONES (contra fraudes)\n🔹 Pestaña «📍 Ubicaciones»: dirección al fichar entrada y al fichar salida, con la distancia hasta la dirección del cliente.\n🔹 Verde = estaba en el cliente · Amarillo/rojo = estaba lejos. En ese caso, pregunta.\n🔹 Puedes filtrar por empleado.\n\n💬 MENSAJES\n🔹 Chat con cada empleado, con fotos (de la galería o de la cámara).\n🔹 🔔 Permite las notificaciones para que los mensajes nuevos salgan al momento.\n🔹 ⏰ Aviso automático al empleado 1 hora antes de cada trabajo.\n🔹 🧹 Cada domingo a las 12:00 se borran todos los mensajes automáticamente.\n\n🛡️ CONSEJOS\n🔹 Los empleados solo ven sus propios datos: trabajos, fichajes y nómina.\n🔹 A cada empleado nuevo, pídele que haga el curso «Guía de la app para empleados» de la Academy.",
      "EN": "⏱️ TIME CLOCK\n🔹 Employees clock in and out per client. Hours are calculated automatically.\n🔹 As admin: choose the employee at the top to see their records.\n\n📍 LOCATIONS (anti-fraud)\n🔹 «📍 Locations» tab: address at clock-in and clock-out, with distance to the client address.\n🔹 Green = at the client · Yellow/red = far away → ask.\n🔹 Filter by employee.\n\n💬 MESSAGES\n🔹 Chat with each employee, with photos (gallery or camera).\n🔹 🔔 Allow notifications so new messages appear immediately.\n🔹 ⏰ Automatic reminder to the employee 1 hour before each job.\n🔹 🧹 Every Sunday at 12:00 all messages are deleted automatically.\n\n🛡️ TIPS\n🔹 Employees only see their own data (jobs, clock records, pay).\n🔹 Ask every new employee to take the «App guide for employees» course in the Academy.",
      "IT": "⏱️ TIMBRATURE\n🔹 I dipendenti timbrano entrata e uscita per ogni cliente. Le ore sono calcolate automaticamente.\n🔹 Come admin: scegli il dipendente in alto per vedere le sue timbrature.\n\n📍 POSIZIONI (antifrode)\n🔹 Scheda «📍 Posizioni»: indirizzo all'entrata e all'uscita, con distanza dall'indirizzo del cliente.\n🔹 Verde = dal cliente · Giallo/rosso = lontano → chiedi.\n🔹 Filtro per dipendente.\n\n💬 MESSAGGI\n🔹 Chat con ogni dipendente, con foto (galleria o fotocamera).\n🔹 🔔 Consenti le notifiche per vedere subito i nuovi messaggi.\n🔹 ⏰ Promemoria automatico al dipendente 1 ora prima di ogni lavoro.\n🔹 🧹 Ogni domenica alle 12:00 tutti i messaggi vengono cancellati automaticamente.\n\n🛡️ CONSIGLI\n🔹 I dipendenti vedono solo i propri dati (lavori, timbrature, stipendio).\n🔹 Chiedi a ogni nuovo dipendente di seguire il corso «Guida all'app per dipendenti» nell'Academy."
     }
    }
   ],
   "quiz": [
    {
     "q": {
      "DE": "Wie loggt sich ein Mitarbeiter ein?",
      "ES": "¿Cómo entra un empleado en la app?",
      "EN": "How does an employee log in?",
      "IT": "Come accede un dipendente?"
     },
     "opts": {
      "DE": [
       "«Mitarbeiter» + PIN",
       "E-Mail + Passwort",
       "Fingerabdruck",
       "QR-Code"
      ],
      "ES": [
       "«Empleado» + PIN",
       "E-mail + contraseña",
       "Huella dactilar",
       "Código QR"
      ],
      "EN": [
       "«Employee» + PIN",
       "Email + password",
       "Fingerprint",
       "QR code"
      ],
      "IT": [
       "«Dipendente» + PIN",
       "E-mail + password",
       "Impronta digitale",
       "Codice QR"
      ]
     },
     "ans": 0
    },
    {
     "q": {
      "DE": "Ein Auftrag dauert 5 h mit 2 Personen. Wie viele Stunden arbeitet jede Person?",
      "ES": "Un trabajo de 5 h con 2 personas. ¿Cuántas horas trabaja cada una?",
      "EN": "A 5 h job with 2 people. How many hours does each person work?",
      "IT": "Un lavoro di 5 h con 2 persone. Quante ore lavora ciascuno?"
     },
     "opts": {
      "DE": [
       "2.5 h",
       "5 h",
       "10 h",
       "1 h"
      ],
      "ES": [
       "2,5 h",
       "5 h",
       "10 h",
       "1 h"
      ],
      "EN": [
       "2.5 h",
       "5 h",
       "10 h",
       "1 h"
      ],
      "IT": [
       "2,5 h",
       "5 h",
       "10 h",
       "1 h"
      ]
     },
     "ans": 0
    },
    {
     "q": {
      "DE": "Wann erhält ein Mitarbeiter die Auftragserinnerung?",
      "ES": "¿Cuándo recibe el empleado el aviso del trabajo?",
      "EN": "When does an employee get the job reminder?",
      "IT": "Quando riceve il dipendente il promemoria?"
     },
     "opts": {
      "DE": [
       "1 Stunde vorher",
       "1 Tag vorher",
       "Nach dem Auftrag",
       "Nie"
      ],
      "ES": [
       "1 hora antes",
       "1 día antes",
       "Después del trabajo",
       "Nunca"
      ],
      "EN": [
       "1 hour before",
       "1 day before",
       "After the job",
       "Never"
      ],
      "IT": [
       "1 ora prima",
       "1 giorno prima",
       "Dopo il lavoro",
       "Mai"
      ]
     },
     "ans": 0
    },
    {
     "q": {
      "DE": "Wann werden die Chat-Nachrichten gelöscht?",
      "ES": "¿Cuándo se borran los mensajes del chat?",
      "EN": "When are chat messages deleted?",
      "IT": "Quando vengono cancellati i messaggi?"
     },
     "opts": {
      "DE": [
       "Sonntag 12:00",
       "Nach 30 Tagen",
       "Nie",
       "Jeden Tag"
      ],
      "ES": [
       "Domingo 12:00",
       "A los 30 días",
       "Nunca",
       "Cada día"
      ],
      "EN": [
       "Sunday 12:00",
       "After 30 days",
       "Never",
       "Every day"
      ],
      "IT": [
       "Domenica 12:00",
       "Dopo 30 giorni",
       "Mai",
       "Ogni giorno"
      ]
     },
     "ans": 0
    },
    {
     "q": {
      "DE": "Wie viel wird pro km mit dem Auto zwischen Kunden vergütet?",
      "ES": "¿Cuánto se paga por km en coche entre clientes?",
      "EN": "How much is paid per km by car between clients?",
      "IT": "Quanto si rimborsa al km in auto tra clienti?"
     },
     "opts": {
      "DE": [
       "CHF 0.75",
       "CHF 0.50",
       "CHF 1.00",
       "Nichts"
      ],
      "ES": [
       "CHF 0,75",
       "CHF 0,50",
       "CHF 1,00",
       "Nada"
      ],
      "EN": [
       "CHF 0.75",
       "CHF 0.50",
       "CHF 1.00",
       "Nothing"
      ],
      "IT": [
       "CHF 0.75",
       "CHF 0.50",
       "CHF 1.00",
       "Niente"
      ]
     },
     "ans": 0
    },
    {
     "q": {
      "DE": "Wie wählen Sie die Quellensteuer?",
      "ES": "¿Cómo se pone el impuesto en la fuente?",
      "EN": "How do you set withholding tax?",
      "IT": "Come si imposta l'imposta alla fonte?"
     },
     "opts": {
      "DE": [
       "Tarif aus der Liste wählen",
       "Prozent von Hand tippen",
       "Gar nicht",
       "Per Telefon"
      ],
      "ES": [
       "Elijo la tarifa de la lista",
       "Escribo el % a mano",
       "No se pone",
       "Por teléfono"
      ],
      "EN": [
       "Pick the tariff from the list",
       "Type the % by hand",
       "Not at all",
       "By phone"
      ],
      "IT": [
       "Scelgo la tariffa dalla lista",
       "Scrivo la % a mano",
       "Per niente",
       "Per telefono"
      ]
     },
     "ans": 0
    }
   ]
  },
];

// SVG illustration renderer
// SVG illustration renderer
function CourseIllustration({illustrationKey, height=160}){
  const svg = ACADEMY_ILLUSTRATIONS[illustrationKey] || ACADEMY_ILLUSTRATIONS.cleaning;
  return (
    <div style={{borderRadius:14,overflow:"hidden",height,flexShrink:0,background:"#0a1628"}}
      dangerouslySetInnerHTML={{__html: svg.trim()}}
    />
  );
}

function AcademyApp({t, lang, setLang, notify, onBack, currentUser}){
  const [view,setView] = useState("home");
  const [selCourse,setSelCourse] = useState(null);
  const [selLesson,setSelLesson] = useState(null);
  const [filter,setFilter] = useState("all");
  const [search,setSearch] = useState("");
  const [quizState,setQuizState] = useState({step:0,answers:[],done:false});
  // Employees don't see the administrator manual; their app guide is shown first
  const isEmployee = currentUser?.role==="employee";
  const [courses,setCourses] = useState(()=>{
    const list = ACADEMY_COURSES_V2.filter(c=>!(isEmployee&&c.adminOnly));
    return isEmployee ? [...list.filter(c=>c.category==="app"), ...list.filter(c=>c.category!=="app")] : list;
  });

  const cats=[
    {id:"all",  emoji:"📚", labelKey:{DE:"Alle",ES:"Todos",EN:"All",IT:"Tutti"}},
    {id:"app",        emoji:"📱", labelKey:{DE:"App-Anleitung",ES:"Guía de la app",EN:"App guide",IT:"Guida app"}},
    {id:"cleaning",   emoji:"🧹", labelKey:{DE:"Reinigung",ES:"Limpieza",EN:"Cleaning",IT:"Pulizie"}},
    {id:"gardening",  emoji:"🌿", labelKey:{DE:"Garten",ES:"Jardín",EN:"Gardening",IT:"Giardino"}},
    {id:"management", emoji:"📋", labelKey:{DE:"Management",ES:"Gestión",EN:"Management",IT:"Gestione"}},
    {id:"safety",     emoji:"🦺", labelKey:{DE:"Sicherheit",ES:"Seguridad",EN:"Safety",IT:"Sicurezza"}},
  ];

  const filtered = courses.filter(c=>{
    const matchCat = filter==="all"||c.category===filter;
    const title = c.titleKey[lang]||c.titleKey.EN;
    const matchSearch = !search||title.toLowerCase().includes(search.toLowerCase());
    return matchCat&&matchSearch;
  });

  const totalCompleted = courses.filter(c=>c.progress===100).length;
  const totalInProgress = courses.filter(c=>c.progress>0&&c.progress<100).length;
  const avgProgress = Math.round(courses.reduce((s,c)=>s+c.progress,0)/courses.length);
  const studyMins = courses.reduce((s,c)=>s+c.lessons_list.filter(l=>l.done).length*15,0);

  const levelLabel = lv => ({beginner:t.beginner||"Beginner",intermediate:t.intermediate||"Intermediate",advanced:t.advanced||"Expert"})[lv]||lv;
  const levelColor = lv => lv==="beginner"?"green":lv==="intermediate"?"yellow":"red";
  const badgeColor = b => b==="featured"?"#E67700":b==="new"?"#7048E8":"#1098AD";

  const markLesson = (courseId, lessonId) => {
    setCourses(prev=>prev.map(c=>{
      if(c.id!==courseId) return c;
      const nl = c.lessons_list.map(l=>l.id===lessonId?{...l,done:true}:l);
      const prog = Math.round((nl.filter(l=>l.done).length/nl.length)*100);
      const updated = {...c,lessons_list:nl,progress:prog};
      if(selCourse?.id===courseId) setSelCourse(updated);
      return updated;
    }));
    notify(`✓ ${t.completed||"Completed"}`,"success");
  };

  const LangBar = () => (
    <div style={{display:"flex",gap:5}}>
      {["DE","ES","EN","IT"].map(l=>(
        <button key={l} onClick={()=>setLang(l)} style={{
          padding:"4px 10px",borderRadius:16,border:"none",cursor:"pointer",
          background:lang===l?"rgba(230,119,0,0.85)":"rgba(255,255,255,0.1)",
          color:"#fff",fontSize:11,fontWeight:700,fontFamily:CP.font,
        }}>{l}</button>
      ))}
    </div>
  );

  // ── HOME ──────────────────────────────────────────────
  if(view==="home") return (
    <CPScreen title={t.academy||"Patjac Academy"} icon="🎓" onBack={onBack} t={t} actions={<LangBar/>}>
      {/* Hero with illustration */}
      <div style={{
        background:"linear-gradient(135deg,rgba(230,119,0,0.22),rgba(230,119,0,0.06))",
        border:"1px solid rgba(230,119,0,0.3)",borderRadius:22,
        padding:"20px 24px",marginBottom:20,
        display:"flex",alignItems:"center",gap:20,flexWrap:"wrap",
      }}>
        <div style={{flex:1,minWidth:200}}>
          <div style={{color:"#fff",fontWeight:700,fontSize:20,marginBottom:6}}>{t.academyWelcome||"Patjac Academy"}</div>
          <div style={{color:"rgba(255,255,255,0.65)",fontSize:13,lineHeight:1.6}}>{t.academyDesc}</div>
          <div style={{marginTop:10,display:"flex",gap:8,flexWrap:"wrap"}}>
            <span style={{background:"rgba(230,119,0,0.2)",border:"1px solid rgba(230,119,0,0.4)",borderRadius:20,padding:"3px 10px",color:"#FFD43B",fontSize:11,fontWeight:700}}>✓ Allpura CH</span>
            <span style={{background:"rgba(47,158,68,0.2)",border:"1px solid rgba(47,158,68,0.4)",borderRadius:20,padding:"3px 10px",color:"#69DB7C",fontSize:11,fontWeight:700}}>✓ JardinSuisse CH</span>
            <span style={{background:"rgba(201,42,42,0.2)",border:"1px solid rgba(201,42,42,0.4)",borderRadius:20,padding:"3px 10px",color:"#FF8787",fontSize:11,fontWeight:700}}>✓ SUVA/VUV</span>
            <span style={{background:"rgba(28,126,214,0.2)",border:"1px solid rgba(28,126,214,0.4)",borderRadius:20,padding:"3px 10px",color:"#74C0FC",fontSize:11,fontWeight:700}}>✓ ChemV/REACH</span>
          </div>
        </div>
        <div style={{fontSize:56}}>🎓</div>
      </div>

      {/* Stats */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(130px,1fr))",gap:10,marginBottom:18}}>
        <CPStat label={t.totalCourses||"Courses"} value={courses.length} icon="📚" accent="#E67700"/>
        <CPStat label={t.completedCourses||"Completed"} value={totalCompleted} icon="✅" accent="#2F9E44"/>
        <CPStat label={t.inProgress||"In Progress"} value={totalInProgress} icon="⏳" accent="#1C7ED6"/>
        <CPStat label={t.studyTime||"Study"} value={`${studyMins}min`} icon="⏱️" accent="#7048E8"/>
      </div>

      {/* Progress bar */}
      <CPCard style={{marginBottom:18}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
          <span style={{color:CP.textSecondary,fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:.4}}>{t.yourProgress||"Progress"}</span>
          <span style={{color:"#E67700",fontWeight:700,fontSize:18}}>{avgProgress}%</span>
        </div>
        <div style={{height:10,background:"rgba(255,255,255,0.07)",borderRadius:20,overflow:"hidden"}}>
          <div style={{height:"100%",width:`${avgProgress}%`,background:"linear-gradient(90deg,#E67700,#FFD43B)",borderRadius:20}}/>
        </div>
      </CPCard>

      {/* Search & filters */}
      <div style={{marginBottom:12}}>
        <CPInput value={search} onChange={e=>setSearch(e.target.value)} placeholder={`🔍 ${t.searchCourses||"Search..."}`}/>
      </div>
      <div style={{display:"flex",gap:7,marginBottom:18,flexWrap:"wrap"}}>
        {cats.map(cat=>(
          <button key={cat.id} onClick={()=>setFilter(cat.id)} style={{
            padding:"7px 15px",borderRadius:24,border:"none",cursor:"pointer",fontSize:13,fontWeight:700,
            background:filter===cat.id?"rgba(230,119,0,0.75)":"rgba(255,255,255,0.08)",
            color:"#fff",display:"flex",alignItems:"center",gap:5,fontFamily:CP.font,transition:"background .15s",
          }}>{cat.emoji} {cat.labelKey[lang]||cat.labelKey.EN}</button>
        ))}
      </div>

      {/* Course cards */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(290px,1fr))",gap:16}}>
        {filtered.map(course=>{
          const title=course.titleKey[lang]||course.titleKey.EN;
          const desc=course.descKey[lang]||course.descKey.EN;
          const dur=course.duration[lang]||course.duration.EN;
          const doneLessons=course.lessons_list.filter(l=>l.done).length;
          return (
            <div key={course.id} onClick={()=>{setSelCourse(course);setView("course");setQuizState({step:0,answers:[],done:false});}}
              style={{background:CP.surface,border:`1px solid ${CP.border}`,borderRadius:20,overflow:"hidden",cursor:"pointer",transition:"all .18s"}}
              onMouseEnter={e=>{e.currentTarget.style.background=CP.surfaceHover;e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow=`0 12px 32px rgba(0,0,0,0.5)`;}}
              onMouseLeave={e=>{e.currentTarget.style.background=CP.surface;e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="none";}}
            >
              {/* Illustration */}
              <CourseIllustration illustrationKey={course.illustrationKey} height={140}/>
              {/* Badge overlay */}
              {course.badge&&(
                <div style={{position:"relative"}}>
                  <div style={{position:"absolute",top:-32,right:12,background:badgeColor(course.badge),color:"#fff",fontSize:10,fontWeight:700,padding:"3px 10px",borderRadius:12}}>
                    {course.badge==="featured"?`★ ${t.featured||"Featured"}`:course.badge==="new"?`✦ ${t.new||"New"}`:`🔥 ${t.popular||"Popular"}`}
                  </div>
                </div>
              )}
              <div style={{padding:"14px 16px"}}>
                <div style={{color:"#fff",fontWeight:700,fontSize:14,marginBottom:6,lineHeight:1.4}}>{title}</div>
                <div style={{color:CP.textSecondary,fontSize:12,marginBottom:10,lineHeight:1.5,display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"}}>{desc}</div>
                <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:10}}>
                  <CPBadge text={levelLabel(course.level)} color={levelColor(course.level)}/>
                  <CPBadge text={`${course.lessons_list.length} ${t.lessons||"lessons"}`} color="gray"/>
                  <CPBadge text={dur} color="gray"/>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
                  <div style={{flex:1,height:5,background:"rgba(255,255,255,0.07)",borderRadius:10,overflow:"hidden"}}>
                    <div style={{height:"100%",width:`${course.progress}%`,background:course.progress===100?"#2F9E44":"#E67700",borderRadius:10}}/>
                  </div>
                  <span style={{color:course.progress===100?"#69DB7C":"#E67700",fontSize:11,fontWeight:700,minWidth:32}}>{course.progress}%</span>
                </div>
                <CPBtn size="sm" style={{
                  background:course.progress===100?"#2F9E44":course.progress>0?"#E67700":"#1C7ED6",
                  width:"100%",justifyContent:"center",borderRadius:12,border:"none",
                }}>
                  {course.progress===100?`✓ ${t.completed||"Done"}`:course.progress>0?(t.continueCourse||"Continue"):(t.startCourse||"Start")} →
                </CPBtn>
              </div>
            </div>
          );
        })}
      </div>
      {filtered.length===0&&<div style={{color:CP.textTertiary,textAlign:"center",padding:"3rem",fontSize:15}}>{t.noRecords||"—"}</div>}

      {/* ═══ EXTERNAL FREE COURSES ═══ */}
      {filter==="all"||filter==="cleaning"||filter==="gardening"||filter==="safety"||filter==="management" ? (() => {
        const L = makeL(lang);
        const EXT_COURSES = [
          // 🧹 CLEANING
          {
            cat:"cleaning", emoji:"🧹",
            title:{DE:"Grundlagen der professionellen Reinigung",ES:"Fundamentos de la limpieza profesional",EN:"Fundamentals of Professional Cleaning",IT:"Fondamenti della pulizia professionale"},
            desc:{DE:"Innen- und Aussenreinigung, sichere Verwendung von Reinigungsmitteln, Arbeitszeiten und mehr.",ES:"Limpieza interior y exterior, uso seguro de productos, horas de trabajo y más.",EN:"Indoor and outdoor cleaning, safe use of cleaning agents, working hours and more.",IT:"Pulizie interne ed esterne, uso sicuro dei detergenti, orari di lavoro e altro."},
            provider:"Alison", level:"Beginner", duration:"2–3h", free:true,
            url:"https://alison.com/course/fundamentals-of-professional-cleaning",
          },
          {
            cat:"cleaning", emoji:"🧹",
            title:{DE:"Grundlagen der Hausreinigung",ES:"Fundamentos de limpieza del hogar",EN:"House Cleaning Fundamentals",IT:"Fondamenti della pulizia domestica"},
            desc:{DE:"Natürliche Reinigungsmittel, Zimmer für Zimmer Techniken, umweltfreundliche Methoden.",ES:"Productos naturales, técnicas por habitación, métodos ecológicos.",EN:"Natural cleaners, room-by-room techniques, eco-friendly methods.",IT:"Detergenti naturali, tecniche stanza per stanza, metodi ecologici."},
            provider:"Alison", level:"Beginner", duration:"1–2h", free:true,
            url:"https://alison.com/course/house-cleaning-fundamentals",
          },
          {
            cat:"cleaning", emoji:"🏨",
            title:{DE:"Housekeeping: Aufgaben und Verfahren",ES:"Housekeeping: tareas y procedimientos",EN:"Housekeeping Tasks and Procedures",IT:"Housekeeping: compiti e procedure"},
            desc:{DE:"Professionelles Housekeeping im Gastgewerbe — Zimmerreinigung, Wäsche, Standards.",ES:"Housekeeping profesional en hostelería — limpieza de habitaciones, lavandería, estándares.",EN:"Professional housekeeping in hospitality — room cleaning, laundry, standards.",IT:"Housekeeping professionale nell'ospitalità — pulizia camere, lavanderia, standard."},
            provider:"Alison", level:"Beginner", duration:"2–3h", free:true,
            url:"https://alison.com/course/housekeeping-tasks-and-procedures",
          },
          // 🌿 GARDENING
          {
            cat:"gardening", emoji:"🌿",
            title:{DE:"Diplom: Gartengestaltung und -pflege",ES:"Diploma: Diseño y mantenimiento de jardines",EN:"Diploma in Garden Design and Maintenance",IT:"Diploma in progettazione e manutenzione del giardino"},
            desc:{DE:"Vollständige Ausbildung: Planung, Bepflanzung, Pflege und Landschaftsgestaltung.",ES:"Formación completa: planificación, plantación, mantenimiento y paisajismo.",EN:"Complete training: planning, planting, maintenance and landscaping.",IT:"Formazione completa: pianificazione, piantumazione, manutenzione e paesaggismo."},
            provider:"Alison", level:"Beginner", duration:"10–15h", free:true,
            url:"https://alison.com/course/diploma-in-garden-design-and-maintenance",
          },
          {
            cat:"gardening", emoji:"🌱",
            title:{DE:"Grundlagen der Gartenbau (Horticulture)",ES:"Fundamentos de horticultura",EN:"Basics of Horticulture",IT:"Basi dell'orticoltura"},
            desc:{DE:"Obst, Gemüse und Zierpflanzen — Landschaftsgestaltung, Pflanzenkunde, Karrieremöglichkeiten.",ES:"Frutas, verduras y plantas ornamentales — paisajismo, botánica, oportunidades profesionales.",EN:"Fruits, vegetables and ornamental plants — landscaping, botany, career opportunities.",IT:"Frutta, verdura e piante ornamentali — paesaggismo, botanica, opportunità di carriera."},
            provider:"Alison", level:"Beginner", duration:"3–5h", free:true,
            url:"https://alison.com/course/basics-of-horticulture",
          },
          {
            cat:"gardening", emoji:"🪴",
            title:{DE:"Grundlagen der Gartengestaltung",ES:"Fundamentos del diseño de jardines",EN:"Garden Design Fundamentals",IT:"Fondamenti di progettazione del giardino"},
            desc:{DE:"Blumen, Sträucher, Schädlingsbekämpfung, Bewässerung, Kosten der Gartenplanung.",ES:"Flores, arbustos, control de plagas, riego, costes de planificación de jardines.",EN:"Flowers, shrubs, pest control, irrigation, costs of garden planning.",IT:"Fiori, arbusti, controllo dei parassiti, irrigazione, costi di pianificazione del giardino."},
            provider:"Alison", level:"Beginner", duration:"2–3h", free:true,
            url:"https://alison.com/course/garden-design-fundamentals",
          },
          // 🦺 SAFETY
          {
            cat:"safety", emoji:"🦺",
            title:{DE:"Sicherheit am Arbeitsplatz",ES:"Seguridad en el lugar de trabajo",EN:"Safety in the Workplace",IT:"Sicurezza sul posto di lavoro"},
            desc:{DE:"Sicherheitskultur, Risikomanagement, Gesundheitsprogramme, Unfallprävention.",ES:"Cultura de seguridad, gestión de riesgos, programas de salud, prevención de accidentes.",EN:"Safety culture, risk management, wellness programs, accident prevention.",IT:"Cultura della sicurezza, gestione dei rischi, programmi di salute, prevenzione degli incidenti."},
            provider:"Alison", level:"Beginner", duration:"2–3h", free:true,
            url:"https://alison.com/course/safety-in-the-workplace",
          },
          {
            cat:"safety", emoji:"⛑️",
            title:{DE:"Grundlagen Gesundheit & Sicherheit am Arbeitsplatz",ES:"Fundamentos de salud y seguridad laboral",EN:"Fundamentals of Health and Safety in the Workplace",IT:"Fondamenti di salute e sicurezza sul lavoro"},
            desc:{DE:"Risikobeurteilung, Schutzausrüstung, gesetzliche Anforderungen, ISO 45001.",ES:"Evaluación de riesgos, EPI, requisitos legales, ISO 45001.",EN:"Risk assessment, PPE, legal requirements, ISO 45001.",IT:"Valutazione dei rischi, DPI, requisiti legali, ISO 45001."},
            provider:"Alison", level:"Beginner", duration:"3–5h", free:true,
            url:"https://alison.com/course/fundamentals-of-health-and-safety-in-the-workplace-revised",
          },
          // 📋 MANAGEMENT
          {
            cat:"management", emoji:"📋",
            title:{DE:"Diplom: Gesundheit & Sicherheit am Arbeitsplatz",ES:"Diploma: Salud y seguridad laboral",EN:"Diploma in Workplace Safety and Health",IT:"Diploma in salute e sicurezza sul lavoro"},
            desc:{DE:"Umfassendes Diplom: verhaltensbasierte Sicherheit, Ergonomie, Drogenprävention, Wellness.",ES:"Diploma completo: seguridad conductual, ergonomía, prevención de drogas, bienestar.",EN:"Comprehensive diploma: behavior-based safety, ergonomics, drug prevention, wellness.",IT:"Diploma completo: sicurezza comportamentale, ergonomia, prevenzione delle dipendenze, benessere."},
            provider:"Alison", level:"Intermediate", duration:"8–10h", free:true,
            url:"https://alison.com/course/diploma-in-workplace-safety-and-health-revised-2017",
          },
        ];

        const extFiltered = EXT_COURSES.filter(c=>filter==="all"||c.cat===filter);
        if(extFiltered.length===0) return null;

        return (
          <div style={{marginTop:24}}>
            {/* Section header */}
            <div style={{
              display:"flex",alignItems:"center",gap:10,marginBottom:14,
              paddingTop:20,borderTop:"1px solid rgba(255,255,255,0.07)",
            }}>
              <div style={{
                background:"linear-gradient(135deg,#1C7ED6,#0CA678)",
                borderRadius:10,padding:"6px 12px",
                color:"#fff",fontWeight:700,fontSize:12,
              }}>🌐 {L("Externe Gratiskurse","Cursos gratuitos externos","Free External Courses","Corsi gratuiti esterni")}</div>
              <div style={{color:CP.textSecondary,fontSize:12}}>
                {L("Zertifikate von Alison.com — 100% kostenlos","Certificados de Alison.com — 100% gratuitos","Certificates from Alison.com — 100% free","Certificati da Alison.com — 100% gratuiti")}
              </div>
            </div>

            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {extFiltered.map((c,i)=>(
                <div key={i} style={{
                  background:"rgba(255,255,255,0.03)",
                  border:"1px solid rgba(255,255,255,0.08)",
                  borderRadius:14,padding:"14px 16px",
                  display:"flex",alignItems:"center",gap:14,
                  transition:"all .2s",
                }}
                  onMouseEnter={e=>e.currentTarget.style.background="rgba(28,126,214,0.08)"}
                  onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,0.03)"}
                >
                  {/* Emoji */}
                  <div style={{fontSize:28,flexShrink:0}}>{c.emoji}</div>

                  {/* Info */}
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{color:CP.textPrimary,fontWeight:700,fontSize:14,marginBottom:4}}>
                      {c.title[lang]||c.title.EN}
                    </div>
                    <div style={{color:CP.textSecondary,fontSize:12,marginBottom:6,lineHeight:1.5}}>
                      {c.desc[lang]||c.desc.EN}
                    </div>
                    <div style={{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"}}>
                      <span style={{background:"rgba(47,158,68,0.2)",color:"#69DB7C",fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:6}}>
                        ✅ {L("GRATIS","GRATIS","FREE","GRATIS")}
                      </span>
                      <span style={{background:"rgba(255,255,255,0.08)",color:CP.textSecondary,fontSize:10,padding:"2px 8px",borderRadius:6}}>
                        🏫 {c.provider}
                      </span>
                      <span style={{background:"rgba(255,255,255,0.08)",color:CP.textSecondary,fontSize:10,padding:"2px 8px",borderRadius:6}}>
                        ⏱️ {c.duration}
                      </span>
                      <span style={{background:"rgba(255,255,255,0.08)",color:CP.textSecondary,fontSize:10,padding:"2px 8px",borderRadius:6}}>
                        📊 {c.level}
                      </span>
                    </div>
                  </div>

                  {/* Button */}
                  <a href={c.url} target="_blank" rel="noopener noreferrer" style={{
                    flexShrink:0,
                    background:"linear-gradient(90deg,#1C7ED6,#0CA678)",
                    border:"none",borderRadius:10,color:"#fff",
                    padding:"10px 16px",cursor:"pointer",
                    fontSize:12,fontWeight:700,fontFamily:CP.font,
                    textDecoration:"none",display:"flex",alignItems:"center",gap:6,
                    boxShadow:"0 4px 14px rgba(28,126,214,0.35)",
                    whiteSpace:"nowrap",
                  }}>
                    🌐 {L("Zum Kurs","Ir al curso","Go to course","Vai al corso")} →
                  </a>
                </div>
              ))}
            </div>

            {/* Alison info banner */}
            <div style={{
              marginTop:14,padding:"10px 14px",
              background:"rgba(28,126,214,0.08)",border:"1px solid rgba(28,126,214,0.2)",
              borderRadius:12,display:"flex",alignItems:"center",gap:10,fontSize:12,
            }}>
              <span style={{fontSize:18}}>💡</span>
              <span style={{color:CP.textSecondary,lineHeight:1.5}}>
                {L(
                  "Alle externen Kurse sind auf Alison.com 100% kostenlos. Registrierung per E-Mail erforderlich. Zertifikat zum Download nach Abschluss (80% Mindestpunktzahl).",
                  "Todos los cursos externos son 100% gratuitos en Alison.com. Se requiere registro por correo. Certificado descargable al completar (mínimo 80%).",
                  "All external courses are 100% free on Alison.com. Email registration required. Certificate downloadable after completion (80% minimum score).",
                  "Tutti i corsi esterni sono 100% gratuiti su Alison.com. Registrazione via email richiesta. Certificato scaricabile al completamento (punteggio minimo 80%)."
                )}
              </span>
            </div>
          </div>
        );
      })() : null}

    </CPScreen>
  );

  // ── COURSE DETAIL ──────────────────────────────────────
  if(view==="course"&&selCourse){
    const course = courses.find(c=>c.id===selCourse.id)||selCourse;
    const title=course.titleKey[lang]||course.titleKey.EN;
    const desc=course.descKey[lang]||course.descKey.EN;
    const dur=course.duration[lang]||course.duration.EN;
    return (
      <CPScreen title={title} icon={course.emoji} onBack={()=>setView("home")} t={t} actions={<LangBar/>}>
        {/* Course illustration */}
        <div style={{marginBottom:16}}>
          <CourseIllustration illustrationKey={course.illustrationKey} height={160}/>
        </div>

        {/* Info card */}
        <div style={{background:`linear-gradient(135deg,${course.color}18,transparent)`,border:`1px solid ${course.color}35`,borderRadius:18,padding:"18px 20px",marginBottom:16}}>
          <div style={{color:"#fff",fontWeight:700,fontSize:16,marginBottom:8}}>{title}</div>
          <div style={{color:CP.textSecondary,fontSize:13,lineHeight:1.6,marginBottom:12}}>{desc}</div>
          <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:14}}>
            <CPBadge text={levelLabel(course.level)} color={levelColor(course.level)}/>
            <CPBadge text={`${course.lessons_list.length} ${t.lessons||"Lessons"}`} color="gray"/>
            <CPBadge text={dur} color="gray"/>
          </div>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
            <span style={{color:CP.textSecondary,fontSize:12}}>{t.progress||"Progress"}</span>
            <span style={{color:"#E67700",fontWeight:700}}>{course.lessons_list.filter(l=>l.done).length}/{course.lessons_list.length} · {course.progress}%</span>
          </div>
          <div style={{height:8,background:"rgba(255,255,255,0.07)",borderRadius:20,overflow:"hidden"}}>
            <div style={{height:"100%",width:`${course.progress}%`,background:course.progress===100?"#2F9E44":"#E67700",borderRadius:20}}/>
          </div>
        </div>

        {/* Lessons */}
        <CPCard style={{marginBottom:14}}>
          <div style={{color:CP.textSecondary,fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:.5,marginBottom:12}}>{t.lessons||"Lessons"}</div>
          <div style={{display:"flex",flexDirection:"column",gap:6}}>
            {course.lessons_list.map((lesson,idx)=>{
              const ltitle=lesson.titleKey[lang]||lesson.titleKey.EN;
              const prevDone=idx===0||course.lessons_list[idx-1].done;
              const locked=!prevDone&&!lesson.done;
              return (
                <div key={lesson.id} onClick={()=>{if(!locked){setSelLesson({...lesson,idx,course});setView("lesson");}}}
                  style={{
                    display:"flex",alignItems:"center",gap:12,padding:"10px 14px",
                    background:lesson.done?"rgba(47,158,68,0.1)":locked?"rgba(255,255,255,0.02)":"rgba(28,126,214,0.08)",
                    border:`1px solid ${lesson.done?"rgba(47,158,68,0.25)":locked?"rgba(255,255,255,0.05)":"rgba(28,126,214,0.22)"}`,
                    borderRadius:12,cursor:locked?"not-allowed":"pointer",opacity:locked?0.4:1,transition:"all .15s",
                  }}
                  onMouseEnter={e=>{if(!locked)e.currentTarget.style.background=lesson.done?"rgba(47,158,68,0.18)":"rgba(28,126,214,0.18)";}}
                  onMouseLeave={e=>{e.currentTarget.style.background=lesson.done?"rgba(47,158,68,0.1)":locked?"rgba(255,255,255,0.02)":"rgba(28,126,214,0.08)";}}
                >
                  <div style={{width:30,height:30,borderRadius:"50%",
                    background:lesson.done?"#2F9E44":locked?"rgba(255,255,255,0.07)":"rgba(28,126,214,0.35)",
                    display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,flexShrink:0,fontWeight:700}}>
                    {lesson.done?"✓":locked?"🔒":(idx+1)}
                  </div>
                  <div style={{flex:1}}>
                    <div style={{color:lesson.done?"#69DB7C":locked?CP.textTertiary:CP.textPrimary,fontWeight:600,fontSize:14}}>{ltitle}</div>
                    <div style={{color:CP.textTertiary,fontSize:11,marginTop:1}}>{t.lesson||"Lesson"} {idx+1} · ~15 min</div>
                  </div>
                  {!locked&&!lesson.done&&<span style={{color:"#74C0FC",fontSize:20}}>›</span>}
                  {lesson.done&&<span style={{color:"#69DB7C",fontSize:14}}>✓</span>}
                </div>
              );
            })}
          </div>
        </CPCard>

        {/* Quiz */}
        {course.quiz&&course.quiz.length>0&&(
          <CPCard style={{marginBottom:14}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
              <div style={{color:CP.textSecondary,fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:.5}}>
                🧠 {t.quiz||"Quiz"} · {course.quiz.length} {lang==="DE"?"Fragen":lang==="ES"?"Preguntas":lang==="IT"?"Domande":"Questions"}
              </div>
              {quizState.done&&<CPBadge text={quizState.answers.filter((a,i)=>a===course.quiz[i].ans).length>=Math.ceil(course.quiz.length*0.7)?t.passed||"Passed":t.failed||"Failed"}
                color={quizState.answers.filter((a,i)=>a===course.quiz[i].ans).length>=Math.ceil(course.quiz.length*0.7)?"green":"red"}/>}
            </div>
            {quizState.done?(
              <div style={{textAlign:"center",padding:"8px 0"}}>
                <div style={{fontSize:28,marginBottom:6}}>{quizState.answers.filter((a,i)=>a===course.quiz[i].ans).length>=Math.ceil(course.quiz.length*0.7)?"🏆":"📖"}</div>
                <div style={{color:"#fff",fontWeight:700,fontSize:16,marginBottom:4}}>
                  {t.score||"Score"}: {quizState.answers.filter((a,i)=>a===course.quiz[i].ans).length}/{course.quiz.length}
                </div>
                <div style={{display:"flex",gap:6,justifyContent:"center",marginTop:10}}>
                  <CPBtn onClick={()=>setQuizState({step:0,answers:[],done:false})} variant="secondary" size="sm">🔄 {t.tryAgain||"Retry"}</CPBtn>
                  {course.progress===100&&<CPBtn onClick={()=>sendByEmail({to:"info@patjacservices.ch",subject:(t.certificate||"Certificate")+" — Patjac Academy",body:"Patjac Academy — "+(course.titleKey?.[lang]||"")+" — "+(t.certificate||"Certificate")})} variant="success" size="sm">🏅 PDF</CPBtn>}

                </div>
              </div>
            ):(
              <CPBtn onClick={()=>{setQuizState({step:0,answers:[],done:false});setView("quiz");}}
                variant="primary" size="sm" full style={{borderRadius:12}}>
                {quizState.answers.length>0?(t.continueCourse||"Continue"):(t.quiz||"Start Quiz")} →
              </CPBtn>
            )}
          </CPCard>
        )}

        {course.progress===100&&(
          <CPCard style={{background:"rgba(47,158,68,0.1)",border:"1px solid rgba(47,158,68,0.3)"}}>
            <div style={{display:"flex",alignItems:"center",gap:12}}>
              <div style={{fontSize:32}}>🏅</div>
              <div>
                <div style={{color:"#69DB7C",fontWeight:700,fontSize:14}}>{t.completed||"Completed"}</div>
                <div style={{color:CP.textSecondary,fontSize:12}}>{t.certificate||"Certificate"} {lang==="DE"?"verfügbar":lang==="ES"?"disponible":lang==="IT"?"disponibile":"available"}</div>
              </div>
              <CPBtn onClick={()=>sendByEmail({to:"info@patjacservices.ch",subject:(t.certificate||"Certificate")+" — Patjac Academy",body:"Patjac Academy — "+(selCourse?.titleKey?.[lang]||"")+" — "+(t.certificate||"Certificate")})} variant="success" size="sm" style={{marginLeft:"auto"}}>
                📧 {t.download||"Get"}
              </CPBtn>
            </div>
          </CPCard>
        )}
      </CPScreen>
    );
  }

  // ── LESSON ─────────────────────────────────────────────
  if(view==="lesson"&&selLesson){
    const ltitle=selLesson.titleKey[lang]||selLesson.titleKey.EN;
    const courseTitle=selLesson.course.titleKey[lang]||selLesson.course.titleKey.EN;
    const rawContent=selLesson.contentKey?.[lang]||selLesson.contentKey?.EN||"";
    const paragraphs = rawContent ? rawContent.split("\n\n").filter(Boolean) : [
      lang==="DE"?`Lektion: ${ltitle} — Detaillierte Inhalte gemäss Schweizer Normen.`:
      lang==="ES"?`Lección: ${ltitle} — Contenidos detallados según normas suizas.`:
      lang==="IT"?`Lezione: ${ltitle} — Contenuti dettagliati secondo le norme svizzere.`:
      `Lesson: ${ltitle} — Detailed content according to Swiss standards.`
    ];

    return (
      <CPScreen title={ltitle} icon="📖" onBack={()=>setView("course")} t={t} actions={<LangBar/>}>
        <div style={{background:"rgba(28,126,214,0.08)",border:"1px solid rgba(28,126,214,0.2)",borderRadius:12,padding:"8px 14px",marginBottom:14,fontSize:12,color:"#74C0FC"}}>
          📚 {courseTitle} › {t.lesson||"Lesson"} {selLesson.idx+1}
        </div>

        {/* Lesson illustration */}
        {selLesson.illustrationKey&&(
          <div style={{marginBottom:16}}>
            <CourseIllustration illustrationKey={selLesson.illustrationKey} height={150}/>
          </div>
        )}

        <CPCard style={{marginBottom:16}}>
          <div style={{color:CP.textSecondary,fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:.5,marginBottom:14}}>
            {t.lesson||"Lesson"} {selLesson.idx+1}: {ltitle}
          </div>
          {paragraphs.map((p,i)=>(
            <div key={i} style={{marginBottom:14}}>
              {p.startsWith("🔹")||p.startsWith("⛔")||p.startsWith("⚠️")||p.startsWith("🔸")?(
                <div style={{
                  background: p.startsWith("⛔")?"rgba(201,42,42,0.12)":p.startsWith("⚠️")?"rgba(240,140,0,0.1)":p.startsWith("🔸")?"rgba(230,119,0,0.1)":"rgba(28,126,214,0.08)",
                  border:`1px solid ${p.startsWith("⛔")?"rgba(201,42,42,0.3)":p.startsWith("⚠️")?"rgba(240,140,0,0.3)":p.startsWith("🔸")?"rgba(230,119,0,0.25)":"rgba(28,126,214,0.2)"}`,
                  borderRadius:10,padding:"10px 14px",
                }}>
                  {p.split("\n").map((line,j)=>(
                    <div key={j} style={{
                      color: line.startsWith("⛔")?"#FF8787":line.startsWith("⚠️")?"#FFD43B":line.startsWith("🔸")?"#FFD43B":line.startsWith("❌")?"#FF8787":line.startsWith("✅")?"#69DB7C":CP.textSecondary,
                      fontSize:j===0?14:13,fontWeight:j===0?600:400,lineHeight:1.6,marginBottom:j<p.split("\n").length-1?4:0,
                    }}>{line}</div>
                  ))}
                </div>
              ):(
                p.includes("\n") ? (
                  // Multi-line paragraph: first line is a heading, the rest are steps/points
                  <div style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:10,padding:"10px 14px"}}>
                    {p.split("\n").map((line,j)=>(
                      <div key={j} style={{color:j===0?CP.textPrimary:CP.textSecondary,fontSize:j===0?15:14,fontWeight:j===0?700:400,lineHeight:1.7,marginBottom:j===0?4:0,whiteSpace:"pre-wrap"}}>{line}</div>
                    ))}
                  </div>
                ) : (
                  <p style={{color:i===0?CP.textPrimary:CP.textSecondary,fontSize:i===0?15:14,lineHeight:1.7,margin:0}}>{p}</p>
                )
              )}
            </div>
          ))}
        </CPCard>

        {!selLesson.done&&(
          <CPBtn onClick={()=>{
            markLesson(selLesson.course.id,selLesson.id);
            setView("course");
          }} variant="success" full size="lg" style={{borderRadius:16}}>
            ✓ {lang==="DE"?"Lektion abschliessen":lang==="ES"?"Marcar como completada":lang==="IT"?"Segna come completata":"Mark as Complete"}
          </CPBtn>
        )}
        {selLesson.done&&(
          <div style={{textAlign:"center",color:"#69DB7C",fontWeight:700,fontSize:15,padding:"14px"}}>✅ {t.completed||"Completed"}</div>
        )}
      </CPScreen>
    );
  }

  // ── QUIZ ───────────────────────────────────────────────
  if(view==="quiz"&&selCourse){
    const course = courses.find(c=>c.id===selCourse.id)||selCourse;
    const quiz = course.quiz;

    if(quizState.done){
      const score = quizState.answers.filter((a,i)=>a===quiz[i].ans).length;
      const passed = score>=Math.ceil(quiz.length*0.7);
      return (
        <CPScreen title={t.quiz||"Quiz"} icon="🧠" onBack={()=>setView("course")} t={t} actions={<LangBar/>}>
          <div style={{maxWidth:500,margin:"30px auto",textAlign:"center"}}>
            <div style={{fontSize:64,marginBottom:14}}>{passed?"🏆":"📖"}</div>
            <div style={{color:"#fff",fontWeight:700,fontSize:26,marginBottom:6}}>{t.score||"Score"}: {score}/{quiz.length}</div>
            <div style={{color:passed?"#69DB7C":"#FF8787",fontWeight:700,fontSize:18,marginBottom:22}}>{passed?(t.passed||"Passed"):(t.failed||"Failed")}</div>
            <CPCard style={{marginBottom:20,textAlign:"left"}}>
              {quiz.map((q,i)=>{
                const qtext=q.q[lang]||q.q.EN;
                const opts=q.opts[lang]||q.opts.EN;
                const correct=quizState.answers[i]===q.ans;
                return (
                  <div key={i} style={{marginBottom:12,paddingBottom:12,borderBottom:i<quiz.length-1?`1px solid ${CP.border}`:"none"}}>
                    <div style={{color:correct?"#69DB7C":"#FF8787",fontWeight:600,fontSize:13,marginBottom:4}}>
                      {correct?"✓":"✗"} {qtext}
                    </div>
                    <div style={{color:CP.textSecondary,fontSize:12}}>
                      {lang==="DE"?"Korrekt: ":lang==="ES"?"Correcto: ":lang==="IT"?"Corretto: ":"Correct: "}
                      <strong style={{color:"#69DB7C"}}>{opts[q.ans]}</strong>
                    </div>
                  </div>
                );
              })}
            </CPCard>
            <div style={{display:"flex",gap:8,justifyContent:"center"}}>
              <CPBtn onClick={()=>setQuizState({step:0,answers:[],done:false})} variant="secondary">{t.tryAgain||"Retry"}</CPBtn>
              <CPBtn onClick={()=>setView("course")} variant="primary">{t.back||"Back"}</CPBtn>
            </div>
          </div>
        </CPScreen>
      );
    }

    const current = quiz[quizState.step];
    const opts = current.opts[lang]||current.opts.EN;
    const qtext = current.q[lang]||current.q.EN;

    const answerQuiz = (idx) => {
      const newAns=[...quizState.answers,idx];
      if(quizState.step+1>=quiz.length) setQuizState({step:quizState.step+1,answers:newAns,done:true});
      else setQuizState({step:quizState.step+1,answers:newAns,done:false});
    };

    return (
      <CPScreen title={`${t.quiz||"Quiz"} ${quizState.step+1}/${quiz.length}`} icon="🧠"
        onBack={()=>setView("course")} t={t} actions={<LangBar/>}>
        <div style={{marginBottom:18}}>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
            <span style={{color:CP.textTertiary,fontSize:12}}>{lang==="DE"?"Frage":lang==="ES"?"Pregunta":lang==="IT"?"Domanda":"Question"} {quizState.step+1}</span>
            <span style={{color:CP.textTertiary,fontSize:12}}>{Math.round((quizState.step/quiz.length)*100)}%</span>
          </div>
          <div style={{height:6,background:"rgba(255,255,255,0.07)",borderRadius:20,overflow:"hidden"}}>
            <div style={{height:"100%",width:`${(quizState.step/quiz.length)*100}%`,background:"#E67700",borderRadius:20}}/>
          </div>
        </div>

        <CPCard style={{marginBottom:16}}>
          <div style={{color:"#fff",fontWeight:600,fontSize:17,lineHeight:1.6,marginBottom:20}}>{qtext}</div>
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            {opts.map((opt,i)=>(
              <button key={i} onClick={()=>answerQuiz(i)} style={{
                padding:"14px 18px",background:"rgba(255,255,255,0.06)",
                border:"1px solid rgba(255,255,255,0.1)",borderRadius:14,
                color:"#fff",cursor:"pointer",textAlign:"left",fontSize:14,
                fontWeight:500,fontFamily:CP.font,transition:"all .15s",
                display:"flex",alignItems:"center",gap:12,
              }}
                onMouseEnter={e=>{e.currentTarget.style.background="rgba(230,119,0,0.2)";e.currentTarget.style.borderColor="rgba(230,119,0,0.5)";}}
                onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.06)";e.currentTarget.style.borderColor="rgba(255,255,255,0.1)";}}
              >
                <div style={{width:30,height:30,borderRadius:"50%",background:"rgba(255,255,255,0.08)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:700,flexShrink:0,color:"#E67700"}}>
                  {String.fromCharCode(65+i)}
                </div>
                {opt}
              </button>
            ))}
          </div>
        </CPCard>
      </CPScreen>
    );
  }

  return null;
}

// ─── HELP MODAL ──────────────────────────────────────────────
function HelpModal({t, lang, onClose}){
  const [activeSection, setActiveSection] = useState("overview");
  const L = makeL(lang);

  const SECTIONS = [
    {id:"overview",   icon:"🏠", label:{DE:"Übersicht",        ES:"Visión general",  EN:"Overview",       IT:"Panoramica"}},
    {id:"dashboard",  icon:"📊", label:{DE:"Dashboard",        ES:"Panel",           EN:"Dashboard",      IT:"Pannello"}},
    {id:"clients",    icon:"👥", label:{DE:"Kunden",           ES:"Clientes",        EN:"Clients",        IT:"Clienti"}},
    {id:"jobs",       icon:"📋", label:{DE:"Aufträge",         ES:"Trabajos",        EN:"Jobs",           IT:"Lavori"}},
    {id:"employees",  icon:"👤", label:{DE:"Mitarbeiter",      ES:"Empleados",       EN:"Employees",      IT:"Dipendenti"}},
    {id:"payroll",    icon:"💵", label:{DE:"Lohnabrechnung",   ES:"Nóminas",         EN:"Payroll",        IT:"Stipendi"}},
    {id:"invoices",   icon:"🧾", label:{DE:"Rechnungen",       ES:"Facturas",        EN:"Invoices",       IT:"Fatture"}},
    {id:"finance",    icon:"💰", label:{DE:"Finanzen",         ES:"Finanzas",        EN:"Finance",        IT:"Finanze"}},
    {id:"timeclock",  icon:"⏱️", label:{DE:"Zeiterfassung",   ES:"Fichaje",         EN:"Time Clock",     IT:"Timbrature"}},
    {id:"messaging",  icon:"💬", label:{DE:"Nachrichten",      ES:"Mensajes",        EN:"Messages",       IT:"Messaggi"}},
    {id:"routes",     icon:"🗺️", label:{DE:"Routen",          ES:"Rutas",           EN:"Routes",         IT:"Percorsi"}},
    {id:"inventory",  icon:"📦", label:{DE:"Lager",            ES:"Almacén",         EN:"Inventory",      IT:"Magazzino"}},
    {id:"contracts",  icon:"📝", label:{DE:"Verträge",         ES:"Contratos",       EN:"Contracts",      IT:"Contratti"}},
    {id:"reports",    icon:"📈", label:{DE:"Berichte",         ES:"Informes",        EN:"Reports",        IT:"Rapporti"}},
    {id:"academy",    icon:"🎓", label:{DE:"Academy",          ES:"Academy",         EN:"Academy",        IT:"Academy"}},
    {id:"settings",   icon:"⚙️", label:{DE:"Einstellungen",   ES:"Configuración",   EN:"Settings",       IT:"Impostazioni"}},
  ];

  const HELP = {
    overview: {
      icon:"🏠",
      title:{DE:"Patjac Business Suite – Übersicht",ES:"Patjac Business Suite – Visión general",EN:"Patjac Business Suite – Overview",IT:"Patjac Business Suite – Panoramica"},
      items:[
        {
          h:{DE:"Was ist Patjac Business Suite?",ES:"¿Qué es Patjac Business Suite?",EN:"What is Patjac Business Suite?",IT:"Cos'è Patjac Business Suite?"},
          b:{DE:"Patjac Business Suite ist die zentrale Verwaltungsanwendung für Patjac Reinigung Garten & Services – entwickelt für den Schweizer Markt.\n\nAlle Unternehmensfunktionen in einer App:\n• 👥 Kundenverwaltung\n• 📋 Auftragsplanung & -verfolgung\n• 👤 Mitarbeiterverwaltung mit Schweizer Lohnabrechnung\n• 🧾 Swiss QR-Rechnungen\n• 💰 Finanzen, Steuern & Berichte\n• ⏱️ Zeiterfassung\n• 💬 Interner Chat\n• 🗺️ Tagesrouten\n• 📦 Lagerverwaltung & Bestellungen\n• 📝 Verträge (Kunden & Mitarbeiter)\n• 🎓 Patjac Academy\n• 📊 Berichte & Statistiken",
             ES:"Patjac Business Suite es la aplicación central de gestión para Patjac Reinigung Garten & Services – desarrollada para el mercado suizo.\n\nTodas las funciones empresariales en una app:\n• 👥 Gestión de clientes\n• 📋 Planificación y seguimiento de trabajos\n• 👤 Gestión de empleados con nómina suiza\n• 🧾 Facturas Swiss QR\n• 💰 Finanzas, impuestos e informes\n• ⏱️ Fichaje de horas\n• 💬 Chat interno\n• 🗺️ Rutas diarias\n• 📦 Gestión de almacén y pedidos\n• 📝 Contratos (clientes y empleados)\n• 🎓 Patjac Academy\n• 📊 Informes y estadísticas",
             EN:"Patjac Business Suite is the central management application for Patjac Reinigung Garten & Services – developed for the Swiss market.\n\nAll business functions in one app:\n• 👥 Client management\n• 📋 Job planning & tracking\n• 👤 Employee management with Swiss payroll\n• 🧾 Swiss QR invoices\n• 💰 Finance, taxes & reports\n• ⏱️ Time tracking\n• 💬 Internal messaging\n• 🗺️ Daily routes\n• 📦 Inventory & orders\n• 📝 Contracts (clients & employees)\n• 🎓 Patjac Academy\n• 📊 Reports & statistics",
             IT:"Patjac Business Suite è l'applicazione di gestione centrale per Patjac Reinigung Garten & Services – sviluppata per il mercato svizzero.\n\nTutte le funzioni aziendali in un'unica app:\n• 👥 Gestione clienti\n• 📋 Pianificazione e monitoraggio lavori\n• 👤 Gestione dipendenti con stipendio svizzero\n• 🧾 Fatture Swiss QR\n• 💰 Finanze, imposte e rapporti\n• ⏱️ Timbrature\n• 💬 Messaggistica interna\n• 🗺️ Percorsi giornalieri\n• 📦 Magazzino e ordini\n• 📝 Contratti (clienti e dipendenti)\n• 🎓 Patjac Academy\n• 📊 Rapporti e statistiche"}
        },
        {
          h:{DE:"Benutzerrollen",ES:"Roles de usuario",EN:"User Roles",IT:"Ruoli utente"},
          b:{DE:"👑 ADMINISTRATOR\nLogin: E-Mail + Passwort (änderbar in Einstellungen → Sicherheit)\nVollzugriff auf alle 15 Module\n\n👤 MITARBEITER\nLogin: nur PIN (4-stellig) — kein Benutzercode nötig\nZugriff auf: Zeiterfassung, Aufträge, Nachrichten, Routen, Lohnabrechnung, Academy\n\n🔄 Abmelden: Logout-Button oben rechts → Login-Felder werden automatisch geleert",
             ES:"👑 ADMINISTRADOR\nLogin: Correo + Contraseña (cambiable en Configuración → Seguridad)\nAcceso total a los 15 módulos\n\n👤 EMPLEADO\nLogin: solo PIN (4 dígitos) — no hace falta código de usuario\nAcceso a: Fichaje, Trabajos, Mensajes, Rutas, Nómina, Academy\n\n🔄 Cerrar sesión: Botón Salir arriba a la derecha → Los campos de login se borran automáticamente",
             EN:"👑 ADMINISTRATOR\nLogin: Email + Password (changeable in Settings → Security)\nFull access to all 15 modules\n\n👤 EMPLOYEE\nLogin: PIN only (4 digits) — no user code needed\nAccess to: Time clock, Jobs, Messages, Routes, Payroll, Academy\n\n🔄 Logout: Logout button top right → Login fields are automatically cleared",
             IT:"👑 AMMINISTRATORE\nLogin: Email + Password (modificabile in Impostazioni → Sicurezza)\nAccesso completo a tutti i 15 moduli\n\n👤 DIPENDENTE\nLogin: Codice utente (es. PJ-CARL01) + PIN (4 cifre)\nAccesso a: Timbrature, Lavori, Messaggi, Percorsi, Stipendi, Academy\n\n🔄 Disconnessione: Pulsante Esci in alto a destra → I campi di login vengono cancellati automaticamente"}
        },
        {
          h:{DE:"Sprache wechseln",ES:"Cambiar idioma",EN:"Changing Language",IT:"Cambiare lingua"},
          b:{DE:"4 Sprachen verfügbar: DE · ES · EN · IT\n\nMethode 1: Sprachbuttons oben rechts in der Statusleiste klicken\nMethode 2: Einstellungen → 🌐 Sprache → gewünschte Sprache wählen\n\nDie gesamte App – Menüs, Formulare, Berichte, Academy, Hilfe – wechselt sofort.",
             ES:"4 idiomas disponibles: DE · ES · EN · IT\n\nMétodo 1: Clic en los botones de idioma arriba a la derecha en la barra de estado\nMétodo 2: Configuración → 🌐 Idioma → seleccionar idioma\n\nToda la app – menús, formularios, informes, Academy, ayuda – cambia inmediatamente.",
             EN:"4 languages available: DE · ES · EN · IT\n\nMethod 1: Click language buttons top right in the status bar\nMethod 2: Settings → 🌐 Language → select language\n\nThe entire app – menus, forms, reports, Academy, help – switches immediately.",
             IT:"4 lingue disponibili: DE · ES · EN · IT\n\nMetodo 1: Clicca i pulsanti lingua in alto a destra nella barra di stato\nMetodo 2: Impostazioni → 🌐 Lingua → seleziona lingua\n\nL'intera app – menu, moduli, rapporti, Academy, guida – cambia immediatamente."}
        },
      ]
    },

    dashboard: {
      icon:"📊",
      title:{DE:"Dashboard – Unternehmensübersicht",ES:"Panel – Resumen de empresa",EN:"Dashboard – Company Overview",IT:"Pannello – Panoramica aziendale"},
      items:[
        {
          h:{DE:"KPI-Karten (Kennzahlen)",ES:"Tarjetas KPI (indicadores clave)",EN:"KPI Cards (Key Indicators)",IT:"Schede KPI (indicatori chiave)"},
          b:{DE:"Das Dashboard zeigt 5 Echtzeit-Kennzahlen:\n• 👥 Aktive Kunden\n• 📋 Aufträge Heute\n• 💰 Einnahmen Monat (bezahlte Rechnungen)\n• 🧾 Ausstehende Rechnungen\n• 👤 Aktive Mitarbeiter\n\nAlle Zahlen aktualisieren sich automatisch beim Erstellen/Ändern von Daten.",
             ES:"El panel muestra 5 indicadores en tiempo real:\n• 👥 Clientes activos\n• 📋 Trabajos de hoy\n• 💰 Ingresos del mes (facturas pagadas)\n• 🧾 Facturas pendientes\n• 👤 Empleados activos\n\nTodos los números se actualizan automáticamente al crear/modificar datos.",
             EN:"The dashboard shows 5 real-time key figures:\n• 👥 Active clients\n• 📋 Today's jobs\n• 💰 Monthly income (paid invoices)\n• 🧾 Pending invoices\n• 👤 Active employees\n\nAll figures update automatically when data is created/changed.",
             IT:"Il pannello mostra 5 indicatori in tempo reale:\n• 👥 Clienti attivi\n• 📋 Lavori oggi\n• 💰 Entrate del mese (fatture pagate)\n• 🧾 Fatture in sospeso\n• 👤 Dipendenti attivi\n\nTutti i numeri si aggiornano automaticamente alla creazione/modifica dei dati."}
        },
        {
          h:{DE:"Warnungen & Schnellzugriff",ES:"Alertas y acceso rápido",EN:"Alerts & Quick Access",IT:"Avvisi e accesso rapido"},
          b:{DE:"⚠️ WARNUNGEN (rechts):\n• Rote Karte: Überfällige Rechnungen → Klick öffnet Rechnungen\n• Gelbe Karte: Mitarbeiter nicht eingecheckt → Klick öffnet Zeiterfassung\n• Blaue Karte: Unvollständige Aufträge → Klick öffnet Aufträge\n\n⚡ SCHNELLZUGRIFF (unten rechts):\n4 Buttons für häufige Aktionen: Neuer Auftrag · Neuer Kunde · Neue Rechnung · Route optimieren",
             ES:"⚠️ ALERTAS (derecha):\n• Tarjeta roja: Facturas vencidas → Clic abre Facturas\n• Tarjeta amarilla: Empleados sin fichar → Clic abre Fichaje\n• Tarjeta azul: Trabajos incompletos → Clic abre Trabajos\n\n⚡ ACCESO RÁPIDO (abajo derecha):\n4 botones para acciones frecuentes: Nuevo trabajo · Nuevo cliente · Nueva factura · Optimizar ruta",
             EN:"⚠️ ALERTS (right side):\n• Red card: Overdue invoices → Click opens Invoices\n• Yellow card: Employees not clocked in → Click opens Time Clock\n• Blue card: Incomplete jobs → Click opens Jobs\n\n⚡ QUICK ACCESS (bottom right):\n4 buttons for frequent actions: New Job · New Client · New Invoice · Optimise Route",
             IT:"⚠️ AVVISI (destra):\n• Scheda rossa: Fatture scadute → Clic apre Fatture\n• Scheda gialla: Dipendenti non timbrati → Clic apre Timbrature\n• Scheda blu: Lavori incompleti → Clic apre Lavori\n\n⚡ ACCESSO RAPIDO (in basso a destra):\n4 pulsanti per azioni frequenti: Nuovo lavoro · Nuovo cliente · Nuova fattura · Ottimizza percorso"}
        },
      ]
    },

    clients: {
      icon:"👥",
      title:{DE:"Kunden verwalten",ES:"Gestionar clientes",EN:"Managing Clients",IT:"Gestione clienti"},
      items:[
        {
          h:{DE:"Neuen Kunden anlegen",ES:"Crear nuevo cliente",EN:"Creating a New Client",IT:"Creare un nuovo cliente"},
          b:{DE:"1. App 'Kunden' öffnen → '＋ Kunde hinzufügen'\n2. Pflichtfelder: Vorname, Nachname\n3. Adresse: Strasse + Nr. + PLZ + Stadt\n4. Kontakt: Telefon, E-Mail\n5. Dienstleistungsart: Reinigung / Garten / Sonstige\n6. Häufigkeit: Täglich / Wöchentlich / Monatlich / Einmalig\n7. Abrechnungsart:\n   • Pro Dienstleistung: Einzelrechnung je Auftrag\n   • Monatsvertrag: Automatische Monatsrechnung\n8. Preis in CHF + Notizen\n9. '💾 Speichern'\n\n💡 Tipp: Monatsvertrag generiert automatisch monatliche Rechnungen.",
             ES:"1. Abrir 'Clientes' → '＋ Añadir Cliente'\n2. Campos obligatorios: Nombre, Apellido\n3. Dirección: Calle + Nº + CP + Ciudad\n4. Contacto: Teléfono, Correo\n5. Tipo servicio: Limpieza / Jardín / Otro\n6. Frecuencia: Diario / Semanal / Mensual / Una vez\n7. Tipo de facturación:\n   • Por servicio: Factura individual por trabajo\n   • Contrato mensual: Factura mensual automática\n8. Precio en CHF + Notas\n9. '💾 Guardar'\n\n💡 Consejo: El contrato mensual genera facturas mensuales automáticamente.",
             EN:"1. Open 'Clients' → '＋ Add Client'\n2. Required: First name, Last name\n3. Address: Street + No. + Postcode + City\n4. Contact: Phone, Email\n5. Service type: Cleaning / Gardening / Other\n6. Frequency: Daily / Weekly / Monthly / Once\n7. Billing type:\n   • Per service: Individual invoice per job\n   • Monthly contract: Automatic monthly invoice\n8. Price in CHF + Notes\n9. '💾 Save'\n\n💡 Tip: Monthly contract automatically generates monthly invoices.",
             IT:"1. Aprire 'Clienti' → '＋ Aggiungi Cliente'\n2. Obbligatori: Nome, Cognome\n3. Indirizzo: Via + N° + CAP + Città\n4. Contatti: Telefono, Email\n5. Tipo servizio: Pulizie / Giardino / Altro\n6. Frequenza: Quotidiano / Settimanale / Mensile / Una volta\n7. Tipo fatturazione:\n   • Per servizio: Fattura individuale per lavoro\n   • Contratto mensile: Fattura mensile automatica\n8. Prezzo in CHF + Note\n9. '💾 Salva'\n\n💡 Suggerimento: Il contratto mensile genera automaticamente fatture mensili."}
        },
        {
          h:{DE:"Kunden bearbeiten, löschen & Status",ES:"Editar, eliminar y estado",EN:"Edit, Delete & Status",IT:"Modifica, elimina e stato"},
          b:{DE:"✏️ Bearbeiten: Symbol neben dem Kunden → Formular öffnet sich\n🗑️ Löschen: Symbol → Bestätigung → Endgültig löschen\n\n⚠️ Gelöschte Kunden können NICHT wiederhergestellt werden.\nAufträge & Rechnungen des Kunden bleiben erhalten.\n\nINAKTIV SETZEN (empfohlen statt Löschen):\nBearbeiten → Status auf 'Inaktiv' → Klient erscheint nicht mehr in aktiver Liste, Daten bleiben erhalten.",
             ES:"✏️ Editar: Símbolo junto al cliente → Se abre el formulario\n🗑️ Eliminar: Símbolo → Confirmación → Eliminación definitiva\n\n⚠️ Los clientes eliminados NO pueden recuperarse.\nLos trabajos y facturas del cliente se conservan.\n\nMARCAR COMO INACTIVO (recomendado en lugar de eliminar):\nEditar → Estado a 'Inactivo' → El cliente no aparece en la lista activa, los datos se conservan.",
             EN:"✏️ Edit: Symbol next to client → Form opens\n🗑️ Delete: Symbol → Confirmation → Permanent deletion\n\n⚠️ Deleted clients CANNOT be restored.\nThe client's jobs & invoices are retained.\n\nSET AS INACTIVE (recommended instead of deleting):\nEdit → Set status to 'Inactive' → Client no longer appears in active list, data is retained.",
             IT:"✏️ Modificare: Simbolo accanto al cliente → Si apre il modulo\n🗑️ Eliminare: Simbolo → Conferma → Eliminazione definitiva\n\n⚠️ I clienti eliminati NON possono essere ripristinati.\nI lavori e le fatture del cliente vengono conservati.\n\nIMPOSTARE COME INATTIVO (consigliato invece di eliminare):\nModifica → Stato su 'Inattivo' → Il cliente non appare nella lista attiva, i dati vengono conservati."}
        },
      ]
    },

    jobs: {
      icon:"📋",
      title:{DE:"Aufträge & Arbeitsplanung",ES:"Trabajos y planificación",EN:"Jobs & Work Planning",IT:"Lavori e pianificazione"},
      items:[
        {
          h:{DE:"Auftrag erstellen",ES:"Crear un trabajo",EN:"Creating a Job",IT:"Creare un lavoro"},
          b:{DE:"1. App 'Aufträge' öffnen → '＋ Neuer Auftrag'\n2. Kunde wählen (Dropdown)\n3. Mitarbeiter zuweisen\n4. Datum + Startzeit + Endzeit\n5. Dienstleistungsart + Beschreibung\n6. Preis in CHF\n7. Status: Ausstehend (Standard)\n8. Speichern\n\nAuftragsablauf:\n🟡 Ausstehend → ▶ starten → 🔵 In Bearbeitung → ✓ abschliessen → 🟢 Abgeschlossen\n\n✅ Abschluss registriert automatisch den Einnahmebetrag in den Finanzen.",
             ES:"1. Abrir 'Trabajos' → '＋ Nuevo trabajo'\n2. Seleccionar cliente (desplegable)\n3. Asignar empleado\n4. Fecha + Hora inicio + Hora fin\n5. Tipo de servicio + Descripción\n6. Precio en CHF\n7. Estado: Pendiente (por defecto)\n8. Guardar\n\nFlujo del trabajo:\n🟡 Pendiente → ▶ iniciar → 🔵 En progreso → ✓ completar → 🟢 Completado\n\n✅ Al completar, el importe se registra automáticamente en las finanzas.",
             EN:"1. Open 'Jobs' → '＋ New Job'\n2. Select client (dropdown)\n3. Assign employee\n4. Date + Start time + End time\n5. Service type + Description\n6. Price in CHF\n7. Status: Pending (default)\n8. Save\n\nJob flow:\n🟡 Pending → ▶ start → 🔵 In Progress → ✓ complete → 🟢 Completed\n\n✅ Completion automatically registers the income amount in Finance.",
             IT:"1. Aprire 'Lavori' → '＋ Nuovo lavoro'\n2. Selezionare cliente (menu a tendina)\n3. Assegnare dipendente\n4. Data + Ora inizio + Ora fine\n5. Tipo servizio + Descrizione\n6. Prezzo in CHF\n7. Stato: In attesa (predefinito)\n8. Salva\n\nFlusso lavoro:\n🟡 In attesa → ▶ avvia → 🔵 In corso → ✓ completa → 🟢 Completato\n\n✅ Il completamento registra automaticamente l'importo nei Finanze."}
        },
        {
          h:{DE:"Aufträge filtern & verwalten",ES:"Filtrar y gestionar trabajos",EN:"Filtering & Managing Jobs",IT:"Filtrare e gestire lavori"},
          b:{DE:"Filter-Tabs oben: Alle · Ausstehend · In Bearbeitung · Abgeschlossen\n\n▶ Starten: Button ändert Status auf 'In Bearbeitung'\n✓ Abschliessen: Button ändert Status auf 'Abgeschlossen'\n✏️ Bearbeiten: Formular öffnet sich (nur Admin)\n\nMitarbeiter sehen nur ihre eigenen Aufträge.\nAdmin sieht alle Aufträge aller Mitarbeiter.",
             ES:"Pestañas de filtro: Todos · Pendiente · En progreso · Completado\n\n▶ Iniciar: Botón cambia estado a 'En progreso'\n✓ Completar: Botón cambia estado a 'Completado'\n✏️ Editar: Se abre el formulario (solo admin)\n\nLos empleados ven solo sus propios trabajos.\nEl admin ve todos los trabajos de todos los empleados.",
             EN:"Filter tabs at top: All · Pending · In Progress · Completed\n\n▶ Start: Button changes status to 'In Progress'\n✓ Complete: Button changes status to 'Completed'\n✏️ Edit: Form opens (admin only)\n\nEmployees see only their own jobs.\nAdmin sees all jobs of all employees.",
             IT:"Schede filtro in alto: Tutti · In attesa · In corso · Completato\n\n▶ Avvia: Il pulsante cambia lo stato in 'In corso'\n✓ Completa: Il pulsante cambia lo stato in 'Completato'\n✏️ Modifica: Si apre il modulo (solo admin)\n\nI dipendenti vedono solo i propri lavori.\nL'admin vede tutti i lavori di tutti i dipendenti."}
        },
      ]
    },

    employees: {
      icon:"👤",
      title:{DE:"Mitarbeiter verwalten",ES:"Gestionar empleados",EN:"Managing Employees",IT:"Gestione dipendenti"},
      items:[
        {
          h:{DE:"Neuen Mitarbeiter anlegen",ES:"Crear nuevo empleado",EN:"Creating a New Employee",IT:"Creare un nuovo dipendente"},
          b:{DE:"1. App 'Mitarbeiter' → '＋ Hinzufügen'\n2. Vorname + Nachname (Pflicht)\n3. Vollständige Adresse\n4. Telefon + E-Mail\n5. Beschäftigungsart: Stundenlohn oder Festanstellung\n6. AHV-Nummer: 756.XXXX.XXXX.XX\n7. Eintrittsdatum\n8. 13. Monatslohn (nur Festanstellung)\n\n🏷️ GAV-LOHNKATEGORIE (NEU):\n→ Schritt 1: Tätigkeit wählen: 🧹 Reinigung oder 🌿 Gartenbau\n→ Schritt 2: Lohnkategorie wählen:\n   Reinigung: A (CHF 21.45/h) bis H (CHF 28.00/h)\n   Gartenbau: A (CHF 20.50/h) bis F (CHF 30.00/h)\n→ Mindestlohn wird automatisch eingetragen – anpassbar\n\n🔐 AUTOMATISCH GENERIERT:\n• Benutzercode (z.B. PJ-ABCD01) → interne Kennung (nicht für Login nötig)\n• PIN (4-stellig) → das Einzige, was der Mitarbeiter zum Einloggen braucht\n\n⚠️ Code & PIN sofort notieren und dem Mitarbeiter mitteilen!\n\n📧 Lohnabrechnung per E-Mail: Klick auf 📧 öffnet Outlook/Gmail mit vorausgefüllten Daten.",
             ES:"1. App 'Empleados' → '＋ Añadir'\n2. Nombre + Apellido (obligatorio)\n3. Dirección completa\n4. Teléfono + Correo\n5. Tipo de empleo: Por horas o Fijo\n6. Número AVS: 756.XXXX.XXXX.XX\n7. Fecha de incorporación\n8. 13.° salario (solo empleo fijo)\n\n🏷️ CATEGORÍA SALARIAL GAV (NUEVO):\n→ Paso 1: Elegir actividad: 🧹 Limpieza o 🌿 Jardinería\n→ Paso 2: Elegir categoría salarial:\n   Limpieza: A (CHF 21.45/h) hasta H (CHF 28.00/h)\n   Jardinería: A (CHF 20.50/h) hasta F (CHF 30.00/h)\n→ El salario mínimo se rellena automáticamente – ajustable\n\n🔐 GENERADO AUTOMÁTICAMENTE:\n• Código de usuario (ej. PJ-ABCD01) → identificador interno (no hace falta para el login)\n• PIN (4 dígitos) → esto es lo único que el empleado necesita para entrar\n\n⚠️ ¡Anotar código y PIN inmediatamente!\n\n📧 Envío nómina: Clic en 📧 abre Outlook/Gmail con datos prellenados.",
             EN:"1. App 'Employees' → '＋ Add'\n2. First + Last name (required)\n3. Full address\n4. Phone + Email\n5. Employment type: Hourly or Fixed\n6. AHV number: 756.XXXX.XXXX.XX\n7. Start date\n8. 13th salary (fixed only)\n\n🏷️ GAV WAGE CATEGORY (NEW):\n→ Step 1: Select activity: 🧹 Cleaning or 🌿 Gardening\n→ Step 2: Select wage category:\n   Cleaning: A (CHF 21.45/h) to H (CHF 28.00/h)\n   Gardening: A (CHF 20.50/h) to F (CHF 30.00/h)\n→ Minimum wage filled automatically – adjustable\n\n🔐 AUTO-GENERATED:\n• User code (e.g. PJ-ABCD01) → internal reference (not needed to log in)\n• PIN (4 digits) → the only thing the employee needs to log in\n\n⚠️ Note code & PIN immediately!\n\n📧 Send payslip: Click 📧 opens Outlook/Gmail prefilled.",
             IT:"1. App 'Dipendenti' → '＋ Aggiungi'\n2. Nome + Cognome (obbligatorio)\n3. Indirizzo completo\n4. Telefono + Email\n5. Tipo impiego: Orario o Fisso\n6. Numero AVS: 756.XXXX.XXXX.XX\n7. Data inizio\n8. 13a mensilità (solo fisso)\n\n🏷️ CATEGORIA SALARIALE GAV (NUOVO):\n→ Passo 1: Scegli attività: 🧹 Pulizie o 🌿 Giardinaggio\n→ Passo 2: Scegli categoria salariale:\n   Pulizie: A (CHF 21.45/h) fino a H (CHF 28.00/h)\n   Giardinaggio: A (CHF 20.50/h) fino a F (CHF 30.00/h)\n→ Salario minimo compilato automaticamente – modificabile\n\n🔐 GENERATO AUTOMATICAMENTE:\n• Codice utente (es. PJ-ABCD01) → per login\n• PIN (4 cifre) → per login\n\n⚠️ Annotare subito codice e PIN!\n\n📧 Invia busta paga: Clic su 📧 apre Outlook/Gmail precompilato."}
        },
        {
          h:{DE:"Zugangsdaten erneuern",ES:"Renovar credenciales de acceso",EN:"Regenerating Access Credentials",IT:"Rinnovare credenziali di accesso"},
          b:{DE:"Falls ein Mitarbeiter seinen Code oder PIN vergessen hat:\n\n1. App 'Mitarbeiter' öffnen\n2. Beim Mitarbeiter auf 🔄 (Erneuern) klicken\n3. Neuer Code + neuer PIN werden automatisch generiert\n4. Eine Benachrichtigung erscheint mit den neuen Daten\n5. Neue Daten sofort dem Mitarbeiter mitteilen\n\n⚠️ Der alte Code/PIN funktioniert danach nicht mehr.",
             ES:"Si un empleado ha olvidado su código o PIN:\n\n1. Abrir app 'Empleados'\n2. Hacer clic en 🔄 (Renovar) junto al empleado\n3. Se generan automáticamente nuevo código y PIN\n4. Aparece una notificación con los nuevos datos\n5. Comunicar los nuevos datos al empleado inmediatamente\n\n⚠️ El código/PIN anterior deja de funcionar.",
             EN:"If an employee has forgotten their code or PIN:\n\n1. Open 'Employees' app\n2. Click 🔄 (Regenerate) next to the employee\n3. New code + new PIN are automatically generated\n4. A notification appears with the new credentials\n5. Communicate new data to employee immediately\n\n⚠️ The old code/PIN no longer works after this.",
             IT:"Se un dipendente ha dimenticato il codice o il PIN:\n\n1. Aprire app 'Dipendenti'\n2. Cliccare 🔄 (Rigenera) accanto al dipendente\n3. Nuovo codice + nuovo PIN vengono generati automaticamente\n4. Appare una notifica con i nuovi dati\n5. Comunicare immediatamente i nuovi dati al dipendente\n\n⚠️ Il vecchio codice/PIN non funziona più."}
        },
      ]
    },

    payroll: {
      icon:"💵",
      title:{DE:"Lohnabrechnung – Schweizer Standard 2024",ES:"Nóminas – Estándar suizo 2024",EN:"Payroll – Swiss Standard 2024",IT:"Stipendi – Standard svizzero 2024"},
      items:[
        {
          h:{DE:"Schweizer Lohnabzüge 2024",ES:"Deducciones salariales suizas 2024",EN:"Swiss Payroll Deductions 2024",IT:"Deduzioni salariali svizzere 2024"},
          b:{DE:"Arbeitnehmer-Abzüge (automatisch berechnet):\n• AHV/IV/EO: 5.25%\n• ALV (Arbeitslosenversicherung): 1.10%\n• NBUV (Nichtberufsunfall): 1.20%\n• BVG/Pensionskasse: ~7.00%\n• KTG (Krankentaggeld): 0.50%\n\nArbeitgeber-Beiträge (zur Information):\n• AHV/IV/EO: 5.30%\n• ALV: 1.10%\n• BUV (Berufsunfall): ~0.50%\n• BVG: min. 7.00%\n• KTG: 0.50%\n\nBeispiel CHF 3'800 Brutto:\n→ Abzüge AN: CHF 537.10\n→ NETTOLOHN: CHF 3'262.90",
             ES:"Deducciones empleado (calculadas automáticamente):\n• AVS/AI/IPG: 5.25%\n• AD (desempleo): 1.10%\n• AINF (accidentes no profesionales): 1.20%\n• LPP/Pensiones: ~7.00%\n• IS (incapacidad laboral): 0.50%\n\nAportaciones empresa (informativas):\n• AVS/AI/IPG: 5.30%\n• AD: 1.10%\n• AIA (accidentes profesionales): ~0.50%\n• LPP: mín. 7.00%\n• IS: 0.50%\n\nEjemplo CHF 3.800 bruto:\n→ Deducciones empleado: CHF 537.10\n→ SALARIO NETO: CHF 3.262.90",
             EN:"Employee deductions (automatically calculated):\n• AHV/IV/EO: 5.25%\n• ALV (unemployment): 1.10%\n• NBUV (non-occupational accident): 1.20%\n• BVG/Pension fund: ~7.00%\n• KTG (daily sickness): 0.50%\n\nEmployer contributions (informational):\n• AHV/IV/EO: 5.30%\n• ALV: 1.10%\n• BUV (occupational accident): ~0.50%\n• BVG: min. 7.00%\n• KTG: 0.50%\n\nExample CHF 3,800 gross:\n→ Employee deductions: CHF 537.10\n→ NET SALARY: CHF 3,262.90",
             IT:"Deduzioni dipendente (calcolate automaticamente):\n• AVS/AI/IPG: 5.25%\n• AD (disoccupazione): 1.10%\n• AINF (infortuni non professionali): 1.20%\n• LPP/Cassa pensioni: ~7.00%\n• IS (indennità malattia): 0.50%\n\nContributi azienda (informativi):\n• AVS/AI/IPG: 5.30%\n• AD: 1.10%\n• AIL (infortuni professionali): ~0.50%\n• LPP: min. 7.00%\n• IS: 0.50%\n\nEsempio CHF 3.800 lordo:\n→ Deduzioni dipendente: CHF 537.10\n→ STIPENDIO NETTO: CHF 3.262.90"}
        },
        {
          h:{DE:"Lohnabrechnung anzeigen & herunterladen",ES:"Ver y descargar nómina",EN:"View & Download Payslip",IT:"Visualizza e scarica busta paga"},
          b:{DE:"1. App 'Mitarbeiter' oder 'Lohnabrechnung' öffnen\n2. Monat und Jahr wählen\n3. Beim gewünschten Mitarbeiter auf '📄 Lohnabrechnung anzeigen' klicken\n4. Vorschau öffnet sich mit vollständigem Lohndokument:\n   • Firmenkopf mit Logo\n   • Mitarbeiterdaten & AHV-Nummer\n   • Bruttolohn & alle Abzüge\n   • NETTOLOHN (hervorgehoben)\n   • Zahlungsdetails mit IBAN\n   • Arbeitgeberkosten zur Information\n   • Lohnausweis-Hinweis für Steuererklärung\n5. '⬇️ PDF herunterladen' → HTML-Datei wird gespeichert\n6. Datei öffnen → Drucken → 'Als PDF speichern'\n\n📧 Lohnabrechnung direkt per E-Mail senden möglich.",
             ES:"1. Abrir app 'Empleados' o 'Nóminas'\n2. Seleccionar mes y año\n3. Clic en '📄 Ver nómina' junto al empleado\n4. Se abre la vista previa con el documento completo:\n   • Encabezado con logo\n   • Datos del empleado y número AVS\n   • Salario bruto y todas las deducciones\n   • SALARIO NETO (destacado)\n   • Detalles de pago con IBAN\n   • Costes del empleador a título informativo\n   • Nota del certificado de salario para declaración\n5. '⬇️ Descargar PDF' → Se guarda archivo HTML\n6. Abrir archivo → Imprimir → 'Guardar como PDF'\n\n📧 También es posible enviar la nómina directamente por correo.",
             EN:"1. Open 'Employees' or 'Payroll' app\n2. Select month and year\n3. Click '📄 View payslip' next to the employee\n4. Preview opens with full payslip document:\n   • Company header with logo\n   • Employee data & AHV number\n   • Gross salary & all deductions\n   • NET SALARY (highlighted)\n   • Payment details with IBAN\n   • Employer costs for information\n   • Salary certificate note for tax return\n5. '⬇️ Download PDF' → HTML file is saved\n6. Open file → Print → 'Save as PDF'\n\n📧 Payslip can also be sent directly by email.",
             IT:"1. Aprire app 'Dipendenti' o 'Stipendi'\n2. Selezionare mese e anno\n3. Cliccare '📄 Visualizza busta paga' accanto al dipendente\n4. Si apre l'anteprima con il documento completo:\n   • Intestazione aziendale con logo\n   • Dati dipendente e numero AVS\n   • Stipendio lordo e tutte le deduzioni\n   • STIPENDIO NETTO (evidenziato)\n   • Dettagli di pagamento con IBAN\n   • Costi azienda a titolo informativo\n   • Nota certificato salario per dichiarazione\n5. '⬇️ Scarica PDF' → File HTML viene salvato\n6. Aprire file → Stampa → 'Salva come PDF'\n\n📧 La busta paga può essere inviata anche direttamente per email."}
        },
      ]
    },

    invoices: {
      icon:"🧾",
      title:{DE:"Rechnungen & Swiss QR",ES:"Facturas y Swiss QR",EN:"Invoices & Swiss QR",IT:"Fatture e Swiss QR"},
      items:[
        {
          h:{DE:"Rechnung erstellen",ES:"Crear una factura",EN:"Creating an Invoice",IT:"Creare una fattura"},
          b:{DE:"1. App 'Rechnungen' → '＋ Rechnung erstellen'\n2. Kunden wählen\n3. Rechnungsnummer (auto generiert: 2024-001)\n4. Datum + Fälligkeitsdatum (Standard 14 Tage)\n5. Positionen hinzufügen:\n   • Beschreibung, Menge, CHF/Einheit\n   • Total wird automatisch berechnet\n   • '＋ Position' für weitere Zeilen\n6. MWST 8.1% wird automatisch addiert\n7. Speichern\n\nVorschau: 👁️ Button → Swiss QR-Rechnung mit:\n• Firmenkopf mit Logo\n• Kundenadresse\n• Positionen, Subtotal, MWST, Total\n• Swiss QR-Zahlungsschein mit IBAN\n\n📧 Rechnung per E-Mail senden möglich.",
             ES:"1. App 'Facturas' → '＋ Generar factura'\n2. Seleccionar cliente\n3. Número de factura (auto generado: 2024-001)\n4. Fecha + Fecha de vencimiento (14 días por defecto)\n5. Añadir posiciones:\n   • Descripción, cantidad, CHF/unidad\n   • El total se calcula automáticamente\n   • '＋ Posición' para más líneas\n6. IVA 8.1% se suma automáticamente\n7. Guardar\n\nVista previa: Botón 👁️ → Factura Swiss QR con:\n• Encabezado con logo\n• Dirección del cliente\n• Posiciones, subtotal, IVA, total\n• Cedula de pago Swiss QR con IBAN\n\n📧 Se puede enviar la factura por correo.",
             EN:"1. App 'Invoices' → '＋ Generate Invoice'\n2. Select client\n3. Invoice number (auto generated: 2024-001)\n4. Date + Due date (14 days default)\n5. Add line items:\n   • Description, quantity, CHF/unit\n   • Total calculated automatically\n   • '＋ Line item' for more lines\n6. VAT 8.1% added automatically\n7. Save\n\nPreview: 👁️ button → Swiss QR invoice with:\n• Company header with logo\n• Client address\n• Line items, subtotal, VAT, total\n• Swiss QR payment slip with IBAN\n\n📧 Invoice can be sent by email.",
             IT:"1. App 'Fatture' → '＋ Genera fattura'\n2. Selezionare cliente\n3. Numero fattura (auto generato: 2024-001)\n4. Data + Data scadenza (14 giorni predefiniti)\n5. Aggiungere posizioni:\n   • Descrizione, quantità, CHF/unità\n   • Il totale viene calcolato automaticamente\n   • '＋ Voce' per ulteriori righe\n6. IVA 8.1% aggiunta automaticamente\n7. Salva\n\nAnteprima: Pulsante 👁️ → Fattura Swiss QR con:\n• Intestazione aziendale con logo\n• Indirizzo cliente\n• Posizioni, subtotale, IVA, totale\n• Cedola di pagamento Swiss QR con IBAN\n\n📧 La fattura può essere inviata per email."}
        },
        {
          h:{DE:"Rechnungsstatus verwalten",ES:"Gestionar estados de facturas",EN:"Managing Invoice Status",IT:"Gestire lo stato delle fatture"},
          b:{DE:"3 Status:\n🟡 Ausstehend – nicht bezahlt, innerhalb Frist\n🔴 Überfällig – Fälligkeitsdatum überschritten\n🟢 Bezahlt – Zahlung bestätigt\n\nAls bezahlt markieren: '✓ Bezahlt' Button\n\nDashboard-Alarm: Überfällige Rechnungen erscheinen als rote Warnung\n\nFinanzen: Nur bezahlte Rechnungen fliessen in die Einnahmen-Berechnung ein",
             ES:"3 estados:\n🟡 Pendiente – no pagada, dentro del plazo\n🔴 Vencida – fecha de vencimiento superada\n🟢 Pagada – pago confirmado\n\nMarcar como pagada: Botón '✓ Pagado'\n\nAlerta del panel: Las facturas vencidas aparecen como advertencia roja\n\nFinanzas: Solo las facturas pagadas entran en el cálculo de ingresos",
             EN:"3 statuses:\n🟡 Pending – not paid, within deadline\n🔴 Overdue – due date exceeded\n🟢 Paid – payment confirmed\n\nMark as paid: '✓ Paid' button\n\nDashboard alert: Overdue invoices appear as red warning\n\nFinance: Only paid invoices are included in the income calculation",
             IT:"3 stati:\n🟡 In sospeso – non pagata, entro scadenza\n🔴 Scaduta – data di scadenza superata\n🟢 Pagata – pagamento confermato\n\nSegna come pagata: Pulsante '✓ Pagato'\n\nAvviso pannello: Le fatture scadute appaiono come avviso rosso\n\nFinanze: Solo le fatture pagate rientrano nel calcolo delle entrate"}
        },
      ]
    },

    finance: {
      icon:"💰",
      title:{DE:"Finanzen, Steuern & Almacén",ES:"Finanzas, impuestos y almacén",EN:"Finance, Taxes & Warehouse",IT:"Finanze, imposte e magazzino"},
      items:[
        {
          h:{DE:"Finanzübersicht & Berechnung",ES:"Resumen financiero y cálculo",EN:"Financial Overview & Calculation",IT:"Panoramica finanziaria e calcolo"},
          b:{DE:"EINNAHMEN: Summe aller bezahlten Rechnungen\nPERSONALKOSTEN: Bruttolöhne × 1.144 (Arbeitgeber-Abgaben)\nLAGERBESTELLUNGEN: Gelieferte Bestellungen aus dem Lager\nSONSTIGE AUSGABEN: Manuell erfasste Ausgaben (Material, Fahrzeug...)\n\nBETRIEBSERGEBNIS = Einnahmen − Alle Kosten\n\nJAHRESCHART: Echtzeitdiagramm (12 Monate) aus Rechnungen, Lohnabzügen und Lagerbestellungen",
             ES:"INGRESOS: Suma de todas las facturas pagadas\nCOSTES DE PERSONAL: Sueldos brutos × 1.144 (cotizaciones empresa)\nPEDIDOS DE ALMACÉN: Pedidos entregados del almacén\nOTROS GASTOS: Gastos registrados manualmente (material, vehículo...)\n\nRESULTADO OPERATIVO = Ingresos − Todos los costes\n\nGRÁFICO ANUAL: Gráfico en tiempo real (12 meses) de facturas, salarios y pedidos de almacén",
             EN:"INCOME: Sum of all paid invoices\nPAYROLL COST: Gross salaries × 1.144 (employer contributions)\nWAREHOUSE ORDERS: Delivered orders from inventory\nOTHER EXPENSES: Manually entered expenses (materials, vehicle...)\n\nOPERATING RESULT = Income − All costs\n\nANNUAL CHART: Real-time chart (12 months) from invoices, salaries and warehouse orders",
             IT:"ENTRATE: Somma di tutte le fatture pagate\nCOSTI DEL PERSONALE: Stipendi lordi × 1.144 (contributi azienda)\nORDINI MAGAZZINO: Ordini consegnati dal magazzino\nALTRE SPESE: Spese registrate manualmente (materiali, veicolo...)\n\nRISULTATO OPERATIVO = Entrate − Tutti i costi\n\nGRAFICO ANNUALE: Grafico in tempo reale (12 mesi) da fatture, stipendi e ordini magazzino"}
        },
        {
          h:{DE:"Schweizer Steuern (Schätzung)",ES:"Impuestos suizos (estimación)",EN:"Swiss Taxes (Estimate)",IT:"Imposte svizzere (stima)"},
          b:{DE:"Automatisch berechnet (Schätzwerte):\n• Gewinnsteuer Kanton Zürich: ~12% des Betriebsgewinns\n• Gewinnsteuer Bund: ~8.5%\n• MWST netto: 8.1% − Vorsteuer\n• AHV Arbeitgeber: 5.3%\n\n📧 Steuerbericht senden: Button 'Steuerbericht' → Bericht an info@patjacservices.ch\n\n⚠️ Für die offizielle Steuerklärung: Treuhänder oder Steuerbehörde kontaktieren.",
             ES:"Calculado automáticamente (valores estimados):\n• Impuesto beneficios Cantón Zúrich: ~12% del resultado operativo\n• Impuesto federal: ~8.5%\n• IVA neto: 8.1% − IVA soportado\n• AVS empresa: 5.3%\n\n📧 Enviar informe fiscal: Botón 'Informe fiscal' → Informe a info@patjacservices.ch\n\n⚠️ Para la declaración fiscal oficial: Contactar al asesor fiscal o autoridades.",
             EN:"Automatically calculated (estimated values):\n• Profit tax Canton Zurich: ~12% of operating profit\n• Federal tax: ~8.5%\n• VAT net: 8.1% − input VAT\n• AHV employer: 5.3%\n\n📧 Send tax report: 'Tax Report' button → Report to info@patjacservices.ch\n\n⚠️ For the official tax return: Contact your tax advisor or authorities.",
             IT:"Calcolato automaticamente (valori stimati):\n• Imposta utili Cantone Zurigo: ~12% del risultato operativo\n• Imposta federale: ~8.5%\n• IVA netta: 8.1% − IVA a credito\n• AVS azienda: 5.3%\n\n📧 Invia rapporto fiscale: Pulsante 'Rapporto fiscale' → Rapporto a info@patjacservices.ch\n\n⚠️ Per la dichiarazione fiscale ufficiale: Contattare il consulente fiscale o le autorità."}
        },
      ]
    },

    timeclock: {
      icon:"⏱️",
      title:{DE:"Zeiterfassung",ES:"Fichaje",EN:"Time Clock",IT:"Timbrature"},
      items:[
        {
          h:{DE:"Mitarbeiter ein- & ausstempeln",ES:"Fichar entrada y salida de empleados",EN:"Employee Clock In & Out",IT:"Timbratura entrata e uscita dipendenti"},
          b:{DE:"MITARBEITER-ANSICHT (nach Login):\n1. App 'Zeiterfassung' öffnen\n2. 🟢 Grosser grüner Button 'Arbeitsbeginn' → Einstempelzeit gespeichert\n3. 🔴 Grosser roter Button 'Arbeitsende' → Ausstempelzeit & Stunden berechnet\n\nADMIN-ANSICHT:\n• Mitarbeiter-Dropdown → beliebigen Mitarbeiter wählen\n• Vollständige Stempelkarte: Datum, Ein, Aus, Stunden, GPS\n• Monatsgesamtstunden automatisch summiert\n• Stundenberechnungen fliessen in Lohnberechnung ein",
             ES:"VISTA EMPLEADO (tras login):\n1. Abrir app 'Fichaje'\n2. 🟢 Botón verde grande 'Entrada' → Hora de entrada guardada\n3. 🔴 Botón rojo grande 'Salida' → Hora de salida y horas calculadas\n\nVISTA ADMIN:\n• Desplegable de empleados → elegir cualquier empleado\n• Historial completo: fecha, entrada, salida, horas, GPS\n• Horas totales mensuales sumadas automáticamente\n• Los cálculos de horas se incluyen en el cálculo de nómina",
             EN:"EMPLOYEE VIEW (after login):\n1. Open 'Time Clock' app\n2. 🟢 Large green button 'Clock In' → Check-in time saved\n3. 🔴 Large red button 'Clock Out' → Check-out time & hours calculated\n\nADMIN VIEW:\n• Employee dropdown → select any employee\n• Full time card: date, in, out, hours, GPS\n• Monthly total hours automatically summed\n• Hour calculations feed into payroll calculation",
             IT:"VISTA DIPENDENTE (dopo login):\n1. Aprire app 'Timbrature'\n2. 🟢 Grande pulsante verde 'Entrata' → Ora di entrata salvata\n3. 🔴 Grande pulsante rosso 'Uscita' → Ora di uscita e ore calcolate\n\nVISTA ADMIN:\n• Menu a tendina dipendenti → seleziona qualsiasi dipendente\n• Scheda timbrature completa: data, entrata, uscita, ore, GPS\n• Ore totali mensili sommate automaticamente\n• I calcoli orari alimentano il calcolo degli stipendi"}
        },
      ]
    },

    messaging: {
      icon:"💬",
      title:{DE:"Interne Nachrichten",ES:"Mensajería interna",EN:"Internal Messaging",IT:"Messaggistica interna"},
      items:[
        {
          h:{DE:"Nachrichten senden & empfangen",ES:"Enviar y recibir mensajes",EN:"Sending & Receiving Messages",IT:"Inviare e ricevere messaggi"},
          b:{DE:"📱 DESIGN (WhatsApp-Stil):\n1. App 'Nachrichten' öffnen\n2. Kontaktliste erscheint (Admin sieht alle Mitarbeiter)\n3. 🔍 Mitarbeiter suchen mit Suchfeld oben\n4. Auf Mitarbeiter tippen → Chat öffnet sich in Vollbild\n5. ‹ Zurück-Button → Zurück zur Kontaktliste\n\n🖼️ BILDER SENDEN:\n• 🖼️ Galerie-Button → Bild aus Galerie wählen\n• 📷 Kamera-Button → Direkt Foto aufnehmen\n• Max. Bildgrösse: 2MB\n• Bilder können durch Tippen vergrössert werden\n\n🗑️ NACHRICHTEN LÖSCHEN (nur Admin):\n• 'Heute löschen' Button → Löscht alle heutigen Nachrichten\n• Automatische Löschung: Alle Nachrichten nach 3 Tagen\n\n🔴 Ungelesene Nachrichten: Roter Badge auf App-Icon\nMitarbeiter sehen nur ihre eigenen Gespräche mit dem Admin.",
             ES:"📱 DISEÑO (estilo WhatsApp):\n1. Abrir app 'Mensajes'\n2. Aparece lista de contactos (admin ve todos los empleados)\n3. 🔍 Buscar empleado con el campo de búsqueda\n4. Tocar empleado → Chat se abre en pantalla completa\n5. Botón ‹ Volver → Regresa a la lista de contactos\n\n🖼️ ENVIAR IMÁGENES:\n• 🖼️ Botón galería → Elegir imagen de la galería\n• 📷 Botón cámara → Tomar foto directamente\n• Tamaño máximo: 2MB\n• Las imágenes se pueden ampliar tocándolas\n\n🗑️ LIMPIAR MENSAJES (solo admin):\n• Botón 'Limpiar hoy' → Elimina todos los mensajes de hoy\n• Eliminación automática: Todos los mensajes tras 3 días\n\n🔴 Mensajes no leídos: Badge rojo en el icono de la app\nLos empleados solo ven sus conversaciones con el admin.",
             EN:"📱 DESIGN (WhatsApp style):\n1. Open 'Messages' app\n2. Contact list appears (admin sees all employees)\n3. 🔍 Search employee with search field\n4. Tap employee → Chat opens full screen\n5. ‹ Back button → Returns to contact list\n\n🖼️ SENDING IMAGES:\n• 🖼️ Gallery button → Choose image from gallery\n• 📷 Camera button → Take photo directly\n• Maximum size: 2MB\n• Images can be enlarged by tapping\n\n🗑️ CLEAR MESSAGES (admin only):\n• 'Clear today' button → Deletes all today's messages\n• Automatic deletion: All messages after 3 days\n\n🔴 Unread messages: Red badge on app icon\nEmployees only see their own conversations with admin.",
             IT:"📱 DESIGN (stile WhatsApp):\n1. Aprire app 'Messaggi'\n2. Appare lista contatti (admin vede tutti i dipendenti)\n3. 🔍 Cerca dipendente con il campo di ricerca\n4. Tocca dipendente → Chat si apre a schermo intero\n5. Pulsante ‹ Indietro → Torna alla lista contatti\n\n🖼️ INVIARE IMMAGINI:\n• 🖼️ Pulsante galleria → Scegli immagine dalla galleria\n• 📷 Pulsante fotocamera → Scatta foto direttamente\n• Dimensione massima: 2MB\n• Le immagini possono essere ingrandite toccandole\n\n🗑️ CANCELLA MESSAGGI (solo admin):\n• Pulsante 'Pulisci oggi' → Elimina tutti i messaggi di oggi\n• Eliminazione automatica: Tutti i messaggi dopo 3 giorni\n\n🔴 Messaggi non letti: Badge rosso sull'icona dell'app\nI dipendenti vedono solo le proprie conversazioni con l'admin."}
        },
      ]
    },

    routes: {
      icon:"🗺️",
      title:{DE:"Routen & Tagesplanung",ES:"Rutas y planificación diaria",EN:"Routes & Daily Planning",IT:"Percorsi e pianificazione giornaliera"},
      items:[
        {
          h:{DE:"Tagesroute planen & optimieren",ES:"Planificar y optimizar la ruta del día",EN:"Planning & Optimising the Daily Route",IT:"Pianificare e ottimizzare il percorso giornaliero"},
          b:{DE:"1. App 'Routen' öffnen\n2. Alle heutigen Aufträge werden chronologisch gelistet\n3. Jeder Auftrag zeigt: Kunde, vollständige Adresse, Uhrzeit, Mitarbeiter\n4. Status: Ausstehend 🟡 / In Bearbeitung 🔵 / Abgeschlossen 🟢\n5. '🗺️ Route optimieren' Button → Aufträge nach Nähe sortiert\n\nStartpunkt: Industriestrasse 14, 8004 Zürich (Firmensitz)\n\nKarte: Zeigt alle Stops der Tagesroute in der Zürich Region\n\n💡 Geografisch sinnvolle Auftragsplanung reduziert Fahrzeit!",
             ES:"1. Abrir app 'Rutas'\n2. Todos los trabajos de hoy se listan cronológicamente\n3. Cada trabajo muestra: cliente, dirección completa, hora, empleado\n4. Estado: Pendiente 🟡 / En progreso 🔵 / Completado 🟢\n5. Botón '🗺️ Optimizar ruta' → Trabajos ordenados por proximidad\n\nPunto de partida: Industriestrasse 14, 8004 Zürich (sede)\n\nMapa: Muestra todas las paradas de la ruta del día en la región de Zúrich\n\n💡 ¡La planificación geográfica inteligente reduce el tiempo de desplazamiento!",
             EN:"1. Open 'Routes' app\n2. All today's jobs listed chronologically\n3. Each job shows: client, full address, time, employee\n4. Status: Pending 🟡 / In Progress 🔵 / Completed 🟢\n5. '🗺️ Optimise route' button → Jobs sorted by proximity\n\nStarting point: Industriestrasse 14, 8004 Zürich (company HQ)\n\nMap: Shows all stops of the day route in the Zürich region\n\n💡 Geographically smart job planning reduces travel time!",
             IT:"1. Aprire app 'Percorsi'\n2. Tutti i lavori odierni elencati cronologicamente\n3. Ogni lavoro mostra: cliente, indirizzo completo, ora, dipendente\n4. Stato: In attesa 🟡 / In corso 🔵 / Completato 🟢\n5. Pulsante '🗺️ Ottimizza percorso' → Lavori ordinati per prossimità\n\nPunto di partenza: Industriestrasse 14, 8004 Zürich (sede aziendale)\n\nMappa: Mostra tutte le fermate del percorso giornaliero nella regione di Zurigo\n\n💡 La pianificazione geografica intelligente riduce i tempi di viaggio!"}
        },
      ]
    },

    inventory: {
      icon:"📦",
      title:{DE:"Lager & Bestellungen",ES:"Almacén y pedidos",EN:"Inventory & Orders",IT:"Magazzino e ordini"},
      items:[
        {
          h:{DE:"Lagerbestand verwalten",ES:"Gestionar inventario",EN:"Managing Inventory",IT:"Gestire il magazzino"},
          b:{DE:"App '📦 Lager' öffnet 3 Ansichten:\n\n📦 LAGERBESTAND:\n• Produkte nach Kategorie: Reinigung / Garten / Ausrüstung / Sicherheit\n• Suchfunktion\n• Jedes Produkt: Bestand vs. Mindestbestand, Wert CHF, Einheit\n• Farbbalken: Grün (OK) → Gelb (niedrig) → Rot (leer)\n• ⚠️ Warnungen oben: Produkte mit niedrigem/leerem Bestand\n• ＋ Produkt hinzufügen / ✏️ Bearbeiten / 🗑️ Löschen\n• '➕ Bestellung' pro Produkt\n\n🛒 BESTELLUNGEN:\n• Alle Bestellungen an Lieferanten\n• Status: 🟡 Ausstehend / 🟢 Geliefert / 🔴 Storniert\n• Status ändern → fliesst in Finanzberechnung ein!\n\n🏭 LIEFERANTEN:\n• Kontaktdaten, Kategorie, Bewertung\n• Hinzufügen / Bearbeiten",
             ES:"App '📦 Almacén' abre 3 vistas:\n\n📦 INVENTARIO:\n• Productos por categoría: Limpieza / Jardín / Equipamiento / Seguridad\n• Búsqueda\n• Cada producto: stock vs. stock mínimo, valor CHF, unidad\n• Barra de colores: Verde (OK) → Amarillo (bajo) → Rojo (agotado)\n• ⚠️ Alertas arriba: Productos con stock bajo/agotado\n• ＋ Añadir producto / ✏️ Editar / 🗑️ Eliminar\n• '➕ Pedido' por producto\n\n🛒 PEDIDOS:\n• Todos los pedidos a proveedores\n• Estado: 🟡 Pendiente / 🟢 Entregado / 🔴 Cancelado\n• Cambiar estado → ¡se incluye en el cálculo financiero!\n\n🏭 PROVEEDORES:\n• Datos de contacto, categoría, valoración\n• Añadir / Editar",
             EN:"App '📦 Inventory' opens 3 views:\n\n📦 STOCK:\n• Products by category: Cleaning / Gardening / Equipment / Safety\n• Search function\n• Each product: stock vs. minimum, CHF value, unit\n• Colour bar: Green (OK) → Yellow (low) → Red (empty)\n• ⚠️ Alerts at top: Products with low/empty stock\n• ＋ Add product / ✏️ Edit / 🗑️ Delete\n• '➕ Order' per product\n\n🛒 ORDERS:\n• All orders to suppliers\n• Status: 🟡 Pending / 🟢 Delivered / 🔴 Cancelled\n• Change status → feeds into finance calculation!\n\n🏭 SUPPLIERS:\n• Contact data, category, rating\n• Add / Edit",
             IT:"App '📦 Magazzino' apre 3 viste:\n\n📦 SCORTE:\n• Prodotti per categoria: Pulizie / Giardino / Attrezzatura / Sicurezza\n• Ricerca\n• Ogni prodotto: scorte vs. minimo, valore CHF, unità\n• Barra colori: Verde (OK) → Giallo (basso) → Rosso (esaurito)\n• ⚠️ Avvisi in alto: Prodotti con scorte basse/esaurite\n• ＋ Aggiungi prodotto / ✏️ Modifica / 🗑️ Elimina\n• '➕ Ordine' per prodotto\n\n🛒 ORDINI:\n• Tutti gli ordini ai fornitori\n• Stato: 🟡 In sospeso / 🟢 Consegnato / 🔴 Annullato\n• Cambiare stato → alimenta il calcolo finanziario!\n\n🏭 FORNITORI:\n• Dati di contatto, categoria, valutazione\n• Aggiungi / Modifica"}
        },
        {
          h:{DE:"Lagerbestellungen & Finanzen",ES:"Pedidos de almacén y finanzas",EN:"Warehouse Orders & Finance",IT:"Ordini magazzino e finanze"},
          b:{DE:"Wichtige Verbindung: Lager ↔ Finanzen\n\n✅ Status 'Geliefert' → Kosten erscheinen als Ausgabe in Finanz-App\n🟡 Status 'Ausstehend' → Kosten als Prognose sichtbar\n\nIn der Finanz-App:\n📦 Lager (geliefert): Separate KPI-Karte mit Gesamtkosten\n📊 Tabelle: Alle Bestellungen mit Lieferant, Artikeln, Betrag\n📈 Jahreschart: Lagerkosten in Gesamtkostenberechnung enthalten\n\nSo werden reale Betriebskosten korrekt abgebildet!",
             ES:"Conexión importante: Almacén ↔ Finanzas\n\n✅ Estado 'Entregado' → Costes aparecen como gasto en la app Finanzas\n🟡 Estado 'Pendiente' → Costes visibles como previsión\n\nEn la app Finanzas:\n📦 Almacén (entregado): Tarjeta KPI separada con costes totales\n📊 Tabla: Todos los pedidos con proveedor, artículos, importe\n📈 Gráfico anual: Costes de almacén incluidos en el cálculo total\n\n¡Así se reflejan correctamente los costes operativos reales!",
             EN:"Important connection: Inventory ↔ Finance\n\n✅ Status 'Delivered' → Costs appear as expense in Finance app\n🟡 Status 'Pending' → Costs visible as forecast\n\nIn Finance app:\n📦 Warehouse (delivered): Separate KPI card with total costs\n📊 Table: All orders with supplier, items, amount\n📈 Annual chart: Warehouse costs included in total cost calculation\n\nThis is how real operating costs are accurately reflected!",
             IT:"Connessione importante: Magazzino ↔ Finanze\n\n✅ Stato 'Consegnato' → I costi appaiono come spesa nell'app Finanze\n🟡 Stato 'In sospeso' → Costi visibili come previsione\n\nNell'app Finanze:\n📦 Magazzino (consegnato): Scheda KPI separata con costi totali\n📊 Tabella: Tutti gli ordini con fornitore, articoli, importo\n📈 Grafico annuale: Costi magazzino inclusi nel calcolo dei costi totali\n\nCosì i costi operativi reali vengono rispecchiati correttamente!"}
        },
      ]
    },

    contracts: {
      icon:"📝",
      title:{DE:"Verträge nach Schweizer Recht",ES:"Contratos según derecho suizo",EN:"Contracts under Swiss Law",IT:"Contratti secondo il diritto svizzero"},
      items:[
        {
          h:{DE:"Kundenvertrag erstellen",ES:"Crear contrato de cliente",EN:"Creating a Client Contract",IT:"Creare un contratto cliente"},
          b:{DE:"1. App '📝 Verträge' → '👥 ＋ Kundenvertrag'\n2. Kunden wählen (Dropdown)\n3. Vertragsdaten:\n   • Vertragsdatum, Beginn, Ende (leer = unbefristet)\n   • Dienstleistungsart: Reinigung / Garten / Sonstige\n   • Häufigkeit\n   • Preis CHF / Stunde oder Monat\n   • Kündigungsfrist (Standard: 30 Tage)\n   • Zusätzliche Vereinbarungen\n4. Speichern (Status: Entwurf)\n5. '✍️' Button → Als 'Unterzeichnet' markieren\n\nInhalt (Schweizer Recht OR):\n• Art. 1 Vertragsparteien\n• Art. 2 Leistungsbeschreibung\n• Art. 3 Vergütung & MWST 8.1%\n• Art. 4 Haftung\n• Art. 5 Kündigung\n• Art. 6 Datenschutz (DSG/LPD)\n• Art. 7 Gerichtsstand Zürich",
             ES:"1. App '📝 Contratos' → '👥 ＋ Contrato cliente'\n2. Seleccionar cliente (desplegable)\n3. Datos del contrato:\n   • Fecha, inicio, fin (vacío = indefinido)\n   • Tipo de servicio: Limpieza / Jardín / Otro\n   • Frecuencia\n   • Precio CHF / hora o mes\n   • Preaviso (por defecto: 30 días)\n   • Acuerdos adicionales\n4. Guardar (estado: Borrador)\n5. Botón '✍️' → Marcar como 'Firmado'\n\nContenido (Derecho suizo CO):\n• Art. 1 Partes contratantes\n• Art. 2 Descripción del servicio\n• Art. 3 Remuneración e IVA 8.1%\n• Art. 4 Responsabilidad\n• Art. 5 Rescisión\n• Art. 6 Protección de datos (LPD)\n• Art. 7 Foro Zúrich",
             EN:"1. App '📝 Contracts' → '👥 ＋ Client contract'\n2. Select client (dropdown)\n3. Contract data:\n   • Date, start, end (empty = indefinite)\n   • Service type: Cleaning / Gardening / Other\n   • Frequency\n   • Price CHF / hour or month\n   • Notice period (default: 30 days)\n   • Additional agreements\n4. Save (status: Draft)\n5. '✍️' button → Mark as 'Signed'\n\nContent (Swiss law CO):\n• Art. 1 Contracting parties\n• Art. 2 Service description\n• Art. 3 Remuneration & VAT 8.1%\n• Art. 4 Liability\n• Art. 5 Termination\n• Art. 6 Data protection (FADP)\n• Art. 7 Jurisdiction Zurich",
             IT:"1. App '📝 Contratti' → '👥 ＋ Contratto cliente'\n2. Selezionare cliente (menu a tendina)\n3. Dati contratto:\n   • Data, inizio, fine (vuoto = indeterminato)\n   • Tipo servizio: Pulizie / Giardino / Altro\n   • Frequenza\n   • Prezzo CHF / ora o mese\n   • Preavviso (predefinito: 30 giorni)\n   • Accordi aggiuntivi\n4. Salva (stato: Bozza)\n5. Pulsante '✍️' → Segna come 'Firmato'\n\nContenuto (Diritto svizzero CO):\n• Art. 1 Parti contraenti\n• Art. 2 Descrizione del servizio\n• Art. 3 Remunerazione e IVA 8.1%\n• Art. 4 Responsabilità\n• Art. 5 Rescissione\n• Art. 6 Protezione dei dati (LPD)\n• Art. 7 Foro Zurigo"}
        },
        {
          h:{DE:"Arbeitsvertrag erstellen & herunterladen",ES:"Crear y descargar contrato laboral",EN:"Creating & Downloading an Employment Contract",IT:"Creare e scaricare un contratto di lavoro"},
          b:{DE:"1. App '📝 Verträge' → '👤 ＋ Arbeitsvertrag'\n2. Mitarbeiter wählen (Dropdown mit AHV-Nr.)\n3. Vertragsdaten: Datum, Beginn, Probezeit, Ende\n4. Lohn/Tarif + Abrechnungsart\n5. Wöchentliche Stunden\n6. Kündigungsfrist (Standard: 1 Monat)\n7. 13. Monatslohn: Ja/Nein\n8. Speichern\n\nInhalt (Schweizer Recht OR):\n• Art. 1 Vertragsparteien (mit AHV-Nr.)\n• Art. 2 Beginn, Probezeit (335b OR), Befristung\n• Art. 3 Lohn + alle AHV/ALV/BVG-Abzüge + IBAN\n• Art. 4 Sorgfalts- & Treuepflicht (321a OR)\n• Art. 5 Ferien 4 Wochen / U20: 5 Wochen (329a OR)\n• Art. 6 Krankheit & SUVA (324a OR)\n• Art. 7 Gerichtsstand Zürich\n\n⬇️ Herunterladen: HTML → Öffnen → Drucken → Als PDF\n👁️ Vorschau: Live-Vorschau in der App",
             ES:"1. App '📝 Contratos' → '👤 ＋ Contrato laboral'\n2. Seleccionar empleado (desplegable con Nº AVS)\n3. Datos: fecha, inicio, período de prueba, fin\n4. Salario/tarifa + tipo de retribución\n5. Horas semanales\n6. Preaviso (por defecto: 1 mes)\n7. 13.° salario: Sí/No\n8. Guardar\n\nContenido (Derecho suizo CO):\n• Art. 1 Partes (con Nº AVS)\n• Art. 2 Inicio, prueba (335b CO), duración\n• Art. 3 Salario + deducciones AVS/AD/LPP + IBAN\n• Art. 4 Deber de diligencia y lealtad (321a CO)\n• Art. 5 Vacaciones 4 semanas / Menores 20: 5 semanas (329a CO)\n• Art. 6 Enfermedad y SUVA (324a CO)\n• Art. 7 Foro Zúrich\n\n⬇️ Descargar: HTML → Abrir → Imprimir → Como PDF\n👁️ Vista previa: Vista previa en vivo en la app",
             EN:"1. App '📝 Contracts' → '👤 ＋ Employment contract'\n2. Select employee (dropdown with AHV no.)\n3. Data: date, start, trial period, end\n4. Salary/rate + billing type\n5. Weekly hours\n6. Notice period (default: 1 month)\n7. 13th month salary: Yes/No\n8. Save\n\nContent (Swiss law CO):\n• Art. 1 Parties (with AHV no.)\n• Art. 2 Start, trial period (335b CO), term\n• Art. 3 Salary + AHV/ALV/BVG deductions + IBAN\n• Art. 4 Duty of care & loyalty (321a CO)\n• Art. 5 Leave 4 weeks / Under 20: 5 weeks (329a CO)\n• Art. 6 Illness & SUVA (324a CO)\n• Art. 7 Jurisdiction Zurich\n\n⬇️ Download: HTML → Open → Print → Save as PDF\n👁️ Preview: Live preview in the app",
             IT:"1. App '📝 Contratti' → '👤 ＋ Contratto di lavoro'\n2. Selezionare dipendente (menu con N. AVS)\n3. Dati: data, inizio, periodo di prova, fine\n4. Stipendio/tariffa + tipo retribuzione\n5. Ore settimanali\n6. Preavviso (predefinito: 1 mese)\n7. 13a mensilità: Sì/No\n8. Salva\n\nContenuto (Diritto svizzero CO):\n• Art. 1 Parti (con N. AVS)\n• Art. 2 Inizio, prova (335b CO), durata\n• Art. 3 Stipendio + deduzioni AVS/AD/LPP + IBAN\n• Art. 4 Dovere di diligenza e fedeltà (321a CO)\n• Art. 5 Ferie 4 settimane / Sotto 20: 5 settimane (329a CO)\n• Art. 6 Malattia e SUVA (324a CO)\n• Art. 7 Foro Zurigo\n\n⬇️ Scarica: HTML → Apri → Stampa → Salva come PDF\n👁️ Anteprima: Anteprima live nell'app"}
        },
      ]
    },

    reports: {
      icon:"📈",
      title:{DE:"Berichte & Statistiken",ES:"Informes y estadísticas",EN:"Reports & Statistics",IT:"Rapporti e statistiche"},
      items:[
        {
          h:{DE:"4 Berichtstypen",ES:"4 tipos de informes",EN:"4 Report Types",IT:"4 tipi di rapporti"},
          b:{DE:"📅 MONATSÜBERSICHT:\n• KPIs: Einnahmen, Personalkosten, Betriebsergebnis\n• Letzte Rechnungen mit Status\n• Aufträge nach Status (Balken)\n\n📈 JAHRESBERICHT:\n• Gleiche Struktur, aber mit Jahresdaten\n• Jahres-Vergleich von Einnahmen & Kosten\n\n🏛️ STEUERBERICHT:\n• MWST: Einnahmen 8.1%, Vorsteuer, Zahlbar\n• Gewinnsteuer: Kanton ZH ~12%, Bund ~8.5%\n• Steuerschätzungen (keine offizielle Deklaration!)\n\n💼 LOHNABRECHNUNG:\n• Alle aktiven Mitarbeiter\n• Brutto / Abzüge / Netto pro Mitarbeiter\n• Gesamtkosten Arbeitgeber\n\n⬇️ Alle Berichte: Herunterladen-Button (HTML)\n📧 Alle Berichte: E-Mail an info@patjacservices.ch",
             ES:"📅 RESUMEN MENSUAL:\n• KPIs: Ingresos, costes personal, resultado operativo\n• Últimas facturas con estado\n• Trabajos por estado (barras)\n\n📈 INFORME ANUAL:\n• Misma estructura, pero con datos anuales\n• Comparación anual de ingresos y costes\n\n🏛️ INFORME FISCAL:\n• IVA: Ingresos 8.1%, IVA soportado, A pagar\n• Impuesto beneficios: Cantón ZH ~12%, Federal ~8.5%\n• Estimaciones fiscales (¡no declaración oficial!)\n\n💼 NÓMINAS:\n• Todos los empleados activos\n• Bruto / Deducciones / Neto por empleado\n• Coste total empresa\n\n⬇️ Todos los informes: Botón Descargar (HTML)\n📧 Todos los informes: Email a info@patjacservices.ch",
             EN:"📅 MONTHLY SUMMARY:\n• KPIs: Income, payroll costs, operating result\n• Recent invoices with status\n• Jobs by status (bars)\n\n📈 ANNUAL REPORT:\n• Same structure but with annual data\n• Annual comparison of income & costs\n\n🏛️ TAX REPORT:\n• VAT: Income 8.1%, input VAT, payable\n• Profit tax: Canton ZH ~12%, Federal ~8.5%\n• Tax estimates (not an official declaration!)\n\n💼 PAYROLL:\n• All active employees\n• Gross / Deductions / Net per employee\n• Total employer cost\n\n⬇️ All reports: Download button (HTML)\n📧 All reports: Email to info@patjacservices.ch",
             IT:"📅 RIEPILOGO MENSILE:\n• KPIs: Entrate, costi personale, risultato operativo\n• Ultime fatture con stato\n• Lavori per stato (barre)\n\n📈 RAPPORTO ANNUALE:\n• Stessa struttura ma con dati annuali\n• Confronto annuale entrate e costi\n\n🏛️ RAPPORTO FISCALE:\n• IVA: Entrate 8.1%, IVA a credito, Da pagare\n• Imposta utili: Cantone ZH ~12%, Federale ~8.5%\n• Stime fiscali (non dichiarazione ufficiale!)\n\n💼 STIPENDI:\n• Tutti i dipendenti attivi\n• Lordo / Deduzioni / Netto per dipendente\n• Costo totale azienda\n\n⬇️ Tutti i rapporti: Pulsante Scarica (HTML)\n📧 Tutti i rapporti: Email a info@patjacservices.ch"}
        },
      ]
    },

    academy: {
      icon:"🎓",
      title:{DE:"Patjac Academy – Weiterbildung",ES:"Patjac Academy – Formación",EN:"Patjac Academy – Training",IT:"Patjac Academy – Formazione"},
      items:[
        {
          h:{DE:"4 Kurse für Mitarbeiter & Admin",ES:"4 cursos para empleados y admin",EN:"4 Courses for Employees & Admin",IT:"4 corsi per dipendenti e admin"},
          b:{DE:"🧹 REINIGUNGSPROFIS SCHWEIZ\n• Swiss Reinigungsstandards, SIA-Normen\n• Chemikalien-Sicherheit SUVA-konform\n• Hygienevorschriften Gesundheitswesen\n• Professionelle Techniken\n\n🌿 GARTENPFLEGE SCHWEIZ (JardinSuisse)\n• Saisonaler Kalender Schweizer Klima\n• Neophyten & invasive Arten (Verordnung 2024)\n• Elektrische Geräte: IP44 Norm\n• Pflanzenschutzmittel: Zulassungspflicht\n\n📊 UNTERNEHMENSFÜHRUNG\n• App-Bedienung & Best Practices\n• Kundenbeziehungen in der Schweiz\n• Qualitätssicherung & ISO 9001\n• Swiss QR-Rechnung & MWST 8.1%\n\n🦺 SICHERHEIT & ERSTE HILFE\n• SUVA-Unfallverhütung\n• Persönliche Schutzausrüstung (PSA)\n• Erste Hilfe & Notfallnummern (144 Sanität)\n• Chemikalienlagerung & -entsorgung",
             ES:"🧹 PROFESIONALES DE LIMPIEZA SUIZA\n• Estándares suizos, normas SIA\n• Seguridad química según SUVA\n• Normativas de higiene sector salud\n• Técnicas profesionales\n\n🌿 JARDINERÍA SUIZA (JardinSuisse)\n• Calendario estacional clima suizo\n• Neófitos e invasoras (Ordenanza 2024)\n• Equipos eléctricos: Norma IP44\n• Fitosanitarios: Obligación de registro\n\n📊 GESTIÓN EMPRESARIAL\n• Uso de la app y mejores prácticas\n• Relaciones con clientes en Suiza\n• Control de calidad e ISO 9001\n• Factura Swiss QR e IVA 8.1%\n\n🦺 SEGURIDAD Y PRIMEROS AUXILIOS\n• Prevención de accidentes SUVA\n• Equipos de protección individual (EPI)\n• Primeros auxilios y números de emergencia (144 Sanidad)\n• Almacenamiento y eliminación de productos químicos",
             EN:"🧹 CLEANING PROFESSIONALS SWITZERLAND\n• Swiss cleaning standards, SIA norms\n• Chemical safety per SUVA\n• Hygiene regulations healthcare sector\n• Professional techniques\n\n🌿 GARDENING SWITZERLAND (JardinSuisse)\n• Seasonal calendar Swiss climate\n• Neophytes & invasive species (Ordinance 2024)\n• Electrical equipment: IP44 standard\n• Plant protection: Registration requirement\n\n📊 BUSINESS MANAGEMENT\n• App usage & best practices\n• Client relations in Switzerland\n• Quality assurance & ISO 9001\n• Swiss QR invoice & VAT 8.1%\n\n🦺 SAFETY & FIRST AID\n• SUVA accident prevention\n• Personal protective equipment (PPE)\n• First aid & emergency numbers (144 Ambulance)\n• Chemical storage & disposal",
             IT:"🧹 PROFESSIONISTI DELLA PULIZIA SVIZZERA\n• Standard svizzeri, norme SIA\n• Sicurezza chimica secondo SUVA\n• Normative igiene settore sanitario\n• Tecniche professionali\n\n🌿 GIARDINAGGIO SVIZZERA (JardinSuisse)\n• Calendario stagionale clima svizzero\n• Neofite e specie invasive (Ordinanza 2024)\n• Attrezzatura elettrica: Norma IP44\n• Fitosanitari: Obbligo di registrazione\n\n📊 GESTIONE AZIENDALE\n• Utilizzo dell'app e best practice\n• Rapporti con clienti in Svizzera\n• Garanzia qualità e ISO 9001\n• Fattura Swiss QR e IVA 8.1%\n\n🦺 SICUREZZA E PRIMO SOCCORSO\n• Prevenzione infortuni SUVA\n• Dispositivi di protezione individuale (DPI)\n• Primo soccorso e numeri emergenza (144 Ambulanza)\n• Stoccaggio e smaltimento prodotti chimici"}
        },
        {
          h:{DE:"Quiz & Zertifikat",ES:"Quiz y certificado",EN:"Quiz & Certificate",IT:"Quiz e certificato"},
          b:{DE:"Jeder Kurs enthält:\n• Lektionen mit Illustrationen (SVG)\n• Lernziele & Normenreferenzen\n• Quiz am Ende (Multiple Choice)\n• Mindestpunktzahl zum Bestehen: 70%\n• 🏆 PDF-Zertifikat nach Bestehen (mit Name & Datum)\n\nFortschritt:\n• 'Meine Kurse' zeigt abgeschlossene & laufende Kurse\n• Gesamtstunden, Punkte, Rang\n• Kurse jederzeit neu starten möglich\n\nMitarbeiter können auf die Academy über ihr eigenes Smartphone/Desktop zugreifen.",
             ES:"Cada curso contiene:\n• Lecciones con ilustraciones (SVG)\n• Objetivos de aprendizaje y referencias normativas\n• Quiz al final (opción múltiple)\n• Puntuación mínima para pasar: 70%\n• 🏆 Certificado PDF tras aprobar (con nombre y fecha)\n\nProgreso:\n• 'Mis cursos' muestra cursos completados y en curso\n• Horas totales, puntos, rango\n• Posibilidad de reiniciar cursos en cualquier momento\n\nLos empleados pueden acceder a la Academy desde su propio smartphone/escritorio.",
             EN:"Each course contains:\n• Lessons with illustrations (SVG)\n• Learning objectives & norm references\n• Quiz at the end (multiple choice)\n• Minimum score to pass: 70%\n• 🏆 PDF certificate after passing (with name & date)\n\nProgress:\n• 'My Courses' shows completed & ongoing courses\n• Total hours, points, rank\n• Courses can be restarted at any time\n\nEmployees can access the Academy from their own smartphone/desktop.",
             IT:"Ogni corso contiene:\n• Lezioni con illustrazioni (SVG)\n• Obiettivi di apprendimento e riferimenti normativi\n• Quiz alla fine (scelta multipla)\n• Punteggio minimo per superare: 70%\n• 🏆 Certificato PDF dopo il superamento (con nome e data)\n\nProgresso:\n• 'I miei corsi' mostra corsi completati e in corso\n• Ore totali, punti, classifica\n• I corsi possono essere riavviati in qualsiasi momento\n\nI dipendenti possono accedere alla Academy dal proprio smartphone/desktop."}
        },
      ]
    },

    settings: {
      icon:"⚙️",
      title:{DE:"Einstellungen & Firmendaten",ES:"Configuración y datos de empresa",EN:"Settings & Company Data",IT:"Impostazioni e dati aziendali"},
      items:[
        {
          h:{DE:"Firmendaten bearbeiten (Admin)",ES:"Editar datos de empresa (Admin)",EN:"Editing Company Data (Admin)",IT:"Modificare dati aziendali (Admin)"},
          b:{DE:"Nur der Administrator kann Firmendaten bearbeiten!\n\n1. Einstellungen → '🏢 Firma' Tab\n2. '✏️ Daten bearbeiten' klicken\n3. Felder bearbeiten:\n   • Firmenname\n   • Strasse, Nummer, PLZ, Stadt\n   • Telefon, E-Mail\n   • UID (CHE-XXX.XXX.XXX)\n   • MWST-Nummer\n   • IBAN (CH56 XXXX XXXX...)\n   • BIC\n4. '💾 Speichern'\n\nDiese Daten erscheinen automatisch auf:\n• Allen Rechnungen (Swiss QR)\n• Allen Lohnabrechnungen\n• Allen Verträgen\n• Allen heruntergeladenen Dokumenten\n\n⚠️ Mitarbeiter sehen die Firmendaten, können sie aber NICHT bearbeiten.",
             ES:"¡Solo el administrador puede editar los datos de empresa!\n\n1. Configuración → Pestaña '🏢 Empresa'\n2. Hacer clic en '✏️ Editar datos'\n3. Editar campos:\n   • Nombre de empresa\n   • Calle, número, CP, ciudad\n   • Teléfono, correo\n   • UID (CHE-XXX.XXX.XXX)\n   • Número IVA\n   • IBAN (CH56 XXXX XXXX...)\n   • BIC\n4. '💾 Guardar'\n\nEstos datos aparecen automáticamente en:\n• Todas las facturas (Swiss QR)\n• Todas las nóminas\n• Todos los contratos\n• Todos los documentos descargados\n\n⚠️ Los empleados ven los datos de empresa pero NO pueden editarlos.",
             EN:"Only the administrator can edit company data!\n\n1. Settings → '🏢 Company' tab\n2. Click '✏️ Edit data'\n3. Edit fields:\n   • Company name\n   • Street, number, postcode, city\n   • Phone, email\n   • UID (CHE-XXX.XXX.XXX)\n   • VAT number\n   • IBAN (CH56 XXXX XXXX...)\n   • BIC\n4. '💾 Save'\n\nThis data appears automatically on:\n• All invoices (Swiss QR)\n• All payslips\n• All contracts\n• All downloaded documents\n\n⚠️ Employees can see company data but CANNOT edit it.",
             IT:"Solo l'amministratore può modificare i dati aziendali!\n\n1. Impostazioni → Scheda '🏢 Azienda'\n2. Cliccare '✏️ Modifica dati'\n3. Modificare i campi:\n   • Nome azienda\n   • Via, numero, CAP, città\n   • Telefono, email\n   • UID (CHE-XXX.XXX.XXX)\n   • Numero IVA\n   • IBAN (CH56 XXXX XXXX...)\n   • BIC\n4. '💾 Salva'\n\nQuesti dati appaiono automaticamente su:\n• Tutte le fatture (Swiss QR)\n• Tutte le buste paga\n• Tutti i contratti\n• Tutti i documenti scaricati\n\n⚠️ I dipendenti possono vedere i dati aziendali ma NON possono modificarli."}
        },
        {
          h:{DE:"Backup, System & E-Mail",ES:"Copia de seguridad, sistema y correo",EN:"Backup, System & Email",IT:"Backup, sistema e email"},
          b:{DE:"💾 BACKUP ERSTELLEN:\n→ Einstellungen → System → '💾 Backup erstellen'\n→ Lädt automatisch eine JSON-Datei herunter:\n   patjac-backup-YYYY-MM-DD.json\n→ Enthält ALLE Daten: Kunden, Mitarbeiter, Aufträge,\n   Rechnungen, Verträge, Nachrichten, Produkte...\n→ Empfehlung: Monatlich sichern und aufbewahren\n\n🔄 ZURÜCKSETZEN:\n→ Einstellungen → System → '🔄 Zurücksetzen'\n→ Führt eine vollständige App-Neuladung durch (wie F5)\n→ Alle Daten in Supabase bleiben erhalten\n\n📧 E-MAIL VERSAND:\n→ Alle Dokumente (Rechnungen, Nömina, Verträge,\n   Berichte, Bestellungen) können per 📧 gesendet werden\n→ Öffnet Outlook/Gmail mit vorausgefülltem Inhalt\n→ Administrator klickt nur noch auf 'Senden'\n\n🔒 SICHERHEIT:\n• Admin: E-Mail + Passwort\n• Mitarbeiter: Code + PIN (automatisch generiert)\n• Datenbank: Supabase Cloud (Schweizer DSGVO-konform)\n\n🌐 SPRACHE: DE / ES / EN / IT",
             ES:"💾 CREAR COPIA DE SEGURIDAD:\n→ Configuración → Sistema → '💾 Crear copia de seguridad'\n→ Descarga automáticamente un archivo JSON:\n   patjac-backup-AAAA-MM-DD.json\n→ Contiene TODOS los datos: Clientes, empleados, trabajos,\n   facturas, contratos, mensajes, productos...\n→ Recomendación: Guardar mensualmente\n\n🔄 RESTABLECER:\n→ Configuración → Sistema → '🔄 Restablecer'\n→ Realiza una recarga completa de la app (como F5)\n→ Todos los datos en Supabase se conservan\n\n📧 ENVÍO POR CORREO:\n→ Todos los documentos (facturas, nóminas, contratos,\n   informes, pedidos) se pueden enviar con 📧\n→ Abre Outlook/Gmail con contenido prellenado\n→ El administrador solo hace clic en 'Enviar'\n\n🔒 SEGURIDAD:\n• Admin: Correo + Contraseña\n• Empleado: Código + PIN (generados automáticamente)\n• Base de datos: Supabase Cloud (cumple RGPD)\n\n🌐 IDIOMA: DE / ES / EN / IT",
             EN:"💾 CREATE BACKUP:\n→ Settings → System → '💾 Create backup'\n→ Automatically downloads a JSON file:\n   patjac-backup-YYYY-MM-DD.json\n→ Contains ALL data: Clients, employees, jobs,\n   invoices, contracts, messages, products...\n→ Recommendation: Save monthly\n\n🔄 RESET:\n→ Settings → System → '🔄 Reset'\n→ Performs a full app reload (like F5)\n→ All data in Supabase is preserved\n\n📧 EMAIL SENDING:\n→ All documents (invoices, payslips, contracts,\n   reports, orders) can be sent with 📧\n→ Opens Outlook/Gmail with pre-filled content\n→ Administrator just clicks 'Send'\n\n🔒 SECURITY:\n• Admin: Email + Password\n• Employee: Code + PIN (auto-generated)\n• Database: Supabase Cloud (GDPR compliant)\n\n🌐 LANGUAGE: DE / ES / EN / IT",
             IT:"💾 CREA BACKUP:\n→ Impostazioni → Sistema → '💾 Crea backup'\n→ Scarica automaticamente un file JSON:\n   patjac-backup-AAAA-MM-DD.json\n→ Contiene TUTTI i dati: Clienti, dipendenti, lavori,\n   fatture, contratti, messaggi, prodotti...\n→ Raccomandazione: Salvare mensilmente\n\n🔄 RIPRISTINA:\n→ Impostazioni → Sistema → '🔄 Ripristina'\n→ Esegue un ricaricamento completo dell'app (come F5)\n→ Tutti i dati in Supabase vengono conservati\n\n📧 INVIO EMAIL:\n→ Tutti i documenti (fatture, buste paga, contratti,\n   rapporti, ordini) possono essere inviati con 📧\n→ Apre Outlook/Gmail con contenuto precompilato\n→ L'amministratore clicca solo su 'Invia'\n\n🔒 SICUREZZA:\n• Admin: Email + Password\n• Dipendente: Codice + PIN (generati automaticamente)\n• Database: Supabase Cloud (conforme GDPR)\n\n🌐 LINGUA: DE / ES / EN / IT"}
        },
      ]
    },
  };

  const current = HELP[activeSection];
  const CP2 = CP; // use existing design system

  // Render line with smart styling
  const renderLine = (line, i) => {
    if(!line.trim()) return <div key={i} style={{height:8}}/>;
    const isWarning = line.startsWith("⚠️") || line.startsWith("❌");
    const isTip = line.startsWith("💡") || line.startsWith("✅");
    const isSection = /^(📅|📈|🏛️|💼|🧹|🌿|📊|🦺|👑|👤|🔐|📧|⚙️|🔒|🌐|🛒|🏭|📦)/.test(line) && line.includes(":");
    const isBullet = line.startsWith("•") || line.startsWith("→");
    const isNumber = /^\d+\./.test(line.trim());
    const isArt = /^Art\. \d/.test(line.trim());
    const color = isWarning?"#FF8787":isTip?"#69DB7C":isSection?"#FFD43B":isArt?"#74C0FC":isBullet?"#a8d8ff":"rgba(255,255,255,0.82)";
    return (
      <div key={i} style={{
        color, fontSize:13, lineHeight:1.65,
        fontWeight: isSection||isWarning?700:isTip?600:400,
        paddingLeft: isBullet?8:isNumber?4:0,
        marginBottom: isSection?4:0,
      }}>{line}</div>
    );
  };

  return (
    <div style={{
      position:"fixed",inset:0,
      background:"rgba(0,0,0,0.85)",backdropFilter:"blur(14px)",
      display:"flex",alignItems:"center",justifyContent:"center",
      zIndex:99999,padding:14,
    }} onClick={onClose}>
      <div style={{
        background:"rgba(8,12,24,0.99)",
        border:"1px solid rgba(28,126,214,0.45)",
        borderRadius:22,
        width:"min(960px,97vw)",
        height:"min(700px,94vh)",
        display:"flex",flexDirection:"column",
        boxShadow:"0 28px 80px rgba(0,0,0,0.9)",
        fontFamily:CP.font,
        overflow:"hidden",
      }} onClick={e=>e.stopPropagation()}>

        {/* ── HEADER ── */}
        <div style={{
          background:"linear-gradient(90deg,rgba(28,126,214,0.25),rgba(0,188,242,0.12))",
          borderBottom:"1px solid rgba(28,126,214,0.3)",
          padding:"13px 22px",
          display:"flex",alignItems:"center",justifyContent:"space-between",
          flexShrink:0,
        }}>
          <div style={{display:"flex",alignItems:"center",gap:12}}>
            <div style={{
              width:38,height:38,borderRadius:"50%",
              background:"linear-gradient(135deg,#1C7ED6,#00bcf2)",
              display:"flex",alignItems:"center",justifyContent:"center",
              fontSize:18,fontWeight:900,color:"#fff",
              boxShadow:"0 0 16px rgba(28,126,214,0.5)",flexShrink:0,
            }}>?</div>
            <div>
              <div style={{color:"#fff",fontWeight:700,fontSize:16}}>{t.helpTitle||"User Manual – Patjac Business Suite"}</div>
              <div style={{color:"rgba(116,192,252,0.75)",fontSize:12}}>{t.helpSubtitle||"Complete guide for administrators"}</div>
            </div>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <div style={{background:"rgba(201,42,42,0.2)",border:"1px solid rgba(201,42,42,0.4)",borderRadius:20,padding:"3px 12px",color:"#FF8787",fontSize:11,fontWeight:700}}>
              {t.helpAdminOnly||"👑 Admin only"}
            </div>
            <button onClick={onClose} style={{
              width:30,height:30,borderRadius:"50%",
              background:"rgba(255,255,255,0.08)",border:"none",
              color:"rgba(255,255,255,0.6)",cursor:"pointer",fontSize:16,
              display:"flex",alignItems:"center",justifyContent:"center",
            }}>✕</button>
          </div>
        </div>

        {/* ── BODY ── */}
        <div style={{flex:1,display:"flex",overflow:"hidden"}}>

          {/* Sidebar */}
          <div style={{
            width:185,flexShrink:0,
            borderRight:"1px solid rgba(255,255,255,0.06)",
            background:"rgba(0,0,0,0.3)",
            overflow:"auto",
            padding:"8px 6px",
          }}>
            {SECTIONS.map(sec=>{
              const isActive = activeSection===sec.id;
              return (
                <button key={sec.id} onClick={()=>setActiveSection(sec.id)} style={{
                  width:"100%",padding:"8px 10px",borderRadius:9,border:"none",
                  background:isActive?"rgba(28,126,214,0.32)":"transparent",
                  color:isActive?"#fff":"rgba(255,255,255,0.52)",
                  cursor:"pointer",textAlign:"left",fontSize:12.5,fontWeight:isActive?700:500,
                  display:"flex",alignItems:"center",gap:7,marginBottom:2,
                  transition:"all .13s",fontFamily:CP.font,
                }}
                  onMouseEnter={e=>{if(!isActive){e.currentTarget.style.background="rgba(255,255,255,0.07)";e.currentTarget.style.color="#fff";}}}
                  onMouseLeave={e=>{if(!isActive){e.currentTarget.style.background="transparent";e.currentTarget.style.color="rgba(255,255,255,0.52)";}}}
                >
                  <span style={{fontSize:15,flexShrink:0}}>{sec.icon}</span>
                  <span style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{sec.label[lang]||sec.label.EN}</span>
                  {isActive&&<span style={{marginLeft:"auto",color:"#74C0FC",fontSize:11}}>›</span>}
                </button>
              );
            })}
            {/* App info */}
            <div style={{margin:"12px 4px 4px",padding:"10px 10px",background:"rgba(28,126,214,0.08)",border:"1px solid rgba(28,126,214,0.15)",borderRadius:10}}>
              <div style={{color:"rgba(116,192,252,0.8)",fontSize:10,fontWeight:700,marginBottom:3}}>PATJAC BUSINESS SUITE</div>
              <div style={{color:"rgba(255,255,255,0.35)",fontSize:10}}>Version 2.0 · 🇨🇭 Zürich</div>
              <div style={{color:"rgba(255,255,255,0.35)",fontSize:10}}>© 2024 Patjac</div>
            </div>
          </div>

          {/* Content */}
          <div style={{flex:1,overflow:"auto",padding:"18px 22px"}}>
            {current&&(
              <>
                {/* Section title */}
                <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:18,paddingBottom:12,borderBottom:"1px solid rgba(255,255,255,0.07)"}}>
                  <span style={{fontSize:28}}>{current.icon}</span>
                  <div style={{color:"#fff",fontWeight:700,fontSize:19}}>{current.title?.[lang]||current.title?.EN}</div>
                </div>

                {/* Items */}
                {current.items?.map((item,ii)=>(
                  <div key={ii} style={{marginBottom:20}}>
                    {/* Item heading */}
                    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
                      <div style={{width:4,height:18,background:"#1C7ED6",borderRadius:2,flexShrink:0}}/>
                      <div style={{color:"#74C0FC",fontWeight:700,fontSize:14}}>{item.h?.[lang]||item.h?.EN}</div>
                    </div>
                    {/* Item body */}
                    <div style={{
                      background:"rgba(255,255,255,0.03)",
                      border:"1px solid rgba(255,255,255,0.06)",
                      borderRadius:13,padding:"14px 16px",
                    }}>
                      {(item.b?.[lang]||item.b?.EN||"").split("\n").map((line,li)=>renderLine(line,li))}
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>

        {/* ── FOOTER ── */}
        <div style={{
          padding:"10px 22px",
          borderTop:"1px solid rgba(255,255,255,0.06)",
          background:"rgba(0,0,0,0.2)",
          display:"flex",justifyContent:"space-between",alignItems:"center",
          flexShrink:0,
        }}>
          <div style={{color:"rgba(255,255,255,0.3)",fontSize:12}}>
            📧 info@patjacservices.ch · 🇨🇭 Swiss Standard 2024
          </div>
          <button onClick={onClose} style={{
            background:"linear-gradient(90deg,#1C7ED6,#00bcf2)",
            border:"none",borderRadius:10,color:"#fff",
            padding:"8px 20px",cursor:"pointer",fontSize:13,fontWeight:700,
            fontFamily:CP.font,
          }}>{t.helpClose||"Close"}</button>
        </div>
      </div>
    </div>
  );
}

function InventoryApp({t,lang,notify,onBack,orders,setOrders,products,setProducts,suppliers,setSuppliers}){
  const [supCat,setSupCat] = useState("all");
  const L = makeL(lang);
  // orders, products, suppliers come from parent (connected to Supabase)
  const [view,setView] = useState("stock"); // stock | orders | suppliers
  const [catFilter,setCatFilter] = useState("all");
  const [modal,setModal] = useState(null);
  const [form,setForm] = useState({});
  const [deleteProductId,setDeleteProductId] = useState(null);
  const [deleteSupplierId,setDeleteSupplierId] = useState(null);
  const [deleteOrderId,setDeleteOrderId] = useState(null);
  const [selId,setSelId] = useState(null);
  const [search,setSearch] = useState("");

  const cats = [
    {id:"all",      label:t.allCategories||"All",    icon:"📦"},
    {id:"cleaning", label:t.catCleaning||"Cleaning", icon:"🧴"},
    {id:"gardening",label:t.catGardening||"Gardening",icon:"🌿"},
    {id:"equipment",label:t.catEquipment||"Equipment",icon:"🔧"},
    {id:"construction",label:L("Kleinbau","Obras pequeñas","Small construction","Piccoli lavori"),icon:"🧱"},
    {id:"safety",   label:t.catSafety||"Safety",     icon:"🦺"},
  ];

  const pName = (p) => ({DE:p.name,ES:p.nameES,EN:p.nameEN,IT:p.nameIT})[lang]||p.name;

  const filtered = products.filter(p=>{
    const matchCat = catFilter==="all"||p.category===catFilter;
    const matchSearch = !search || normTxt([p.name,p.nameES,p.nameEN,p.nameIT,p.category].join(" ")).includes(normTxt(search));
    return matchCat&&matchSearch;
  });

  const lowStockProducts = products.filter(p=>p.stock<=p.minStock);
  const outOfStockProducts = products.filter(p=>p.stock===0);
  const prPrice = p => Number(p.price ?? p.unitPrice ?? 0);
  const totalStockValue = products.reduce((s,p)=>s+Number(p.stock||0)*prPrice(p),0);
  const pendingOrders = orders.filter(o=>o.status==="pending").length;

  const statusColor=(s)=>s==="delivered"?"green":s==="pending"?"yellow":"red";
  const statusLabel=(s)=>s==="delivered"?t.orderDelivered:s==="pending"?t.orderPending:t.orderCancelled;

  const stockBar = (p) => {
    const pct = Math.min(100, Math.round((p.stock/Math.max(1,p.minStock*2))*100));
    const color = p.stock===0?"#C92A2A":p.stock<=p.minStock?"#F08C00":"#2F9E44";
    return (
      <div style={{marginTop:4}}>
        <div style={{height:4,background:"rgba(255,255,255,0.08)",borderRadius:10,overflow:"hidden"}}>
          <div style={{height:"100%",width:`${pct}%`,background:color,borderRadius:10}}/>
        </div>
      </div>
    );
  };

  const deleteProduct = (id) => {
    setProducts(prev=>prev.filter(p=>p.id!==id));
    setDeleteProductId(null);
    notify(L("Produkt gelöscht","Producto eliminado","Product deleted","Prodotto eliminato"),"success");
  };

  const deleteSupplier = (id) => {
    setSuppliers(prev=>prev.filter(s=>s.id!==id));
    setDeleteSupplierId(null);
    notify(L("Lieferant gelöscht","Proveedor eliminado","Supplier deleted","Fornitore eliminato"),"success");
  };

  const deleteOrder = (id) => {
    setOrders(prev=>prev.filter(o=>o.id!==id));
    setDeleteOrderId(null);
    notify(L("Bestellung gelöscht","Pedido eliminado","Order deleted","Ordine eliminato"),"success");
  };

  const quickOrder = (p) => {
    const sup = suppliers.find(s=>s.id===p.supplier);
    const qty = Math.max(1,(p.minStock*2)-p.stock);
    const newOrder = {
      id:gid(),supplierId:p.supplier,supplierName:sup?.name||"—",
      date:ymd(new Date()),
      deliveryDate:ymd(new Date(Date.now()+7*86400000)),
      status:"pending",
      items:[{productId:p.id,productName:pName(p),qty,price:prPrice(p),total:qty*prPrice(p)}],
      total:qty*prPrice(p),notes:L("Automatische Nachbestellung","Reposición automática","Auto reorder","Riordino automatico"),
    };
    setOrders(prev=>[newOrder,...prev]);
    notify(`${t.quickOrder||"Quick order"}: ${pName(p)} × ${qty} → ${sup?.name||"?"}`,"success");
  };

  return (
    <CPScreen title={t.stockTitle||"Inventory"} icon="📦" onBack={onBack} t={t}
      actions={
        <div style={{display:"flex",gap:8}}>
          {view==="stock"&&<CPBtn onClick={()=>{setForm({name:"",category:"cleaning",unit:"Liter",stock:0,minStock:5,price:0,supplier:suppliers[0]?.id||"",description:"",location:"",icon:"🧴"});setSelId(null);setModal("product");}} size="sm">＋ {t.addProduct||"Add"}</CPBtn>}
          {view==="orders"&&<CPBtn onClick={()=>{setForm({supplierId:suppliers[0]?.id||"",date:ymd(new Date()),deliveryDate:ymd(new Date(Date.now()+7*86400000)),items:[{_k:gid(),productId:"",qty:1,price:0}],notes:""});setModal("order");}} size="sm">＋ {t.addOrder||"Order"}</CPBtn>}
          {view==="suppliers"&&<CPBtn onClick={()=>{setForm({name:"",contact:"",phone:"",email:"",address:"",category:"cleaning",paymentDays:30});setModal("supplier");}} size="sm">＋ {t.addSupplier||"Add"}</CPBtn>}
        </div>
      }
    >
      {/* KPI row */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(130px,1fr))",gap:10,marginBottom:16}}>
        <CPStat label={t.products||"Products"} value={products.length} icon="📦" accent="#6741D9"/>
        <CPStat label={t.lowStock||"Low stock"} value={lowStockProducts.length} icon="⚠️" accent={lowStockProducts.length>0?"#F08C00":"#2F9E44"}/>
        <CPStat label={t.outOfStock||"Out"} value={outOfStockProducts.length} icon="🚫" accent={outOfStockProducts.length>0?"#C92A2A":"#2F9E44"}/>
        <CPStat label={t.stockValue||"Value"} value={`CHF ${totalStockValue.toFixed(0)}`} icon="💰" accent="#0CA678"/>
        <CPStat label={t.orders||"Orders"} value={`${pendingOrders} ${L("pend.","pend.","pend.","pend.")}`} icon="🚚" accent={pendingOrders>0?"#FFD43B":"#2F9E44"}/>
      </div>

      {/* Low stock alerts */}
      {lowStockProducts.length>0&&(
        <CPCard style={{marginBottom:14,background:"rgba(240,140,0,0.08)",border:"1px solid rgba(240,140,0,0.3)"}}>
          <div style={{color:"#FFD43B",fontWeight:700,fontSize:13,marginBottom:8}}>
            ⚠️ {t.stockAlert||"Stock alerts"} ({lowStockProducts.length})
          </div>
          <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
            {lowStockProducts.map(p=>(
              <div key={p.id} style={{display:"flex",alignItems:"center",gap:6,background:"rgba(240,140,0,0.15)",borderRadius:20,padding:"4px 12px"}}>
                <span>{p.icon}</span>
                <span style={{color:"#FFD43B",fontSize:12,fontWeight:600}}>{pName(p)}: {p.stock} {p.unit}</span>
                <button onClick={()=>quickOrder(p)} style={{background:"rgba(240,140,0,0.4)",border:"none",borderRadius:10,color:"#fff",padding:"2px 8px",cursor:"pointer",fontSize:11,fontWeight:700,fontFamily:CP.font}}>
                  🚚 {t.quickOrder||"Order"}
                </button>
              </div>
            ))}
          </div>
        </CPCard>
      )}

      {/* View tabs */}
      <div style={{display:"flex",gap:8,marginBottom:16,flexWrap:"wrap"}}>
        {[
          {id:"stock",  label:t.stock||"Stock",     icon:"📦"},
          {id:"orders", label:t.orders||"Orders",   icon:"🚚"},
          {id:"suppliers",label:t.suppliers||"Suppliers",icon:"🏭"},
        ].map(tab=>(
          <button key={tab.id} onClick={()=>setView(tab.id)} style={{
            padding:"8px 18px",borderRadius:22,border:"none",cursor:"pointer",
            background:view===tab.id?"#6741D9":"rgba(255,255,255,0.08)",
            color:"#fff",fontSize:13,fontWeight:700,fontFamily:CP.font,
            display:"flex",alignItems:"center",gap:6,transition:"background .15s",
          }}>{tab.icon} {tab.label}</button>
        ))}
      </div>

      {/* ── STOCK VIEW ── */}
      {view==="stock"&&(
        <>
          {/* Search + category filter */}
          <div style={{marginBottom:10}}>
            <CPInput value={search} onChange={e=>setSearch(e.target.value)} placeholder={`🔍 ${t.searchCourses||"Search"}...`}/>
          </div>
          <div style={{display:"flex",gap:6,marginBottom:14,flexWrap:"wrap"}}>
            {cats.map(c=>(
              <button key={c.id} onClick={()=>setCatFilter(c.id)} style={{
                padding:"6px 14px",borderRadius:20,border:"none",cursor:"pointer",fontSize:12,fontWeight:700,
                background:catFilter===c.id?"#6741D9":"rgba(255,255,255,0.08)",color:"#fff",fontFamily:CP.font,
                display:"flex",alignItems:"center",gap:5,
              }}>{c.icon} {c.label}</button>
            ))}
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:12}}>
            {filtered.map(p=>{
              const isLow=p.stock>0&&p.stock<=p.minStock;
              const isOut=p.stock===0;
              const borderColor=isOut?"rgba(201,42,42,0.5)":isLow?"rgba(240,140,0,0.4)":"rgba(255,255,255,0.08)";
              const bgColor=isOut?"rgba(201,42,42,0.06)":isLow?"rgba(240,140,0,0.06)":CP.surface;
              return (
                <CPCard key={p.id} style={{background:bgColor,border:`1px solid ${borderColor}`,padding:"14px 16px"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}}>
                    <div style={{display:"flex",gap:10,alignItems:"center"}}>
                      <div style={{fontSize:28,flexShrink:0}}>{p.icon}</div>
                      <div>
                        <div style={{color:CP.textPrimary,fontWeight:700,fontSize:14,lineHeight:1.3}}>{pName(p)}</div>
                        <div style={{color:CP.textTertiary,fontSize:11,marginTop:2}}>{p.location}</div>
                      </div>
                    </div>
                    {(isOut||isLow)&&(
                      <CPBadge text={isOut?(t.outOfStock||"Out"):(t.lowStock||"Low")} color={isOut?"red":"yellow"}/>
                    )}
                  </div>

                  <div style={{color:CP.textSecondary,fontSize:12,marginBottom:10,lineHeight:1.4}}>{p.description}</div>

                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,marginBottom:10}}>
                    <div style={{background:"rgba(0,0,0,0.2)",borderRadius:8,padding:"6px 8px"}}>
                      <div style={{color:CP.textTertiary,fontSize:9,marginBottom:2}}>BESTAND</div>
                      <div style={{color:isOut?"#FF8787":isLow?"#FFD43B":"#69DB7C",fontWeight:700,fontSize:16}}>{p.stock} {p.unit}</div>
                    </div>
                    <div style={{background:"rgba(0,0,0,0.2)",borderRadius:8,padding:"6px 8px"}}>
                      <div style={{color:CP.textTertiary,fontSize:9,marginBottom:2}}>MIN</div>
                      <div style={{color:CP.textSecondary,fontWeight:700,fontSize:16}}>{p.minStock} {p.unit}</div>
                    </div>
                    <div style={{background:"rgba(0,0,0,0.2)",borderRadius:8,padding:"6px 8px"}}>
                      <div style={{color:CP.textTertiary,fontSize:9,marginBottom:2}}>WERT</div>
                      <div style={{color:"#74C0FC",fontWeight:700,fontSize:13}}>CHF {(Number(p.stock||0)*prPrice(p)).toFixed(0)}</div>
                    </div>
                  </div>

                  {stockBar(p)}

                  <div style={{display:"flex",gap:6,marginTop:10,flexWrap:"wrap"}}>
                    <CPBtn onClick={()=>{setForm({...p, price:p.price ?? p.unitPrice ?? 0});setSelId(p.id);setModal("product");}} variant="secondary" size="sm">✏️</CPBtn>
                    <CPBtn onClick={()=>setProducts(prev=>prev.map(x=>x.id===p.id?{...x,stock:x.stock+1}:x))} variant="success" size="sm">＋1</CPBtn>
                    <CPBtn onClick={()=>setProducts(prev=>prev.map(x=>x.id===p.id?{...x,stock:Math.max(0,x.stock-1)}:x))} variant="secondary" size="sm">−1</CPBtn>
                    {(isLow||isOut)&&<CPBtn onClick={()=>quickOrder(p)} variant="warning" size="sm">🚚 {t.quickOrder||"Order"}</CPBtn>}
                    <CPBtn onClick={()=>setDeleteProductId(p.id)} variant="danger" size="sm">🗑️</CPBtn>
                  </div>
                </CPCard>
              );
            })}
          </div>
          {filtered.length===0&&<div style={{color:CP.textTertiary,textAlign:"center",padding:"3rem",fontSize:14}}>{t.noRecords||"—"}</div>}
        </>
      )}

      {/* ── ORDERS VIEW ── */}
      {view==="orders"&&(
        <div style={{display:"flex",flexDirection:"column",gap:12}}>
          {orders.map(order=>{
            const sup=suppliers.find(s=>s.id===order.supplierId);
            return (
              <CPCard key={order.id}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10,flexWrap:"wrap",gap:8}}>
                  <div>
                    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}>
                      <span style={{fontSize:18}}>🚚</span>
                      <span style={{color:CP.textPrimary,fontWeight:700,fontSize:15}}>{order.supplierName}</span>
                      <CPBadge text={statusLabel(order.status)} color={statusColor(order.status)}/>
                    </div>
                    <div style={{color:CP.textSecondary,fontSize:12}}>
                      {t.orderDate||"Order"}: {fmtDate(order.date)} → {t.deliveryDate||"Delivery"}: {fmtDate(order.deliveryDate)}
                    </div>
                    {order.notes&&<div style={{color:CP.textTertiary,fontSize:12,marginTop:2,fontStyle:"italic"}}>{order.notes}</div>}
                  </div>
                  <div style={{textAlign:"right"}}>
                    <div style={{color:"#FFD43B",fontWeight:700,fontSize:18}}>CHF {(order.total||0).toFixed(2)}</div>
                    <div style={{color:CP.textTertiary,fontSize:11}}>{order.items.length} {L("Positionen","posiciones","items","posizioni")}</div>
                  </div>
                </div>

                {/* Order items */}
                <div style={{background:"rgba(0,0,0,0.2)",borderRadius:10,padding:"8px 12px",marginBottom:10}}>
                  {order.items.map((item,i)=>(
                    <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"4px 0",borderBottom:i<order.items.length-1?`1px solid ${CP.border}`:"none",fontSize:13}}>
                      <span style={{color:CP.textSecondary}}>{item.productName} × {item.qty}</span>
                      <span style={{color:CP.textPrimary,fontWeight:600}}>CHF {(item.total||0).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                  {order.status==="pending"&&(
                    <CPBtn onClick={()=>{
                      setOrders(prev=>prev.map(o=>o.id===order.id?{...o,status:"delivered"}:o));
                      order.items.forEach(item=>{
                        setProducts(prev=>prev.map(p=>p.id===item.productId?{...p,stock:p.stock+item.qty}:p));
                      });
                      notify(`${t.receiveOrder||"Received"}: ${order.supplierName} ✓`,"success");
                    }} variant="success" size="sm">
                      ✓ {t.receiveOrder||"Mark received"}
                    </CPBtn>
                  )}
                  {order.status==="pending"&&(
                    <CPBtn onClick={()=>{setOrders(prev=>prev.map(o=>o.id===order.id?{...o,status:"cancelled"}:o));notify(t.orderCancelled||"Cancelled","warning");}} variant="danger" size="sm">
                      ✕ {t.orderCancelled||"Cancel"}
                    </CPBtn>
                  )}
                  <CPBtn onClick={()=>{
                    const sup = suppliers.find(s=>s.id===order.supplierId);
                    sendByEmail({
                      to: sup?.email||"",
                      subject: `${L("Bestellung","Pedido","Order","Ordine")} — Patjac Reinigung Garten & Services`,
                      body: `${L("Guten Tag","Buenos días","Dear","Gentile")} ${order.supplierName||sup?.name||""},\n\n${L("Hiermit bestellen wir folgende Artikel:","Nos gustaría pedir los siguientes artículos:","We would like to order the following items:","Vorremmo ordinare i seguenti articoli:")}\n\n${(order.items||[]).map(it=>`- ${it.productName||it.name||""}: ${it.qty||""} ${it.unit||"x"}`).join("\n")}\n\n${L("Gesamtbetrag","Total","Total","Totale")}: CHF ${(order.total||0).toFixed(2)}\n\n${L("Mit freundlichen Grüssen","Saludos cordiales","Kind regards","Cordiali saluti")},\nPatjac Reinigung Garten & Services\ninfo@patjacservices.ch`
                    });
                  }} variant="secondary" size="sm">
                    📧 {L("PDF senden","Enviar PDF","Send PDF","Invia PDF")}
                  </CPBtn>
                  <CPBtn onClick={()=>setDeleteOrderId(order.id)} variant="danger" size="sm">
                    🗑️ {L("Löschen","Eliminar","Delete","Elimina")}
                  </CPBtn>
                </div>
              </CPCard>
            );
          })}
          {orders.length===0&&<div style={{color:CP.textTertiary,textAlign:"center",padding:"2rem",fontSize:14}}>{t.noRecords||"—"}</div>}
        </div>
      )}

      {/* ── SUPPLIERS VIEW ── */}
      {view==="suppliers"&&(
        <div style={{display:"flex",flexDirection:"column",gap:12}}>
          <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
            {cats.filter(c=>c.id!=="safety"||suppliers.some(s=>s.category==="safety")).map(c=>(
              <button key={c.id} onClick={()=>setSupCat(c.id)} style={{padding:"5px 12px",borderRadius:20,border:"none",cursor:"pointer",fontSize:12,fontWeight:700,
                background:supCat===c.id?CP.accent:"rgba(255,255,255,.1)",color:"#fff"}}>{c.icon} {c.label} ({c.id==="all"?suppliers.length:suppliers.filter(s=>s.category===c.id).length})</button>
            ))}
          </div>
          {suppliers.filter(s=>supCat==="all"||s.category===supCat).sort((a,b)=>(a.category||"").localeCompare(b.category||"")||(a.name||"").localeCompare(b.name||"")).map(sup=>(
            <CPCard key={sup.id}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10}}>
                <div style={{display:"flex",gap:12,alignItems:"flex-start"}}>
                  <div style={{fontSize:36,flexShrink:0}}>🏭</div>
                  <div>
                    <div style={{color:CP.textPrimary,fontWeight:700,fontSize:16,marginBottom:4}}>{sup.name}</div>
                    <div style={{color:CP.textSecondary,fontSize:13}}>{sup.contact}</div>
                    {(sup.phone||sup.email)&&<div style={{color:CP.textSecondary,fontSize:12,marginTop:2}}>{[sup.phone,sup.email].filter(Boolean).join(" · ")}</div>}
                    <div style={{color:CP.textTertiary,fontSize:12,marginTop:1}}>{sup.address}</div>
                    {sup.notes&&<div style={{color:"#74C0FC",fontSize:12,marginTop:4}}>💡 {sup.notes}</div>}
                    <div style={{display:"flex",gap:8,marginTop:8,flexWrap:"wrap"}}>
                      <CPBadge text={cats.find(c=>c.id===sup.category)?.label||sup.category} color="blue"/>
                      {sup.paymentDays&&<CPBadge text={`${t.paymentTerms}: ${sup.paymentDays} ${L("Tage","días","days","giorni")}`} color="gray"/>}
                      {sup.rating>0&&<CPBadge text={"⭐".repeat(Math.round(sup.rating))} color="gray"/>}
                    </div>
                  </div>
                </div>
                <div style={{display:"flex",gap:6}}>
                  <CPBtn onClick={()=>sendByEmail({
                    to: sup.email||"",
                    subject: `${L("Bestellung","Pedido","Order","Ordine")} — Patjac Reinigung Garten & Services`,
                    body: `${L("Guten Tag","Buenos días","Dear","Gentile")} ${sup.name},\n\n${L("Wir möchten eine Bestellung aufgeben.","Nos gustaría realizar un pedido.","We would like to place an order.","Vorremmo effettuare un ordine.")}\n\n${L("Mit freundlichen Grüssen","Saludos cordiales","Kind regards","Cordiali saluti")},\nPatjac Reinigung Garten & Services\ninfo@patjacservices.ch`
                  })} variant="secondary" size="sm">📧</CPBtn>
                  {sup.website&&<CPBtn onClick={()=>window.open(sup.website.startsWith("http")?sup.website:`https://${sup.website}`,"_blank")} variant="secondary" size="sm">🌐</CPBtn>}
                  {sup.phone&&<CPBtn onClick={()=>window.open(`tel:${sup.phone}`,"_self")} variant="secondary" size="sm">📞</CPBtn>}
                  <CPBtn onClick={()=>{setForm({...sup});setSelId(sup.id);setModal("supplier");}} variant="secondary" size="sm">✏️</CPBtn>
                  <CPBtn onClick={()=>setDeleteSupplierId(sup.id)} variant="danger" size="sm">🗑️</CPBtn>
                </div>
              </div>
              {/* Products from this supplier */}
              <div style={{marginTop:12,background:"rgba(0,0,0,0.2)",borderRadius:10,padding:"8px 12px"}}>
                <div style={{color:CP.textTertiary,fontSize:11,marginBottom:6}}>{L("Produkte von diesem Lieferanten","Productos de este proveedor","Products from this supplier","Prodotti da questo fornitore")}:</div>
                <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                  {products.filter(p=>p.supplier===sup.id).map(p=>(
                    <span key={p.id} style={{background:"rgba(103,65,217,0.15)",border:"1px solid rgba(103,65,217,0.3)",borderRadius:12,padding:"3px 10px",fontSize:11,color:"#c084fc"}}>
                      {p.icon} {pName(p)} ({p.stock} {p.unit})
                    </span>
                  ))}
                </div>
              </div>
            </CPCard>
          ))}
        </div>
      )}

      {/* ── PRODUCT MODAL ── */}
      {modal==="order"&&(()=>{
        const items=form.items||[];
        const setIt=(i,patch)=>setForm(f=>{const it=[...(f.items||[])]; it[i]={...it[i],...patch}; return {...f,items:it};});
        const total=items.reduce((a,i)=>a+(Number(i.qty)||0)*(Number(i.price)||0),0);
        const saveOrder=()=>{
          const sup=suppliers.find(x=>x.id===form.supplierId);
          const its=items.filter(i=>i.productId).map(i=>{const pr=products.find(x=>x.id===i.productId); const q=Number(i.qty)||0, pc=Number(i.price)||0; return {productId:i.productId,productName:pr?pName(pr):"",qty:q,price:pc,total:Math.round(q*pc*100)/100};});
          if(!sup||!its.length){ notify(L("Lieferant und mindestens ein Artikel nötig","Elija proveedor y al menos un producto","Choose supplier and at least one item","Scegli fornitore e almeno un articolo"),"error"); return; }
          setOrders(prev=>[{id:gid(),supplierId:sup.id,supplierName:sup.name,date:form.date,deliveryDate:form.deliveryDate||null,status:"pending",items:its,total:Math.round(total*100)/100,notes:form.notes||""},...prev]);
          notify(t.success,"success"); setModal(null);
        };
        return (
          <CPModal title={`📦 ${L("Neue Bestellung","Nuevo pedido","New order","Nuovo ordine")}`} onClose={()=>setModal(null)} width={600}>
            <CPField label={L("Lieferant","Proveedor","Supplier","Fornitore")}>
              <CPSelect value={form.supplierId} onChange={e=>setForm(f=>({...f,supplierId:e.target.value}))}>{suppliers.map(x=><option key={x.id} value={x.id}>{x.name}</option>)}</CPSelect>
            </CPField>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 10px"}}>
              <CPField label={L("Datum","Fecha","Date","Data")}><CPInput type="date" value={form.date} onChange={e=>setForm(f=>({...f,date:e.target.value}))}/></CPField>
              <CPField label={L("Lieferung","Entrega","Delivery","Consegna")}><CPInput type="date" value={form.deliveryDate} onChange={e=>setForm(f=>({...f,deliveryDate:e.target.value}))}/></CPField>
            </div>
            {items.map((it,i)=>(
              <div key={it._k||i} style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr auto",gap:6,marginBottom:6}}>
                <CPSelect value={it.productId} onChange={e=>{const pr=products.find(x=>x.id===e.target.value); setIt(i,{productId:e.target.value,price:pr?prPrice(pr):0});}}>
                  <option value="">— {L("Artikel","Producto","Item","Articolo")} —</option>
                  {products.map(pr=><option key={pr.id} value={pr.id}>{pName(pr)}</option>)}
                </CPSelect>
                <CPInput type="number" value={it.qty} onChange={e=>setIt(i,{qty:e.target.value})} placeholder={L("Menge","Cant.","Qty","Qtà")}/>
                <CPInput type="number" value={it.price} onChange={e=>setIt(i,{price:e.target.value})} placeholder="CHF"/>
                <CPBtn size="sm" variant="danger" onClick={()=>setForm(f=>({...f,items:f.items.filter((_,k)=>k!==i)}))}>✕</CPBtn>
              </div>
            ))}
            <CPBtn size="sm" variant="secondary" onClick={()=>setForm(f=>({...f,items:[...(f.items||[]),{_k:gid(),productId:"",qty:1,price:0}]}))}>＋ {L("Artikel","Producto","Item","Articolo")}</CPBtn>
            <CPField label={L("Notizen","Notas","Notes","Note")}><CPInput value={form.notes} onChange={e=>setForm(f=>({...f,notes:e.target.value}))}/></CPField>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8}}>
              <div style={{color:"#FFD43B",fontWeight:700,fontSize:16}}>Total CHF {total.toFixed(2)}</div>
              <div style={{display:"flex",gap:8}}><CPBtn variant="secondary" onClick={()=>setModal(null)}>{t.cancel}</CPBtn><CPBtn onClick={saveOrder}>💾 {t.save}</CPBtn></div>
            </div>
          </CPModal>
        );
      })()}

      {modal==="product"&&(
        <CPModal title={selId?t.editProduct:t.addProduct} onClose={()=>setModal(null)} width={500}>
          <CPField label={t.productName||"Name"}>
            <CPInput value={form.name||""} onChange={e=>setForm(f=>({...f,name:e.target.value}))}/>
          </CPField>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 14px"}}>
            <CPField label={t.productCategory||"Category"}>
              <CPSelect value={form.category||"cleaning"} onChange={e=>setForm(f=>({...f,category:e.target.value}))}>
                <option value="cleaning">{t.catCleaning}</option>
                <option value="gardening">{t.catGardening}</option>
                <option value="equipment">{t.catEquipment}</option>
                <option value="safety">{t.catSafety}</option>
                <option value="other">{t.catOther}</option>
              </CPSelect>
            </CPField>
            <CPField label={t.unit||"Unit"}>
              <CPSelect value={form.unit||"Liter"} onChange={e=>setForm(f=>({...f,unit:e.target.value}))}>
                <option value="Liter">{t.unitLiter||"Litres"}</option>
                <option value="kg">kg</option>
                <option value="Stück">{t.unitPcs||"Pcs"}</option>
                <option value="Pack">{t.unitPack||"Pack"}</option>
              </CPSelect>
            </CPField>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"0 12px"}}>
            <CPField label={t.currentStock||"Stock"}>
              <CPInput type="number" value={form.stock??""} onChange={e=>setForm(f=>({...f,stock:Number(e.target.value)||0}))}/>
            </CPField>
            <CPField label={t.minStock||"Min"}>
              <CPInput type="number" value={form.minStock??""} onChange={e=>setForm(f=>({...f,minStock:Number(e.target.value)||0}))}/>
            </CPField>
            <CPField label={t.pricePerUnit||"CHF/unit"}>
              <CPInput type="number" value={form.price??""} onChange={e=>setForm(f=>({...f,price:Number(e.target.value)||0}))}/>
            </CPField>
          </div>
          <CPField label={t.supplier||"Supplier"}>
            <CPSelect value={form.supplier||"s1"} onChange={e=>setForm(f=>({...f,supplier:e.target.value}))}>
              {suppliers.map(s=><option key={s.id} value={s.id}>{s.name}</option>)}
            </CPSelect>
          </CPField>
          <CPField label={t.description||"Desc"}>
            <CPInput value={form.description||""} onChange={e=>setForm(f=>({...f,description:e.target.value}))}/>
          </CPField>
          <CPField label={t.locationLabel||"Location"}>
            <CPInput value={form.location||""} onChange={e=>setForm(f=>({...f,location:e.target.value}))}/>
          </CPField>
          <div style={{display:"flex",gap:8,justifyContent:"space-between",marginTop:6}}>
            <div>
              {selId&&<CPBtn onClick={()=>{setProducts(prev=>prev.filter(p=>p.id!==selId));notify(t.success);setModal(null);}} variant="danger" size="sm">🗑️ {t.delete}</CPBtn>}
            </div>
            <div style={{display:"flex",gap:8}}>
              <CPBtn onClick={()=>setModal(null)} variant="secondary">{t.cancel}</CPBtn>
              <CPBtn onClick={()=>{
                if(!form.name){notify(t.error,"error");return;}
                if(selId) setProducts(prev=>prev.map(p=>p.id===selId?{...p,...form}:p));
                else setProducts(prev=>[...prev,{...form,id:gid()}]);
                notify(t.success);setModal(null);
              }}>💾 {t.save}</CPBtn>
            </div>
          </div>
        </CPModal>
      )}

      {/* ── SUPPLIER MODAL ── */}
      {modal==="supplier"&&(
        <CPModal title={selId?t.editProduct:t.addSupplier} onClose={()=>setModal(null)} width={480}>
          <CPField label={t.supplierName||"Name"}>
            <CPInput value={form.name||""} onChange={e=>setForm(f=>({...f,name:e.target.value}))}/>
          </CPField>
          <CPField label={L("Kontaktperson","Persona de contacto","Contact person","Persona di contatto")}>
            <CPInput value={form.contact||""} onChange={e=>setForm(f=>({...f,contact:e.target.value}))}/>
          </CPField>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 14px"}}>
            <CPField label={t.supplierPhone||"Phone"}>
              <CPInput value={form.phone||""} onChange={e=>setForm(f=>({...f,phone:e.target.value}))}/>
            </CPField>
            <CPField label={t.supplierEmail||"Email"}>
              <CPInput type="email" value={form.email||""} onChange={e=>setForm(f=>({...f,email:e.target.value}))}/>
            </CPField>
          </div>
          <CPField label={t.address||"Address"}>
            <CPInput value={form.address||""} onChange={e=>setForm(f=>({...f,address:e.target.value}))}/>
          </CPField>
          <CPField label={L("Webseite","Página web","Website","Sito web")}>
            <CPInput value={form.website||""} onChange={e=>setForm(f=>({...f,website:e.target.value}))} placeholder="https://"/>
          </CPField>
          <CPField label={L("Notizen / Angebote","Notas / ofertas","Notes / offers","Note / offerte")}>
            <CPInput value={form.notes||""} onChange={e=>setForm(f=>({...f,notes:e.target.value}))}/>
          </CPField>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 14px"}}>
            <CPField label={t.productCategory||"Category"}>
              <CPSelect value={form.category||"cleaning"} onChange={e=>setForm(f=>({...f,category:e.target.value}))}>
                <option value="cleaning">{t.catCleaning}</option>
                <option value="gardening">{t.catGardening}</option>
                <option value="equipment">{t.catEquipment}</option>
                <option value="construction">{L("Kleinbau","Obras pequeñas","Small construction","Piccoli lavori")}</option>
              </CPSelect>
            </CPField>
            <CPField label={L("Zahlungsziel (Tage)","Plazo pago (días)","Payment days","Giorni pagamento")}>
              <CPInput type="number" value={form.paymentDays||30} onChange={e=>setForm(f=>({...f,paymentDays:Number(e.target.value)||30}))}/>
            </CPField>
          </div>
          <div style={{display:"flex",gap:8,justifyContent:"flex-end",marginTop:6}}>
            <CPBtn onClick={()=>setModal(null)} variant="secondary">{t.cancel}</CPBtn>
            <CPBtn onClick={()=>{
              if(!form.name){notify(t.error,"error");return;}
              if(selId) setSuppliers(prev=>prev.map(s=>s.id===selId?{...s,...form}:s));
              else setSuppliers(prev=>[...prev,{...form,id:gid(),rating:4}]);
              notify(t.success);setModal(null);
            }}>💾 {t.save}</CPBtn>
          </div>
        </CPModal>
      )}

      {/* ── DELETE PRODUCT MODAL ── */}
      {deleteProductId&&(()=>{
        const item = products.find(p=>p.id===deleteProductId);
        return (
          <CPModal title={L("Produkt löschen","Eliminar producto","Delete product","Elimina prodotto")} onClose={()=>setDeleteProductId(null)} width={420}>
            <div style={{padding:"8px 0 20px"}}>
              <div style={{textAlign:"center",marginBottom:14}}><span style={{fontSize:44}}>⚠️</span></div>
              <div style={{background:"rgba(201,42,42,0.1)",border:"1px solid rgba(201,42,42,0.3)",borderRadius:12,padding:"12px 16px",marginBottom:14,textAlign:"center"}}>
                <div style={{color:"#FF8787",fontWeight:700,fontSize:15}}>{item?.icon} {pName(item)}</div>
                <div style={{color:CP.textSecondary,fontSize:12,marginTop:4}}>{L("Bestand","Stock","Stock","Scorte")}: {item?.stock} {item?.unit} · CHF {item?.price}/u</div>
              </div>
              <div style={{color:CP.textSecondary,fontSize:13,textAlign:"center",marginBottom:18,lineHeight:1.6}}>
                {L("Dieses Produkt wird permanent aus dem Lager gelöscht.","Este producto será eliminado permanentemente del almacén.","This product will be permanently deleted from inventory.","Questo prodotto verrà eliminato definitivamente dal magazzino.")}
              </div>
              <div style={{display:"flex",gap:10,justifyContent:"flex-end"}}>
                <CPBtn onClick={()=>setDeleteProductId(null)} variant="secondary">{t.cancel}</CPBtn>
                <CPBtn onClick={()=>deleteProduct(deleteProductId)} variant="danger">🗑️ {L("Löschen","Eliminar","Delete","Elimina")}</CPBtn>
              </div>
            </div>
          </CPModal>
        );
      })()}

      {/* ── DELETE SUPPLIER MODAL ── */}
      {deleteSupplierId&&(()=>{
        const item = suppliers.find(s=>s.id===deleteSupplierId);
        const supplierProducts = products.filter(p=>p.supplier===deleteSupplierId);
        return (
          <CPModal title={L("Lieferant löschen","Eliminar proveedor","Delete supplier","Elimina fornitore")} onClose={()=>setDeleteSupplierId(null)} width={420}>
            <div style={{padding:"8px 0 20px"}}>
              <div style={{textAlign:"center",marginBottom:14}}><span style={{fontSize:44}}>⚠️</span></div>
              <div style={{background:"rgba(201,42,42,0.1)",border:"1px solid rgba(201,42,42,0.3)",borderRadius:12,padding:"12px 16px",marginBottom:14,textAlign:"center"}}>
                <div style={{color:"#FF8787",fontWeight:700,fontSize:15}}>🏭 {item?.name}</div>
                <div style={{color:CP.textSecondary,fontSize:12,marginTop:4}}>{item?.phone} · {item?.email}</div>
              </div>
              {supplierProducts.length>0&&(
                <div style={{background:"rgba(240,140,0,0.1)",border:"1px solid rgba(240,140,0,0.3)",borderRadius:10,padding:"10px 14px",marginBottom:14,fontSize:12,color:"#FFD43B"}}>
                  ⚠️ {L(`${supplierProducts.length} Produkt(e) sind diesem Lieferanten zugeordnet.`,`${supplierProducts.length} producto(s) están asociados a este proveedor.`,`${supplierProducts.length} product(s) are linked to this supplier.`,`${supplierProducts.length} prodotto/i sono collegati a questo fornitore.`)}
                </div>
              )}
              <div style={{color:CP.textSecondary,fontSize:13,textAlign:"center",marginBottom:18,lineHeight:1.6}}>
                {L("Dieser Lieferant wird permanent gelöscht.","Este proveedor será eliminado permanentemente.","This supplier will be permanently deleted.","Questo fornitore verrà eliminato definitivamente.")}
              </div>
              <div style={{display:"flex",gap:10,justifyContent:"flex-end"}}>
                <CPBtn onClick={()=>setDeleteSupplierId(null)} variant="secondary">{t.cancel}</CPBtn>
                <CPBtn onClick={()=>deleteSupplier(deleteSupplierId)} variant="danger">🗑️ {L("Löschen","Eliminar","Delete","Elimina")}</CPBtn>
              </div>
            </div>
          </CPModal>
        );
      })()}

      {/* ── DELETE ORDER MODAL ── */}
      {deleteOrderId&&(()=>{
        const item = orders.find(o=>o.id===deleteOrderId);
        return (
          <CPModal title={L("Bestellung löschen","Eliminar pedido","Delete order","Elimina ordine")} onClose={()=>setDeleteOrderId(null)} width={420}>
            <div style={{padding:"8px 0 20px"}}>
              <div style={{textAlign:"center",marginBottom:14}}><span style={{fontSize:44}}>⚠️</span></div>
              <div style={{background:"rgba(201,42,42,0.1)",border:"1px solid rgba(201,42,42,0.3)",borderRadius:12,padding:"12px 16px",marginBottom:14,textAlign:"center"}}>
                <div style={{color:"#FF8787",fontWeight:700,fontSize:15}}>🚚 {item?.supplierName}</div>
                <div style={{color:CP.textSecondary,fontSize:12,marginTop:4}}>{fmtDate(item?.date)} · CHF {Number(item?.total||0).toFixed(2)} · {item?.items?.length} {L("Artikel","artículos","items","articoli")}</div>
              </div>
              <div style={{color:CP.textSecondary,fontSize:13,textAlign:"center",marginBottom:18,lineHeight:1.6}}>
                {L("Diese Bestellung wird permanent gelöscht.","Este pedido será eliminado permanentemente.","This order will be permanently deleted.","Questo ordine verrà eliminato definitivamente.")}
              </div>
              <div style={{display:"flex",gap:10,justifyContent:"flex-end"}}>
                <CPBtn onClick={()=>setDeleteOrderId(null)} variant="secondary">{t.cancel}</CPBtn>
                <CPBtn onClick={()=>deleteOrder(deleteOrderId)} variant="danger">🗑️ {L("Löschen","Eliminar","Delete","Elimina")}</CPBtn>
              </div>
            </div>
          </CPModal>
        );
      })()}

    </CPScreen>
  );
}

// ─── CONTRACTS APP ────────────────────────────────────────────
const DEMO_CONTRACTS = [];

// ── CONTRACT ANNEX: RIGHTS & OBLIGATIONS (transparency page) ─────────────────
// Sources: Swiss Code of Obligations (OR/CO), Arbeitsgesetz (ArG), GAV Reinigungsbranche
// Deutschschweiz 2026 (minimum reference), Familienzulagen Kanton Zürich 2026,
// Sozialversicherungen 2026, ESTV km rate 2026. Review yearly with the fiduciary.
const ANNEX_EMPLOYEE = {
  title:{DE:"Anhang – Rechte und Pflichten",ES:"Anexo – Derechos y obligaciones",EN:"Annex – Rights and Obligations",IT:"Allegato – Diritti e obblighi"},
  intro:{
    DE:"Dieser Anhang ist Bestandteil des Arbeitsvertrags. Er fasst in einfacher Sprache zusammen, was Arbeitnehmer/in und Arbeitgeber einander schulden. Grundlage sind das Obligationenrecht (OR), das Arbeitsgesetz (ArG) und – als Mindeststandard – der GAV Reinigungsbranche Deutschschweiz. Bei Widersprüchen gilt die für die/den Arbeitnehmer/in günstigere Regel.",
    ES:"Este anexo forma parte del contrato de trabajo. Resume en lenguaje sencillo lo que el/la empleado/a y la empresa se deben mutuamente. Se basa en el Código de Obligaciones suizo (CO), la Ley del Trabajo (LTr) y, como estándar mínimo, en el Convenio Colectivo (GAV) de limpieza de la Suiza alemana. En caso de contradicción se aplica la norma más favorable para el/la empleado/a.",
    EN:"This annex forms part of the employment contract. It summarises in plain language what the employee and the employer owe each other. It is based on the Swiss Code of Obligations (CO), the Labour Act (ArG) and, as a minimum standard, the collective agreement (GAV) for the cleaning sector in German-speaking Switzerland. In case of conflict, the rule more favourable to the employee applies.",
    IT:"Il presente allegato fa parte del contratto di lavoro. Riassume in modo semplice ciò che dipendente e datore di lavoro si devono reciprocamente. Si basa sul Codice delle obbligazioni (CO), sulla Legge sul lavoro (LL) e, come standard minimo, sul CCL del settore pulizia della Svizzera tedesca. In caso di contraddizione vale la norma più favorevole al/la dipendente."
  },
  sections:[
    {
      head:{DE:"A. Rechte der/des Arbeitnehmenden = Pflichten des Arbeitgebers",ES:"A. Derechos del/de la empleado/a = Obligaciones de la empresa",EN:"A. Employee rights = Employer obligations",IT:"A. Diritti del/la dipendente = Obblighi del datore di lavoro"},
      items:[
        {DE:"Lohn: pünktliche Zahlung jeden Monat, mindestens GAV-Mindestlohn (2026 z.B. Unterhaltsreinigung CHF 21.40/Std.). Monatliche detaillierte Lohnabrechnung (Art. 322, 323b OR).",ES:"Salario: pago puntual cada mes, como mínimo el salario mínimo del GAV (2026 p. ej. limpieza de mantenimiento CHF 21.40/h). Nómina mensual detallada (Art. 322, 323b CO).",EN:"Pay: on time every month, at least the GAV minimum wage (2026 e.g. maintenance cleaning CHF 21.40/h). Detailed monthly payslip (Art. 322, 323b CO).",IT:"Salario: pagamento puntuale ogni mese, almeno il minimo CCL (2026 p. es. pulizia di manutenzione CHF 21.40/h). Busta paga mensile dettagliata (Art. 322, 323b CO)."},
        {DE:"13. Monatslohn: 100 %, wenn das Arbeitsverhältnis länger als 3 Monate dauert (GAV Art. 5). Bei Stundenlohn als Zuschlag von 8.33 % ausgewiesen.",ES:"13.º salario: 100 % si la relación laboral dura más de 3 meses (GAV Art. 5). Con salario por hora se paga como suplemento del 8.33 %.",EN:"13th salary: 100% if employment lasts more than 3 months (GAV Art. 5). For hourly pay shown as an 8.33% supplement.",IT:"13ª mensilità: 100% se il rapporto dura più di 3 mesi (CCL Art. 5). Con paga oraria come supplemento dell'8.33%."},
        {DE:"Ferien: bis 20 Jahre 5 Wochen, 21–49 Jahre 4 Wochen, ab 50 Jahren mit mind. 5 Dienstjahren 5 Wochen (GAV Art. 15, Art. 329a OR). Stundenlohn: Zuschlag 8.33 % (4 Wo.) bzw. 10.64 % (5 Wo.).",ES:"Vacaciones: hasta 20 años 5 semanas, de 21 a 49 años 4 semanas, desde 50 años con al menos 5 años de servicio 5 semanas (GAV Art. 15, Art. 329a CO). Por hora: suplemento 8.33 % (4 sem.) o 10.64 % (5 sem.).",EN:"Holidays: up to age 20 five weeks, age 21–49 four weeks, from 50 with at least 5 years of service five weeks (GAV Art. 15, Art. 329a CO). Hourly: supplement 8.33% (4 wks) or 10.64% (5 wks).",IT:"Ferie: fino a 20 anni 5 settimane, 21–49 anni 4 settimane, dai 50 anni con almeno 5 anni di servizio 5 settimane (CCL Art. 15, Art. 329a CO). Paga oraria: supplemento 8.33% (4 sett.) o 10.64% (5 sett.)."},
        {DE:"Feiertage: 8 kantonale Feiertage plus 1. August bezahlt (GAV Art. 8). Stundenlohn: Feiertagszuschlag.",ES:"Festivos: 8 festivos cantonales más el 1 de agosto pagados (GAV Art. 8). Por hora: suplemento de festivos.",EN:"Public holidays: 8 cantonal holidays plus 1 August paid (GAV Art. 8). Hourly: holiday supplement.",IT:"Festivi: 8 festivi cantonali più il 1° agosto pagati (CCL Art. 8). Paga oraria: supplemento festivi."},
        {DE:"Krankheit: nach der Probezeit 80 % des Lohnes bis 730 Tage pro Fall über die Krankentaggeldversicherung, ab dem 3. Tag (GAV Art. 13; Art. 324a OR). Unfall: versichert nach UVG (Nichtberufsunfall ab 8 Std./Woche).",ES:"Enfermedad: tras el período de prueba, 80 % del salario hasta 730 días por caso mediante el seguro de pérdida de ganancia, a partir del 3.er día (GAV Art. 13; Art. 324a CO). Accidente: asegurado según la LAA (accidentes no profesionales si trabaja 8 h o más por semana).",EN:"Illness: after probation, 80% of salary for up to 730 days per case via daily sickness insurance, from day 3 (GAV Art. 13; Art. 324a CO). Accident: insured under UVG (non-occupational accidents from 8 h/week).",IT:"Malattia: dopo il periodo di prova 80% del salario fino a 730 giorni per caso tramite l'assicurazione indennità giornaliera, dal 3° giorno (CCL Art. 13; Art. 324a CO). Infortunio: assicurato LAINF (infortuni non professionali da 8 h/settimana)."},
        {DE:"Mutterschaft 16 Wochen zu mind. 80 % (GAV Art. 13.2); Vaterschaft 2 Wochen (EO).",ES:"Maternidad: 16 semanas al menos al 80 % (GAV Art. 13.2). Paternidad: 2 semanas (EO).",EN:"Maternity: 16 weeks at min. 80% (GAV Art. 13.2). Paternity: 2 weeks (EO).",IT:"Maternità: 16 settimane almeno all'80% (CCL Art. 13.2). Paternità: 2 settimane (IPG)."},
        {DE:"Sozialversicherungen: Anmeldung bei AHV/IV/EO, ALV, UVG; BVG (Pensionskasse) ab Jahreslohn CHF 22'680. Der Arbeitgeber zahlt mindestens die Hälfte der Beiträge.",ES:"Seguros sociales: alta en AVS/AI/APG, seguro de desempleo (AD) y seguro de accidentes (LAA). Caja de pensiones (LPP) a partir de un salario anual de CHF 22'680. La empresa paga al menos la mitad de las cotizaciones.",EN:"Social insurance: registration with AHV/IV/EO, ALV, UVG; pension fund (BVG) from annual salary CHF 22,680. The employer pays at least half of the contributions.",IT:"Assicurazioni sociali: iscrizione AVS/AI/IPG, AD, LAINF; cassa pensione (LPP) da un salario annuo di CHF 22'680. Il datore paga almeno la metà dei contributi."},
        {DE:"Familienzulagen Kanton Zürich 2026: Kinderzulage CHF 215 (bis 12 J.), CHF 268 (12–16 J.); Ausbildungszulage CHF 268 (in Ausbildung ab 15 bis max. 25 J.). Der Arbeitgeber meldet und zahlt sie mit dem Lohn aus.",ES:"Asignaciones familiares cantón de Zúrich 2026: por hijo CHF 215 (hasta 12 años) y CHF 268 (de 12 a 16 años); por formación CHF 268 (si estudia, desde los 15 hasta los 25 años como máximo). La empresa las solicita y las paga junto con el salario.",EN:"Family allowances Canton Zurich 2026: child allowance CHF 215 (up to 12), CHF 268 (12–16); education allowance CHF 268 (in education, from 15 up to max. 25). The employer registers and pays them with the salary.",IT:"Assegni familiari Canton Zurigo 2026: assegno per figli CHF 215 (fino a 12 anni), CHF 268 (12–16); assegno di formazione CHF 268 (in formazione, da 15 fino a max. 25 anni). Il datore li richiede e li versa con il salario."},
        {DE:"Reisezeit von Kunde zu Kunde gilt als Arbeitszeit. Fahrkosten werden ersetzt (effektive Kosten, mind. SBB 2. Klasse; Privatauto CHF 0.75/km). Verpflegung CHF 16.–/Tag bei mind. 6 Std. auswärts (GAV Art. 14; Art. 327a OR). Der Weg von zu Hause zum üblichen Arbeitsort ist Privatsache.",ES:"El tiempo de viaje de un cliente a otro cuenta como tiempo de trabajo. Se reembolsan los gastos de transporte: coste real, como mínimo billete SBB de 2.ª clase, o CHF 0.75/km con vehículo privado. Comida: CHF 16 por día si trabaja 6 horas o más fuera (GAV Art. 14; Art. 327a CO). El trayecto de casa al lugar de trabajo habitual es privado.",EN:"Travel time from client to client counts as working time. Travel costs are reimbursed (actual cost, min. SBB 2nd class; private car CHF 0.75/km). Meals CHF 16/day when away at least 6 h (GAV Art. 14; Art. 327a CO). The commute from home to the usual workplace is private.",IT:"Il tempo di viaggio da un cliente all'altro è tempo di lavoro. Le spese di trasporto sono rimborsate (costo effettivo, min. FFS 2ª classe; auto privata CHF 0.75/km). Pasto CHF 16/giorno se fuori almeno 6 h (CCL Art. 14; Art. 327a CO). Il tragitto casa–luogo di lavoro abituale è privato."},
        {DE:"Zuschläge: Nacht-, Sonn- und Feiertagsarbeit mit Zuschlag gemäss GAV Art. 6; Überstunden mit 25 % Zuschlag, sofern nicht durch Freizeit kompensiert (Art. 321c OR).",ES:"Recargos: trabajo nocturno, en domingo y festivos con recargo según el GAV (Art. 6). Horas extra con un 25 % de recargo si no se compensan con tiempo libre (Art. 321c CO).",EN:"Surcharges: night, Sunday and holiday work with a surcharge per GAV Art. 6; overtime at +25% unless compensated with time off (Art. 321c CO).",IT:"Supplementi: lavoro notturno, domenicale e festivo con supplemento CCL Art. 6; straordinari +25% se non compensati con tempo libero (Art. 321c CO)."},
        {DE:"Bezahlte Absenzen: eigene Heirat 3 Tage; Tod von Ehepartner/Eltern/Kindern 3 Tage; Geschwister/Schwiegereltern 1 Tag; Umzug 1 Tag pro Jahr (GAV Art. 9).",ES:"Ausencias pagadas: boda propia 3 días; fallecimiento de cónyuge, padres o hijos 3 días; de hermanos o suegros 1 día; mudanza 1 día al año (GAV Art. 9).",EN:"Paid absences: own wedding 3 days; death of spouse/parents/children 3 days; siblings/in-laws 1 day; moving house 1 day per year (GAV Art. 9).",IT:"Assenze pagate: proprio matrimonio 3 giorni; decesso coniuge/genitori/figli 3 giorni; fratelli/suoceri 1 giorno; trasloco 1 giorno all'anno (CCL Art. 9)."},
        {DE:"Arbeitskleidung und Schutzausrüstung werden gestellt (GAV Art. 14.3). Material und Reinigungsmittel stellt die Firma.",ES:"La empresa proporciona la ropa de trabajo y el equipo de protección (GAV Art. 14.3), además del material y los productos de limpieza.",EN:"Work clothing and protective equipment are provided (GAV Art. 14.3). Materials and cleaning products are provided by the company.",IT:"Abiti da lavoro e dispositivi di protezione forniti (CCL Art. 14.3). Materiale e prodotti forniti dall'azienda."},
        {DE:"Arbeitszeiterfassung: Die Firma erfasst Ort, Beginn, Ende und Pausen, informiert monatlich über den Saldo und bewahrt die Daten 5 Jahre auf (GAV Art. 6).",ES:"Registro de horas: la empresa anota el lugar, la hora de inicio, la de fin y las pausas. Informa del saldo cada mes y guarda los datos 5 años (GAV Art. 6).",EN:"Time recording: the company records place, start, end and breaks, reports the balance monthly and keeps records for 5 years (GAV Art. 6).",IT:"Registrazione orari: l'azienda registra luogo, inizio, fine e pause, comunica il saldo mensilmente e conserva i dati 5 anni (CCL Art. 6)."},
        {DE:"Schutz der Persönlichkeit und Gesundheit: respektvoller Umgang, Schutz vor Belästigung und Diskriminierung, sichere Arbeitsplätze (Art. 328 OR, Art. 6 ArG). Personendaten werden vertraulich behandelt (Art. 328b OR, DSG).",ES:"Protección de la persona y de la salud: trato respetuoso, protección contra el acoso y la discriminación, y lugares de trabajo seguros (Art. 328 CO, Art. 6 LTr). Los datos personales se tratan de forma confidencial (Art. 328b CO, LPD).",EN:"Protection of personality and health: respectful treatment, protection against harassment and discrimination, safe workplaces (Art. 328 CO, Art. 6 ArG). Personal data treated confidentially (Art. 328b CO, FADP).",IT:"Tutela della personalità e della salute: trattamento rispettoso, protezione da molestie e discriminazioni, posti di lavoro sicuri (Art. 328 CO, Art. 6 LL). Dati personali trattati in modo confidenziale (Art. 328b CO, LPD)."},
        {DE:"Kündigungsschutz während Krankheit, Unfall, Schwangerschaft und Militärdienst (Art. 336c OR). Anspruch auf ein Arbeitszeugnis (Art. 330a OR).",ES:"Protección contra el despido durante enfermedad, accidente, embarazo y servicio militar (Art. 336c CO). Derecho a un certificado de trabajo (Art. 330a CO).",EN:"Protection against dismissal during illness, accident, pregnancy and military service (Art. 336c CO). Right to a reference letter (Art. 330a CO).",IT:"Protezione dal licenziamento durante malattia, infortunio, gravidanza e servizio militare (Art. 336c CO). Diritto a un certificato di lavoro (Art. 330a CO)."},
      ]
    },
    {
      head:{DE:"B. Pflichten der/des Arbeitnehmenden = Rechte des Arbeitgebers",ES:"B. Obligaciones del/de la empleado/a = Derechos de la empresa",EN:"B. Employee obligations = Employer rights",IT:"B. Obblighi del/la dipendente = Diritti del datore di lavoro"},
      items:[
        {DE:"Arbeit sorgfältig, persönlich und in guter Qualität ausführen; Interessen der Firma in guten Treuen wahren (Art. 321, 321a OR).",ES:"Realizar el trabajo con cuidado, personalmente y con buena calidad. Defender de buena fe los intereses de la empresa (Art. 321 y 321a CO).",EN:"Perform the work carefully, personally and to a good standard; safeguard the company's interests in good faith (Art. 321, 321a CO).",IT:"Svolgere il lavoro con cura, personalmente e con buona qualità; tutelare in buona fede gli interessi dell'azienda (Art. 321, 321a CO)."},
        {DE:"Weisungen des Arbeitgebers befolgen (Einsatzplan, Arbeitsmethoden, Sicherheitsregeln) (Art. 321d OR).",ES:"Seguir las instrucciones de la empresa: plan de trabajo, métodos y normas de seguridad (Art. 321d CO).",EN:"Follow the employer's instructions (schedule, work methods, safety rules) (Art. 321d CO).",IT:"Seguire le istruzioni del datore (piano, metodi di lavoro, regole di sicurezza) (Art. 321d CO)."},
        {DE:"Pünktlichkeit; Ein- und Ausstempeln in der App bei jedem Auftrag korrekt vornehmen.",ES:"Ser puntual y fichar correctamente la entrada y la salida en la app en cada trabajo.",EN:"Be punctual; clock in and out correctly in the app for every job.",IT:"Puntualità; timbrare correttamente entrata e uscita nell'app per ogni lavoro."},
        {DE:"Abwesenheit (Krankheit, Unfall) sofort vor Arbeitsbeginn melden; Arztzeugnis ab dem 3. Tag oder auf Verlangen.",ES:"Avisar de inmediato de una ausencia (enfermedad o accidente), antes de la hora de inicio. Entregar un certificado médico a partir del 3.er día o cuando la empresa lo pida.",EN:"Report absence (illness, accident) immediately before start of work; medical certificate from day 3 or on request.",IT:"Comunicare subito l'assenza (malattia, infortunio) prima dell'inizio; certificato medico dal 3° giorno o su richiesta."},
        {DE:"Verschwiegenheit über Kunden, Wohnungen, Schlüssel, Alarmcodes und Geschäftsdaten – auch nach Vertragsende (Art. 321a Abs. 4 OR).",ES:"Guardar secreto sobre los clientes, sus viviendas, llaves, códigos de alarma y datos de la empresa, también después de terminar el contrato (Art. 321a párr. 4 CO).",EN:"Confidentiality about clients, homes, keys, alarm codes and business data – also after the contract ends (Art. 321a para. 4 CO).",IT:"Riservatezza su clienti, abitazioni, chiavi, codici d'allarme e dati aziendali – anche dopo la fine del contratto (Art. 321a cpv. 4 CO)."},
        {DE:"Material, Maschinen, Fahrzeuge und Schlüssel sorgfältig behandeln und bei Vertragsende zurückgeben; Geld oder Gegenstände von Kunden abgeben (Art. 321b OR).",ES:"Cuidar el material, las máquinas, los vehículos y las llaves, y devolverlos al terminar el contrato. Entregar a la empresa el dinero u objetos recibidos de los clientes (Art. 321b CO).",EN:"Handle materials, machines, vehicles and keys with care and return them at the end; hand over money or items received from clients (Art. 321b CO).",IT:"Trattare con cura materiale, macchine, veicoli e chiavi e restituirli a fine rapporto; consegnare denaro o oggetti ricevuti dai clienti (Art. 321b CO)."},
        {DE:"Arbeitskleidung und Schutzausrüstung tragen, Sicherheits- und Hygieneregeln einhalten; kein Alkohol oder Drogen bei der Arbeit.",ES:"Llevar la ropa de trabajo y el equipo de protección, y cumplir las normas de seguridad e higiene. No consumir alcohol ni drogas durante el trabajo.",EN:"Wear work clothing and protective equipment, follow safety and hygiene rules; no alcohol or drugs at work.",IT:"Indossare abiti da lavoro e protezioni, rispettare le regole di sicurezza e igiene; niente alcol o droghe al lavoro."},
        {DE:"Schäden, Unfälle und Probleme beim Kunden sofort melden. Für absichtlich oder grobfahrlässig verursachte Schäden kann gehaftet werden (Art. 321e OR).",ES:"Comunicar de inmediato los daños, accidentes y problemas en casa del cliente. Puede tener que responder por daños causados a propósito o por negligencia grave (Art. 321e CO).",EN:"Report damage, accidents and problems at the client immediately. Liability may apply for damage caused intentionally or by gross negligence (Art. 321e CO).",IT:"Segnalare subito danni, infortuni e problemi presso il cliente. Si può rispondere dei danni causati intenzionalmente o per colpa grave (Art. 321e CO)."},
        {DE:"Keine Arbeiten auf eigene Rechnung für Kunden der Firma, solange das Arbeitsverhältnis dauert (Treuepflicht, Art. 321a Abs. 3 OR).",ES:"No trabajar por cuenta propia para clientes de la empresa mientras dure la relación laboral (deber de lealtad, Art. 321a párr. 3 CO).",EN:"No work on own account for the company's clients while employed (duty of loyalty, Art. 321a para. 3 CO).",IT:"Nessun lavoro in proprio per i clienti dell'azienda durante il rapporto (dovere di fedeltà, Art. 321a cpv. 3 CO)."},
        {DE:"Notwendige Überstunden leisten, soweit zumutbar (Art. 321c OR).",ES:"Hacer las horas extra necesarias, siempre que sea razonable (Art. 321c CO).",EN:"Work necessary overtime where reasonable (Art. 321c CO).",IT:"Prestare gli straordinari necessari se ragionevoli (Art. 321c CO)."},
        {DE:"Kündigungsfristen einhalten: Probezeit 7 Tage; 1. Dienstjahr 1 Monat; 2.–9. Jahr 2 Monate; ab 10. Jahr 3 Monate, jeweils auf Monatsende (GAV Art. 17, Art. 335c OR).",ES:"Respetar los plazos de preaviso, siempre a final de mes: en el período de prueba 7 días; el 1.er año 1 mes; del 2.º al 9.º año 2 meses; a partir del 10.º año 3 meses (GAV Art. 17, Art. 335c CO).",EN:"Respect notice periods: probation 7 days; 1st year 1 month; years 2–9 two months; from year 10 three months, each to the end of a month (GAV Art. 17, Art. 335c CO).",IT:"Rispettare i preavvisi: prova 7 giorni; 1° anno 1 mese; 2°–9° anno 2 mesi; dal 10° anno 3 mesi, sempre per fine mese (CCL Art. 17, Art. 335c CO)."},
        {DE:"Änderungen von Adresse, Zivilstand, Kindern oder Bewilligung sofort melden (wichtig für Sozialversicherung, Familienzulagen und Quellensteuer).",ES:"Comunicar de inmediato cualquier cambio de domicilio, estado civil, hijos o permiso de residencia. Es importante para los seguros sociales, las asignaciones familiares y el impuesto en la fuente.",EN:"Report changes of address, marital status, children or permit immediately (important for social insurance, family allowances and withholding tax).",IT:"Comunicare subito cambi di indirizzo, stato civile, figli o permesso (importante per assicurazioni sociali, assegni familiari e imposta alla fonte)."},
      ]
    }
  ]
};

const ANNEX_CLIENT = {
  title:{DE:"Anhang – Rechte und Pflichten",ES:"Anexo – Derechos y obligaciones",EN:"Annex – Rights and Obligations",IT:"Allegato – Diritti e obblighi"},
  intro:{
    DE:"Dieser Anhang ist Bestandteil des Dienstleistungsvertrags (Auftrag, Art. 394 ff. OR). Er beschreibt transparent, was die Firma dem Kunden schuldet und was der Kunde der Firma schuldet.",
    ES:"Este anexo forma parte del contrato de servicios (mandato, Art. 394 y ss. CO). Describe con transparencia lo que la empresa debe al cliente y lo que el cliente debe a la empresa.",
    EN:"This annex forms part of the service contract (mandate, Art. 394 ff. CO). It transparently describes what the company owes the client and what the client owes the company.",
    IT:"Il presente allegato fa parte del contratto di servizi (mandato, Art. 394 segg. CO). Descrive in modo trasparente cosa l'azienda deve al cliente e cosa il cliente deve all'azienda."
  },
  sections:[
    {
      head:{DE:"A. Rechte des Kunden = Pflichten der Firma",ES:"A. Derechos del cliente = Obligaciones de la empresa",EN:"A. Client rights = Company obligations",IT:"A. Diritti del cliente = Obblighi dell'azienda"},
      items:[
        {DE:"Sorgfältige, fachgerechte Ausführung der vereinbarten Arbeiten zu den vereinbarten Zeiten (Art. 398 OR).",ES:"Realizar con cuidado y de forma profesional los trabajos acordados, en los horarios acordados (Art. 398 CO).",EN:"Careful, professional performance of the agreed work at the agreed times (Art. 398 CO).",IT:"Esecuzione accurata e professionale dei lavori concordati negli orari concordati (Art. 398 CO)."},
        {DE:"Geschultes, zuverlässiges Personal mit gültiger Arbeitsbewilligung, korrekt angemeldet und versichert, zu fairen Arbeitsbedingungen (GAV).",ES:"Personal formado y de confianza, con permiso de trabajo válido, dado de alta y asegurado correctamente, con condiciones laborales justas (GAV).",EN:"Trained, reliable staff with valid work permits, properly registered and insured, under fair working conditions (GAV).",IT:"Personale formato e affidabile con permesso di lavoro valido, regolarmente notificato e assicurato, a condizioni di lavoro eque (CCL)."},
        {DE:"Transparente Preise: Stundensatz × vereinbarte (geplante) Stunden. Detaillierte Rechnung mit Datum, Stunden und Leistung. Zusatzstunden nur nach Absprache.",ES:"Precios transparentes: tarifa por hora × horas acordadas (planificadas). Factura detallada con fecha, horas y servicio. Las horas adicionales solo se hacen si se acuerdan antes.",EN:"Transparent pricing: hourly rate × agreed (planned) hours. Detailed invoice with date, hours and service. Extra hours only by agreement.",IT:"Prezzi trasparenti: tariffa oraria × ore concordate (pianificate). Fattura dettagliata con data, ore e servizio. Ore extra solo previo accordo."},
        {DE:"Verschwiegenheit über alles, was das Personal beim Kunden sieht oder erfährt; sichere Aufbewahrung von Schlüsseln und Codes; Datenschutz gemäss DSG.",ES:"Confidencialidad sobre todo lo que el personal vea o sepa en casa del cliente. Guarda segura de llaves y códigos. Protección de datos según la LPD.",EN:"Confidentiality about everything staff see or learn at the client's; secure safekeeping of keys and codes; data protection per FADP.",IT:"Riservatezza su tutto ciò che il personale vede o apprende presso il cliente; custodia sicura di chiavi e codici; protezione dei dati secondo LPD."},
        {DE:"Haftung für Schäden, die das Personal schuldhaft verursacht; Deckung über die Betriebshaftpflichtversicherung der Firma.",ES:"La empresa responde de los daños que su personal cause por culpa suya. Están cubiertos por el seguro de responsabilidad civil de la empresa.",EN:"Liability for damage culpably caused by staff; covered by the company's business liability insurance.",IT:"Responsabilità per i danni causati per colpa dal personale; copertura tramite l'assicurazione RC aziendale."},
        {DE:"Beanstandungen, die innerhalb von 48 Stunden gemeldet werden, werden kostenlos nachgebessert.",ES:"Las reclamaciones comunicadas en un plazo de 48 horas se corrigen sin coste.",EN:"Complaints reported within 48 hours are corrected free of charge.",IT:"I reclami segnalati entro 48 ore vengono corretti gratuitamente."},
        {DE:"Frühzeitige Information bei Terminänderungen oder Personalwechsel (mind. 24 Std. im Voraus, ausser Notfälle).",ES:"Avisar con tiempo de los cambios de fecha o de personal: al menos 24 horas antes, salvo urgencias.",EN:"Timely notice of schedule or staff changes (at least 24 h in advance, except emergencies).",IT:"Informazione tempestiva su cambi di orario o di personale (almeno 24 h prima, salvo emergenze)."},
        {DE:"Verwendung geeigneter, möglichst umweltschonender Reinigungs- und Gartenprodukte.",ES:"Usar productos de limpieza y de jardinería adecuados y, en lo posible, respetuosos con el medio ambiente.",EN:"Use of suitable, preferably eco-friendly cleaning and garden products.",IT:"Uso di prodotti per pulizia e giardino adeguati e il più possibile ecologici."},
      ]
    },
    {
      head:{DE:"B. Pflichten des Kunden = Rechte der Firma",ES:"B. Obligaciones del cliente = Derechos de la empresa",EN:"B. Client obligations = Company rights",IT:"B. Obblighi del cliente = Diritti dell'azienda"},
      items:[
        {DE:"Rechnungen innert 30 Tagen bezahlen. Bei Verzug Verzugszins 5 % (Art. 104 OR) und Mahngebühren.",ES:"Pagar las facturas en un plazo de 30 días. Si se retrasa, se cobran intereses de demora del 5 % (Art. 104 CO) y gastos de recordatorio.",EN:"Pay invoices within 30 days. Late payment incurs 5% default interest (Art. 104 CO) and reminder fees.",IT:"Pagare le fatture entro 30 giorni. In caso di mora interessi del 5% (Art. 104 CO) e spese di sollecito."},
        {DE:"Zugang zu den Räumlichkeiten zur vereinbarten Zeit ermöglichen (Schlüssel, Codes, Parkmöglichkeit, Informationen).",ES:"Dar acceso al lugar en el horario acordado: llaves, códigos, aparcamiento e información necesaria.",EN:"Provide access to the premises at the agreed time (keys, codes, parking, information).",IT:"Garantire l'accesso ai locali all'ora concordata (chiavi, codici, parcheggio, informazioni)."},
        {DE:"Absagen mindestens 24 Stunden im Voraus. Spätere Absagen oder verweigerter Zutritt werden mit den geplanten Stunden verrechnet.",ES:"Cancelar con al menos 24 horas de antelación. Si cancela más tarde o no se puede entrar al lugar, se facturan las horas planificadas.",EN:"Cancel at least 24 hours in advance. Later cancellations or denied access are charged at the planned hours.",IT:"Disdire almeno 24 ore prima. Disdette tardive o accesso negato vengono fatturati con le ore pianificate."},
        {DE:"Wasser und Strom kostenlos zur Verfügung stellen; allfällige eigene Produkte oder Geräte in gutem Zustand bereitstellen.",ES:"Poner a disposición agua y electricidad sin coste. Si el cliente aporta productos o aparatos propios, deben estar en buen estado.",EN:"Provide water and electricity free of charge; any own products or equipment must be in good condition.",IT:"Mettere a disposizione gratuitamente acqua ed elettricità; eventuali prodotti o apparecchi propri in buono stato."},
        {DE:"Auf zerbrechliche oder wertvolle Gegenstände, empfindliche Oberflächen, Haustiere und Gefahren hinweisen; Wertsachen sicher verwahren.",ES:"Avisar de objetos frágiles o de valor, superficies delicadas, mascotas y posibles peligros. Guardar los objetos de valor en un lugar seguro.",EN:"Point out fragile or valuable items, delicate surfaces, pets and hazards; keep valuables safely stored.",IT:"Segnalare oggetti fragili o di valore, superfici delicate, animali e pericoli; custodire in sicurezza gli oggetti di valore."},
        {DE:"Ein sicheres Arbeitsumfeld bieten; keine gefährlichen Arbeiten verlangen, die nicht vereinbart sind.",ES:"Ofrecer un entorno de trabajo seguro. No pedir trabajos peligrosos que no se hayan acordado.",EN:"Provide a safe working environment; do not request dangerous work that was not agreed.",IT:"Offrire un ambiente di lavoro sicuro; non richiedere lavori pericolosi non concordati."},
        {DE:"Respektvoller Umgang mit dem Personal; Anweisungen und Wünsche an die Firma richten.",ES:"Tratar al personal con respeto. Dirigir las instrucciones y peticiones a la empresa.",EN:"Treat staff with respect; direct instructions and requests to the company.",IT:"Trattare il personale con rispetto; indirizzare istruzioni e richieste all'azienda."},
        {DE:"Schäden innerhalb von 5 Tagen schriftlich melden (mit Fotos), damit sie geprüft und der Versicherung gemeldet werden können.",ES:"Comunicar los daños por escrito, con fotos, en un plazo de 5 días, para poder revisarlos y avisar al seguro.",EN:"Report damage in writing within 5 days (with photos) so it can be assessed and reported to the insurer.",IT:"Segnalare i danni per iscritto entro 5 giorni (con foto) per poterli verificare e notificare all'assicurazione."},
        {DE:"Personal der Firma während des Vertrags und 12 Monate danach nicht direkt anstellen oder privat beschäftigen.",ES:"No contratar directamente ni emplear de forma privada al personal de la empresa durante el contrato ni en los 12 meses siguientes.",EN:"Do not hire or privately employ the company's staff during the contract and for 12 months afterwards.",IT:"Non assumere né impiegare privatamente il personale dell'azienda durante il contratto e nei 12 mesi successivi."},
      ]
    }
  ]
};

// Builds the extra page (page break before) for a contract.
function buildRightsAnnexHTML(annex, lang, signLeft, signRight){
  const pick = o => (o && (o[lang] || o.EN)) || "";
  const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  const sections = annex.sections.map(sec=>`
    <div style="margin-bottom:16px">
      <div style="font-weight:700;font-size:13px;color:#fff;background:#1C7ED6;padding:6px 10px;border-radius:4px;margin-bottom:8px">${esc(pick(sec.head))}</div>
      <ol style="margin:0 0 0 20px;padding:0;font-size:11px;color:#333;line-height:1.55">
        ${sec.items.map(it=>`<li style="margin-bottom:5px">${esc(pick(it))}</li>`).join("")}
      </ol>
    </div>`).join("");
  const ack = {DE:"Gelesen, verstanden und akzeptiert",ES:"Leído, entendido y aceptado",EN:"Read, understood and accepted",IT:"Letto, compreso e accettato"};
  return `
<div style="page-break-before:always;break-before:page;padding-top:10px">
  <div style="font-size:18px;font-weight:700;color:#1C7ED6;text-transform:uppercase;border-bottom:3px solid #1C7ED6;padding-bottom:8px;margin-bottom:12px">${esc(pick(annex.title))}</div>
  <div style="font-size:11px;color:#555;background:#f8f9fa;border:1px solid #dce5f0;border-radius:6px;padding:10px 12px;margin-bottom:14px;line-height:1.55">${esc(pick(annex.intro))}</div>
  ${sections}
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:40px;margin-top:24px">
    <div style="text-align:center"><div style="border-top:1px solid #333;margin-top:40px;padding-top:6px;font-size:10px;color:#555">${esc(signLeft)}<br>${esc(pick(ack))}</div></div>
    <div style="text-align:center"><div style="border-top:1px solid #333;margin-top:40px;padding-top:6px;font-size:10px;color:#555">${esc(signRight)}<br>${esc(pick(ack))}</div></div>
  </div>
</div>`;
}

// ─── DOCUMENTS (payslips each month-end, contracts, other files) ──────────
// Employees see only their own documents; the administrator picks an employee and can upload files.
const DOCS_REST = "https://rtviublrukagwxaypmit.supabase.co/rest/v1/";
const DOCS_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0dml1YmxydWthZ3d4YXlwbWl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk5MjkwMjEsImV4cCI6MjEwNTUwNTAyMX0.Ykj1dz8elWC12GP-m88IBiDc_Hscrw1AjPY9Tw7p-G8";
const docsFetch = async (path, method="GET", body=null) => {
  const res = await fetch(DOCS_REST+path, { method, headers:{ "Content-Type":"application/json", apikey:DOCS_KEY, Authorization:`Bearer ${DOCS_KEY}`, Prefer:"return=representation" }, body: body?JSON.stringify(body):undefined });
  if(!res.ok) throw new Error(await res.text());
  const tx = await res.text(); return tx ? JSON.parse(tx) : null;
};
const DOC_MAX_BYTES = 5*1024*1024;
// Server-side checks (the admin password is only stored as a hash, never in the app)
const supaRpc = async (fn, args) => {
  const res = await fetch(DOCS_REST+"rpc/"+fn, {method:"POST", headers:{"Content-Type":"application/json", apikey:DOCS_KEY, Authorization:`Bearer ${DOCS_KEY}`}, body:JSON.stringify(args)});
  if(!res.ok) throw new Error(await res.text());
  return res.json();
};
// Documents the administrator "sends" from the app (payslip, work sheet, contract) are stored as printable HTML
const SENT_CATS = ["payslip","worksheet","contract_sent"];
const utf8ToB64 = str => { const bytes=new TextEncoder().encode(str); let bin=""; for(let i=0;i<bytes.length;i+=0x8000) bin+=String.fromCharCode.apply(null,bytes.subarray(i,i+0x8000)); return btoa(bin); };
const publishEmployeeDoc = async ({employeeId,title,category,period=null,refId=null,html}) => {
  // Replace an earlier copy of the same document (same month / same contract)
  const q=[`employee_id=eq.${employeeId}`,`category=eq.${category}`,period?`period=eq.${encodeURIComponent(period)}`:null,refId?`ref_id=eq.${encodeURIComponent(refId)}`:null].filter(Boolean).join("&");
  if(period||refId) await docsFetch(`employee_documents?${q}`,"DELETE");
  const data = utf8ToB64(html);
  return docsFetch("employee_documents","POST",{employee_id:employeeId,title,category,period,ref_id:refId,
    file_name:`${title.replace(/[^\w\-]+/g,"_")}.html`,mime:"text/html",size_bytes:Math.round(data.length*3/4),data});
};
function SendToDocsButton({lang,employeeId,title,category,period,refId,getHtml,style,compact}){
  const L = makeL(lang);
  const [st,setSt] = useState("idle");
  if(!employeeId) return null;
  const send = async () => {
    const html = getHtml && getHtml(); if(!html){ setSt("error"); return; }
    setSt("sending");
    try{ await publishEmployeeDoc({employeeId,title,category,period,refId,html}); setSt("done"); }
    catch(e){ console.error(e); setSt("error"); }
  };
  const label = st==="sending"?"⏳":st==="done"?`✅ ${L("Gesendet","Enviado","Sent","Inviato")}`:st==="error"?`⚠️ ${L("Fehler – nochmals","Error – reintentar","Error – retry","Errore – riprova")}`:
    compact?"📤":`📤 ${L("An Mitarbeiter-Dokumente senden","Enviar a Documentos del empleado","Send to employee documents","Invia ai documenti del dipendente")}`;
  return <button onClick={send} disabled={st==="sending"} title={L("An Mitarbeiter-Dokumente senden","Enviar a Documentos del empleado","Send to employee documents","Invia ai documenti del dipendente")}
    style={{background:st==="done"?"rgba(47,158,68,0.85)":"rgba(255,255,255,0.2)",border:"1px solid rgba(255,255,255,0.4)",borderRadius:10,color:"#fff",padding:"8px 14px",cursor:"pointer",fontSize:13,fontWeight:700,fontFamily:CP.font,...(style||{})}}>{label}</button>;
}
const DOC_CATS = [
  {id:"contract",    icon:"📝", L:["Unterschriebener Vertrag","Contrato firmado","Signed contract","Contratto firmato"]},
  {id:"certificate", icon:"🏅", L:["Zeugnis / Bescheinigung","Certificado","Certificate","Certificato"]},
  {id:"salary",      icon:"💵", L:["Lohnausweis / Lohn","Certificado de salario","Salary certificate","Certificato di salario"]},
  {id:"rules",       icon:"📘", L:["Reglement / Info","Reglamento / información","Rules / info","Regolamento / info"]},
  {id:"other",       icon:"📄", L:["Anderes","Otro","Other","Altro"]},
];

// Same travel-cost logic as the monthly work sheet, so the payslip includes transport on any device
const computeSpesen = async (emp, month, year, jobs, clients) => {
  const monthStr = `${year}-${String(month).padStart(2,"0")}`;
  const mine = (jobs||[]).filter(j=>j.employeeId===emp.id && j.date && j.date.startsWith(monthStr))
    .sort((a,b)=>`${a.date}${a.timeStart||""}`.localeCompare(`${b.date}${b.timeStart||""}`));
  if(!mine.length) return 0;
  const mode = emp.transportMode||"public", ticket = Number(emp.ticketPrice)||0, withMeals = lsGet("patjac_meals_on",true);
  const rows=[]; let prevDate=null, prevAddr=null;
  for(const j of mine){
    const c=(clients||[]).find(x=>x.id===j.clientId); const addr=fmtAddr(c); const first=j.date!==prevDate;
    const r = first ? null : await routeKm(prevAddr, addr);
    rows.push({date:j.date, first, km:r?r.km:0, planStart:j.timeStart||"", planEnd:j.timeEnd||""});
    prevDate=j.date; prevAddr=addr;
  }
  const transport = rows.reduce((s,r)=>s+(r.first?0:(mode==="car"?(r.km||0)*KM_RATE_CAR:(r.km>0?ticket:0))),0);
  const days=[...new Set(rows.map(r=>r.date))];
  const meals = withMeals ? days.reduce((s,d)=>{ const rs=rows.filter(r=>r.date===d); const st=rs.map(r=>r.planStart).sort()[0], en=rs.map(r=>r.planEnd).sort().slice(-1)[0]; return s+(hoursBetween(st,en)>=6?MEAL_ALLOWANCE:0); },0) : 0;
  const total = Math.round((transport+meals)*100)/100;
  saveSpesen(emp.id,year,month,total);
  return total;
};

function DocumentsApp({t,lang,employees,jobs,clients,timeclock,contracts,companySettings,currentUser,notify,onBack}){
  const L = makeL(lang);
  useQstTariffs(employees);
  const isAdmin = currentUser?.role==="admin";
  const activeEmps = (employees||[]).filter(e=>e.role!=="admin");
  const [empId,setEmpId] = useState(isAdmin ? (activeEmps[0]?.id||"") : currentUser?.id);
  const emp = (employees||[]).find(e=>e.id===empId);
  const [tab,setTab] = useState("payslips");
  const [payslipData,setPayslipData] = useState(null);
  const [worksheet,setWorksheet] = useState(null);
  const [busy,setBusy] = useState("");
  const [docs,setDocs] = useState(null);
  const [upload,setUpload] = useState(null); // admin upload form
  const [docSearch,setDocSearch] = useState("");
  const monthNames = MONTHS[lang]||MONTHS.EN;

  // Months available: a month appears once it is over (on its last day it is already shown). Admin also sees the current month.
  const months = useMemo(()=>{
    if(!emp) return [];
    const now=new Date(); const lastDay=new Date(now.getFullYear(),now.getMonth()+1,0).getDate();
    let end = new Date(now.getFullYear(), now.getMonth(), 1);
    if(!(isAdmin || now.getDate()===lastDay)) end = new Date(now.getFullYear(), now.getMonth()-1, 1);
    const start0 = emp.startDate ? new Date(emp.startDate+"T00:00:00") : new Date(now.getFullYear()-1, now.getMonth(), 1);
    const limit = new Date(now.getFullYear()-2, now.getMonth(), 1);
    let d = new Date(Math.max(new Date(start0.getFullYear(),start0.getMonth(),1), limit));
    const out=[];
    while(d<=end){
      const m=d.getMonth()+1, y=d.getFullYear(), ms=`${y}-${String(m).padStart(2,"0")}`;
      const active = (jobs||[]).some(j=>j.employeeId===emp.id&&j.date?.startsWith(ms)) || (timeclock||[]).some(x=>x.employeeId===emp.id&&x.date?.startsWith(ms));
      const sent = (docs||[]).some(x=>(x.category==="payslip"||x.category==="worksheet")&&x.period===ms);
      if(active || sent || emp.type!=="hourly") out.push({m,y,ms,current: m===now.getMonth()+1&&y===now.getFullYear()});
      d = new Date(y, m, 1);
    }
    return out.reverse();
  },[emp?.id, jobs, timeclock, isAdmin, docs]);
  const sentDoc = (cat,period) => (docs||[]).find(x=>x.category===cat&&x.period===period&&x.employee_id===emp?.id);

  const loadDocs = async () => {
    if(!emp){ setDocs([]); return; }
    try{
      const rows = await docsFetch(`employee_documents?select=id,employee_id,title,category,period,ref_id,file_name,mime,size_bytes,created_at&or=(employee_id.eq.${emp.id},employee_id.is.null)&order=created_at.desc`);
      setDocs(rows||[]);
    }catch(e){ setDocs([]); notify(L("Dokumente konnten nicht geladen werden","No se pudieron cargar los documentos","Could not load documents","Impossibile caricare i documenti"),"error"); }
  };
  useEffect(()=>{ setDocs(null); loadDocs(); },[empId]);

  const openPayslip = async (m,y) => {
    setBusy(`p${y}${m}`);
    try{
      let sp = getSavedSpesen(emp.id,y,m);
      if(!sp) sp = await computeSpesen(emp,m,y,jobs,clients);
      const pay = calcSwissPayroll(emp,timeclock,m,y,jobs,{spesen:sp});
      setPayslipData({emp,pay,month:m,year:y});
    } finally { setBusy(""); }
  };

  const openFile = async (d, mode) => {
    setBusy(d.id);
    try{
      const rows = await docsFetch(`employee_documents?select=data,mime,file_name&id=eq.${d.id}`);
      const r = rows?.[0]; if(!r?.data) throw new Error("empty");
      const bin = atob(r.data); const arr = new Uint8Array(bin.length); for(let i=0;i<bin.length;i++) arr[i]=bin.charCodeAt(i);
      const url = URL.createObjectURL(new Blob([arr],{type:r.mime||"application/octet-stream"}));
      if(mode==="open"){ const w=window.open(url,"_blank"); if(!w){ const a=document.createElement("a"); a.href=url; a.target="_blank"; document.body.appendChild(a); a.click(); a.remove(); } }
      else { const a=document.createElement("a"); a.href=url; a.download=r.file_name||d.title; document.body.appendChild(a); a.click(); a.remove(); }
      setTimeout(()=>URL.revokeObjectURL(url),60000);
    }catch(e){ notify(L("Fehler beim Öffnen","Error al abrir el documento","Could not open","Errore di apertura"),"error"); }
    finally{ setBusy(""); }
  };

  const doUpload = async () => {
    const f = upload?.file;
    if(!f){ notify(L("Bitte Datei wählen","Elija un archivo","Choose a file","Scegli un file"),"error"); return; }
    if(f.size>DOC_MAX_BYTES){ notify(L("Datei zu gross (max. 5 MB)","Archivo demasiado grande (máx. 5 MB)","File too large (max 5 MB)","File troppo grande (max 5 MB)"),"error"); return; }
    setBusy("upload");
    try{
      const b64 = await new Promise((res,rej)=>{ const fr=new FileReader(); fr.onload=()=>res(String(fr.result).split(",")[1]||""); fr.onerror=rej; fr.readAsDataURL(f); });
      await docsFetch("employee_documents","POST",{ employee_id: upload.forAll?null:emp.id, title:(upload.title||f.name).trim(), category:upload.category||"other", file_name:f.name, mime:f.type||"application/octet-stream", size_bytes:f.size, data:b64 });
      notify(L("Dokument hochgeladen","Documento subido","Document uploaded","Documento caricato"),"success");
      setUpload(null); loadDocs();
    }catch(e){ notify(L("Fehler beim Hochladen","Error al subir","Upload failed","Errore di caricamento"),"error"); }
    finally{ setBusy(""); }
  };
  const delDoc = async (d) => {
    if(!window.confirm(L("Dokument löschen?","¿Eliminar este documento?","Delete this document?","Eliminare il documento?"))) return;
    try{ await docsFetch(`employee_documents?id=eq.${d.id}`,"DELETE"); setDocs(p=>(p||[]).filter(x=>x.id!==d.id)); }
    catch(e){ notify(L("Fehler","Error","Error","Errore"),"error"); }
  };

  const tabs = [
    ["payslips","💵",L("Lohnabrechnungen","Nóminas","Payslips","Buste paga")],
    ["contracts","📝",L("Verträge","Contratos","Contracts","Contratti")],
    ["other","📂",L("Andere Dokumente","Otros documentos","Other documents","Altri documenti")],
  ];
  const catOf = id => DOC_CATS.find(c=>c.id===id)||DOC_CATS[DOC_CATS.length-1];
  const langIdx = {DE:0,ES:1,EN:2,IT:3}[lang]??1;
  const fmtSize = n => n>1048576?`${(n/1048576).toFixed(1)} MB`:`${Math.max(1,Math.round((n||0)/1024))} KB`;

  return (
    <CPScreen title={L("Dokumente","Documentos","Documents","Documenti")} icon="📁" onBack={onBack} t={t}>
      {isAdmin&&(
        <div style={{marginBottom:12}}>
          <CPField label={L("Mitarbeiter","Empleado","Employee","Dipendente")}>
            <CPSelect value={empId} onChange={e=>setEmpId(e.target.value)}>
              {activeEmps.map(e=><option key={e.id} value={e.id}>{e.name}</option>)}
            </CPSelect>
          </CPField>
        </div>
      )}
      {!emp ? <CPCard><div style={{color:CP.textSecondary}}>{L("Kein Mitarbeiter","Sin empleado","No employee","Nessun dipendente")}</div></CPCard> : (<>
      <div style={{display:"flex",gap:8,marginBottom:14,flexWrap:"wrap"}}>
        {tabs.map(([k,ic,lbl])=>(
          <button key={k} onClick={()=>setTab(k)} style={{padding:"8px 14px",borderRadius:20,border:"none",cursor:"pointer",fontWeight:700,fontSize:13,fontFamily:CP.font,background:tab===k?CP.accent:"rgba(255,255,255,.1)",color:"#fff"}}>{ic} {lbl}</button>
        ))}
      </div>

      <SearchBox value={docSearch} onChange={setDocSearch} lang={lang} placeholder={`🔍 ${L("Dokument suchen (Monat, Jahr, Titel, Datum …)","Buscar documento (mes, año, título, fecha …)","Search document (month, year, title, date …)","Cerca documento (mese, anno, titolo, data …)")}`}/>
      {tab==="payslips"&&(
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          <div style={{color:CP.textSecondary,fontSize:12}}>ℹ️ {L("Am Ende jedes Monats erscheint hier die neue Lohnabrechnung mit dem Arbeitsrapport. Öffnen → «Herunterladen» → drucken oder als PDF speichern.","Al final de cada mes aparece aquí tu nueva nómina con la hoja mensual. Ábrela → «Descargar» → imprime o guarda como PDF.","At the end of each month your new payslip and work sheet appear here. Open → «Download» → print or save as PDF.","Alla fine di ogni mese qui compare la nuova busta paga con il rapporto. Apri → «Scarica» → stampa o salva in PDF.")}</div>
          {months.length===0&&<CPCard style={{textAlign:"center",padding:28}}><div style={{fontSize:40}}>🗓️</div><div style={{color:CP.textSecondary,marginTop:8}}>{L("Noch keine abgeschlossenen Monate.","Todavía no hay meses cerrados.","No completed months yet.","Ancora nessun mese chiuso.")}</div></CPCard>}
          {months.filter(({ms})=>matchSearch(docSearch,`${ms}-01`,["DE","ES","EN","IT"].map(l=>MONTH_NAMES[l][Number(ms.slice(5,7))-1]).join(" "))).map(({m,y,ms,current})=>{ const sp=sentDoc("payslip",ms), sw=sentDoc("worksheet",ms); return (
            <CPCard key={`${y}-${m}`} style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,flexWrap:"wrap"}}>
              <div style={{display:"flex",alignItems:"center",gap:12}}>
                <div style={{fontSize:28}}>💵</div>
                <div>
                  <div style={{color:CP.textPrimary,fontWeight:700,fontSize:15}}>{monthNames[m-1]} {y}</div>
                  <div style={{color:CP.textTertiary,fontSize:12}}>{current?L("Laufender Monat (nur Admin)","Mes en curso (solo administrador)","Current month (admin only)","Mese in corso (solo admin)"):L("Abgeschlossen","Mes cerrado","Closed","Chiuso")}</div>
                  {(sp||sw)&&<div style={{color:"#69DB7C",fontSize:12,fontWeight:600}}>✅ {isAdmin?L("An Mitarbeiter gesendet","Enviado al empleado","Sent to employee","Inviato al dipendente"):L("Offizielles Dokument der Firma","Documento oficial de la empresa","Official company document","Documento ufficiale dell'azienda")} {fmtDate((sp||sw).created_at)}</div>}
                </div>
              </div>
              <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                <CPBtn size="sm" variant="success" onClick={()=>(!isAdmin&&sp)?openFile(sp,"open"):openPayslip(m,y)}>{busy===`p${y}${m}`||busy===sp?.id?"⏳":"📄"} {L("Lohnabrechnung","Nómina","Payslip","Busta paga")}</CPBtn>
                <CPBtn size="sm" variant="secondary" onClick={()=>(!isAdmin&&sw)?openFile(sw,"open"):setWorksheet({m,y})}>📋 {L("Arbeitsrapport","Hoja mensual","Work sheet","Rapporto")}</CPBtn>
              </div>
            </CPCard>
          );})}
        </div>
      )}

      {tab==="contracts"&&(docs||[]).filter(d=>d.category==="contract_sent"&&d.employee_id===emp.id&&matchSearch(docSearch,d.title,d.created_at)).map(d=>(
        <CPCard key={d.id} style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,flexWrap:"wrap",marginBottom:10,border:"1px solid rgba(47,158,68,0.35)"}}>
          <div style={{display:"flex",alignItems:"center",gap:12}}>
            <div style={{fontSize:28}}>📝</div>
            <div>
              <div style={{color:CP.textPrimary,fontWeight:700,fontSize:15}}>{d.title}</div>
              <div style={{color:"#69DB7C",fontSize:12,fontWeight:600}}>✅ {L("Von der Firma gesendet","Enviado por la empresa","Sent by the company","Inviato dall'azienda")} {fmtDate(d.created_at)}</div>
            </div>
          </div>
          <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
            <CPBtn size="sm" variant="success" onClick={()=>openFile(d,"open")}>{busy===d.id?"⏳":"👁️"} {L("Öffnen / Drucken","Abrir / Imprimir","Open / Print","Apri / Stampa")}</CPBtn>
            <CPBtn size="sm" variant="secondary" onClick={()=>openFile(d,"download")}>⬇️ {L("Herunterladen","Descargar","Download","Scarica")}</CPBtn>
            {isAdmin&&<CPBtn size="sm" variant="danger" onClick={()=>delDoc(d)}>🗑️</CPBtn>}
          </div>
        </CPCard>
      ))}
      {tab==="contracts"&&(
        <ContractsApp t={t} lang={lang} clients={clients||[]} employees={employees} companySettings={companySettings} notify={notify}
          onBack={onBack} currentUser={currentUser} contracts={contracts||[]} setContracts={()=>{}} embedded viewAsId={emp.id}/>
      )}

      {tab==="other"&&(
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {isAdmin&&!upload&&<CPBtn onClick={()=>setUpload({category:"other",title:"",forAll:false,file:null})}>⬆️ {L("Dokument hochladen","Subir documento","Upload document","Carica documento")}</CPBtn>}
          {isAdmin&&upload&&(
            <CPCard>
              <div style={{display:"flex",flexDirection:"column",gap:10}}>
                <CPField label={L("Datei (PDF, Bild, Word – max. 5 MB)","Archivo (PDF, imagen, Word – máx. 5 MB)","File (PDF, image, Word – max 5 MB)","File (PDF, immagine, Word – max 5 MB)")}>
                  <input type="file" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.xls,.xlsx,.txt" onChange={e=>{const f=e.target.files?.[0]||null; setUpload(u=>({...u,file:f,title:u.title||(f?f.name.replace(/\.[^.]+$/,""):"")}));}} style={{color:CP.textPrimary}}/>
                </CPField>
                <CPField label={L("Titel","Título","Title","Titolo")}><CPInput value={upload.title} onChange={e=>setUpload(u=>({...u,title:e.target.value}))}/></CPField>
                <CPField label={L("Art","Tipo","Type","Tipo")}>
                  <CPSelect value={upload.category} onChange={e=>setUpload(u=>({...u,category:e.target.value}))}>
                    {DOC_CATS.map(c=><option key={c.id} value={c.id}>{c.icon} {c.L[langIdx]}</option>)}
                  </CPSelect>
                </CPField>
                <label style={{color:CP.textSecondary,fontSize:13,display:"flex",gap:8,alignItems:"center"}}>
                  <input type="checkbox" checked={upload.forAll} onChange={e=>setUpload(u=>({...u,forAll:e.target.checked}))}/>
                  {L("Für alle Mitarbeiter","Para todos los empleados","For all employees","Per tutti i dipendenti")} {upload.forAll?"":`(${L("nur","solo","only","solo")} ${emp.name})`}
                </label>
                <div style={{display:"flex",gap:8}}>
                  <CPBtn variant="success" onClick={doUpload}>{busy==="upload"?"⏳":"✅"} {L("Hochladen","Subir","Upload","Carica")}</CPBtn>
                  <CPBtn variant="secondary" onClick={()=>setUpload(null)}>{t.cancel||L("Abbrechen","Cancelar","Cancel","Annulla")}</CPBtn>
                </div>
              </div>
            </CPCard>
          )}
          {docs===null&&<div style={{color:CP.textSecondary}}>⏳ {L("Laden…","Cargando…","Loading…","Caricamento…")}</div>}
          {docs&&docs.filter(d=>!SENT_CATS.includes(d.category)).length===0&&<CPCard style={{textAlign:"center",padding:28}}><div style={{fontSize:40}}>📂</div><div style={{color:CP.textSecondary,marginTop:8}}>{L("Noch keine Dokumente.","Todavía no hay documentos.","No documents yet.","Ancora nessun documento.")}</div></CPCard>}
          {(docs||[]).filter(d=>!SENT_CATS.includes(d.category)&&matchSearch(docSearch,d.title,d.file_name,d.created_at)).map(d=>{ const c=catOf(d.category); return (
            <CPCard key={d.id} style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,flexWrap:"wrap"}}>
              <div style={{display:"flex",alignItems:"center",gap:12,minWidth:0}}>
                <div style={{fontSize:28}}>{c.icon}</div>
                <div style={{minWidth:0}}>
                  <div style={{color:CP.textPrimary,fontWeight:700,fontSize:15,wordBreak:"break-word"}}>{d.title}</div>
                  <div style={{color:CP.textTertiary,fontSize:12}}>{c.L[langIdx]} · {fmtDate(d.created_at)} · {fmtSize(d.size_bytes)}{!d.employee_id?` · ${L("Für alle","Para todos","For all","Per tutti")}`:""}</div>
                </div>
              </div>
              <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                <CPBtn size="sm" variant="success" onClick={()=>openFile(d,"open")}>{busy===d.id?"⏳":"👁️"} {L("Öffnen / Drucken","Abrir / Imprimir","Open / Print","Apri / Stampa")}</CPBtn>
                <CPBtn size="sm" variant="secondary" onClick={()=>openFile(d,"download")}>⬇️ {L("Herunterladen","Descargar","Download","Scarica")}</CPBtn>
                {isAdmin&&<CPBtn size="sm" variant="danger" onClick={()=>delDoc(d)}>🗑️</CPBtn>}
              </div>
            </CPCard>
          );})}
        </div>
      )}
      </>)}

      {payslipData&&(
        <PayslipModal canSend={isAdmin} emp={payslipData.emp} pay={payslipData.pay} month={payslipData.month} year={payslipData.year}
          lang={lang} t={t} onClose={()=>setPayslipData(null)} companySettings={companySettings}/>
      )}
      {worksheet&&emp&&(
        <WorkSheetModal canSend={isAdmin} emp={emp} month={worksheet.m} year={worksheet.y} jobs={jobs} clients={clients||[]}
          lang={lang} companySettings={companySettings} onClose={()=>setWorksheet(null)}/>
      )}
    </CPScreen>
  );
}

function EmbedOrScreen({embedded,children,...rest}){ return embedded ? <>{children}</> : <CPScreen {...rest}>{children}</CPScreen>; }

function ContractsApp({t,lang,clients,employees,companySettings,notify,onBack,currentUser,contracts,setContracts,embedded,viewAsId}){
  const L = makeL(lang);
  const cs = companySettings||{name:"Patjac Reinigung Garten & Services",street:"Industriestrasse",number:"14",postalCode:"8004",city:"Zürich",phone:"+41 44 123 4567",email:"info@patjacservices.ch",uid:"CHE-123.456.789",iban:"CH56 0483 5012 3456 7800 9"};
  const [modal,setModal] = useState(null); // null | "form" | "preview" | "sign"
  const [filter,setFilter] = useState("all"); // all | client | employee
  const [selContract,setSelContract] = useState(null);
  const [form,setForm] = useState({});
  const [deleteContractId,setDeleteContractId] = useState(null);

  const deleteContract = (id) => {
    setContracts(prev=>prev.filter(c=>c.id!==id));
    setDeleteContractId(null);
    notify(L("Vertrag gelöscht","Contrato eliminado","Contract deleted","Contratto eliminato"),"success");
  };

  const [cSearch,setCSearch] = useState(()=>takePendingSearch("contracts"));
  const filtered = contracts.filter(c=>filter==="all"?true:c.type===filter)
    .filter(c=>matchSearch(cSearch,c.entityName,c.startDate,c.contractDate,c.endDate,c.status,c.notes));

  const statusColor = (s) => s==="signed"?"green":s==="active"?"blue":s==="expired"?"red":s==="terminated"?"red":"gray";
  const statusLabel = (s) => s==="signed"?t.contractSigned:s==="active"?t.contractActive:s==="expired"?t.contractExpired:s==="terminated"?t.contractTerminated:t.contractDraft;
  const typeLabel = (tp) => tp==="client"?t.clientContract:t.employeeContract;
  const typeIcon = (tp) => tp==="client"?"👥":"👤";

  const openNew = (tp) => {
    const today = ymd(new Date());
    const trialEnd = new Date(); trialEnd.setMonth(trialEnd.getMonth()+3);
    setForm({
      type:tp,
      clientId: tp==="client"?(clients[0]?.id||""):"",
      employeeId: tp==="employee"?(employees[0]?.id||""):"",
      contractDate: today,
      startDate: today,
      endDate:"",
      termType:"indefinite",
      salary: tp==="employee"?(employees[0]?.fixedSalary||employees[0]?.hourlyRate||0):"",
      salaryType: tp==="employee"?(employees[0]?.type==="hourly"?"hourly":"monthly"):"hourly",
      hours: tp==="employee"?"42":"",
      noticePeriod: tp==="employee"?L("1 Monat","1 mes","1 month","1 mese"):L("30 Tage","30 días","30 days","30 giorni"),
      trialPeriod: tp==="employee"?ymd(trialEnd):"",
      serviceType: tp==="client"?"cleaning":"",
      frequency: tp==="client"?"weekly":"",
      price: tp==="client"?(clients[0]?.price||""):"",
      notes:"",
      status:"draft",
      id: 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => { const r = Math.random()*16|0; return (c==='x'?r:(r&0x3|0x8)).toString(16); }),
    });
    setModal("form");
  };

  const save = () => {
    const entity = form.type==="client"
      ? clients.find(c=>c.id===form.clientId)
      : employees.find(e=>e.id===form.employeeId);
    const c = {...form, entityName: entity?.name||"", createdAt: new Date().toISOString()};
    // Clean empty UUID fields to avoid Supabase errors
    if(!c.clientId) delete c.clientId;
    if(!c.employeeId) delete c.employeeId;
    setContracts(prev=>[...prev.filter(x=>x.id!==c.id), c]);
    notify(t.success,"success");
    setModal(null);
  };

  // ── BUILD CONTRACT HTML ─────────────────────────────────────
  const buildContractHTML = (c) => {
    const entity = c.type==="client" ? clients.find(x=>x.id===c.clientId) : employees.find(x=>x.id===c.employeeId);
    const isEmp = c.type==="employee";
    const today = fmtDate(new Date(),lang);

    const header = isEmp
      ? L("ARBEITSVERTRAG","CONTRATO LABORAL","EMPLOYMENT CONTRACT","CONTRATTO DI LAVORO")
      : L("DIENSTLEISTUNGSVERTRAG","CONTRATO DE SERVICIOS","SERVICE CONTRACT","CONTRATTO DI SERVIZI");

    const art1_title = isEmp ? L("Art. 1 – Vertragsparteien","Art. 1 – Partes contratantes","Art. 1 – Contracting Parties","Art. 1 – Parti contraenti") : L("Art. 1 – Vertragsparteien","Art. 1 – Partes contratantes","Art. 1 – Contracting Parties","Art. 1 – Parti contraenti");
    const art1_body = isEmp
      ? L(
          `Arbeitgeber: ${cs.name}, ${cs.street} ${cs.number}, ${cs.postalCode} ${cs.city}, UID: ${cs.uid}\n\nArbeitnehmer/in: ${entity?.name||""}, ${entity?.street||""} ${entity?.number||""}, ${entity?.postalCode||""} ${entity?.city||""}\nAHV-Nr.: ${entity?.ahv||"—"}`,
          `Empleador: ${cs.name}, ${cs.street} ${cs.number}, ${cs.postalCode} ${cs.city}, UID: ${cs.uid}\n\nEmpleado/a: ${entity?.name||""}, ${entity?.street||""} ${entity?.number||""}, ${entity?.postalCode||""} ${entity?.city||""}\nNúm. AVS: ${entity?.ahv||"—"}`,
          `Employer: ${cs.name}, ${cs.street} ${cs.number}, ${cs.postalCode} ${cs.city}, UID: ${cs.uid}\n\nEmployee: ${entity?.name||""}, ${entity?.street||""} ${entity?.number||""}, ${entity?.postalCode||""} ${entity?.city||""}\nAHV No.: ${entity?.ahv||"—"}`,
          `Datore di lavoro: ${cs.name}, ${cs.street} ${cs.number}, ${cs.postalCode} ${cs.city}, UID: ${cs.uid}\n\nDipendente: ${entity?.name||""}, ${entity?.street||""} ${entity?.number||""}, ${entity?.postalCode||""} ${entity?.city||""}\nN. AVS: ${entity?.ahv||"—"}`
        )
      : L(
          `Auftragnehmer: ${cs.name}, ${cs.street} ${cs.number}, ${cs.postalCode} ${cs.city}, UID: ${cs.uid}\n\nAuftraggeber/in: ${entity?.name||""}, ${entity?.street||""} ${entity?.number||""}, ${entity?.postalCode||""} ${entity?.city||""}`,
          `Prestador: ${cs.name}, ${cs.street} ${cs.number}, ${cs.postalCode} ${cs.city}, UID: ${cs.uid}\n\nCliente: ${entity?.name||""}, ${entity?.street||""} ${entity?.number||""}, ${entity?.postalCode||""} ${entity?.city||""}`,
          `Service provider: ${cs.name}, ${cs.street} ${cs.number}, ${cs.postalCode} ${cs.city}, UID: ${cs.uid}\n\nClient: ${entity?.name||""}, ${entity?.street||""} ${entity?.number||""}, ${entity?.postalCode||""} ${entity?.city||""}`,
          `Fornitore: ${cs.name}, ${cs.street} ${cs.number}, ${cs.postalCode} ${cs.city}, UID: ${cs.uid}\n\nCliente: ${entity?.name||""}, ${entity?.street||""} ${entity?.number||""}, ${entity?.postalCode||""} ${entity?.city||""}`
        );

    const articles = isEmp ? [
      [L("Art. 2 – Beginn und Dauer","Art. 2 – Inicio y duración","Art. 2 – Start and Duration","Art. 2 – Inizio e durata"),
       L(
        `Beginn: ${fmtDate(c.startDate)}\nBefristung: ${c.termType==="indefinite"?"Unbefristet (Art. 334 OR)":"Befristet bis "+fmtDate(c.endDate)}\nProbezeit: ${fmtDate(c.trialPeriod)||"3 Monate (Art. 335b OR)"}\nKündigungsfrist nach Probezeit: ${c.noticePeriod}`,
        `Inicio: ${fmtDate(c.startDate)}\nDuración: ${c.termType==="indefinite"?"Indefinida (Art. 334 CO)":"Plazo fijo hasta "+fmtDate(c.endDate)}\nPeríodo de prueba: ${fmtDate(c.trialPeriod)||"3 meses (Art. 335b CO)"}\nPreaviso tras prueba: ${c.noticePeriod}`,
        `Start: ${fmtDate(c.startDate)}\nTerm: ${c.termType==="indefinite"?"Indefinite (Art. 334 CO)":"Fixed-term until "+fmtDate(c.endDate)}\nTrial period: ${fmtDate(c.trialPeriod)||"3 months (Art. 335b CO)"}\nNotice after trial: ${c.noticePeriod}`,
        `Inizio: ${fmtDate(c.startDate)}\nDurata: ${c.termType==="indefinite"?"Indeterminata (Art. 334 CO)":"Determinata fino al "+fmtDate(c.endDate)}\nPeriodo di prova: ${fmtDate(c.trialPeriod)||"3 mesi (Art. 335b CO)"}\nPreavviso dopo prova: ${c.noticePeriod}`
      )],
      [L("Art. 3 – Lohn und Arbeitszeit","Art. 3 – Salario y jornada","Art. 3 – Salary and Working Hours","Art. 3 – Salario e orario di lavoro"),
       L(
        `Lohn: CHF ${c.salary} ${c.salaryType==="hourly"?"/Stunde":"/Monat"} brutto\nGesetzliche Abzüge gemäss AHV/ALV/NBUV/BVG/KTG\nWöchentliche Arbeitszeit: ${c.hours||42} Stunden\nÜberstunden nach Art. 321c OR\nLohnzahlung: Monatlich am 25. des Monats auf IBAN: ${cs.iban}`,
        `Salario: CHF ${c.salary} ${c.salaryType==="hourly"?"/hora":"/mes"} bruto\nDeducciones legales según AVS/AD/AINF/LPP/IS\nJornada semanal: ${c.hours||42} horas\nHoras extra según Art. 321c CO\nPago: mensualmente el día 25 en IBAN: ${cs.iban}`,
        `Salary: CHF ${c.salary} ${c.salaryType==="hourly"?"/hour":"/month"} gross\nStatutory deductions per AHV/ALV/NBUV/BVG/KTG\nWeekly working hours: ${c.hours||42}\nOvertime per Art. 321c CO\nPayment: monthly on the 25th to IBAN: ${cs.iban}`,
        `Stipendio: CHF ${c.salary} ${c.salaryType==="hourly"?"/ora":"/mese"} lordo\nDeduzioni legali AVS/AD/AINF/LPP/IS\nOre settimanali: ${c.hours||42}\nStraordinari Art. 321c CO\nPagamento: mensile il 25 su IBAN: ${cs.iban}`
      )],
      [L("Art. 4 – Sorgfalts- und Treuepflicht","Art. 4 – Deber de diligencia y lealtad","Art. 4 – Duty of Care and Loyalty","Art. 4 – Dovere di diligenza e fedeltà"),
       L(
        "Der/Die Arbeitnehmer/in ist verpflichtet, die ihm/ihr übertragenen Aufgaben sorgfältig auszuführen und die berechtigten Interessen des Arbeitgebers in guten Treuen zu wahren (Art. 321a OR). Betriebsgeheimnisse sind zu wahren.",
        "El/La empleado/a está obligado/a a realizar sus tareas con diligencia y a salvaguardar de buena fe los intereses del empleador (Art. 321a CO). Debe guardar secreto profesional.",
        "The employee is obliged to perform assigned tasks diligently and to safeguard the employer's legitimate interests in good faith (Art. 321a CO). Business secrets must be maintained.",
        "Il/La dipendente è tenuto/a a svolgere i compiti assegnati con diligenza e a tutelare in buona fede gli interessi legittimi del datore di lavoro (Art. 321a CO). I segreti aziendali devono essere mantenuti."
      )],
      [L("Art. 5 – Ferien","Art. 5 – Vacaciones","Art. 5 – Annual Leave","Art. 5 – Ferie"),
       L(
        "Der/Die Arbeitnehmer/in hat Anspruch auf 4 Wochen bezahlte Ferien pro Jahr (Art. 329a OR; GAV Art. 15). Bis zum 20. Altersjahr sowie ab 50 Jahren mit mind. 5 Dienstjahren gelten 5 Wochen. Die Ferientermine werden in Absprache mit dem Arbeitgeber festgelegt.",
        "El/La empleado/a tiene derecho a 4 semanas de vacaciones pagadas al año (Art. 329a CO; GAV Art. 15). Hasta los 20 años, y desde los 50 con al menos 5 años de servicio, corresponden 5 semanas. Las fechas se acuerdan con el empleador.",
        "The employee is entitled to 4 weeks of paid annual leave per year (Art. 329a CO; GAV Art. 15). Up to age 20, and from age 50 with at least 5 years of service, 5 weeks apply. Leave dates are agreed with the employer.",
        "Il/La dipendente ha diritto a 4 settimane di ferie pagate all'anno (Art. 329a CO; CCL Art. 15). Fino a 20 anni e dai 50 anni con almeno 5 anni di servizio si applicano 5 settimane. Le date delle ferie vengono concordate con il datore di lavoro."
      )],
      [L("Art. 6 – Krankheit und Unfall","Art. 6 – Enfermedad y accidente","Art. 6 – Illness and Accident","Art. 6 – Malattia e infortunio"),
       L(
        "Im Krankheitsfall gilt das gesetzliche Lohnfortzahlungsrecht gemäss Art. 324a OR. Der Arbeitnehmer ist versichert gemäss UVG (SUVA) und KTG. Unfälle sind sofort zu melden.",
        "En caso de enfermedad se aplica el derecho legal a la continuación del salario según Art. 324a CO. El empleado está asegurado según LAA (SUVA) y seguro de pérdida de salario. Los accidentes deben comunicarse de inmediato.",
        "In case of illness, the statutory continued salary payment right applies per Art. 324a CO. The employee is insured under UVG (SUVA) and daily sickness insurance. Accidents must be reported immediately.",
        "In caso di malattia si applica il diritto legale alla continuazione del salario Art. 324a CO. Il dipendente è assicurato secondo LAINF (SUVA) e IS. Gli infortuni devono essere comunicati immediatamente."
      )],
      [L("Art. 7 – Anwendbares Recht","Art. 7 – Derecho aplicable","Art. 7 – Applicable Law","Art. 7 – Diritto applicabile"),
       L(
        "Dieser Vertrag untersteht dem schweizerischen Recht (OR, ArG). Gerichtsstand ist Zürich, Schweiz. Für allfällige Streitigkeiten gilt das Schweizer Obligationenrecht.",
        "Este contrato se rige por el derecho suizo (CO, LTr). La jurisdicción es Zúrich, Suiza. Para posibles disputas se aplica el Código de Obligaciones suizo.",
        "This contract is governed by Swiss law (CO, LArT). Jurisdiction is Zurich, Switzerland. Swiss Code of Obligations applies to any disputes.",
        "Il presente contratto è soggetto al diritto svizzero (CO, LL). Il foro competente è Zurigo, Svizzera."
      )],
    ] : [
      [L("Art. 2 – Leistungsbeschreibung","Art. 2 – Descripción del servicio","Art. 2 – Service Description","Art. 2 – Descrizione del servizio"),
       L(
        `${L("Dienstleistungsart","Tipo de servicio","Service type","Tipo di servizio")}: ${c.serviceType==="cleaning"?L("Reinigungsarbeiten","Limpieza","Cleaning","Pulizie"):c.serviceType==="gardening"?L("Gartenarbeiten","Jardinería","Gardening","Giardinaggio"):L("Dienstleistungen","Servicios","Services","Servizi")}\n${L("Häufigkeit","Frecuencia","Frequency","Frequenza")}: ${c.frequency==="weekly"?L("Wöchentlich","Semanal","Weekly","Settimanale"):c.frequency==="monthly"?L("Monatlich","Mensual","Monthly","Mensile"):c.frequency==="daily"?L("Täglich","Diario","Daily","Quotidiano"):L("Nach Vereinbarung","A convenir","As agreed","Da concordare")}\n${L("Start","Inicio","Start","Inizio")}: ${fmtDate(c.startDate)}${c.endDate?" | "+L("Ende","Fin","End","Fine")+": "+fmtDate(c.endDate):""}`,
        `Tipo de servicio: ${c.serviceType==="cleaning"?"Limpieza":c.serviceType==="gardening"?"Jardinería":"Servicios"}\nFrecuencia: ${c.frequency==="weekly"?"Semanal":c.frequency==="monthly"?"Mensual":c.frequency==="daily"?"Diario":"Por acuerdo"}\nInicio: ${fmtDate(c.startDate)}${c.endDate?" | Fin: "+fmtDate(c.endDate):""}`,
        `Service type: ${c.serviceType==="cleaning"?"Cleaning":c.serviceType==="gardening"?"Gardening":"Services"}\nFrequency: ${c.frequency==="weekly"?"Weekly":c.frequency==="monthly"?"Monthly":c.frequency==="daily"?"Daily":"By agreement"}\nStart: ${fmtDate(c.startDate)}${c.endDate?" | End: "+fmtDate(c.endDate):""}`,
        `Tipo servizio: ${c.serviceType==="cleaning"?"Pulizie":c.serviceType==="gardening"?"Giardinaggio":"Servizi"}\nFrequenza: ${c.frequency==="weekly"?"Settimanale":c.frequency==="monthly"?"Mensile":c.frequency==="daily"?"Quotidiano":"Su accordo"}\nInizio: ${fmtDate(c.startDate)}${c.endDate?" | Fine: "+fmtDate(c.endDate):""}`
      )],
      [L("Art. 3 – Vergütung","Art. 3 – Remuneración","Art. 3 – Remuneration","Art. 3 – Remunerazione"),
       L(
        `Preis: CHF ${c.price} ${c.salaryType==="hourly"?"/Stunde":"/Monat"}\nZahlungsziel: 30 Tage nach Rechnungsstellung\nZahlungsart: Banküberweisung auf IBAN: ${cs.iban}\nMWST: Preise ohne MWST (Patjac ist nicht MWST-pflichtig)`,
        `Precio: CHF ${c.price} ${c.salaryType==="hourly"?"/hora":"/mes"}\nPlazo de pago: 30 días desde la factura\nForma de pago: Transferencia bancaria a IBAN: ${cs.iban}\nIVA: precios sin IVA (Patjac no está sujeta a IVA)`,
        `Price: CHF ${c.price} ${c.salaryType==="hourly"?"/hour":"/month"}\nPayment term: 30 days from invoice\nPayment method: Bank transfer to IBAN: ${cs.iban}\nVAT: prices without VAT (Patjac is not VAT-registered)`,
        `Prezzo: CHF ${c.price} ${c.salaryType==="hourly"?"/ora":"/mese"}\nTermine pagamento: 30 giorni dalla fattura\nModalità pagamento: Bonifico bancario a IBAN: ${cs.iban}\nIVA: prezzi senza IVA (Patjac non è assoggettata all'IVA)`
      )],
      [L("Art. 4 – Haftung","Art. 4 – Responsabilidad","Art. 4 – Liability","Art. 4 – Responsabilità"),
       L(
        "Der Auftragnehmer haftet für Schäden, die durch nachweisliche Fahrlässigkeit bei der Ausführung der Dienstleistungen entstehen. Der Auftraggeber ist für die Zugänglichkeit der Räumlichkeiten und die Sicherheit der Umgebung verantwortlich.",
        "El prestador responde por daños causados por negligencia comprobable en la prestación de servicios. El cliente es responsable de la accesibilidad de los locales y la seguridad del entorno.",
        "The service provider is liable for damages caused by proven negligence in carrying out the services. The client is responsible for accessibility of premises and safety of the environment.",
        "Il fornitore risponde dei danni causati da negligenza comprovabile nell'esecuzione dei servizi. Il cliente è responsabile dell'accessibilità dei locali e della sicurezza dell'ambiente."
      )],
      [L("Art. 5 – Kündigung","Art. 5 – Rescisión","Art. 5 – Termination","Art. 5 – Rescissione"),
       L(
        `Kündigungsfrist: ${c.noticePeriod||"30 Tage"}\nDer Vertrag kann von beiden Parteien schriftlich gekündigt werden. Bei wichtigen Gründen ist eine fristlose Kündigung möglich gemäss Art. 337 OR.`,
        `Preaviso: ${c.noticePeriod||"30 días"}\nEl contrato puede rescindirse por escrito por ambas partes. Por causas importantes cabe la rescisión inmediata según Art. 337 CO.`,
        `Notice period: ${c.noticePeriod||"30 days"}\nThe contract may be terminated in writing by either party. Immediate termination is possible for good cause per Art. 337 CO.`,
        `Preavviso: ${c.noticePeriod||"30 giorni"}\nIl contratto può essere rescisso per iscritto da entrambe le parti. La rescissione immediata è possibile per giusta causa Art. 337 CO.`
      )],
      [L("Art. 6 – Datenschutz","Art. 6 – Protección de datos","Art. 6 – Data Protection","Art. 6 – Protezione dei dati"),
       L(
        "Die erhobenen Personendaten werden ausschliesslich zur Vertragserfüllung verwendet und gemäss Bundesgesetz über den Datenschutz (DSG, SR 235.1) behandelt. Daten werden nicht an Dritte weitergegeben.",
        "Los datos personales recopilados se usan exclusivamente para el cumplimiento del contrato y se tratan según la Ley Federal de Protección de Datos (LPD). No se comparten con terceros.",
        "Personal data collected is used exclusively for contract fulfilment and processed in accordance with the Federal Act on Data Protection (FADP). Data is not shared with third parties.",
        "I dati personali raccolti sono utilizzati esclusivamente per l'esecuzione del contratto e trattati ai sensi della Legge federale sulla protezione dei dati (LPD). I dati non vengono condivisi con terzi."
      )],
      [L("Art. 7 – Anwendbares Recht","Art. 7 – Derecho aplicable","Art. 7 – Applicable Law","Art. 7 – Diritto applicabile"),
       L(
        "Dieser Vertrag untersteht dem schweizerischen Recht. Gerichtsstand ist Zürich, Schweiz.",
        "Este contrato se rige por el derecho suizo. La jurisdicción es Zúrich, Suiza.",
        "This contract is governed by Swiss law. Jurisdiction is Zurich, Switzerland.",
        "Il presente contratto è soggetto al diritto svizzero. Foro competente: Zurigo, Svizzera."
      )],
    ];

    const rows = articles.map(([title,body])=>`
      <div style="margin-bottom:20px">
        <div style="font-weight:700;font-size:13px;color:#1C7ED6;margin-bottom:8px;padding-bottom:4px;border-bottom:1px solid #dce5f0">${title}</div>
        <div style="font-size:12px;color:#333;line-height:1.7;white-space:pre-line">${body}</div>
      </div>`).join("");

    return `<!DOCTYPE html><html lang="${lang.toLowerCase()}"><head>
<meta charset="UTF-8">
<title>${header} – ${entity?.name||""}</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:Arial,Helvetica,sans-serif;background:#fff;color:#000;padding:40px;font-size:12px;line-height:1.6;max-width:800px;margin:0 auto}
.header{display:flex;justify-content:space-between;align-items:flex-start;padding-bottom:16px;border-bottom:3px solid #1C7ED6;margin-bottom:24px}
.co-logo{font-size:20px;font-weight:700;color:#1C7ED6}
.co-sub{font-size:11px;color:#555;margin-top:3px}
.doc-title{font-size:22px;font-weight:700;color:#1C7ED6;text-transform:uppercase;text-align:right}
.badge-ch{background:#C92A2A;color:#fff;font-size:10px;font-weight:700;padding:3px 10px;border-radius:4px;display:inline-block;margin-top:6px}
.contract-ref{font-size:11px;color:#777;margin-top:4px;text-align:right}
.sig-section{display:grid;grid-template-columns:1fr 1fr;gap:40px;margin-top:40px;padding-top:20px;border-top:2px solid #1C7ED6}
.sig-box{text-align:center}
.sig-line{border-top:1px solid #333;margin-top:50px;padding-top:8px;font-size:11px;color:#555}
.notes-box{background:#f8f9fa;border:1px solid #dce5f0;border-radius:6px;padding:12px 16px;margin:16px 0;font-size:11px;color:#555}
.footer-bar{border-top:1px solid #e5e7eb;margin-top:30px;padding-top:10px;display:flex;justify-content:space-between;font-size:10px;color:#9ca3af}
.print-hint{background:#1C7ED6;color:#fff;text-align:center;padding:10px;border-radius:6px;margin-bottom:20px;font-size:12px}
@media print{.print-hint{display:none}body{padding:20px}@page{margin:2cm;size:A4 portrait}}
</style>
</head><body>
<div class="print-hint">${L("💡 Drucken → Als PDF speichern für offizielles PDF","💡 Imprimir → Guardar como PDF para PDF oficial","💡 Print → Save as PDF for official PDF","💡 Stampa → Salva come PDF per PDF ufficiale")}</div>
<div class="header">
  <div>
    <div class="co-logo"><img src="${PATJAC_LOGO}" alt="Patjac" style="height:56px;width:auto;object-fit:contain;display:block;margin-bottom:4px"/></div>
    <div class="co-sub">${cs.street} ${cs.number}, ${cs.postalCode} ${cs.city}</div>
    <div class="co-sub">${cs.phone} | ${cs.email}</div>
    <div class="co-sub">UID: ${cs.uid}</div>
  </div>
  <div>
    <div class="doc-title">${header}</div>
    <div class="contract-ref">${L("Ref.","Ref.","Ref.","Rif.")} ${c.id?.toUpperCase()||""} | ${fmtDate(c.contractDate)}</div>
    <span class="badge-ch">🇨🇭 ${L("Schweizer Recht · OR","Derecho suizo · CO","Swiss Law · CO","Diritto svizzero · CO")}</span>
  </div>
</div>
${rows}
${c.notes?`<div class="notes-box"><strong>${L("Zusätzliche Vereinbarungen","Acuerdos adicionales","Additional agreements","Accordi aggiuntivi")}:</strong><br>${c.notes}</div>`:""}
<div class="sig-section">
  <div class="sig-box">
    <div class="sig-line">${L("Ort, Datum","Lugar, fecha","Place, date","Luogo, data")}: ______________________</div>
    <div class="sig-line" style="margin-top:20px">${cs.city}, ________________</div>
    <div style="font-size:11px;font-weight:700;margin-top:10px">${cs.name}</div>
    <div style="font-size:10px;color:#555">${L("Unterschrift Arbeitgeber / Geschäftsführer","Firma del empleador / gerente","Employer / Manager signature","Firma datore di lavoro / responsabile")}</div>
  </div>
  <div class="sig-box">
    <div class="sig-line">${L("Ort, Datum","Lugar, fecha","Place, date","Luogo, data")}: ______________________</div>
    <div class="sig-line" style="margin-top:20px">${entity?.city||""}, ________________</div>
    <div style="font-size:11px;font-weight:700;margin-top:10px">${entity?.name||""}</div>
    <div style="font-size:10px;color:#555">${isEmp?L("Unterschrift Arbeitnehmer/in","Firma empleado/a","Employee signature","Firma dipendente"):L("Unterschrift Auftraggeber/in","Firma cliente","Client signature","Firma cliente")}</div>
  </div>
</div>
${buildRightsAnnexHTML(isEmp?ANNEX_EMPLOYEE:ANNEX_CLIENT, lang, cs.name, entity?.name||"")}
<div class="footer-bar">
  <span>${cs.name} | ${cs.uid} | ${L("Erstellt am","Generado el","Generated on","Generato il")} ${fmtDate(new Date(),lang)}</span>
  <span>${L("inkl. Anhang Rechte und Pflichten","incl. anexo de derechos y obligaciones","incl. annex on rights and obligations","incl. allegato diritti e obblighi")}</span>
</div>
</body></html>`;
  };

  const isAdmin = currentUser?.role==="admin";

  const downloadContract = (c) => {
    const entity = c.type==="client" ? clients.find(x=>x.id===c.clientId) : employees.find(x=>x.id===c.employeeId);
    const html = buildContractHTML(c);
    const fname = `${c.type==="client"?L("Vertrag_Kunde","Contrato_Cliente","Contract_Client","Contratto_Cliente"):L("Arbeitsvertrag","Contrato_Laboral","Employment_Contract","Contratto_Lavoro")}_${(entity?.name||"").replace(/\s+/g,"_")}_${c.contractDate}.html`;
    try {
      const blob = new Blob([html],{type:"text/html;charset=utf-8"});
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href=url; a.download=fname; document.body.appendChild(a); a.click();
      setTimeout(()=>{document.body.removeChild(a);URL.revokeObjectURL(url);},3000);
    } catch(e){ notify(L("Fehler","Error","Error","Errore"),"error"); }
  };

  // ── EMPLOYEE VIEW — only their own contract ──────────────────
  if(!isAdmin || embedded){
    const viewId = viewAsId || currentUser?.id;
    const emp = employees.find(e=>e.id===viewId);
    const myContracts = contracts.filter(c=>c.type==="employee"&&c.employeeId===viewId);

    return (
      <EmbedOrScreen embedded={embedded} title={L("Mein Vertrag","Mi contrato","My Contract","Il mio contratto")} icon="📝" onBack={onBack} t={t}>
        {myContracts.length===0 ? (
          <CPCard style={{textAlign:"center",padding:"40px 20px"}}>
            <div style={{fontSize:48,marginBottom:12}}>📄</div>
            <div style={{color:CP.textPrimary,fontWeight:700,fontSize:16,marginBottom:8}}>
              {L("Kein Vertrag vorhanden","Sin contrato disponible","No contract available","Nessun contratto disponibile")}
            </div>
            <div style={{color:CP.textSecondary,fontSize:13,lineHeight:1.6}}>
              {L("Ihr Administrator hat noch keinen Arbeitsvertrag für Sie erstellt.","Su administrador aún no ha creado un contrato de trabajo para usted.","Your administrator has not yet created an employment contract for you.","Il suo amministratore non ha ancora creato un contratto di lavoro per lei.")}
            </div>
          </CPCard>
        ) : myContracts.map(c=>{
          const statusCol = statusColor(c.status);
          const html = buildContractHTML(c);
          return (
            <div key={c.id} style={{display:"flex",flexDirection:"column",gap:14}}>
              {/* Contract info card */}
              <CPCard style={{border:`2px solid ${statusCol==="green"?"rgba(47,158,68,0.4)":"rgba(28,126,214,0.3)"}`}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10}}>
                  <div>
                    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
                      <span style={{fontSize:24}}>👤</span>
                      <div>
                        <div style={{color:CP.textPrimary,fontWeight:700,fontSize:16}}>{emp?.name}</div>
                        <div style={{color:CP.textSecondary,fontSize:12}}>{t.employeeContract}</div>
                      </div>
                    </div>
                    <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:8}}>
                      <CPBadge text={statusLabel(c.status)} color={statusColor(c.status)}/>
                      <CPBadge text={c.termType==="indefinite"?L("Unbefristet","Indefinido","Indefinite","Indeterminato"):L("Befristet","Temporal","Fixed-term","Determinato")} color="gray"/>
                    </div>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"6px 20px",fontSize:12}}>
                      {[
                        [L("Vertragsdatum","Fecha contrato","Contract date","Data contratto"), fmtDate(c.contractDate)],
                        [L("Beginn","Inicio","Start","Inizio"), fmtDate(c.startDate)],
                        [c.endDate?L("Ende","Fin","End","Fine"):null, c.endDate?fmtDate(c.endDate):null],
                        [L("Probezeit","Período prueba","Trial period","Periodo prova"), fmtDate(c.trialPeriod)||"—"],
                        [L("Lohn","Salario","Salary","Stipendio"), `CHF ${Number(c.salary||0).toLocaleString("de-CH")}/${c.salaryType==="hourly"?L("Std.","h","h","h"):L("Monat","mes","month","mese")}`],
                        [L("Wochenstunden","Horas semanales","Weekly hours","Ore settimanali"), c.hours?`${c.hours}h`:"—"],
                        [L("Kündigungsfrist","Preaviso","Notice period","Preavviso"), c.noticePeriod||"—"],
                        [L("AHV-Nr.","N. AVS","AHV No.","N. AVS"), emp?.ahv||"—"],
                      ].filter(([l])=>l).map(([label,val])=>(
                        <div key={label}>
                          <div style={{color:CP.textSecondary,fontSize:11,marginBottom:2}}>{label}</div>
                          <div style={{color:CP.textPrimary,fontWeight:600}}>{val}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Download button */}
                  <div style={{display:"flex",flexDirection:"column",gap:8,alignItems:"flex-end"}}>
                    <button onClick={()=>downloadContract(c)} style={{
                      background:"linear-gradient(90deg,#0B7285,#2F9E44)",
                      border:"none",borderRadius:12,color:"#fff",
                      padding:"12px 20px",cursor:"pointer",
                      fontSize:13,fontWeight:700,fontFamily:CP.font,
                      display:"flex",alignItems:"center",gap:8,
                      boxShadow:"0 4px 16px rgba(11,114,133,0.4)",
                    }}>
                      ⬇️ {L("PDF herunterladen","Descargar PDF","Download PDF","Scarica PDF")}
                    </button>
                    <div style={{color:CP.textTertiary,fontSize:11,textAlign:"right",maxWidth:160,lineHeight:1.4}}>
                      {L("Öffnen → Drucken → Als PDF speichern","Abrir → Imprimir → Guardar como PDF","Open → Print → Save as PDF","Apri → Stampa → Salva come PDF")}
                    </div>
                  </div>
                </div>
              </CPCard>

              {/* Contract preview */}
              <CPCard style={{padding:0,overflow:"hidden"}}>
                <div style={{
                  background:"linear-gradient(90deg,rgba(11,114,133,0.2),rgba(47,158,68,0.1))",
                  padding:"10px 16px",borderBottom:"1px solid rgba(255,255,255,0.08)",
                  display:"flex",justifyContent:"space-between",alignItems:"center",
                }}>
                  <div style={{color:"#4ECDC4",fontWeight:700,fontSize:13}}>
                    👁️ {L("Vertragsvorschau","Vista previa del contrato","Contract preview","Anteprima contratto")}
                  </div>
                  <button onClick={()=>{ const w=window.open("","_blank"); if(w){ w.document.write(html); w.document.close(); setTimeout(()=>{try{w.focus();w.print();}catch(e){}},400);} }} style={{
                    background:"rgba(47,158,68,0.3)",border:"1px solid rgba(47,158,68,0.4)",borderRadius:8,color:"#fff",padding:"5px 12px",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:CP.font,marginLeft:"auto",marginRight:8,
                  }}>🖨️ {L("Drucken","Imprimir","Print","Stampa")}</button>
                  <button onClick={()=>downloadContract(c)} style={{
                    background:"rgba(11,114,133,0.3)",border:"1px solid rgba(11,114,133,0.4)",
                    borderRadius:8,color:"#fff",padding:"5px 12px",cursor:"pointer",
                    fontSize:12,fontWeight:700,fontFamily:CP.font,
                  }}>
                    ⬇️ {L("Herunterladen","Descargar","Download","Scarica")}
                  </button>
                </div>
                <iframe
                  srcDoc={html}
                  style={{width:"100%",height:"65vh",border:"none",background:"#fff"}}
                  title="my-contract-preview"
                />
              </CPCard>
            </div>
          );
        })}
      </EmbedOrScreen>
    );
  }

  // ── ADMIN VIEW — full CRUD ────────────────────────────────────
  // ── ADMIN VIEW — full CRUD ────────────────────────────────────
  return (
    <CPScreen title={t.contracts||L("Verträge","Contratos","Contracts","Contratti")} icon="📝" onBack={onBack} t={t}
      actions={
        <div style={{display:"flex",gap:8}}>
          <CPBtn onClick={()=>openNew("client")} variant="secondary" size="sm">👥 + {L("Kundenvertrag","Contrato cliente","Client contract","Contratto cliente")}</CPBtn>
          <CPBtn onClick={()=>openNew("employee")} size="sm">👤 + {L("Arbeitsvertrag","Contrato laboral","Employment contract","Contratto lavoro")}</CPBtn>
        </div>
      }
    >
      <div style={{marginBottom:12}}><CPInput value={cSearch} onChange={e=>setCSearch(e.target.value)} placeholder={`🔍 ${L("Vertrag suchen (Name, Datum, Status…)","Buscar contrato (nombre, fecha, estado…)","Search contract (name, date, status…)","Cerca contratto (nome, data, stato…)")}`}/></div>
      {/* Filter tabs */}
      <div style={{display:"flex",gap:8,marginBottom:16,flexWrap:"wrap"}}>
        {[["all",L("Alle","Todos","All","Tutti")],["client",L("Kunden","Clientes","Clients","Clienti")],["employee",L("Mitarbeiter","Empleados","Employees","Dipendenti")]].map(([k,label])=>(
          <button key={k} onClick={()=>setFilter(k)} style={{
            padding:"7px 18px",borderRadius:20,border:"none",cursor:"pointer",
            fontWeight:700,fontSize:13,fontFamily:CP.font,
            background:filter===k?CP.accent:"rgba(255,255,255,.1)",color:"#fff",
          }}>{label}</button>
        ))}
        <div style={{marginLeft:"auto",color:CP.textSecondary,fontSize:13,lineHeight:"34px"}}>
          {filtered.length} {L("Verträge","contratos","contracts","contratti")}
        </div>
      </div>

      {/* Contract list */}
      {filtered.length===0 ? (
        <CPCard style={{textAlign:"center",padding:"40px 20px"}}>
          <div style={{fontSize:52,marginBottom:14}}>📝</div>
          <div style={{color:CP.textPrimary,fontWeight:700,fontSize:16,marginBottom:8}}>
            {L("Noch keine Verträge","Sin contratos aún","No contracts yet","Nessun contratto ancora")}
          </div>
          <div style={{color:CP.textSecondary,fontSize:13,marginBottom:20}}>
            {L("Erstellen Sie Ihren ersten Kunden- oder Arbeitsvertrag nach Schweizer Standard","Cree su primer contrato de cliente o laboral según estándar suizo","Create your first client or employment contract per Swiss standard","Crea il tuo primo contratto cliente o di lavoro secondo lo standard svizzero")}
          </div>
          <div style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}}>
            <CPBtn onClick={()=>openNew("client")} variant="secondary">👥 {L("Kundenvertrag","Contrato cliente","Client contract","Contratto cliente")}</CPBtn>
            <CPBtn onClick={()=>openNew("employee")}>👤 {L("Arbeitsvertrag","Contrato laboral","Employment contract","Contratto lavoro")}</CPBtn>
          </div>
        </CPCard>
      ) : (
        <div style={{display:"flex",flexDirection:"column",gap:12}}>
          {filtered.map(c=>{
            const entity = c.type==="client" ? clients.find(x=>x.id===c.clientId) : employees.find(x=>x.id===c.employeeId);
            return (
              <CPCard key={c.id}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10}}>
                  <div style={{display:"flex",gap:12,alignItems:"center"}}>
                    <div style={{width:48,height:48,borderRadius:14,background:c.type==="employee"?"rgba(112,72,232,0.2)":"rgba(28,126,214,0.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,border:`1px solid ${c.type==="employee"?"rgba(112,72,232,0.4)":"rgba(28,126,214,0.4)"}`}}>
                      {typeIcon(c.type)}
                    </div>
                    <div>
                      <div style={{color:CP.textPrimary,fontWeight:700,fontSize:15}}>{entity?.name||"—"}</div>
                      <div style={{color:CP.textSecondary,fontSize:12,marginTop:1}}>{typeLabel(c.type)} · {fmtDate(c.contractDate)}</div>
                      <div style={{color:CP.textTertiary,fontSize:11,marginTop:2}}>
                        {t.contractStart}: {fmtDate(c.startDate)}
                        {c.endDate?" · "+t.contractEnd+": "+fmtDate(c.endDate):" · "+t.indefinite}
                      </div>
                      {c.type==="employee"&&<div style={{color:"#69DB7C",fontSize:12,marginTop:2,fontWeight:600}}>CHF {c.salary} {c.salaryType==="hourly"?"/h":"/M"}</div>}
                      {c.type==="client"&&<div style={{color:"#69DB7C",fontSize:12,marginTop:2,fontWeight:600}}>CHF {c.price} {c.salaryType==="hourly"?"/h":"/M"}</div>}
                    </div>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:6}}>
                    <CPBadge text={statusLabel(c.status)} color={statusColor(c.status)}/>
                    <div style={{display:"flex",gap:6}}>
                      <CPBtn onClick={()=>{setSelContract(c);setModal("preview");}} variant="secondary" size="sm">👁️</CPBtn>
                      <CPBtn onClick={()=>downloadContract(c)} variant="secondary" size="sm">⬇️</CPBtn>
                      {c.type==="employee"&&c.employeeId&&<SendToDocsButton compact lang={lang} employeeId={c.employeeId} category="contract_sent" refId={c.id}
                        title={`${L("Arbeitsvertrag","Contrato laboral","Employment contract","Contratto di lavoro")} ${c.startDate||c.contractDate||""}`} getHtml={()=>buildContractHTML(c)}
                        style={{background:"rgba(47,158,68,0.35)",padding:"5px 10px",fontSize:12}}/>}
                      <CPBtn onClick={()=>{
                        const entity = c.type==="client"
                          ? clients.find(x=>x.id===c.clientId)
                          : employees.find(x=>x.id===c.employeeId);
                        const isEmp = c.type==="employee";
                        sendByEmail({
                          to: entity?.email||"",
                          subject: `${isEmp ? L("Arbeitsvertrag","Contrato laboral","Employment Contract","Contratto di lavoro") : L("Dienstleistungsvertrag","Contrato de servicios","Service Contract","Contratto di servizi")} — Patjac Reinigung Garten & Services`,
                          body: `${L("Guten Tag","Buenos días","Dear","Gentile")} ${c.entityName||entity?.name||""},\n\n${isEmp
                            ? L("Anbei Ihr Arbeitsvertrag ab","Adjunto su contrato laboral desde","Please find your employment contract from","In allegato il suo contratto di lavoro dal")
                            : L("Anbei Ihr Dienstleistungsvertrag ab","Adjunto su contrato de servicios desde","Please find your service contract from","In allegato il suo contratto di servizi dal")
                          } ${c.startDate||""}.\n\n${L("Bitte unterschreiben Sie und senden Sie uns eine Kopie zurück.","Por favor firme y envíenos una copia de vuelta.","Please sign and return a copy to us.","Si prega di firmare e restituirci una copia.")}\n\n${L("Mit freundlichen Grüssen","Saludos cordiales","Kind regards","Cordiali saluti")},\nPatjac Reinigung Garten & Services\ninfo@patjacservices.ch`
                        });
                      }} variant="primary" size="sm">📧</CPBtn>
                      {c.status==="draft"&&<CPBtn onClick={()=>{setContracts(p=>p.map(x=>x.id===c.id?{...x,status:"signed"}:x));notify(t.contractSigned,"success");}} variant="success" size="sm">✍️</CPBtn>}
                      <CPBtn onClick={()=>{setForm({...c});setSelContract(c);setModal("form");}} variant="secondary" size="sm">✏️</CPBtn>
                      <CPBtn onClick={()=>setDeleteContractId(c.id)} variant="danger" size="sm">🗑️</CPBtn>
                    </div>
                  </div>
                </div>
              </CPCard>
            );
          })}
        </div>
      )}

      {/* ── FORM MODAL ── */}
      {modal==="form"&&(
        <CPModal title={form.type==="client"?t.clientContract:t.employeeContract} onClose={()=>setModal(null)} width={560}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 14px"}}>
            <CPField label={form.type==="client"?t.clients:t.employees}>
              <CPSelect value={form.type==="client"?form.clientId:form.employeeId}
                onChange={e=>setForm(f=>form.type==="client"?{...f,clientId:e.target.value}:{...f,employeeId:e.target.value})}>
                {(form.type==="client"?clients:employees).map(x=><option key={x.id} value={x.id}>{x.name}</option>)}
              </CPSelect>
            </CPField>
            <CPField label={t.contractDate}><CPInput type="date" value={form.contractDate||""} onChange={e=>setForm(f=>({...f,contractDate:e.target.value}))}/></CPField>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 14px"}}>
            <CPField label={t.contractStart}><CPInput type="date" value={form.startDate||""} onChange={e=>setForm(f=>({...f,startDate:e.target.value}))}/></CPField>
            <CPField label={t.contractEnd+" ("+t.fixedTerm+")"}>
              <CPInput type="date" value={form.endDate||""} onChange={e=>setForm(f=>({...f,endDate:e.target.value,termType:e.target.value?"fixedTerm":"indefinite"}))}/>
            </CPField>
          </div>
          {form.type==="employee"&&(
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 14px"}}>
              <CPField label={t.contractTrial}><CPInput type="date" value={form.trialPeriod||""} onChange={e=>setForm(f=>({...f,trialPeriod:e.target.value}))}/></CPField>
              <CPField label={t.contractHours}><CPInput type="number" value={form.hours||42} onChange={e=>setForm(f=>({...f,hours:e.target.value}))}/></CPField>
            </div>
          )}
          {form.type==="employee"&&(
            <CPField label={L("GAV-Tätigkeit","Actividad GAV","GAV Activity","Attività GAV")}>
              <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                {[
                  {id:"cleaning", label:L("🧹 Reinigung","🧹 Limpieza","🧹 Cleaning","🧹 Pulizie")},
                  {id:"gardening", label:L("🌿 Gartenbau","🌿 Jardinería","🌿 Gardening","🌿 Giardinaggio")},
                ].map(opt=>(
                  <button key={opt.id} onClick={()=>setForm(f=>({...f,gavActivity:opt.id,gavContractType:""}))}
                    style={{padding:"8px 18px",borderRadius:20,border:`2px solid ${form.gavActivity===opt.id?"#1c7ed6":"rgba(255,255,255,.2)"}`,
                      background:form.gavActivity===opt.id?"rgba(28,126,214,.25)":"rgba(255,255,255,.05)",
                      color:form.gavActivity===opt.id?"#74c0fc":"#ccc",cursor:"pointer",fontSize:13,fontWeight:600,transition:"all .2s"}}>
                    {opt.label}
                  </button>
                ))}
              </div>
            </CPField>
          )}
          {form.type==="employee"&&form.gavActivity&&(()=>{
            const types = form.gavActivity==="cleaning" ? [
              {id:"A", label:L("A – Unterhaltsreinigung I","A – Limpieza mantenimiento I","A – Maintenance Cleaning I","A – Pulizie manutenzione I"), hourly:21.45},
              {id:"B", label:L("B – Unterhaltsreinigung II","B – Limpieza mantenimiento II","B – Maintenance Cleaning II","B – Pulizie manutenzione II"), hourly:22.10},
              {id:"C", label:L("C – Spezialreinigung","C – Limpieza especial","C – Special Cleaning","C – Pulizie speciali"), hourly:23.20},
              {id:"D", label:L("D – Spitalreinigung","D – Limpieza hospitalaria","D – Hospital Cleaning","D – Pulizie ospedaliere"), hourly:23.90},
              {id:"E", label:L("E – Glasreinigung","E – Limpieza de vidrios","E – Glass Cleaning","E – Pulizie vetri"), hourly:24.50},
              {id:"F", label:L("F – Industrie/Bau","F – Industrial/Construcción","F – Industrial/Construction","F – Industriale/Edilizia"), hourly:24.90},
              {id:"G", label:L("G – Vorarbeiter/in","G – Encargado/a","G – Supervisor","G – Caposquadra"), hourly:26.50},
              {id:"H", label:L("H – Gruppenleiter/in","H – Jefe de grupo","H – Group Leader","H – Capogruppo"), hourly:28.00},
            ] : [
              {id:"A", label:L("A – Ungelernt","A – Sin formación","A – Unskilled","A – Non qualificato"), hourly:20.50},
              {id:"B", label:L("B – Angelernt","B – Semicalificado","B – Semi-skilled","B – Semiqualificato"), hourly:21.50},
              {id:"C", label:L("C – EBA Gärtner/in","C – EBA Jardinero/a","C – EBA Gardener","C – EBA Giardiniere"), hourly:23.00},
              {id:"D", label:L("D – EFZ Gärtner/in","D – EFZ Jardinero/a","D – EFZ Gardener","D – EFZ Giardiniere"), hourly:25.00},
              {id:"E", label:L("E – Vorarbeiter/in","E – Encargado/a","E – Supervisor","E – Caposquadra"), hourly:27.50},
              {id:"F", label:L("F – Teamleiter/in","F – Jefe de equipo","F – Team Leader","F – Responsabile team"), hourly:30.00},
            ];
            return(
              <CPField label={L("GAV-Lohnkategorie","Categoría salarial GAV","GAV Wage Category","Categoria salariale GAV")}>
                <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                  {types.map(tp=>(
                    <button key={tp.id} onClick={()=>setForm(f=>({...f,gavContractType:tp.id,salary:tp.hourly,salaryType:"hourly"}))}
                      style={{padding:"8px 14px",borderRadius:20,border:`2px solid ${form.gavContractType===tp.id?"#69DB7C":"rgba(255,255,255,.2)"}`,
                        background:form.gavContractType===tp.id?"rgba(105,219,124,.2)":"rgba(255,255,255,.05)",
                        color:form.gavContractType===tp.id?"#69DB7C":"#ccc",cursor:"pointer",fontSize:12,fontWeight:600,transition:"all .2s",
                        textAlign:"left",lineHeight:1.3}}>
                      <div>{tp.id}</div>
                      <div style={{fontSize:10,opacity:.8}}>CHF {tp.hourly.toFixed(2)}/h</div>
                    </button>
                  ))}
                </div>
                {form.gavContractType&&(
                  <div style={{marginTop:8,padding:"8px 12px",background:"rgba(105,219,124,.1)",borderRadius:8,border:"1px solid rgba(105,219,124,.3)",fontSize:12,color:"#69DB7C"}}>
                    ✅ {types.find(t=>t.id===form.gavContractType)?.label} — CHF {types.find(t=>t.id===form.gavContractType)?.hourly.toFixed(2)}/h
                  </div>
                )}
              </CPField>
            );
          })()}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 14px"}}>
            <CPField label={form.type==="client"?t.contractSalary+" CHF/h":t.contractSalary+" CHF"}>
              <CPInput type="number" value={form.type==="client"?form.price:form.salary} onChange={e=>setForm(f=>form.type==="client"?{...f,price:e.target.value}:{...f,salary:e.target.value})}/>
            </CPField>
            <CPField label={L("Abrechnungsart","Tipo facturación","Billing type","Tipo fatturazione")}>
              <CPSelect value={form.salaryType||"monthly"} onChange={e=>setForm(f=>({...f,salaryType:e.target.value}))}>
                <option value="hourly">{L("Stündlich","Por horas","Hourly","Ad ore")}</option>
                <option value="monthly">{L("Monatlich","Mensual","Monthly","Mensile")}</option>
              </CPSelect>
            </CPField>
          </div>
          {form.type==="client"&&(
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 14px"}}>
              <CPField label={L("Dienstleistung","Servicio","Service","Servizio")}>
                <CPSelect value={form.serviceType||"cleaning"} onChange={e=>setForm(f=>({...f,serviceType:e.target.value}))}>
                  <option value="cleaning">{t.cleaning}</option>
                  <option value="gardening">{t.gardening}</option>
                  <option value="other">{t.other}</option>
                </CPSelect>
              </CPField>
              <CPField label={t.frequency}>
                <CPSelect value={form.frequency||"weekly"} onChange={e=>setForm(f=>({...f,frequency:e.target.value}))}>
                  <option value="daily">{t.daily}</option>
                  <option value="weekly">{t.weekly}</option>
                  <option value="monthly">{t.monthly}</option>
                </CPSelect>
              </CPField>
            </div>
          )}
          <CPField label={t.contractNotice}>
            <CPInput value={form.noticePeriod||""} onChange={e=>setForm(f=>({...f,noticePeriod:e.target.value}))}
              placeholder={form.type==="employee"?"1 Monat / 1 month":"30 Tage / 30 days"}/>
          </CPField>
          <CPField label={t.notes}><CPInput value={form.notes||""} onChange={e=>setForm(f=>({...f,notes:e.target.value}))}/></CPField>
          <div style={{display:"flex",gap:8,justifyContent:"flex-end",marginTop:8}}>
            <CPBtn onClick={()=>setModal(null)} variant="secondary">{t.cancel}</CPBtn>
            <CPBtn onClick={save}>💾 {t.save}</CPBtn>
          </div>
        </CPModal>
      )}

      {/* ── PREVIEW MODAL ── */}
      {modal==="preview"&&selContract&&(()=>{
        const html = buildContractHTML(selContract);
        const entity = selContract.type==="client" ? clients.find(x=>x.id===selContract.clientId) : employees.find(x=>x.id===selContract.employeeId);
        return (
          <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.88)",backdropFilter:"blur(12px)",display:"flex",alignItems:"flex-start",justifyContent:"center",zIndex:99998,padding:16,overflowY:"auto"}}
            onClick={()=>setModal(null)}>
            <div style={{background:CP.surface,border:`1px solid rgba(11,114,133,0.5)`,borderRadius:22,width:"min(820px,96vw)",marginTop:8,marginBottom:8,boxShadow:"0 32px 80px rgba(0,0,0,0.9)"}}
              onClick={e=>e.stopPropagation()}>
              <div style={{background:"linear-gradient(90deg,#0B7285,#2F9E44)",borderRadius:"22px 22px 0 0",padding:"13px 20px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div style={{color:"#fff",fontWeight:700,fontSize:15}}>📝 {typeLabel(selContract.type)} — {entity?.name}</div>
                <div style={{display:"flex",gap:8}}>
                  {selContract.type==="employee"&&selContract.employeeId&&<SendToDocsButton lang={lang} employeeId={selContract.employeeId} category="contract_sent" refId={selContract.id}
                    title={`${L("Arbeitsvertrag","Contrato laboral","Employment contract","Contratto di lavoro")} ${selContract.startDate||selContract.contractDate||""}`} getHtml={()=>buildContractHTML(selContract)} style={{padding:"7px 14px"}}/>}
                  <button onClick={()=>downloadContract(selContract)} style={{background:"rgba(255,255,255,0.2)",border:"1px solid rgba(255,255,255,0.35)",borderRadius:10,color:"#fff",padding:"7px 15px",cursor:"pointer",fontSize:13,fontWeight:700,fontFamily:CP.font}}>⬇️ {t.contractDownload}</button>
                  <button onClick={()=>setModal(null)} style={{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:10,color:"#fff",padding:"7px 12px",cursor:"pointer",fontSize:13}}>✕</button>
                </div>
              </div>
              <div style={{padding:"14px 20px 6px"}}>
                <div style={{background:"rgba(11,114,133,0.1)",border:"1px solid rgba(11,114,133,0.25)",borderRadius:10,padding:"8px 14px",marginBottom:10,color:"#4ECDC4",fontSize:12}}>
                  👁️ {L("Vorschau — Herunterladen für druckbereites Vertragsexemplar","Vista previa — Descarga para copia imprimible del contrato","Preview — Download for print-ready contract copy","Anteprima — Scarica per copia del contratto pronta per la stampa")}
                </div>
              </div>
              <iframe srcDoc={html} style={{width:"100%",height:"70vh",border:"none",borderRadius:"0 0 22px 22px"}} title="contract-preview"/>
            </div>
          </div>
        );
      })()}

      {/* ── DELETE CONTRACT MODAL ── */}
      {deleteContractId&&(()=>{
        const c = contracts.find(x=>x.id===deleteContractId);
        const entity = c?.type==="client"
          ? clients.find(x=>x.id===c.clientId)
          : employees.find(x=>x.id===c.employeeId);
        return (
          <CPModal title={L("Vertrag löschen","Eliminar contrato","Delete contract","Elimina contratto")} onClose={()=>setDeleteContractId(null)} width={420}>
            <div style={{padding:"8px 0 20px"}}>
              <div style={{textAlign:"center",marginBottom:14}}><span style={{fontSize:44}}>⚠️</span></div>
              <div style={{background:"rgba(201,42,42,0.1)",border:"1px solid rgba(201,42,42,0.3)",borderRadius:12,padding:"12px 16px",marginBottom:14,textAlign:"center"}}>
                <div style={{color:"#FF8787",fontWeight:700,fontSize:15}}>
                  {c?.type==="client"?"👥":"👤"} {entity?.name||"—"}
                </div>
                <div style={{color:CP.textSecondary,fontSize:12,marginTop:4}}>
                  {typeLabel(c?.type)} · {statusLabel(c?.status)} · {fmtDate(c?.contractDate)}
                </div>
              </div>
              <div style={{color:CP.textSecondary,fontSize:13,textAlign:"center",marginBottom:18,lineHeight:1.6}}>
                {L("Dieser Vertrag wird permanent gelöscht.","Este contrato será eliminado permanentemente.","This contract will be permanently deleted.","Questo contratto verrà eliminato definitivamente.")}
              </div>
              <div style={{display:"flex",gap:10,justifyContent:"flex-end"}}>
                <CPBtn onClick={()=>setDeleteContractId(null)} variant="secondary">{t.cancel}</CPBtn>
                <CPBtn onClick={()=>deleteContract(deleteContractId)} variant="danger">🗑️ {L("Löschen","Eliminar","Delete","Elimina")}</CPBtn>
              </div>
            </div>
          </CPModal>
        );
      })()}
    </CPScreen>
  );
}
