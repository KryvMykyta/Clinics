import { asc, like } from 'drizzle-orm/expressions';
import { clinics } from './../schemas/clinicsSchema';
import { BetterSQLite3Database, drizzle } from 'drizzle-orm/better-sqlite3'
import { Database } from "better-sqlite3"

export class ClinicsRepository {
    db: BetterSQLite3Database

    constructor (clinicsDB: Database) {
        this.db = drizzle(clinicsDB)
    }

    public getClinicsByName = (clinicName: string) => {
        const clinicsByName = this.db.select({
            clinicName: clinics.clinicName,
            adress: clinics.fullAdress,
            aboutClinic: clinics.about,
            zip: clinics.postCode,
            email: clinics.email,
            suburb: clinics.suburb,
            state: clinics.state,
            city: clinics.city,
            website: clinics.website,
            phone: clinics.phone,
            lat: clinics.lat,
            lng: clinics.lng
        })
        .from(clinics)
        .where(like(clinics.clinicName,`%${clinicName.toLowerCase()}%`))
        .orderBy(asc(clinics.clinicName))
        .all()
        return clinicsByName
    }

    public getClinicsByCity = (city: string) => {
        const clinicsByCity = this.db.select({
            clinicName: clinics.clinicName,
            adress: clinics.fullAdress,
            aboutClinic: clinics.about,
            email: clinics.email,
            zip: clinics.postCode,
            city: clinics.city,
            suburb: clinics.suburb,
            state: clinics.state,
            website: clinics.website,
            phone: clinics.phone,
            lat: clinics.lat,
            lng: clinics.lng
        })
        .from(clinics)
        .where(like(clinics.city,`%${city.toLowerCase()}%`))
        .orderBy(asc(clinics.clinicName))
        .all()
        return clinicsByCity
    }

    public getClinicsByZip = (zip: string) => {
        const clinicsByZip = this.db.select({
            clinicName: clinics.clinicName,
            adress: clinics.fullAdress,
            aboutClinic: clinics.about,
            email: clinics.email,
            zip: clinics.postCode,
            city: clinics.city,
            suburb: clinics.suburb,
            state: clinics.state,
            website: clinics.website,
            phone: clinics.phone,
            lat: clinics.lat,
            lng: clinics.lng
        })
        .from(clinics)
        .where(like(clinics.postCode,`%${zip.toLowerCase()}%`))
        .orderBy(asc(clinics.clinicName))
        .all()
        return clinicsByZip
    }

    public getClinicsByState = (state: string) => {
        const clinicsByState = this.db.select({
            clinicName: clinics.clinicName,
            adress: clinics.fullAdress,
            aboutClinic: clinics.about,
            email: clinics.email,
            zip: clinics.postCode,
            suburb: clinics.suburb,
            state: clinics.state,
            city: clinics.city,
            website: clinics.website,
            phone: clinics.phone,
            lat: clinics.lat,
            lng: clinics.lng
        })
        .from(clinics)
        .where(like(clinics.state,`%${state.toLowerCase()}%`))
        .orderBy(asc(clinics.clinicName))
        .all()
        return clinicsByState
    }

    public getClinicsBySuburb = (suburb: string) => {
        const clinicsBySuburb = this.db.select({
            clinicName: clinics.clinicName,
            adress: clinics.fullAdress,
            aboutClinic: clinics.about,
            email: clinics.email,
            zip: clinics.postCode,
            suburb: clinics.suburb,
            state: clinics.state,
            city: clinics.city,
            website: clinics.website,
            phone: clinics.phone,
            lat: clinics.lat,
            lng: clinics.lng
        })
        .from(clinics)
        .where(like(clinics.suburb,`%${suburb.toLowerCase()}%`))
        .orderBy(asc(clinics.clinicName))
        .all()
        return clinicsBySuburb
    }
}