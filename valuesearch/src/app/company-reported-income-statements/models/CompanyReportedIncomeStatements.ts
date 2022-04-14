import { AnnualIncomeStatement } from "./AnnualIncomeStatement";
import { QuarterlyIncomeStatement } from "./QuarterlyIncomeStatement";


export interface CompanyReportedIncomeStatements {
    symbol: string;
    annualReports: AnnualIncomeStatement[];
    quarterlyReports: QuarterlyIncomeStatement[];
}
