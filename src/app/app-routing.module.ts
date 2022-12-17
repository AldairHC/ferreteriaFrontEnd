import { DetallePedidoComponent } from './pedido/detalle-pedido/detalle-pedido.component';
import { EditarPedidoComponent } from './pedido/editar-pedido/editar-pedido.component';
import { GuardarPedidoComponent } from './pedido/guardar-pedido/guardar-pedido.component';
import { DetalleEmpleadoComponent } from './empleado/detalle-empleado/detalle-empleado.component';
import { EditarEmpleadoComponent } from './empleado/editar-empleado/editar-empleado.component';
import { GuardarEmpleadoComponent } from './empleado/guardar-empleado/guardar-empleado.component';
import { PedidoComponent } from './pedido/pedido.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { DetalleLocalComponent } from './local/detalle-local/detalle-local.component';
import { EditarLocalComponent } from './local/editar-local/editar-local.component';
import { GuardarLocalComponent } from './local/guardar-local/guardar-local.component';
import { LocalComponent } from './local/local.component';
import { DetalleClienteComponent } from './cliente/detalle-cliente/detalle-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { GuardarClienteComponent } from './cliente/guardar-cliente/guardar-cliente.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { DetalleProveedorComponent } from './proveedor/detalle-proveedor/detalle-proveedor.component';
import { GuardarProveedorComponent } from './proveedor/guardar-proveedor/guardar-proveedor.component';
import { EditarProveedorComponent } from './proveedor/editar-proveedor/editar-proveedor.component';
import { EditarCategoriaComponent } from './categoria/editar-categoria/editar-categoria.component';
import { DetalleCategoriaComponent } from './categoria/detalle-categoria/detalle-categoria.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto/detalle-producto.component';
import { GuardarCategoriaComponent } from './categoria/guardar-categoria/guardar-categoria.component';
import { GuardarProductoComponent } from './producto/guardar-producto/guardar-producto.component';
import { ProductoComponent } from './producto/producto.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //listar-guardar-editrar-detalle
  { path: 'categorias', component: CategoriaComponent },
  { path: 'categorias/guardar', component: GuardarCategoriaComponent },
  { path: 'categorias/editar/:idCategoria', component: EditarCategoriaComponent },
  { path: 'categorias/detalle/:idCategoria', component: DetalleCategoriaComponent },
  //listar-guardar-editrar-detalle
  { path: 'productos', component: ProductoComponent },
  { path: 'productos/guardar', component: GuardarProductoComponent },
  { path: 'productos/editar/:idProducto', component: EditarProductoComponent },
  { path: 'productos/detalle/:idProducto', component: DetalleProductoComponent },

  //listar-guardar-editrar-detalle
  { path: 'proveedor', component: ProveedorComponent },
  { path: 'proveedor/guardar', component: GuardarProveedorComponent },
  { path: 'proveedor/editar/:idProveedor', component: EditarProveedorComponent },
  { path: 'proveedor/detalle/:idProveedor', component: DetalleProveedorComponent },
  //listar-guardar-editrar-detalle
  { path: 'clientes', component: ClienteComponent },
  { path: 'clientes/guardar', component: GuardarClienteComponent },
  { path: 'clientes/editar/:idCliente', component: EditarClienteComponent },
  { path: 'clientes/detalle/:idCliente', component: DetalleClienteComponent },
  //listar-guardar-editrar-detalle
  { path: 'local', component: LocalComponent },
  { path: 'local/guardar', component: GuardarLocalComponent },
  { path: 'local/editar/:idLocal', component: EditarLocalComponent },
  { path: 'local/detalle/:idLocal', component: DetalleLocalComponent },
    //listar-guardar-editrar-detalle
    { path: 'empleados', component: EmpleadoComponent },
    { path: 'empleados/guardar', component: GuardarEmpleadoComponent },
    { path: 'empleados/editar/:idEmpleado', component: EditarEmpleadoComponent },
    { path: 'empleados/detalle/:idEmpleado', component: DetalleEmpleadoComponent },
      //listar-guardar-editrar-detalle
  { path: 'pedidos', component: PedidoComponent },
  { path: 'pedidos/guardar', component: GuardarPedidoComponent },
  { path: 'pedidos/editar/:idPedido', component: EditarPedidoComponent },
  { path: 'pedidos/detalle/:idPedido', component: DetallePedidoComponent },


  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
