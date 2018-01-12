        $(document).ready(function(){
            //cart 1
            var cartQuantity1 = Number(formatPrice($('#cartQuantity1').text()));
            var cartPrice1 = Number(formatPrice($('#cartPrice1').text()));
            var cartTotal1 = cartQuantity1*cartPrice1;
            $('#cartTotal1').text(convertToRupiah(cartTotal1));

            //cart 2
            var cartQuantity2 = Number(formatPrice($('#cartQuantity2').text()));
            var cartPrice2 = Number(formatPrice($('#cartPrice2').text()));
            var cartTotal2 = cartQuantity2*cartPrice2;
            $('#cartTotal2').text(convertToRupiah(cartTotal2));
            //cart 3
            var cartQuantity3 = Number(formatPrice($('#cartQuantity3').text()));
            var cartPrice3 = Number(formatPrice($('#cartPrice3').text()));
            var cartTotal3 = cartQuantity3*cartPrice3;
            $('#cartTotal3').text(convertToRupiah(cartTotal3));
            //summary
            var totalQuantity = cartQuantity1+cartQuantity2+cartQuantity3;
            var totalPrice = convertToRupiah(cartPrice1+cartPrice2+cartPrice3);
            var total = convertToRupiah(cartTotal1+cartTotal2+cartTotal3);
            $('#jumlah').text(totalQuantity);
            $('#harga').text(totalPrice);
            $('#total').text(total);
        });
        function formatPrice(price){
            return price.replace(/[Rp.,]/g,'');
        }
        function convertToRupiah(angka){
            var angkaString = angka.toString();
            var sisa = angkaString.length%3;
            var rupiah = angkaString.substr(0,sisa);
            var ribuan = angkaString.substr(sisa).match(/\d{3}/g);
            if(ribuan){
                var separator = sisa? '.':'';
                rupiah +=separator+ribuan.join('.');
                return 'Rp '+rupiah;
            }
        }