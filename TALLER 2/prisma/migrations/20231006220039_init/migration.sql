-- CreateTable
CREATE TABLE "Doctor" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "especializacion" TEXT NOT NULL,
    "direccion" TEXT,
    "email" TEXT,

    CONSTRAINT "Doctor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Casomedico" (
    "id" SERIAL NOT NULL,
    "idAlergia" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "hora" TEXT NOT NULL,
    "descripcion" TEXT,
    "lugar" TEXT,
    "resultado" TEXT,
    "observaciones" TEXT,

    CONSTRAINT "Casomedico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Paciente" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "fechaNacimiento" TIMESTAMP(3) NOT NULL,
    "direccion" TEXT,
    "email" TEXT,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id")
);
