import { PageTransition } from '@/components/PageTransition';

const Calculator = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Auto Finance Calculator</h1>
            <p className="text-lg text-muted-foreground">
              Compare car loan rates from multiple Malaysian banks
            </p>
          </div>

          <div className="glass rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Project Overview</h2>
            <p className="text-muted-foreground mb-4">
              Auto Finance Calculator is a modern web application that helps users compare car loan rates 
              from multiple Malaysian banks. The platform features an admin portal for managing vehicles 
              and banks, with a public-facing interface for users to browse cars and calculate loan options.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Public Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Browse vehicles (cars, motorcycles, vans, trucks)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Loan calculator with different banks and tenures
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Bank comparison with interest rates
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Search and filter functionality
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Multi-language support (English/Malay)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Dark/light mode toggle
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Admin Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Secure admin authentication
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Manage vehicle listings
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Configure bank partners and rates
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Dashboard with statistics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    User management via Supabase
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Technology Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Frontend</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    React 18
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    TypeScript
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Vite
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    React Router DOM
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Tailwind CSS
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Radix UI
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Lucide React
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Backend & Other</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Supabase (PostgreSQL, Auth, RLS)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    React Query
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    React Hook Form
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Zod
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    i18next
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Recharts
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Calculator;