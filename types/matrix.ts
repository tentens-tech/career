export const LEAD_ROLE = 'lead'

export enum GradesIC {
  IC1 = 'IC1',
  IC2 = 'IC2',
  IC3 = 'IC3',
  IC4 = 'IC4',
  StaffEngineer = 'Staff Engineer',
  SeniorStaffEngineer = 'Senior Staff Engineer',
}

export enum GradesAnalytics {
  IC1 = 'IC1',
  IC2 = 'IC2',
  IC3 = 'IC3',
  IC4 = 'IC4',
  IC5 = 'IC5',
}

export enum GradesDesign {
  IC1 = 'IC1',
  IC2 = 'IC2',
  IC3 = 'IC3',
  IC4 = 'IC4',
}

export enum GradesLead {
  L1 = 'L1',
  L2 = 'L2',
}

export type Matrix = Record<
  string,
  Record<string, Record<string, Record<string, string> | string>>
>

export type Grades = GradesIC | GradesLead | GradesDesign | GradesAnalytics
