import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Banknote, Calculator, TrendingDown } from 'lucide-react';

interface Bank {
  id: number;
  name: string;
  rate: number;
  logo?: string;
}

interface LoanResult {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
}

export function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState<number>(100000);
  const [interestRate, setInterestRate] = useState<number>(3.5);
  const [loanTenure, setLoanTenure] = useState<number>(9);
  const [results, setResults] = useState<LoanResult | null>(null);

  // Sample Malaysian banks data
  const banks: Bank[] = [
    { id: 1, name: 'Maybank', rate: 3.2 },
    { id: 2, name: 'CIMB', rate: 3.3 },
    { id: 3, name: 'RHB', rate: 3.4 },
    { id: 4, name: 'Public Bank', rate: 3.5 },
    { id: 5, name: 'Hong Leong', rate: 3.6 },
    { id: 6, name: 'AmBank', rate: 3.7 },
  ];

  const calculateLoan = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTenure * 12;
    
    // Monthly payment calculation using standard formula
    const monthlyPayment = principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments) / 
                          (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - principal;
    
    setResults({
      monthlyPayment: parseFloat(monthlyPayment.toFixed(2)),
      totalPayment: parseFloat(totalPayment.toFixed(2)),
      totalInterest: parseFloat(totalInterest.toFixed(2))
    });
  };

  // Find the best rate among banks
  const bestBank = banks.reduce((prev, current) => 
    (prev.rate < current.rate) ? prev : current
  );

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="w-5 h-5" />
            Loan Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Loan Amount */}
          <div className="space-y-3">
            <Label htmlFor="loanAmount">
              Loan Amount (RM): {loanAmount.toLocaleString()}
            </Label>
            <Slider
              id="loanAmount"
              min={50000}
              max={500000}
              step={10000}
              value={[loanAmount]}
              onValueChange={([value]) => setLoanAmount(value)}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>RM 50,000</span>
              <span>RM 500,000</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div className="space-y-3">
            <Label htmlFor="interestRate">
              Interest Rate (%): {interestRate}%
            </Label>
            <Slider
              id="interestRate"
              min={2.0}
              max={10.0}
              step={0.1}
              value={[interestRate]}
              onValueChange={([value]) => setInterestRate(value)}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>2%</span>
              <span>10%</span>
            </div>
          </div>

          {/* Loan Tenure */}
          <div className="space-y-3">
            <Label htmlFor="loanTenure">
              Loan Tenure (Years): {loanTenure} years
            </Label>
            <Slider
              id="loanTenure"
              min={1}
              max={30}
              step={1}
              value={[loanTenure]}
              onValueChange={([value]) => setLoanTenure(value)}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>1 year</span>
              <span>30 years</span>
            </div>
          </div>

          {/* Manual Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="amountInput">Amount (RM)</Label>
              <Input
                id="amountInput"
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                min={50000}
                max={500000}
              />
            </div>
            <div>
              <Label htmlFor="rateInput">Interest Rate (%)</Label>
              <Input
                id="rateInput"
                type="number"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                min={2.0}
                max={10.0}
              />
            </div>
            <div>
              <Label htmlFor="tenureInput">Tenure (Years)</Label>
              <Input
                id="tenureInput"
                type="number"
                value={loanTenure}
                onChange={(e) => setLoanTenure(Number(e.target.value))}
                min={1}
                max={30}
              />
            </div>
          </div>

          <Button onClick={calculateLoan} className="w-full">
            Calculate Loan
          </Button>
        </CardContent>
      </Card>

      {/* Results */}
      {results && (
        <Card>
          <CardHeader>
            <CardTitle>Loan Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <p className="text-sm text-muted-foreground">Monthly Payment</p>
                <p className="text-2xl font-bold text-primary">
                  RM {results.monthlyPayment.toLocaleString()}
                </p>
              </div>
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <p className="text-sm text-muted-foreground">Total Interest</p>
                <p className="text-2xl font-bold text-primary">
                  RM {results.totalInterest.toLocaleString()}
                </p>
              </div>
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <p className="text-sm text-muted-foreground">Total Payment</p>
                <p className="text-2xl font-bold text-primary">
                  RM {results.totalPayment.toLocaleString()}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Bank Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingDown className="w-5 h-5" />
            Bank Comparison
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Best Rate Available</p>
                  <p className="text-sm text-muted-foreground">
                    Save with {bestBank.name} at {bestBank.rate}%
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-green-500">{bestBank.rate}%</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {banks.map((bank) => (
                <div 
                  key={bank.id} 
                  className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Banknote className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{bank.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{bank.rate}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}