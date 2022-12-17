import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ProductoComponent } from './producto/producto.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { GuardarCategoriaComponent } from './categoria/guardar-categoria/guardar-categoria.component';
import { GuardarProductoComponent } from './producto/guardar-producto/guardar-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto/detalle-producto.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { DetalleCategoriaComponent } from './categoria/detalle-categoria/detalle-categoria.component';
import { EditarCategoriaComponent } from './categoria/editar-categoria/editar-categoria.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { EditarProveedorComponent } from './proveedor/editar-proveedor/editar-proveedor.component';
import { GuardarProveedorComponent } from './proveedor/guardar-proveedor/guardar-proveedor.component';
import { DetalleProveedorComponent } from './proveedor/detalle-proveedor/detalle-proveedor.component';
import { ClienteComponent } from './cliente/cliente.component';
import { GuardarClienteComponent } from './cliente/guardar-cliente/guardar-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { DetalleClienteComponent } from './cliente/detalle-cliente/detalle-cliente.component';
import { LocalComponent } from './local/local.component';
import { GuardarLocalComponent } from './local/guardar-local/guardar-local.component';
import { EditarLocalComponent } from './local/editar-local/editar-local.component';
import { DetalleLocalComponent } from './local/detalle-local/detalle-local.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { PedidoComponent } from './pedido/pedido.component';
import { GuardarEmpleadoComponent } from './empleado/guardar-empleado/guardar-empleado.component';
import { EditarEmpleadoComponent } from './empleado/editar-empleado/editar-empleado.component';
import { DetalleEmpleadoComponent } from './empleado/detalle-empleado/detalle-empleado.component';
import { GuardarPedidoComponent } from './pedido/guardar-pedido/guardar-pedido.component';
import { EditarPedidoComponent } from './pedido/editar-pedido/editar-pedido.component';
import { DetallePedidoComponent } from './pedido/detalle-pedido/detalle-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    CategoriaComponent,
    HeaderComponent,
    GuardarCategoriaComponent,
    GuardarProductoComponent,
    DetalleProductoComponent,
    EditarProductoComponent,
    DetalleCategoriaComponent,
    EditarCategoriaComponent,
    ProveedorComponent,
    EditarProveedorComponent,
    GuardarProveedorComponent,
    DetalleProveedorComponent,
    ClienteComponent,
    GuardarClienteComponent,
    EditarClienteComponent,
    DetalleClienteComponent,
    LocalComponent,
    GuardarLocalComponent,
    EditarLocalComponent,
    DetalleLocalComponent,
    EmpleadoComponent,
    PedidoComponent,
    GuardarEmpleadoComponent,
    EditarEmpleadoComponent,
    DetalleEmpleadoComponent,
    GuardarPedidoComponent,
    EditarPedidoComponent,
    DetallePedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
