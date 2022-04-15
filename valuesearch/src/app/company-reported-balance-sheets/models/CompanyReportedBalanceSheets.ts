import { AnnualBalanceSheet } from "./AnnualBalanceSheet";
import { QuarterlyBalanceSheet } from "./QuarterlyBalanceSheet";

export interface CompanyReportedBalanceSheets {
    symbol: string
    annualReports: AnnualBalanceSheet[]
    quarterlyReports: QuarterlyBalanceSheet[]
  }