import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { CategoriesComponent } from './categories/categories.component';
import { CosmaticComponent } from './cosmatic/cosmatic.component';
import { JewelleryComponent } from './jewellery/jewellery.component';


const routes: Routes = [
{ path : "", component: HomeComponent  },
{ path : "Categories", component: CategoriesComponent },
{ path : "Login", component: LoginComponent },
{ path : "AboutUs", component: AboutUsComponent },
{ path : "ContactDetails", component: ContactDetailsComponent },
{ path : "Cosmatic", component: CosmaticComponent },
{ path : "Jewellery", component: JewelleryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
