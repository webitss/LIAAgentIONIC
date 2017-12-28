import { LiaService } from "./../../providers/lia.service";
import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { PayOptionsPage } from "../pay-options/pay-options";
//import { PopupPage } from "../popup/popup";
import { customerDetailsModel } from "../../models/customerDetails";
import { LoadingController, ToastController } from "ionic-angular";
import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject
} from "@ionic-native/file-transfer";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { FilePath } from '@ionic-native/file-path';
//import { FilePath } from "@angular";

@Component({
  selector: "page-business-form",
  templateUrl: "business-form.html"
})
export class BusinessFormPage {

  activeColor: string = "green";
  baseColor: string = "#ccc";
  overlayColor: string = "rgba(255,255,255,0.5)";

  dragging: boolean = false;
  loaded: boolean = false;
  imageLoaded: boolean = false;
  imageSrc: string = "";
  iconColor: any;
  borderColor: any;
  StoreId: number;
  StoreObj: customerDetailsModel;
  customerD: customerDetailsModel;
  anotherDetails: boolean;
  imageURI: any;
  imageFileName: any;
  Categories = ["מזון","ריהוט","הלבשה"];

  frmBusiness = new FormGroup({
    name: new FormControl("", Validators.required),
    PrivatelyHeldCompany: new FormControl("", Validators.required),
    phone: new FormControl("", [
      Validators.required,
      Validators.minLength(9),
      Validators.maxLength(10)
    ]),
    address: new FormControl("", Validators.required),
    websiteAddress: new FormControl("", Validators.required),
    category: new FormControl("", Validators.required)
  });

  frmMoredetails = new FormGroup({
    logo: new FormControl(),
    OpeningHours: new FormControl(),
    min: new FormControl()
  });

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: LiaService,
    private camera: Camera,
    private transfer: FileTransfer,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,public filePath:FilePath
  ) {
    // ) {
    service.routeOrStay = "businessForm";
    this.anotherDetails = false;
    this.StoreId = navParams.data.StoreId;
    this.customerD = new customerDetailsModel();
    this.StoreObj = new customerDetailsModel;
    this.customerD.Owner = navParams.data.customerDtl;
    if (this.StoreId != null) this.getStorOfCustomerDetailsArray();
  }
  //
  base64Image: any;
  accessGallery() {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: this.camera.DestinationType.DATA_URL
    }).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
  }
  //
  getStorOfCustomerDetailsArray() {
    if (this.StoreId) {
      for (let i = 0; i < this.service.customerDetailsArray.length; i++)
        if (this.service.customerDetailsArray[i].StoreId == this.StoreId)
          this.StoreObj = this.service.customerDetailsArray[i];
    }
  }

  f() {
    document.getElementById("file").click();
  }

  onGoToPayOptionsPage() {
    this.navCtrl.push(PayOptionsPage, {StoreId : this.customerD.StoreId, email: this.customerD.Owner.Email});
  }

///////////////////////////////
result;
  getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };

      this.camera.getPicture(options).then(imageData => {
        // this.result = imageData;
        this.filePath.resolveNativePath(imageData).then(result => this.imageURI=  result ).catch(error=> alert("error") )
           } );


        //      this.camera.getPicture(options).then(imageData => {
        // this.imageURI = imageData; alert(imageData);
        // window.FilePath.resolveNativePath(this.imageURI, function(result){ this.imageURI = 'file://' + result;alert("success "+this.imageURI); }, function (error){ alert("error");} )
        //    } );
  }
////////////////////////////////////
  // uploadFile() {
  //   let loader = this.loadingCtrl.create({
  //     content: "Uploading..."
  //   });
  //   loader.present();
  //   const fileTransfer: FileTransferObject = this.transfer.create();
  //   alert(" Uploaded Successfully2");
  //   let options: FileUploadOptions = {
  //     fileKey: "ionicfile",
  //     fileName: "ionicfile",
  //     chunkedMode: false,
  //     mimeType: "image/jpeg",
  //     headers: {}
  //   };
  //   alert(" Uploaded Successfully3");
  //   fileTransfer
  //     .upload(this.imageURI, "http://192.168.0.7:8080/api/uploadImage", options)
  //     .then(
  //     data => {
  //       alert(" Uploaded Successfully4");
  //       console.log(data + " Uploaded Successfully");
  //       this.imageFileName =
  //         "http://192.168.0.7:8080/static/images/ionicfile.jpg";
  //       loader.dismiss();
  //       this.presentToast("Image uploaded successfully");
  //     },
  //     err => {
  //       console.log(err);
  //       loader.dismiss();
  //       this.presentToast(err);
  //     }
  //     );
  // }





  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: "bottom"
    });

    toast.onDidDismiss(() => {
      console.log("Dismissed toast");
    });

    toast.present();
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  submitFrmBusiness(frm) {
    this.anotherDetails = true;
    this.customerD.StoreName = frm.name ? frm.name : this.StoreObj.StoreName;
    this.customerD.HP = frm.PrivatelyHeldCompany ? frm.PrivatelyHeldCompany : this.StoreObj.HP;
    this.customerD.Phone = frm.phone ? frm.phone : this.StoreObj.Phone;
    this.customerD.Address = frm.address ? frm.address : this.StoreObj.Address;
    this.customerD.Category = frm.category? frm.category : this.StoreObj.Category;
  }

  submitFrmMoreBusiness(frm) {
    // this.customerD.User = this.StoreObj.User;
    //this.customerD.LogoUrl=frm.logo? frm.logo : this.StoreObj.LogoUrl;
    this.customerD.LogoUrl = this.imageURI?this.imageURI :this.StoreObj.LogoUrl;
    this.customerD.OpenHours = frm.OpeningHours ? frm.OpeningHours : this.StoreObj.OpenHours;
    this.customerD.MinPriceToTicket = frm.min ? frm.min : this.StoreObj.MinPriceToTicket;
    if (this.StoreObj){
       this.service.updateFrmBusiness(this.customerD);
    }
    else{
      this.service.createFrmBusiness(this.customerD);
    }
  }


}

/*   handleDragEnter() {
                this.dragging = true;
            }

        handleDragLeave() {
            this.dragging = false;
        }

        handleDrop(e) {
            e.preventDefault();
            this.dragging = false;
            this.handleInputChange(e);
        }

        handleImageLoad() {
            this.imageLoaded = true;
            this.iconColor = this.overlayColor;
        }

        handleInputChange(e) {
                    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

                   // var pattern = image-;
                    var reader = new FileReader();

                                        if (!file.type.match(pattern)) {
                                            alert('invalid format');
                                            return;
                                        }

                                this.loaded = false;

                                reader.onload = this._handleReaderLoaded.bind(this);
                                reader.readAsDataURL(file);
                            }

                            _handleReaderLoaded(e) {
                                var reader = e.target;
                                this.imageSrc = reader.result;
                                this.loaded = true;
                            }

                            _setActive() {
                                this.borderColor = this.activeColor;
                                if (this.imageSrc.length === 0) {
                                    this.iconColor = this.activeColor;
                                }
                            }

                            _setInactive() {
                                this.borderColor = this.baseColor;
                                if (this.imageSrc.length === 0) {
                                    this.iconColor = this.baseColor;
                                }

                            }


                             handleDragEnter() {
          this.dragging = true;
        }

        handleDragLeave() {
          this.dragging = false;
        }

        handleDrop(e) {
          e.preventDefault();
          this.dragging = false;
          this.handleInputChange(e);
        }

        handleImageLoad() {
          this.imageLoaded = true;
          this.iconColor = this.overlayColor;
        }

          handleInputChange(e) {
            var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

            var pattern = /image-;
            var reader = new FileReader();

                        if (!file.type.match(pattern)) {
                          alert("invalid format");
                          return;
                        }

                        this.loaded = false;

                reader.onload = this._handleReaderLoaded.bind(this);
                reader.readAsDataURL(file);
              }

              _handleReaderLoaded(e) {
                var reader = e.target;
                this.imageSrc = reader.result;
                this.loaded = true;
              }

              _setActive() {
                this.borderColor = this.activeColor;
                if (this.imageSrc.length === 0) {
                  this.iconColor = this.activeColor;
                }
              }

              _setInactive() {
                this.borderColor = this.baseColor;
                if (this.imageSrc.length === 0) {
                  this.iconColor = this.baseColor;
                }
              }

*/
// handleDragEnter() {
  //   this.dragging = true;
  // }

  // handleDragLeave() {
  //   this.dragging = false;
  // }

  // handleDrop(e) {
  //   e.preventDefault();
  //   this.dragging = false;
  //   this.handleInputChange(e);
  // }

  // handleImageLoad() {
  //   this.imageLoaded = true;
  //   this.iconColor = this.overlayColor;
  // }

  // handleInputChange(e) {
  //   var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

  //   var pattern = /image-*/;
  //   var reader = new FileReader();

  //   if (!file.type.match(pattern)) {
  //     alert("invalid format");
  //     return;
  //   }

  //   this.loaded = false;

  //   reader.onload = this._handleReaderLoaded.bind(this);
  //   reader.readAsDataURL(file);
  // }

  // _handleReaderLoaded(e) {
  //   var reader = e.target;
  //   this.imageSrc = reader.result;
  //   this.loaded = true;
  // }


