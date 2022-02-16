import { Component, OnInit } from '@angular/core';
import { FileService } from '../../services/file.service';
import { NftService } from '../../services/nft.service';

@Component({
  selector: 'app-create-nft',
  templateUrl: './create-nft.component.html',
  styleUrls: ['./create-nft.component.scss']
})
export class CreateNftComponent implements OnInit {
  public name = '';
  public price = 0;
  public fileId = '';
  public statusError = {
    hide: true,
    message: ''
  };
  constructor(
    private fileService: FileService,
    private nftService: NftService
  ) { }

  ngOnInit(): void {
  }

  public submitFile(target: any) {
    const file = target.files[0];
    return this.fileService.submitFile(file)
      .then((fileCreated) => {
        this.fileId = fileCreated._id;
        return true;
      })
      .catch((err) => {
        console.error(err.message);
        return false;
      });
  }

  public submitNFT() {
    if (!this.name) {
      this.statusError.message = 'Invalid name';
      this.statusError.hide = false;
      return false;
    }
    if (this.price < 10) {
      this.statusError.message = 'The price must be more than 10';
      this.statusError.hide = false;
      return false;
    }
    const data = {
      name: this.name,
      price: this.price,
      file: this.fileId
    }
    return this.nftService.submitNFT(data)
      .then((nft) => {
        console.log(nft);
        return false;
      })
      .catch((err) => {
        console.error(err.message);
      });
  }
}
