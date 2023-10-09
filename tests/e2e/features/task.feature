Feature: Buscar el año del primer proceso automático con Google

Scenario: Buscar en Google en enlace a Wikipedia para la palabra 'automatización'
    Given El navegador muestra la página de Google
    When El usuario busca la palabra "automatización"
    Then Se muestra un enlace a Wikipedia sobre "automatización"

Scenario: Buscar en Wikipedia el año del primer proceso automático
    Given El navegador muestra el artículo de automatización en Wikipedia
    Then El año del primer proceso automático es 1801
