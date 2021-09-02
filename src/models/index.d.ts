import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type DemographicsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Demographics {
  readonly id: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly email?: string;
  readonly age?: string;
  readonly consentvalue?: string;
  readonly sex?: string;
  readonly ethnicity?: string;
  readonly education?: string;
  readonly conditions?: string;
  readonly dominantHand?: string;
  readonly suddenDeath?: string;
  readonly marfans?: string;
  readonly cpmmr?: string;
  readonly cpmmr2?: string;
  readonly uptodateVaccines?: string;
  readonly allergies?: string;
  readonly allergiesDescription?: string;
  readonly allergiesepipen?: string;
  readonly medication?: string;
  readonly medicationDescription?: string;
  readonly nonPrescriptionMedication?: string;
  readonly nonPrescriptionMedicationDescription?: string;
  readonly danceHistory?: string;
  readonly danceWork?: string;
  readonly currentCompany?: string;
  readonly previousCompany?: string;
  readonly mainTypeOfDance?: string;
  readonly ageBeganDance?: string;
  readonly trainning?: string;
  readonly pointeWork?: string;
  readonly numberOfYearsDancing?: string;
  readonly numberOfYearsProDancing?: string;
  readonly currentlyPerforming?: string;
  readonly alteredSchedule?: string;
  readonly rehearsalHours?: string;
  readonly dancePerDay?: string;
  readonly performancePerMonth?: string;
  readonly tourWeeks?: string;
  readonly companyEmployedWeeks?: string;
  readonly offseasonTraining?: string;
  readonly extraPrograms?: string;
  readonly cardioTrainingPerWeek?: string;
  readonly crossTrainingPerWeek?: string;
  readonly warmUp?: string;
  readonly musculoskeletalinjury?: string;
  readonly seenBy?: string;
  readonly injuryDiagnosis?: string;
  readonly whereInjuryOccured?: string;
  readonly surgery?: string;
  readonly rehab?: string;
  readonly resumptionDanceClasses?: string;
  readonly returnPerform?: string;
  readonly continuingProblem?: string;
  readonly otherInjuries?: string;
  readonly lossPastYear?: string;
  readonly counseling?: string;
  readonly fatigue?: string;
  readonly troubleSleeping?: string;
  readonly sleepDeprived?: string;
  readonly nutritionCounseling?: string;
  readonly smoking?: string;
  readonly smokingCessation?: string;
  readonly drinksPerDay?: string;
  readonly drugUse?: string;
  readonly worry?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Demographics, DemographicsMetaData>);
  static copyOf(source: Demographics, mutator: (draft: MutableModel<Demographics, DemographicsMetaData>) => MutableModel<Demographics, DemographicsMetaData> | void): Demographics;
}