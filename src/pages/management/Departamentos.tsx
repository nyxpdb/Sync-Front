import React, { useState } from 'react';
import { Header, PageHeader } from '../../components/layout';
import { Card, CardContent, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, FormControl, InputLabel, Select, MenuItem, Chip, Avatar } from '@mui/material';
import {
  FaBuilding, FaUsers, FaCog, FaChartLine, FaPlus, FaEdit, FaTrash, FaEye,
  FaIndustry, FaBox, FaTruck, FaTools, FaFlask, FaShieldAlt, FaCheckCircle,
  FaExclamationTriangle, FaClock, FaUserTie, FaUserCog, FaArrowUp, FaArrowDown,
  FaFilter, FaSearch, FaMapMarkerAlt, FaDollarSign, FaCalendarAlt
} from 'react-icons/fa';
import CUDModal from '../../components/forms/CUDModal';
import type { FormFieldConfig } from '../../components/forms/CUDModal';

interface Sector {
  id: number;
  name: string;
  employees: number;
  efficiency: number;
  production: number;
}

interface Department {
  id: number;
  name: string;
  description: string;
  location: string;
  employees: number;
  budget: number;
  status: string;
  sectors: Sector[];
  createdAt: string;
}

const Departamentos: React.FC = () => {
  console.log('Departamentos component is rendering');
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null);
  const [showDepartmentModal, setShowDepartmentModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [formMode, setFormMode] = useState<'create' | 'edit'>('create');
  const [selectedDepartmentForEdit, setSelectedDepartmentForEdit] = useState<Department | null>(null);
  const [showSectorModal, setShowSectorModal] = useState(false);

  // Configuração dos campos do formulário
  const departmentFields: FormFieldConfig[] = [
    {
      name: 'name',
      label: 'Nome do Departamento',
      type: 'text',
      required: true,
      placeholder: 'Digite o nome do departamento'
    },
    {
      name: 'description',
      label: 'Descrição',
      type: 'textarea',
      required: true,
      placeholder: 'Digite a descrição do departamento'
    },
    {
      name: 'location',
      label: 'Localização',
      type: 'text',
      required: true,
      placeholder: 'Digite a localização'
    },
    {
      name: 'employees',
      label: 'Número de Funcionários',
      type: 'number',
      required: true,
      placeholder: 'Digite o número de funcionários'
    },
    {
      name: 'budget',
      label: 'Orçamento (R$)',
      type: 'number',
      required: true,
      placeholder: 'Digite o orçamento'
    },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      required: true,
      options: [
        { value: 'active', label: 'Ativo' },
        { value: 'inactive', label: 'Inativo' },
        { value: 'maintenance', label: 'Em Manutenção' }
      ]
    }
  ];

  const handleSubmitDepartment = (data: Record<string, any>) => {
    console.log('Dados do departamento:', data);
    if (formMode === 'create') {
      console.log('Criando novo departamento');
    } else {
      console.log('Editando departamento:', selectedDepartmentForEdit?.name);
    }
    setShowFormModal(false);
  };

  // Configuração dos campos do formulário de setor
  const sectorFields: FormFieldConfig[] = [
    {
      name: 'name',
      label: 'Nome do Setor',
      type: 'text',
      required: true,
      placeholder: 'Digite o nome do setor'
    },
    {
      name: 'employees',
      label: 'Número de Funcionários',
      type: 'number',
      required: true,
      placeholder: 'Digite o número de funcionários'
    },
    {
      name: 'efficiency',
      label: 'Eficiência (%)',
      type: 'number',
      required: true,
      placeholder: 'Digite a eficiência em %'
    },
    {
      name: 'production',
      label: 'Produção (un/h)',
      type: 'number',
      required: true,
      placeholder: 'Digite a produção por hora'
    }
  ];

  const handleSubmitSector = (data: Record<string, any>) => {
    console.log('Dados do setor:', data);
    console.log('Criando novo setor para o departamento:', selectedDepartment?.name);
    setShowSectorModal(false);
  };

  const departments: Department[] = [
    {
      id: 1,
      name: 'Produção',
      description: 'Responsável pela fabricação e montagem dos produtos principais da empresa, garantindo qualidade e eficiência em todos os processos produtivos.',
      location: 'Prédio A - 1º Andar',
      employees: 45,
      budget: 250000,
      status: 'active',
      createdAt: '2023-01-15',
      sectors: [
        { id: 1, name: 'Corte e Preparação', employees: 12, efficiency: 94, production: 320 },
        { id: 2, name: 'Montagem', employees: 18, efficiency: 89, production: 210 },
        { id: 3, name: 'Acabamento', employees: 15, efficiency: 91, production: 180 }
      ]
    },
    {
      id: 2,
      name: 'Qualidade',
      description: 'Controla e monitora a qualidade dos produtos em todas as etapas do processo, implementando melhorias contínuas e garantindo conformidade com padrões.',
      location: 'Prédio B - 2º Andar',
      employees: 12,
      budget: 80000,
      status: 'active',
      createdAt: '2023-02-20',
      sectors: [
        { id: 4, name: 'Controle de Qualidade', employees: 8, efficiency: 96, production: 150 },
        { id: 5, name: 'Inspeção Final', employees: 4, efficiency: 98, production: 120 }
      ]
    },
    {
      id: 3,
      name: 'Logística',
      description: 'Gerencia o fluxo de materiais, armazenamento e distribuição, otimizando processos de supply chain e garantindo entrega eficiente.',
      location: 'Galpão C',
      employees: 28,
      budget: 120000,
      status: 'active',
      createdAt: '2023-03-10',
      sectors: [
        { id: 6, name: 'Recebimento', employees: 8, efficiency: 92, production: 200 },
        { id: 7, name: 'Armazenamento', employees: 6, efficiency: 95, production: 180 },
        { id: 8, name: 'Expedição', employees: 14, efficiency: 88, production: 250 }
      ]
    },
    {
      id: 4,
      name: 'Manutenção',
      description: 'Responsável pela manutenção preventiva e corretiva de equipamentos, garantindo disponibilidade e eficiência operacional.',
      location: 'Prédio A - Subsolo',
      employees: 15,
      budget: 95000,
      status: 'maintenance',
      createdAt: '2023-01-30',
      sectors: [
        { id: 9, name: 'Manutenção Preventiva', employees: 8, efficiency: 85, production: 90 },
        { id: 10, name: 'Manutenção Corretiva', employees: 7, efficiency: 82, production: 75 }
      ]
    },
    {
      id: 5,
      name: 'P&D',
      description: 'Desenvolve novos produtos e processos, realizando pesquisas e inovações tecnológicas para manter a competitividade da empresa.',
      location: 'Prédio D - 3º Andar',
      employees: 8,
      budget: 180000,
      status: 'active',
      createdAt: '2023-04-05',
      sectors: [
        { id: 11, name: 'Pesquisa', employees: 4, efficiency: 78, production: 60 },
        { id: 12, name: 'Desenvolvimento', employees: 4, efficiency: 81, production: 85 }
      ]
    },
    {
      id: 6,
      name: 'Segurança',
      description: 'Garante a segurança dos colaboradores e instalações, implementando políticas e procedimentos de segurança do trabalho.',
      location: 'Prédio Central',
      employees: 6,
      budget: 45000,
      status: 'active',
      createdAt: '2023-02-15',
      sectors: [
        { id: 13, name: 'Segurança do Trabalho', employees: 4, efficiency: 95, production: 100 },
        { id: 14, name: 'Patrulhamento', employees: 2, efficiency: 92, production: 80 }
      ]
    }
  ];

  const filteredDepartments = departments.filter(dept => {
    const matchesSearch = dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dept.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || dept.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const activeDepartments = departments.filter(dept => dept.status === 'active').length;
  const maintenanceDepartments = departments.filter(dept => dept.status === 'maintenance').length;
  const totalEmployees = departments.reduce((sum, dept) => sum + dept.employees, 0);
  const totalBudget = departments.reduce((sum, dept) => sum + dept.budget, 0);

  const getDepartmentIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'produção':
        return <FaIndustry />;
      case 'qualidade':
        return <FaCheckCircle />;
      case 'logística':
        return <FaTruck />;
      case 'manutenção':
        return <FaTools />;
      case 'p&d':
        return <FaFlask />;
      case 'segurança':
        return <FaShieldAlt />;
      default:
        return <FaBuilding />;
    }
  };

  const handleOpenCreate = () => {
    setFormMode('create');
    setSelectedDepartmentForEdit(null);
    setShowFormModal(true);
  };

  const handleOpenEdit = (department: Department) => {
    setFormMode('edit');
    setSelectedDepartmentForEdit(department);
    setShowFormModal(true);
  };

  const handleDeleteDepartment = () => {
    if (selectedDepartment) {
      console.log('Deletando departamento:', selectedDepartment.name);
      setSelectedDepartment(null);
    }
  };

  return (
    <div className="w-screen min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 w-full px-4 md:px-10 py-8 flex flex-col items-center bg-gradient-to-br from-[var(--bg)] via-[var(--accent)] to-[var(--primary)/10]">
        <div className="w-full max-w-7xl">
          <PageHeader 
            title="Departamentos"
            subtitle="Gestão e monitoramento dos departamentos da empresa"
          />

          {/* Filtros */}
          <Card className="mb-6 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <FaFilter className="text-[var(--primary)] text-lg" />
                <h2 className="text-lg font-semibold text-[var(--primary)]">Filtros e Controles</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <TextField
                  placeholder="Buscar departamentos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  size="small"
                  fullWidth
                />
                
                <FormControl size="small" fullWidth>
                  <InputLabel>Status</InputLabel>
                  <Select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    label="Status"
                  >
                    <MenuItem value="all">Todos</MenuItem>
                    <MenuItem value="active">Ativos</MenuItem>
                    <MenuItem value="inactive">Inativos</MenuItem>
                    <MenuItem value="maintenance">Em Manutenção</MenuItem>
                  </Select>
                </FormControl>

                <Button
                  variant="contained"
                  startIcon={<FaPlus />}
                  onClick={handleOpenCreate}
                  sx={{
                    backgroundColor: 'var(--primary)',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'var(--primary-dark)',
                    },
                  }}
                >
                  Novo Departamento
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-600">Total de Departamentos</p>
                    <p className="text-3xl font-bold text-blue-800">{departments.length}</p>
                    <p className="text-xs text-blue-600">{activeDepartments} ativos</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaBuilding className="text-blue-600 text-xl" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-green-600">Total de Funcionários</p>
                    <p className="text-3xl font-bold text-green-800">{totalEmployees}</p>
                    <p className="text-xs text-green-600">+12 este mês</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <FaUsers className="text-green-600 text-xl" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-yellow-600">Orçamento Total</p>
                    <p className="text-3xl font-bold text-yellow-800">R$ {(totalBudget / 1000).toFixed(0)}k</p>
                    <p className="text-xs text-yellow-600">+5.2% vs mês anterior</p>
                  </div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <FaDollarSign className="text-yellow-600 text-xl" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-red-600">Em Manutenção</p>
                    <p className="text-3xl font-bold text-red-800">{maintenanceDepartments}</p>
                    <p className="text-xs text-red-600">1 departamento</p>
                  </div>
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <FaTools className="text-red-600 text-xl" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Grid de Departamentos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDepartments.map((department) => (
              <Card key={department.id} className="shadow-lg border-0 bg-gradient-to-br from-white to-[var(--accent)] hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[var(--primary)] rounded-full flex items-center justify-center">
                        <div className="text-white text-xl">
                          {getDepartmentIcon(department.name)}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[var(--text)]">{department.name}</h3>
                        <p className="text-sm text-[var(--muted)]">{department.location}</p>
                      </div>
                    </div>
                    <Chip 
                      label={department.status === 'active' ? 'Ativo' : department.status === 'maintenance' ? 'Manutenção' : 'Inativo'}
                      color={department.status === 'active' ? 'success' : department.status === 'maintenance' ? 'warning' : 'error' as any}
                      size="small"
                    />
                  </div>

                  <p className="text-sm text-[var(--text)] mb-4 line-clamp-2">
                    {department.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-2xl font-bold text-[var(--primary)]">{department.employees}</p>
                      <p className="text-xs text-[var(--muted)]">Funcionários</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-2xl font-bold text-[var(--primary)]">{department.sectors.length}</p>
                      <p className="text-xs text-[var(--muted)]">Setores</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outlined"
                      startIcon={<FaEye />}
                      size="small"
                      onClick={() => setSelectedDepartment(department)}
                      sx={{
                        color: 'var(--primary)',
                        borderColor: 'var(--primary)',
                        '&:hover': {
                          backgroundColor: 'var(--primary)',
                          color: 'white',
                          borderColor: 'var(--primary)',
                        },
                      }}
                      fullWidth
                    >
                      Ver Detalhes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Modal de Detalhes */}
        <Dialog
          open={!!selectedDepartment}
          onClose={() => setSelectedDepartment(null)}
          maxWidth="md"
          fullWidth
        >
          {selectedDepartment && (
            <>
              <DialogTitle className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="text-white text-lg">
                      {getDepartmentIcon(selectedDepartment.name)}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">{selectedDepartment.name}</h2>
                    <p className="text-sm opacity-90">{selectedDepartment.location}</p>
                  </div>
                </div>
              </DialogTitle>

              <DialogContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <FaUserTie className="text-[var(--primary)]" />
                        <span className="text-sm font-medium text-[var(--text)]">Gerente</span>
                      </div>
                      <p className="text-sm text-[var(--muted)]">João Silva</p>
                    </div>

                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <FaMapMarkerAlt className="text-[var(--primary)]" />
                        <span className="text-sm font-medium text-[var(--text)]">Localização</span>
                      </div>
                      <p className="text-sm text-[var(--muted)]">{selectedDepartment.location}</p>
                    </div>

                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <FaUsers className="text-[var(--primary)]" />
                        <span className="text-sm font-medium text-[var(--text)]">Funcionários</span>
                      </div>
                      <p className="text-sm text-[var(--muted)]">{selectedDepartment.employees} colaboradores</p>
                    </div>

                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <FaDollarSign className="text-[var(--primary)]" />
                        <span className="text-sm font-medium text-[var(--text)]">Orçamento</span>
                      </div>
                      <p className="text-sm text-[var(--muted)]">R$ {selectedDepartment.budget.toLocaleString()}</p>
                    </div>

                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <FaCalendarAlt className="text-[var(--primary)]" />
                        <span className="text-sm font-medium text-[var(--text)]">Criado em</span>
                      </div>
                      <p className="text-sm text-[var(--muted)]">{new Date(selectedDepartment.createdAt).toLocaleDateString('pt-BR')}</p>
                    </div>
                  </div>

                  <div>
                    <div className="p-4 bg-[var(--accent)] rounded-lg mb-4">
                      <h4 className="font-semibold text-[var(--text)] mb-2">Descrição</h4>
                      <p className="text-sm text-[var(--text)]">{selectedDepartment.description}</p>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-[var(--primary)]">Setores</h4>
                        <Button
                          variant="outlined"
                          startIcon={<FaPlus />}
                          size="small"
                          onClick={() => setShowSectorModal(true)}
                          sx={{
                            color: 'var(--primary)',
                            borderColor: 'var(--primary)',
                            '&:hover': {
                              backgroundColor: 'var(--primary)',
                              color: 'white',
                              borderColor: 'var(--primary)',
                            },
                          }}
                        >
                          Novo Setor
                        </Button>
                      </div>
                      <div className="space-y-3">
                        {selectedDepartment.sectors.map((sector) => (
                          <div key={sector.id} className="p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-all duration-200">
                            <div className="flex items-center justify-between mb-3">
                              <h5 className="font-medium text-[var(--text)]">{sector.name}</h5>
                              <Chip label="Ativo" color="success" size="small" />
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                              <div className="text-center">
                                <div className="flex items-center justify-center gap-1 mb-1">
                                  <FaUserCog className="text-[var(--primary)] text-xs" />
                                  <span className="text-xs text-[var(--muted)]">Funcionários</span>
                                </div>
                                <p className="text-sm font-semibold text-[var(--text)]">{sector.employees}</p>
                              </div>
                              <div className="text-center">
                                <div className="flex items-center justify-center gap-1 mb-1">
                                  <FaChartLine className="text-[var(--primary)] text-xs" />
                                  <span className="text-xs text-[var(--muted)]">Eficiência</span>
                                </div>
                                <p className="text-sm font-semibold text-[var(--text)]">{sector.efficiency}%</p>
                              </div>
                              <div className="text-center">
                                <div className="flex items-center justify-center gap-1 mb-1">
                                  <FaIndustry className="text-[var(--primary)] text-xs" />
                                  <span className="text-xs text-[var(--muted)]">Produção</span>
                                </div>
                                <p className="text-sm font-semibold text-[var(--text)]">{sector.production}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>

              <DialogActions className="p-6">
                <div className="flex gap-2 w-full justify-end">
                  <Button
                    variant="contained"
                    startIcon={<FaEdit />}
                    size="small"
                    onClick={() => {
                      handleOpenEdit(selectedDepartment);
                      setSelectedDepartment(null);
                    }}
                    sx={{
                      backgroundColor: 'var(--primary)',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'var(--primary-dark)',
                      },
                    }}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<FaTrash />}
                    size="small"
                    onClick={handleDeleteDepartment}
                    sx={{
                      backgroundColor: '#dc2626',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: '#b91c1c',
                      },
                    }}
                  >
                    Excluir
                  </Button>
                </div>
              </DialogActions>
            </>
          )}
        </Dialog>

        {/* Modal de Formulário */}
        <CUDModal
          open={showFormModal}
          onClose={() => setShowFormModal(false)}
          mode={formMode}
          title={formMode === 'create' ? 'Novo Departamento' : 'Editar Departamento'}
          fields={departmentFields}
          initialData={selectedDepartmentForEdit || {}}
          onSubmit={handleSubmitDepartment}
          entityType="department"
        />

        {/* Modal de Novo Setor */}
        <CUDModal
          open={showSectorModal}
          onClose={() => setShowSectorModal(false)}
          mode="create"
          title="Novo Setor"
          fields={sectorFields}
          initialData={{}}
          onSubmit={handleSubmitSector}
          entityType="department"
        />
      </main>
    </div>
  );
};

export default Departamentos; 