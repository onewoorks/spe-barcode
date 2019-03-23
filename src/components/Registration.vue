<template>
  <div class="container-fluid">
    <div class="row mb-2">
      <div class="col-sm-12 text-uppercase">
        <h2>Maklumat Barang Daftar Hari Ini</h2>
      </div>
    </div>
    <hr>
    <div class="row mb-4">
      <div class="col-sm-12 text-left">
        <div class="btn btn-primary"><i class="fas fa-barcode"></i> Cetak Barcode</div>
        <div class="btn btn-outline-secondary" @click="closeWindow()"><i class="fas fa-print"></i> Cetak</div>
        <div class="btn btn-outline-secondary" @click="closeWindow()"><i class="fas fa-times"></i> Tutup</div>
      </div>
    </div>
    <div class="row">
      <div v-for="item in items" :key="item.id" 
      class="col-sm-6 col-lg-4 mb-2">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-5 align-self-center">
                <barcode :value='item.stk_tag' height="40" fontSize="14"/>
                </div>
              <div class="col-7 barcode-label text-left align-self-center">
                <div class='barcode-text-line text-uppercase'>{{ item.nama_stok}}</div>
                <div class='barcode-text-line text-uppercase'>{{ item.mutu }} {{ item.berat }}</div>
                <div class='barcode-text-line text-uppercase'>{{ item.pembekal}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueBarcode from 'vue-barcode'

export default {
  name: "Registration",
  components: {
    'barcode':VueBarcode
  },
  data() {
    return {
      title: '',
      items: []
    };
  },
  mounted() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      const baseURI = process.env.SPE_API + 'inventory/registration'
      this.$http
        .get(baseURI, {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(result => {
          let response = result.data.response;
          this.items = response.data;
        });
    },
    closeWindow() {
      window.close()
    }
  }
};
</script>

<style scoped>
</style>