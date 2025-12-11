import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Edit, Trash2 } from 'lucide-react';

interface Bank {
  id: number;
  name: string;
  rate: number;
}

interface Vehicle {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  category: string;
}

export default function AdminPage() {
  const [banks, setBanks] = useState<Bank[]>([
    { id: 1, name: 'Maybank', rate: 3.2 },
    { id: 2, name: 'CIMB', rate: 3.3 },
    { id: 3, name: 'RHB', rate: 3.4 },
  ]);

  const [vehicles, setVehicles] = useState<Vehicle[]>([
    { id: 1, make: 'Proton', model: 'X70', year: 2023, price: 120000, category: 'SUV' },
    { id: 2, make: 'Perodua', model: 'Myvi', year: 2022, price: 65000, category: 'Hatchback' },
  ]);

  const [isBankDialogOpen, setIsBankDialogOpen] = useState(false);
  const [isVehicleDialogOpen, setIsVehicleDialogOpen] = useState(false);
  const [editingBank, setEditingBank] = useState<Bank | null>(null);
  const [editingVehicle, setEditingVehicle] = useState<Vehicle | null>(null);

  const handleSaveBank = (bank: Bank) => {
    if (editingBank) {
      setBanks(banks.map(b => b.id === bank.id ? bank : b));
    } else {
      setBanks([...banks, { ...bank, id: Date.now() }]);
    }
    setIsBankDialogOpen(false);
    setEditingBank(null);
  };

  const handleSaveVehicle = (vehicle: Vehicle) => {
    if (editingVehicle) {
      setVehicles(vehicles.map(v => v.id === vehicle.id ? vehicle : v));
    } else {
      setVehicles([...vehicles, { ...vehicle, id: Date.now() }]);
    }
    setIsVehicleDialogOpen(false);
    setEditingVehicle(null);
  };

  const handleDeleteBank = (id: number) => {
    setBanks(banks.filter(bank => bank.id !== id));
  };

  const handleDeleteVehicle = (id: number) => {
    setVehicles(vehicles.filter(vehicle => vehicle.id !== id));
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage banks and vehicles</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Banks Management */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Manage Banks</CardTitle>
                <Dialog open={isBankDialogOpen} onOpenChange={setIsBankDialogOpen}>
                  <DialogTrigger asChild>
                    <Button size="sm" onClick={() => setEditingBank(null)}>
                      <Plus className="w-4 h-4 mr-2" />
                      Add Bank
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{editingBank ? 'Edit Bank' : 'Add New Bank'}</DialogTitle>
                    </DialogHeader>
                    <BankForm 
                      bank={editingBank} 
                      onSave={handleSaveBank}
                      onCancel={() => {
                        setIsBankDialogOpen(false);
                        setEditingBank(null);
                      }}
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Interest Rate</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {banks.map((bank) => (
                    <TableRow key={bank.id}>
                      <TableCell>{bank.name}</TableCell>
                      <TableCell>{bank.rate}%</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => {
                              setEditingBank(bank);
                              setIsBankDialogOpen(true);
                            }}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleDeleteBank(bank.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Vehicles Management */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Manage Vehicles</CardTitle>
                <Dialog open={isVehicleDialogOpen} onOpenChange={setIsVehicleDialogOpen}>
                  <DialogTrigger asChild>
                    <Button size="sm" onClick={() => setEditingVehicle(null)}>
                      <Plus className="w-4 h-4 mr-2" />
                      Add Vehicle
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{editingVehicle ? 'Edit Vehicle' : 'Add New Vehicle'}</DialogTitle>
                    </DialogHeader>
                    <VehicleForm 
                      vehicle={editingVehicle} 
                      onSave={handleSaveVehicle}
                      onCancel={() => {
                        setIsVehicleDialogOpen(false);
                        setEditingVehicle(null);
                      }}
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Make/Model</TableHead>
                    <TableHead>Year</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {vehicles.map((vehicle) => (
                    <TableRow key={vehicle.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{vehicle.make} {vehicle.model}</div>
                          <div className="text-sm text-muted-foreground">{vehicle.category}</div>
                        </div>
                      </TableCell>
                      <TableCell>{vehicle.year}</TableCell>
                      <TableCell>RM {vehicle.price.toLocaleString()}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => {
                              setEditingVehicle(vehicle);
                              setIsVehicleDialogOpen(true);
                            }}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleDeleteVehicle(vehicle.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Bank Form Component
function BankForm({ bank, onSave, onCancel }: { 
  bank: Bank | null; 
  onSave: (bank: Bank) => void;
  onCancel: () => void;
}) {
  const [name, setName] = useState(bank?.name || '');
  const [rate, setRate] = useState(bank?.rate || 3.0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      id: bank?.id || 0,
      name,
      rate
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="bankName">Bank Name</Label>
        <Input
          id="bankName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="interestRate">Interest Rate (%)</Label>
        <Input
          id="interestRate"
          type="number"
          step="0.1"
          value={rate}
          onChange={(e) => setRate(parseFloat(e.target.value))}
          required
        />
      </div>
      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          {bank ? 'Update Bank' : 'Add Bank'}
        </Button>
      </div>
    </form>
  );
}

// Vehicle Form Component
function VehicleForm({ vehicle, onSave, onCancel }: { 
  vehicle: Vehicle | null; 
  onSave: (vehicle: Vehicle) => void;
  onCancel: () => void;
}) {
  const [make, setMake] = useState(vehicle?.make || '');
  const [model, setModel] = useState(vehicle?.model || '');
  const [year, setYear] = useState(vehicle?.year || new Date().getFullYear());
  const [price, setPrice] = useState(vehicle?.price || 0);
  const [category, setCategory] = useState(vehicle?.category || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      id: vehicle?.id || 0,
      make,
      model,
      year,
      price,
      category
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="make">Make</Label>
          <Input
            id="make"
            value={make}
            onChange={(e) => setMake(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="model">Model</Label>
          <Input
            id="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="year">Year</Label>
          <Input
            id="year"
            type="number"
            value={year}
            onChange={(e) => setYear(parseInt(e.target.value))}
            required
          />
        </div>
        <div>
          <Label htmlFor="price">Price (RM)</Label>
          <Input
            id="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
            required
          />
        </div>
      </div>
      <div>
        <Label htmlFor="category">Category</Label>
        <Input
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          {vehicle ? 'Update Vehicle' : 'Add Vehicle'}
        </Button>
      </div>
    </form>
  );
}