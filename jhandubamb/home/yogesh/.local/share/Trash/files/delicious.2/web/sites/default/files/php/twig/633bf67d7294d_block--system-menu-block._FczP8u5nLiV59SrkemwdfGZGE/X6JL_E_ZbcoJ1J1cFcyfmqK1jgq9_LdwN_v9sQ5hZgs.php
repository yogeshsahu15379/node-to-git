<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* core/themes/bartik/templates/block--system-menu-block.html.twig */
class __TwigTemplate_67629e31987d2893ac112dbc5b4ec9a79681bb7c3c9378c56c22d2e1f248ba27 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
            'content' => [$this, 'block_content'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 35
        $context["classes"] = [0 => "block", 1 => "block-menu", 2 => "navigation", 3 => ("menu--" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(        // line 39
($context["derivative_plugin_id"] ?? null), 39, $this->source)))];
        // line 42
        $context["heading_id"] = ($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "id", [], "any", false, false, true, 42), 42, $this->source) . \Drupal\Component\Utility\Html::getId("-menu"));
        // line 43
        $context["show_anchor"] = ("show-" . \Drupal\Component\Utility\Html::getId($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "id", [], "any", false, false, true, 43), 43, $this->source)));
        // line 44
        $context["hide_anchor"] = ("hide-" . \Drupal\Component\Utility\Html::getId($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "id", [], "any", false, false, true, 44), 44, $this->source)));
        // line 45
        echo "
<nav role=\"navigation\" aria-labelledby=\"";
        // line 46
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["heading_id"] ?? null), 46, $this->source), "html", null, true);
        echo "\"";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->withoutFilter($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 46), 46, $this->source), "role", "aria-labelledby"), "html", null, true);
        echo ">
  ";
        // line 48
        echo "  ";
        if ( !twig_get_attribute($this->env, $this->source, ($context["configuration"] ?? null), "label_display", [], "any", false, false, true, 48)) {
            // line 49
            echo "    ";
            $context["title_attributes"] = twig_get_attribute($this->env, $this->source, ($context["title_attributes"] ?? null), "addClass", [0 => "visually-hidden"], "method", false, false, true, 49);
            // line 50
            echo "  ";
        }
        // line 51
        echo "  ";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_prefix"] ?? null), 51, $this->source), "html", null, true);
        echo "
  <h2";
        // line 52
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["title_attributes"] ?? null), "setAttribute", [0 => "id", 1 => ($context["heading_id"] ?? null)], "method", false, false, true, 52), 52, $this->source), "html", null, true);
        echo ">";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["configuration"] ?? null), "label", [], "any", false, false, true, 52), 52, $this->source), "html", null, true);
        echo "</h2>
  ";
        // line 53
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_suffix"] ?? null), 53, $this->source), "html", null, true);
        echo "

  ";
        // line 56
        echo "  ";
        $this->displayBlock('content', $context, $blocks);
        // line 66
        echo "</nav>
";
    }

    // line 56
    public function block_content($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 57
        echo "    <div";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content_attributes"] ?? null), "addClass", [0 => "content"], "method", false, false, true, 57), 57, $this->source), "html", null, true);
        echo ">
      ";
        // line 59
        echo "      <div class=\"menu-toggle-target menu-toggle-target-show\" id=\"";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["show_anchor"] ?? null), 59, $this->source), "html", null, true);
        echo "\"></div>
      <div class=\"menu-toggle-target\" id=\"";
        // line 60
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["hide_anchor"] ?? null), 60, $this->source), "html", null, true);
        echo "\"></div>
      <a class=\"menu-toggle\" href=\"#";
        // line 61
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["show_anchor"] ?? null), 61, $this->source), "html", null, true);
        echo "\">";
        echo t("Show &mdash; @configuration.label", array("@configuration.label" => twig_get_attribute($this->env, $this->source, ($context["configuration"] ?? null), "label", [], "any", false, false, true, 61), ));
        echo "</a>
      <a class=\"menu-toggle menu-toggle--hide\" href=\"#";
        // line 62
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["hide_anchor"] ?? null), 62, $this->source), "html", null, true);
        echo "\">";
        echo t("Hide &mdash; @configuration.label", array("@configuration.label" => twig_get_attribute($this->env, $this->source, ($context["configuration"] ?? null), "label", [], "any", false, false, true, 62), ));
        echo "</a>
      ";
        // line 63
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["content"] ?? null), 63, $this->source), "html", null, true);
        echo "
    </div>
  ";
    }

    public function getTemplateName()
    {
        return "core/themes/bartik/templates/block--system-menu-block.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  121 => 63,  115 => 62,  109 => 61,  105 => 60,  100 => 59,  95 => 57,  91 => 56,  86 => 66,  83 => 56,  78 => 53,  72 => 52,  67 => 51,  64 => 50,  61 => 49,  58 => 48,  52 => 46,  49 => 45,  47 => 44,  45 => 43,  43 => 42,  41 => 39,  40 => 35,);
    }

    public function getSourceContext()
    {
        return new Source("{#
/**
 * @file
 * Bartik's theme implementation for a menu block.
 *
 * Available variables:
 * - plugin_id: The ID of the block implementation.
 * - label: The configured label of the block if visible.
 * - configuration: A list of the block's configuration values.
 *   - label: The configured label for the block.
 *   - label_display: The display settings for the label.
 *   - provider: The module or other provider that provided this block plugin.
 *   - Block plugin specific settings will also be stored here.
 * - content: The content of this block.
 * - attributes: HTML attributes for the containing element.
 *   - id: A valid HTML ID and guaranteed unique.
 * - title_attributes: HTML attributes for the title element.
 * - content_attributes: HTML attributes for the content element.
 * - title_prefix: Additional output populated by modules, intended to be
 *   displayed in front of the main title tag that appears in the template.
 * - title_suffix: Additional output populated by modules, intended to be
 *   displayed after the main title tag that appears in the template.
 *
 * Headings should be used on navigation menus that consistently appear on
 * multiple pages. When this menu block's label is configured to not be
 * displayed, it is automatically made invisible using the 'visually-hidden' CSS
 * class, which still keeps it visible for screen-readers and assistive
 * technology. Headings allow screen-reader and keyboard only users to navigate
 * to or skip the links.
 * See http://juicystudio.com/article/screen-readers-display-none.php and
 * http://www.w3.org/TR/WCAG-TECHS/H42.html for more information.
 */
#}
{%
  set classes = [
    'block',
    'block-menu',
    'navigation',
    'menu--' ~ derivative_plugin_id|clean_class,
  ]
%}
{% set heading_id = attributes.id ~ '-menu'|clean_id %}
{% set show_anchor = \"show-\" ~ attributes.id|clean_id %}
{% set hide_anchor = \"hide-\" ~ attributes.id|clean_id %}

<nav role=\"navigation\" aria-labelledby=\"{{ heading_id }}\"{{ attributes.addClass(classes)|without('role', 'aria-labelledby') }}>
  {# Label. If not displayed, we still provide it for screen readers. #}
  {% if not configuration.label_display %}
    {% set title_attributes = title_attributes.addClass('visually-hidden') %}
  {% endif %}
  {{ title_prefix }}
  <h2{{ title_attributes.setAttribute('id', heading_id) }}>{{ configuration.label }}</h2>
  {{ title_suffix }}

  {# Menu. #}
  {% block content %}
    <div{{ content_attributes.addClass('content') }}>
      {# When rendering a menu without label, render a menu toggle. #}
      <div class=\"menu-toggle-target menu-toggle-target-show\" id=\"{{ show_anchor }}\"></div>
      <div class=\"menu-toggle-target\" id=\"{{ hide_anchor }}\"></div>
      <a class=\"menu-toggle\" href=\"#{{ show_anchor }}\">{% trans %} Show &mdash; {{ configuration.label }}{% endtrans %}</a>
      <a class=\"menu-toggle menu-toggle--hide\" href=\"#{{ hide_anchor }}\">{% trans %} Hide &mdash; {{ configuration.label }}{% endtrans %}</a>
      {{ content }}
    </div>
  {% endblock %}
</nav>
", "core/themes/bartik/templates/block--system-menu-block.html.twig", "/var/www/html/delicious/web/core/themes/bartik/templates/block--system-menu-block.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 35, "if" => 48, "block" => 56, "trans" => 61);
        static $filters = array("clean_class" => 39, "clean_id" => 42, "escape" => 46, "without" => 46);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if', 'block', 'trans'],
                ['clean_class', 'clean_id', 'escape', 'without'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
