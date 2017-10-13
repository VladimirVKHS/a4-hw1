type Env = {
  production: boolean,
  baseUrl: string
};

type Weather = {
  'title': string,
  'icon': string,
  'water': number,
  'temperature': number
};

type SocialInfo = {
  'title': string,
  'img': string,
  'followers': number,
  'following': number
};

type Resort = {
  '_id': string,
  'img': string,
  'img_2': string,
  'img_3': string,
  'address': string,
  'phone': string,
  'type_id': string,
  'weather': Weather,
  'social_info': SocialInfo
};

type ResortType = {
  '_id': string,
  'name': string
};


