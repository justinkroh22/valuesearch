import { IncomeStatementDAO } from "./IncomeStatementDAO";

export interface CompanyReportedIncomeStatementsDAO {
    symbol: string;
    annualReports: IncomeStatementDAO[];
    quarterlyReports: IncomeStatementDAO[];
}
