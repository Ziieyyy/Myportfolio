import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Car, Motorcycle, Truck, Van } from 'lucide-react';

interface Vehicle {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  category: 'car' | 'motorcycle' | 'van' | 'truck';
  image?: string;
  description: string;
}

const mockVehicles: Vehicle[] = [
  {
    id: 1,
    make: 'Proton',
    model: 'X70',
    year: 2023,
    price: 120000,
    category: 'car',
    description: 'Compact SUV with modern features'
  },
  {
    id: 2,
    make: 'Perodua',
    model: 'Myvi',
    year: 2022,
    price: 65000,
    category: 'car',
    description: 'Popular compact hatchback'
  },
  {
    id: 3,
    make: 'Yamaha',
    model: 'YZF-R3',
    year: 2023,
    price: 25000,
    category: 'motorcycle',
    description: 'Sporty 321cc motorcycle'
  },
  {
    id: 4,
    make: 'Toyota',
    model: 'Hilux',
    year: 2022,
    price: 150000,
    category: 'truck',
    description: 'Reliable pickup truck'
  },
  {
    id: 5,
    make: 'Nissan',
    model: 'NV200',
    year: 2021,
    price: 95000,
    category: 'van',
    description: 'Practical passenger van'
  },
  {
    id: 6,
    make: 'Honda',
    model: 'Civic',
    year: 2023,
    price: 110000,
    category: 'car',
    description: 'Popular sedan with advanced tech'
  }
];

const categoryIcons = {
  car: Car,
  motorcycle: Motorcycle,
  van: Van,
  truck: Truck
};

export function VehicleList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('price-low');

  const filteredVehicles = mockVehicles.filter(vehicle => {
    const matchesSearch = vehicle.make.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         vehicle.model.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || vehicle.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedVehicles = [...filteredVehicles].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'year-new':
        return b.year - a.year;
      case 'year-old':
        return a.year - b.year;
      default:
        return 0;
    }
  });

  return (
    <div className="space-y-6">
      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search vehicles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="car">Cars</SelectItem>
                <SelectItem value="motorcycle">Motorcycles</SelectItem>
                <SelectItem value="van">Vans</SelectItem>
                <SelectItem value="truck">Trucks</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="year-new">Year: Newest First</SelectItem>
                <SelectItem value="year-old">Year: Oldest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Vehicle Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedVehicles.map((vehicle) => {
          const IconComponent = categoryIcons[vehicle.category];
          return (
            <Card key={vehicle.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-muted h-48 flex items-center justify-center">
                <IconComponent className="w-16 h-16 text-muted-foreground" />
              </div>
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg">{vehicle.make} {vehicle.model}</h3>
                    <p className="text-sm text-muted-foreground">{vehicle.year}</p>
                  </div>
                  <span className="text-lg font-bold text-primary">
                    RM {vehicle.price.toLocaleString()}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{vehicle.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <IconComponent className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm capitalize">{vehicle.category}</span>
                  </div>
                  <Button size="sm">View Details</Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {sortedVehicles.length === 0 && (
        <div className="text-center py-12">
          <Car className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-medium">No vehicles found</h3>
          <p className="mt-2 text-muted-foreground">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
}