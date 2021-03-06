
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?= base_url() ?>bootstrap4/themeKhai/css/style.css">
    <title>Thi TLU</title>
</head>

<body>
    
    <div class="login">
        <div class="logo">
            <img src="<?= base_url() ?>bootstrap4/themeKhai/images/60.png" alt="">
        </div>
        <form action="<?= base_url('admin/checkLogin') ?>" name="login" class="login__form" method="POST">
            <p class="login__form--title">Đăng nhập</p>
            <div class="login__form--input">
                <input type="text" name="user-name" id="user-name" placeholder="User name" required>
                <label for="user-name">User Name</label>
            </div>
            <div class="login__form--input">
                <input type="password" name="password" id="password" placeholder="Password" required>
                <label for="password">Password</label>
            </div>
            <button class="primary-btn login--btn btn-primary" name="btn-login" type="submit">Login</button>
            <p>2019 © TTTH-TLU. Bảo lưu mọi quyền.
            </p>
        </form>
    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <script src="<?= base_url() ?>bootstrap4/themeKhai/js/index.js"></script>
</body>

</html>