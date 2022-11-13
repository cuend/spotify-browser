import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  name:string = null;
  profile_pic:string = "../../../assets/unknown.jpg";
  profile_link:string = null;

  //TODO: inject the Spotify service
  constructor(private spotifyServ : SpotifyService) { }

  ngOnInit() {
  }

  getAboutMe() {
    this.spotifyServ.aboutMe().then(res => 
      {
        this.profile_pic = res.imageURL
        this.name = res.name;
        this.profile_link = res.spotifyProfile;
      });
    // this.profile_pic = this.spotifyServ.aboutMe.imageURL;
    // this.profile_link = this.spotifyServ.aboutMe.spotifyProfile;
  }

  /*TODO: create a function which gets the "about me" information from Spotify when the button in the view is clicked.
  In that function, update the name, profile_pic, and profile_link fields */

}
