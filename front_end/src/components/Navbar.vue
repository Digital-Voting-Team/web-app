<template>
    <nav class="navbar navbar-dark navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
        <div class="container-fluid">
            <RouterLink to="/" class="navbar-brand"><img src="/favicon.ico" alt="Logo" width="30" height="24"
                                                         class="d-inline-block align-text-top">
                Digital Voting
            </RouterLink>
            <button class="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink to="/" :active='$route.name === `home`' exact-active-class="active" class="nav-link"
                                    aria-current="page"> {{ $t("navbar.home") }}
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/voting" :active='$route.name === `voting`' exact-active-class="active"
                                    class="nav-link" aria-current="page"> {{ $t("navbar.votings") }}
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/register" :active='$route.name === `register`' exact-active-class="active"
                                    class="nav-link" aria-current="page">{{ $t("navbar.register") }}
                        </RouterLink>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                           aria-expanded="false">
                            {{ $t("navbar.groups") }}
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Cossacks</a></li>
                            <li><a class="dropdown-item" href="#">KNU</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Create new group</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/about" :active='$route.name === `about`' exact-active-class="active"
                                    class="nav-link">{{ $t("navbar.about") }}
                        </RouterLink>
                    </li>
                </ul>
                <form class="d-inline-flex">
                    <LanguageSwitcher/>
                </form>
            </div>
        </div>
    </nav>
</template>
<script setup>
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
</script>