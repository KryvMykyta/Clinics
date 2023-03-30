import { Request, Response, Router } from "express";
import { ClinicsRepository } from "repository/clinicsRepository";

export class ClinicsController {
  router: Router;
  path: string;
  repository: ClinicsRepository;

  constructor(path: string, repository: ClinicsRepository) {
    (this.router = Router()), (this.path = path);
    this.repository = repository;
  }

  public init = () => {
    this.router.get("/city/:city", this.getClinicsByCity);
    this.router.get("/postal/:zip", this.getClinicsByZip);
    this.router.get("/suburb/:suburb", this.getClinicsBySuburb);
    this.router.get("/name/:name", this.getClinicsByName);
    this.router.get("/state/:state", this.getClinicsByState);
  };

  public getClinicsByCity = (req: Request<{ city: string }>, res: Response) => {
    try {
      const city = req.params.city;
      const clinicsResponse = this.repository.getClinicsByCity(city);
      return res.status(200).send(clinicsResponse);
    } catch (err) {
      console.log(err);
      return res.status(500).send("Server error");
    }
  };

  public getClinicsByState = (req: Request<{ state: string }>, res: Response) => {
    try {
      const state = req.params.state;
      const clinicsResponse = this.repository.getClinicsByState(state);
      return res.status(200).send(clinicsResponse);
    } catch (err) {
      console.log(err);
      return res.status(500).send("Server error");
    }
  };

  public getClinicsByZip = (req: Request<{ zip: string }>, res: Response) => {
    try {
      const zip = req.params.zip;
      const clinicsResponse = this.repository.getClinicsByZip(zip);
      return res.status(200).send(clinicsResponse);
    } catch (err) {
      console.log(err);
      return res.status(500).send("Server error");
    }
  };

  public getClinicsBySuburb = (req: Request<{ suburb: string }>, res: Response) => {
    try {
      const suburb = req.params.suburb;
      const clinicsResponse = this.repository.getClinicsBySuburb(suburb);
      return res.status(200).send(clinicsResponse);
    } catch (err) {
      console.log(err);
      return res.status(500).send("Server error");
    }
  };

  public getClinicsByName = (req: Request<{ name: string }>, res: Response) => {
    try {
      const name = req.params.name;
      const clinicsResponse = this.repository.getClinicsByName(name);
      return res.status(200).send(clinicsResponse);
    } catch (err) {
      console.log(err);
      return res.status(500).send("Server error");
    }
  };
}
