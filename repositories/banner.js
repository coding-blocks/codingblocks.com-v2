import banners from '../data/banners.json'

class BannerRepositry{
  async fetchBanners() {
    return banners;
  }
}
export default new BannerRepositry();
