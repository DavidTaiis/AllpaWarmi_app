import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TabTransporteService } from 'src/app/services/ma_vendedora/tab-transporte.service';
import { Router } from '@angular/router';
import { TabAgricultorasService } from 'src/app/services/consumidor/tab-agricultoras.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
})
export class AgregarProductoPage implements OnInit {
  newImage = '';
  newFile: any;
  foto:any;
  file:any;
  producName:any;
  description:any;
  unidadVenta:any;
  precio:any;
  stock:any;
  measures:any;


  productId:any;
  product: any;
  productName: any;
  price: any;
  descriptionProduct:any;
  measureProduct: any;
  quantity: any = 1;
  farmer:any;
  farmerId:any;
  phone:any;
  total:any;
  id:any;
 

  constructor( private activatedRoute: ActivatedRoute,private tabAgricultorasService: TabAgricultorasService,public sellerServices:TabTransporteService, private alertController: AlertController, private router:Router) { 
    this.productId = this.activatedRoute.snapshot.paramMap.get("id");
    this.getProductId();
    this.getMeasure();
    
  }

  ngOnInit() {
   
    
  }
  async newImageUpload(event: any) {
    
    if (event.target.files && event.target.files[0]) {
        this.newFile = event.target.files[0];
        const reader = new FileReader();
        reader.onload = ((image) => {
            this.foto = image.target.result as string;
        });
        reader.readAsDataURL(event.target.files[0]);
      }
      this.file = event.target.files[0];
    }
 
    addProduct(){
      
      const formdata = new FormData();
      formdata.append('image',this.file ?? "");
      formdata.append('name', this.producName);
      formdata.append('description', this.description);
      formdata.append('price',this.precio);
      formdata.append('stock',this.stock);
      formdata.append('measure',this.unidadVenta);

      this.sellerServices.addProduct(formdata)
      .subscribe( async res => {
        const alert = await this.alertController.create({
          header: '¡Exito!',
          message: 'Producto registrado correctamente!',
          buttons: ['OK'],
        });
  
         await alert.present();
          this.router.navigate(['ma_vendedora/menu/productos']) 
         window.location.href = 'ma_vendedora/menu/productos'; 
       },response => {
        console.log(response['error']['warning'][0]['value'])
    },
    () => {
        console.log("The POST observable is now completed.");
    }); 
      
    }

    getMeasure(){
      this.sellerServices.getMeasures()
      .subscribe(res => {
        this.measures = res;
      }
      ,response => {
        console.log(response['error']['warning'][0]['value'])
    },
    () => {
        console.log("The POST observable is now completed.");
    });
    }
    
      getProductId(){
        if(this.productId > 0){
      this.tabAgricultorasService.getProductId(this.productId)
      .subscribe(  (res) => {
        this.product = res;
        this.productName = this.product[0]['product'];
        this.price = this.product[0]['price'];
        this.descriptionProduct = this.product[0]['description'];
        this.unidadVenta = this.product[0]['measureId'];
        this.farmer = this.product[0]['farmer']
        this.total = this.product[0]['price'];
        this.phone = this.product[0]['phoneFarmer'];
        this.farmerId = this.product[0]['farmerId'];
        this.stock = this.product[0]['stock'];
        this.measureProduct = this.product[0]['measure'];
        this.foto = this.product[0]['images'][0].url;
        this.id = this.product[0]["id"];
      },
      response => {
        console.log(response['error']['warning'][0]['value'])
    },
    () => {
        console.log("The POST observable is now completed.");
    });
    }
  }
    updateProduct(){
        
      const formdata = new FormData();
      formdata.append('id', this.id)
      formdata.append('productId',this.productId);
      formdata.append('image',this.file ?? "");
      formdata.append('name', this.producName);
      formdata.append('description', this.description);
      formdata.append('price',this.precio);
      formdata.append('stock',this.stock);
      formdata.append('measure',this.unidadVenta);

      this.sellerServices.updateProduct(formdata)
      .subscribe( async res => {
        const alert = await this.alertController.create({
          header: '¡Exito!',
          message: 'Producto actualizado correctamente!',
          buttons: ['OK'],
        });
  
         await alert.present();
          this.router.navigate(['ma_vendedora/menu/productos']) 
         window.location.href = 'ma_vendedora/menu/productos'; 
       },response => {
        console.log(response['error']['warning'][0]['value'])
    },
    () => {
        console.log("The POST observable is now completed.");
    }); 
    }
}
