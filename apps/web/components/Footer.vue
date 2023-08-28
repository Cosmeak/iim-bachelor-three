<template>
    <div class="footer">
        <div class="footer_content">
        <div class="footer_infos">
            <div class="footer_logo">
                <a href="index">Jungle Arch</a>
            </div>
            <p>16, terrasse de l'Arche, 92000 Nanterre</p><br/>
            <p>Du Lundi au Vendredi</p>
            <p>07:30 - 00:00</p>
        </div>
        <div class="footer_link">
            <ul>
                <li>
                <a href="contact">Contact - Réservations</a>
                </li>
            </ul>
        </div>
        <div class="footer_social">
            <a target="_blank" href="https://www.facebook.com/santinifamilly/"><img src="../static/images/facebook.png"></a>
            <a target="_blank"  href="https://www.instagram.com/jungle_arch/"><img src="../static/images/instagram.png"></a>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
    name: "Footer"
    }
</script>

<style lang="scss" scoped>
.footer{
    width: 100%;
    min-height: 20vh;
    background-color: #163024;
    padding: 20px;

    .footer_content{
        display: flex;
        justify-content: space-between;
        margin: 20px;

        .footer_logo {
            margin-bottom: 15px;

            a {
                color: #ECE2CF;
                font-size: 36px;
                font-family: 'Kotta One', serif;

            }
        }

        .footer_infos {
            color: white;
        }

        .footer_link a{
            color: white;
            padding: 0 20px;
            font-size: 20px;
            font-weight: 500;
            text-decoration: underline;
        }

        .footer_social {
            color: white;
            img {
                margin: 0 10px;
                height: 30px;
            }
        }

    }
}

</style>
