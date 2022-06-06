import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private metaTagService: Meta,
    private titleService: Title,
    public appService: AppService
  ) {}

  seoJson = {
    title: 'WordPress SEO Tutorial',
    description: 'Isso daqui é um teste de metadado descrição'
  }

  schema: any;

  ngOnInit() {
    this.appService.getYoast().then((res: any) => {
      this.schema = res[0].yoast_head_json.schema
      console.log(this.schema, 'res')
    })
  }

  clickHero() {
    this.titleService.setTitle('Heróis - teste')

    this.appService.getYoast().then((res: any) => {
      console.log(res, 'res obs')
      this.metaTagService.addTags([
        {name: 'description', content: res[0].yoast_head_json.description},
        {property: 'og:description', content: res[0].yoast_head_json.og_description},
        // { name: 'author', content: 'Digamber Singh' }
      ])
    });
  }

  clickVillain() {
    this.titleService.setTitle('Vilões - teste');
    this.metaTagService.updateTag(
      {name: 'description', content: this.seoJson.description}
      // { name: 'author', content: 'Digamber Singh' }
    )
    
  }
}
